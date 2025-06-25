/**********RECUPERATION DES JOBS VIA API***************/
/****************************************************/

apiGetAllCard = async () => {
  try {
    const loadMoreBtn = document.querySelector("#load-more-button");
    const loaderBtn = document.querySelector("#wrapper");
    const loadEndedMsg = document.querySelector(".load-ended-msg");

    if (!loadMoreBtn || !loaderBtn) {
      console.error("Éléments DOM manquants");
      return;
    }

    loadMoreBtn.classList.add("load-more-button-hidden");
    loaderBtn.classList.add("wrapper-loading");

    const response = await fetch(
      `http://localhost:8000/api/jobs?offset=${offSetJobs}&limit=12`
    );

    if (!response.ok) {
      throw new Error(`Erreur de requête: ${response.status}`);
    }

    const data = await response.json();
    console.log("Données reçues:", data);

    // Vérification de la structure des données
    if (!data.data || !Array.isArray(data.data)) {
      throw new Error("Structure de données invalide");
    }

    const jobsOrder = data.data.sort(
      (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
    );

    // Mise à jour du total global
    if (typeof totalJobs === "undefined") {
      totalJobs = data.pagination.total;
    } else {
      totalJobs = data.pagination.total;
    }

    offSetJobs += 12;

    if (offSetJobs >= totalJobs) {
      if (loadEndedMsg) {
        loadEndedMsg.classList.remove("load-ended");
        loadEndedMsg.classList.add("msg-style");
      }
      loadMoreBtn.classList.add("load-ended");
    }

    jobsOrder.forEach((job) => {
      jobsCard(job);
      console.log("Job affiché:", job.company);
    });

    loaderBtn.classList.remove("wrapper-loading");
    loadMoreBtn.classList.remove("load-more-button-hidden");
  } catch (error) {
    console.error("Erreur détaillée:", error);
    window.alert("Erreur lors du chargement des jobs");

    // Nettoyage en cas d'erreur
    const loaderBtn = document.querySelector("#wrapper");
    const loadMoreBtn = document.querySelector("#load-more-button");

    if (loaderBtn) loaderBtn.classList.remove("wrapper-loading");
    if (loadMoreBtn) loadMoreBtn.classList.remove("load-more-button-hidden");
  }
};

// Appel initial
apiGetAllCard();

/***********API RECHERCHER UN JOB PAR CRITERE**********/

apiFiltedSearch = async (textValue, locationValue, fullTime, offset = 0) => {
  try {
    const loadMoreBtn = document.querySelector("#load-more-button");
    const loaderBtn = document.querySelector("#wrapper");
    const loadEndedMsg = document.querySelector(".load-ended-msg");

    if (!loadMoreBtn || !loaderBtn) {
      console.error("Éléments DOM manquants");
      return;
    }

    // Si c'est une nouvelle recherche (offset = 0), réinitialiser
    if (offset === 0) {
      offSetJobs = 0;
    }

    loadMoreBtn.classList.add("load-more-button-hidden");
    loaderBtn.classList.add("wrapper-loading");

    // Nettoyer les paramètres pour éviter les valeurs undefined
    const text = textValue || "";
    const location = locationValue || "";
    const fulltime = fullTime || "";

    const response = await fetch(
      `http://localhost:8000/api/jobs/search?text=${encodeURIComponent(
        text
      )}&location=${encodeURIComponent(location)}&fulltime=${encodeURIComponent(
        fulltime
      )}&offset=${offSetJobs}&limit=12`
    );

    if (!response.ok) {
      throw new Error(`Erreur de requête: ${response.status}`);
    }

    const data = await response.json();
    console.log("Données de recherche reçues:", data);

    // Vérification de la structure des données
    if (!data.data || !Array.isArray(data.data)) {
      console.error("Structure de données invalide:", data);
      throw new Error("Structure de données invalide");
    }

    const jobsOrder = data.data.sort(
      (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
    );

    // Mise à jour du total global
    totalJobs = data.pagination.total;
    offSetJobs += 12;

    console.log("Total jobs trouvés:", totalJobs);

    if (offSetJobs >= totalJobs) {
      if (loadEndedMsg) {
        loadEndedMsg.classList.remove("load-ended");
        loadEndedMsg.classList.add("msg-style");
      }
      loadMoreBtn.classList.add("load-ended");
    }

    if (jobsOrder.length === 0 && offset === 0) {
      window.alert("Aucun job trouvé pour ces critères.");
    }

    jobsOrder.forEach((job) => {
      jobsCard(job);
      console.log("Job trouvé:", job.company, "-", job.position);
    });

    loaderBtn.classList.remove("wrapper-loading");
    loadMoreBtn.classList.remove("load-more-button-hidden");
    loadMoreBtn.classList.remove("load-more-api");
  } catch (error) {
    console.error("Erreur détaillée:", error);
    window.alert("Erreur lors de la recherche des jobs");

    // Nettoyage en cas d'erreur
    const loaderBtn = document.querySelector("#wrapper");
    const loadMoreBtn = document.querySelector("#load-more-button");

    if (loaderBtn) loaderBtn.classList.remove("wrapper-loading");
    if (loadMoreBtn) loadMoreBtn.classList.remove("load-more-button-hidden");
  }
};
