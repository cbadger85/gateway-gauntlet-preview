const touchedAddClass = (element, className) => {
  element.addEventListener('input', (e) => {
    if (e.target.value) {
      e.target.classList.add(className);
    }
  });
};

export default touchedAddClass;
