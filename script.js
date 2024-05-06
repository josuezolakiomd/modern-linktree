const showDate = document.querySelector(".show-date");

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const result = `Check out my latest posts! | ${currentYear}`;
  showDate.textContent = result;
};

getCurrentYear();