/******AFFICHAGE DE LA PAGE DETAILS SELON L'OFFRE CLIQUEE*******/
/**************************************************************/

apiGoDetails = async (jobId) => {
  try {
    const loaderBtn = document.querySelector("#wrapper");
    loaderBtn.classList.add("wrapper-loading");
    const response = await fetch(
      `https://link.org/api/job/${jobId}`
    );

    if (!response.ok) {
      throw new Error(`Erreur de requête: ${response.status}`);
    }

    const data = await response.json();

    jobCompanyDetails(data);
    console.log("Les détails de l'emploi ont été récupérés avec succès");
    loaderBtn.classList.remove("wrapper-loading");

  } catch (error) {
    window.alert("Erreur de requête: 404 (NOT FOUND)");
    loaderBtn.classList.remove("wrapper-loading");
  }
};

apiGoDetails(jobId);
