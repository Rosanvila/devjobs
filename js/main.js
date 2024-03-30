let isSearchInProgress = false;
let offSetJobs = 0;

loadMoreJobs = () => {
  if (isSearchInProgress) {
    apiFiltedSearch(
      byText.value.toLowerCase(),
      byLocation.value.toLowerCase(),
      isFullTime
    );
  } else {
    apiGetAllCard();
  }
};

/*AJOUT DE l'OFFSET POUR LES JOB AU CLIQUE DU BOUTON LOAD MORE*/
/*************************************************************/

const loadMoreBtn = document.querySelector("#load-more-button");
const loadEndedMsg = document.querySelector("#load-ended");

loadMoreBtn.addEventListener("click", () => {
  loadMoreJobs();
});

/********PARAMETRES DE FILTRE VIA FORMULAIRE********/
/**************************************************/

const byText = document.querySelector("#by-title");
const researchBtn = document.querySelector("#form-btn");
const byLocation = document.querySelector("#location-input");
const fullTimeBox = document.querySelector("#full-time");
let isFullTime = fullTimeBox.checked ? 1 : 0;

researchBtn.addEventListener("click", (ev) => {
  isFullTime = fullTimeBox.checked ? 1 : 0;
  offSetJobs = 0;
  ev.preventDefault();
  jobsContainer.innerHTML = "";
  isSearchInProgress = true;
  apiFiltedSearch(
    byText.value.toLowerCase(),
    byLocation.value.toLowerCase(),
    isFullTime,
    offSetJobs
  );
});
