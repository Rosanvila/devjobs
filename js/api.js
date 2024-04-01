/**********RECUPERATION DES JOBS VIA API***************/
/****************************************************/

apiGetAllCard = async () => {
  try {
    const loadMoreBtn = document.querySelector("#load-more-button");
    const loaderBtn = document.querySelector("#wrapper");
    loadMoreBtn.classList.add("load-more-button-hidden");
    loaderBtn.classList.add("wrapper-loading");

    const response = await fetch(
      `https://ecf-dwwm.cefim-formation.org/api/jobs?offset=${offSetJobs}`
    );

    if (!response.ok) {
      throw new Error(`Erreur de requête: ${response.status}`);
    }

    const data = await response.json();

    const jobsOrder = data.jobs.sort((a, b) => b.postedAt - a.postedAt);
    totalJobs = data.total;
    offSetJobs += 12;

    if (offSetJobs >= totalJobs) {
      loadEndedMsg.classList.remove("load-ended");
      loadMoreBtn.classList.add("load-ended");
      loadEndedMsg.classList.add("msg-style");
    }

    jobsOrder.forEach((job) => {
      jobsCard(job);
      console.log("Les jobs ont été récupérées avec succès");
    });

    loaderBtn.classList.remove("wrapper-loading");
    loadMoreBtn.classList.remove("load-more-button-hidden");

  } catch (error) {
    window.alert("Erreur 404 - Ressource non trouvée");
    loaderBtn.classList.remove("wrapper-loading");
    loadMoreBtn.classList.remove("load-more-button-hidden");
  }
};

apiGetAllCard();
/***********API RECHERCHER UN JOB PAR CRITERE**********/

apiFiltedSearch = async (textValue, locationValue, fullTime) => {
  try {
    const loadMoreBtn = document.querySelector("#load-more-button");
    const loaderBtn = document.querySelector("#wrapper");
    loadMoreBtn.classList.add("load-more-button-hidden");
    loaderBtn.classList.add("wrapper-loading");
    const response = await fetch(
      `https://ecf-dwwm.cefim-formation.org/api/jobs/search?text=${textValue}&location=${locationValue}&fulltime=${fullTime}&offset=${offSetJobs}`
    );

    if (!response.ok) {
      throw new Error(`Erreur de requête: ${response.status}`);
    }

    const data = await response.json();

    const jobsOrder = data.jobs.sort((a, b) => b.postedAt - a.postedAt);
    totalJobs = data.total;
    offSetJobs += 12;

    console.log(totalJobs);

    if (offSetJobs >= totalJobs) {
      loadEndedMsg.classList.remove("load-ended");
      loadMoreBtn.classList.add("load-ended");
      loadEndedMsg.classList.add("msg-style");
    }

    if (jobsOrder.length === 0) {
      window.alert("Aucun job trouvé.");
    }

    jobsOrder.forEach((job) => {
      jobsCard(job);
      console.log("Les jobs ont été récupérés avec succès");
    });
    loaderBtn.classList.remove("wrapper-loading");
    loadMoreBtn.classList.remove("load-more-button-hidden");

    loadMoreBtn.classList.remove("load-more-api");
  } catch (error) {
    console.error("Erreur de requête:", error.message);
    loaderBtn.classList.remove("wrapper-loading");
    loadMoreBtn.classList.remove("load-more-button-hidden");
  }
};
