
apiGoDetails = () => {
  fetch(`https://ecf-dwwm.cefim-formation.org/api/job/2`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur de requête: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      jobCompanyDetails(data);
      console.log("Les jobs ont été récupérées avec succès");
    })
    .catch((error) => {
      console.error("Erreur de requête:", error.message);
    });
};

apiGoDetails();
