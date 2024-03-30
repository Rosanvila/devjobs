/******AFFICHAGE DE LA PAGE DETAILS SELON L'OFFRE CLIQUEE*******/
/**************************************************************/

apiGoDetails = async (jobId) => {
  try {
    const response = await fetch(
      `https://ecf-dwwm.cefim-formation.org/api/job/${jobId}`
    );

    if (!response.ok) {
      throw new Error(`Erreur de requête: ${response.status}`);
    }

    const data = await response.json();

    jobCompanyDetails(data);
    console.log("Les détails de l'emploi ont été récupérés avec succès");
  } catch (error) {
    console.error("Erreur de requête:", error.message);
  }
};

apiGoDetails(jobId);
