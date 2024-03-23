/******************MODAL FORMAT MOBILE********************/
/*********************************************************/
const filterBtn = document.querySelector(".filter-button");
const mobileModal = document.querySelector("#modal");
const overlay = document.querySelector(".overlay");

filterBtn.addEventListener("click", () => {
  mobileModal.classList.add("modal-open");
  overlay.classList.add("overlay-open");
});

overlay.addEventListener("click", () => {
  mobileModal.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");
});

/*****************RECUPERATION DES JOBS VIA TEMPLATE****************/
/*******************************************************************/

const jobsContainer = document.querySelector("#jobs-container");
const jobsTemplate = document.querySelector("#job-template");

createCardElement = (job) => {
  const clonedCard = jobsTemplate.content.cloneNode(true);

  const jobCompany = clonedCard.querySelector("#company");
  const jobContract = clonedCard.querySelector("#contract");
  const jobLocation = clonedCard.querySelector(".job-location");
  const jobPosition = clonedCard.querySelector("#position");
  const jobPostedAt = clonedCard.querySelector("#postedAt");

  const jobLogo = clonedCard.querySelector(".logo");
  jobLogo.src = "https://ecf-dwwm.cefim-formation.org" + job.logo;
  jobLogo.style.backgroundColor = job.logoBackground;

  jobCompany.textContent = `${job.company}`;
  jobContract.textContent = `${job.contract}`;
  jobLocation.textContent = `${job.location}`;
  jobPosition.textContent = `${job.position}`;
  jobPostedAt.textContent = `${job.postedAt}`;

  return clonedCard;
}; 

jobsCard = (job) => {
  const cardElement = createCardElement(job);
  jobsContainer.appendChild(cardElement);
};

/***************RECUPERATION DES DETAILS D'UN JOB*************/
/*************************************************************/

const jobDetailContainer = document.querySelector("#jobs-details-container");
const detailsTemplate = document.querySelector("#details-template");

// createDetailsJob = (details) => {
//   const clonedDetails = detailsTemplate.content.cloneNode(true);

//   const jobCompany = clonedDetails.querySelector("#company");
//   const jobWebsite = clonedDetails.querySelector("#website-id")
//   const 

//   const jobLogo = clonedCard.querySelector(".logo");
//   jobLogo.src = "https://ecf-dwwm.cefim-formation.org" + job.logo;
//   jobLogo.style.backgroundColor = job.logoBackground;
// };
