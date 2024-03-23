/***********RECUPERATION DES JOBS VIA API*********************/
/*************************************************************/

ApiGetAllCard = () => {
  fetch("https://ecf-dwwm.cefim-formation.org/api/jobs")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erreur de requête: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    const jobsOrder = data.jobs
      .sort((a, b) => b.postedAt - a.postedAt)
      .slice(0, 12);

    jobsOrder.forEach((job) => {
      jobsCard(job);
      console.log("Les jobs ont été récupérées avec succès");
    });
  })
  .catch((error) => {
    console.error("Erreur de requête:", error.message);
  });
}
ApiGetAllCard();