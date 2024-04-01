/******************MODAL FORMAT MOBILE********************/
/*********************************************************/
const filterBtn = document.querySelector(".filter-button");
const mobileModal = document.querySelector("#modal");
const overlay = document.querySelector(".overlay");

filterBtn.addEventListener("click", () => {
  mobileModal.classList.add("modal-open");
  overlay.classList.add("overlay-open");
});

if (window.innerWidth > 768) {
  overlay.classList.remove("overlay-open");
}
overlay.addEventListener("click", () => {
  mobileModal.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");
});

//Ci-dessus, il aurait été possible de faire de l'injection avec javascript.
//Par exemple, nous pourrions utiliser des balises modales ou <dialog> vides, puis injecter notre HTML dans ces balises vides lors du passage en format mobile. Toutefois, j'ai choisi de ne pas utiliser l'injection d'HTML/CSS. Au lieu de cela, j'ai préféré respecter la trinité et ne faire que des ajouts/suppressions de classes CSS déjà créées au préalable avec JavaScript.

//J'aurais bien utilisé la <dialog> ici mais cela me posait des problèmes au passage au format tablette/desktop et ne voulant pas faire de l'injection HTML avec javascript, j'ai préféré repasser avec une <div> et faire le code ci-dessus.

/*************RECUPERATION DES JOBS VIA TEMPLATE***********/
/*********************************************************/

const jobsContainer = document.querySelector("#jobs-container");
const jobsTemplate = document.querySelector("#job-template");

createCardElement = (job) => {
  const clonedCard = jobsTemplate.content.cloneNode(true);

  const jobCompany = clonedCard.querySelector("#company");
  const jobContract = clonedCard.querySelector("#contract");
  const jobLocation = clonedCard.querySelector(".job-location");
  const jobPosition = clonedCard.querySelector("#position");
  const jobPostedAt = clonedCard.querySelector("#postedAt");
  const jobTitleLink = clonedCard.querySelector(".job-title");

  jobTitleLink.href = `job-detail.html?id=${job.id}`;

  const jobLogo = clonedCard.querySelector(".logo");
  jobLogo.src = "https://ecf-dwwm.cefim-formation.org" + job.logo;
  jobLogo.style.backgroundColor = job.logoBackground;

  jobCompany.textContent = `${job.company}`;
  jobContract.textContent = `${job.contract}`;
  jobLocation.textContent = `${job.location}`;
  jobPosition.textContent = `${job.position}`;

  jobPostedAt.textContent = timeFormat(job.postedAt);

  return clonedCard;
};

const jobsCard = (job) => {
  const cardElement = createCardElement(job);
  jobsContainer.appendChild(cardElement);
};

/**********RECUPERATION DE LA DATE DE PARUTION DE L'OFFRE*******/
/*************************************************************/

timeFormat = (timestamp) => {
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
//Ici une fonction qui va changer le mode d'affichage du timestamp via "postedAt".
//Je retourne les cas selon plusieurs conditions afin d'afficher l'information de temps la plus correcte par rapport à la date de parution de l'offre.
// Une autre façon de faire ici, aurait été un switch case. Car on regarde plusieurs cas en fonction d'une seule condition.
