/******AFFICHAGE DE LA PAGE DETAILS SELON L'OFFRE CLIQUEE*******/
/**************************************************************/

apiGoDetails = async (jobId) => {
  try {
    const loaderBtn = document.querySelector("#wrapper");
    if (loaderBtn) {
      loaderBtn.classList.add("wrapper-loading");
    }
    
    const response = await fetch(
      `http://localhost:8000/api/job/${jobId}`
    );

    if (!response.ok) {
      throw new Error(`Erreur de requête: ${response.status}`);
    }

    const data = await response.json();

    jobCompanyDetails(data);
    console.log("Les détails de l'emploi ont été récupérés avec succès");
    
    if (loaderBtn) {
      loaderBtn.classList.remove("wrapper-loading");
    }

  } catch (error) {
    console.error("Erreur lors de la récupération des détails:", error);
    window.alert("Erreur de requête: 404 (NOT FOUND)");
    
    const loaderBtn = document.querySelector("#wrapper");
    if (loaderBtn) {
      loaderBtn.classList.remove("wrapper-loading");
    }
  }
};

// Appel de la fonction si un jobId est présent dans l'URL
if (jobId) {
  apiGoDetails(jobId);
} else {
  console.error("Aucun ID d'offre d'emploi trouvé dans l'URL");
}