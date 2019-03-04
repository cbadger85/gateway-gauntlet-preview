require('dotenv').config();
const moment = require('moment');
const faunadb = require('faunadb');

const client = new faunadb.Client({ secret: process.env.FAUNADB_KEY });
const q = faunadb.query;

const main = async () => {
  try {
    const attendeesRefs = await client.query(q.Paginate(q.Match(q.Ref('indexes/all_attendees'))));

    const attendeesPromise = attendeesRefs.data.map(async ref => client.query(q.Get(q.Ref(ref))));

    const attendees = await Promise.all(attendeesPromise);

    attendees.forEach((attendee) => {
      // Converts the timestamp to readable format
      const epochTime = parseInt(attendee.ts.toString().slice(0, -6), 10);
      const date = moment.unix(epochTime).format('MMM DD, YYYY');
      console.log(date);
      // Provides the Ref ID of the attendee
      console.log(attendee.ref.id);
      // Provides the data of the attendee
      console.log(attendee.data);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
