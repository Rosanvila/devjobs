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
  try {
    loadMoreJobs();
  } catch (error) {
    window.alert(
      "Erreur lors du chargement des jobs supplémentaires: " +
        error.message +
        ", Veuillez contacter le support BlahCorp au plus vite !"
    );
  }
});

/********PARAMETRES DE FILTRE VIA FORMULAIRE********/
/**************************************************/

const byText = document.querySelector("#by-title");
const researchBtn = document.querySelector("#form-btn");
const byLocation = document.querySelector("#location-input");
const fullTimeBox = document.querySelector("#full-time");
const mobilSearchBtn = document.querySelector("#mobile-search-button");
let isFullTime = fullTimeBox.checked ? 1 : 0;

mobilSearchBtn.addEventListener("click", (ev) => {
  loadEndedMsg.classList.remove("msg-style");
  loadEndedMsg.classList.add("load-ended");
  loadMoreBtn.classList.remove("load-ended");
  mobileModal.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");

  isFullTime = fullTimeBox.checked ? 1 : 0;
  offSetJobs = 0;
  ev.preventDefault();
  jobsContainer.innerHTML = "";
  isSearchInProgress = true;
  try {
    apiFiltedSearch(
      byText.value.toLowerCase(),
      byLocation.value.toLowerCase(),
      isFullTime,
      offSetJobs
    );
  } catch (error) {
    window.alert(
      "Erreur lors de la recherche: " +
        error.message +
        ", Veuillez contacter le support BlahCorp au plus vite !"
    );
  }
});

researchBtn.addEventListener("click", (ev) => {
  loadEndedMsg.classList.remove("msg-style");
  loadEndedMsg.classList.add("load-ended");
  loadMoreBtn.classList.remove("load-ended");
  mobileModal.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");

  isFullTime = fullTimeBox.checked ? 1 : 0;
  offSetJobs = 0;
  ev.preventDefault();
  jobsContainer.innerHTML = "";
  isSearchInProgress = true;
  try {
    apiFiltedSearch(
      byText.value.toLowerCase(),
      byLocation.value.toLowerCase(),
      isFullTime,
      offSetJobs
    );
  } catch (error) {
    window.alert(
      "Erreur lors de la recherche: " +
        error.message +
        ", Veuillez contacter le support BlahCorp au plus vite !"
    );
  }
});

