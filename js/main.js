/**********RECUPERATION DE LA DATE DE PARUTION DE L'OFFRE*******/

const timeFormat = (timestamp) => {
  const now = Date.now();
  const difference = now - timestamp;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (days < 1) {
    const hours = Math.floor(difference / (1000 * 60 * 60));
    return hours + "h ago";
  } else if (days < 7) {
    return days + "d ago";
  } else if (days < 30) {
    const weeks = Math.floor(days / 7);
    return weeks + "w ago";
  } else if (days < 365) {
    const months = Math.floor(days / 30);
    return months + "mo ago";
  } else {
    const years = Math.floor(days / 365);
    return years + "y ago";
  }
};
/*************************************************************/
let isSearchInProgress = false;
let offSetJobs = 0;

// Fonction pour charger plus de jobs
loadMoreJobs = () => {
  if (isSearchInProgress) {
    // Si une recherche est en cours, charger plus de jobs filtrés
    apiFiltedSearch(
      byText.value.toLowerCase(),
      byLocation.value.toLowerCase(),
      isFullTime,
      );
    } else {
      // Sinon, charger plus de jobs normaux
      apiGetAllCard();
    }
  };
  
  /*AJOUT DE l'OFFSET POUR LES JOB AU CLIQUE DU BOUTON LOAD MORE*/
  const loadMoreBtn = document.querySelector("#load-more-button");
  const loadEndedMsg = document.querySelector("#load-ended");
  
  loadMoreBtn.addEventListener("click", () => {
    loadMoreJobs();
  });

  /*******PARAMETRES DE FILTRE VIA FORMULAIRE*******/
  
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

