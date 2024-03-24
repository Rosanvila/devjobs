/***********RECUPERATION DES JOBS VIA API*********************/
/*************************************************************/
let offSetJobs = 0;
let totalJobs = 0;

apiGetAllCard = () => {
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

      jobsOrder.forEach((job) => {
        jobsCard(job);
        console.log("Les jobs ont été récupérées avec succès");
      });
    })
    .catch((error) => {
      console.error("Erreur de requête:", error.message);
    });
};
apiGetAllCard();

