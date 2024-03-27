/**********RECUPERATION DES JOBS VIA API***************/
/****************************************************/

apiGetAllCard = () => {
  const loadMoreBtn = document.getElementById("load-more-button");

  loadMoreBtn.classList.add("load-more-api");

  fetch(`https://ecf-dwwm.cefim-formation.org/api/jobs?offset=${offSetJobs}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur de requête: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
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

      loadMoreBtn.classList.remove("load-more-api");
    })
    .catch((error) => {
      console.error("Erreur de requête:", error.message);

      loadMoreBtn.classList.remove("load-more-api");
    });
};

apiGetAllCard();

/***********API RECHERCHER UN JOB PAR CRITERE**********/

apiFiltedSearch = (textValue,locationValue,fullTime) => {
  jobsContainer.innerHTML = "";
  
  fetch(
    `https://ecf-dwwm.cefim-formation.org/api/jobs/search?text=${textValue}&location=${locationValue}&fulltime=${fullTime}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur de requête: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
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
    })
    .catch((error) => {
      console.error("Erreur de requête:", error.message);
    });
};
