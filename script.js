const showDate = document.querySelector(".show-date");
const modal = document.querySelector(".feature-modal");

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const result = `Check out my latest posts! | ${currentYear}`;
  showDate.textContent = result;
};

const showAndHideModal = () => {
  const flex = modal.style.display;

  if(flex === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}

getCurrentYear();