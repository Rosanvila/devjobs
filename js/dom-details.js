/***************RECUPERATION DES DETAILS D'UN JOB*************/
/*************************************************************/

const jobCompanyContainer = document.querySelector("#jobs-company-container");
const detailsContainer = document.querySelector("#details-container");
const footerContainer = document.querySelector("#footer-container")
const companyTemplate = document.querySelector("#company-template");
const detailsTemplate = document.querySelector("#details-template");
const footerTemplate = document.querySelector("#footer-template")


createDetailsJob = (data) => {
  const clonedCompany = companyTemplate.content.cloneNode(true);
//Ici la partie pour clôner la partie ayant les informations du recruteur ainsi que son site//
  const jobCompany = clonedCompany.querySelector("#company");
  const jobCompanyDotCom = clonedCompany.querySelector("#company-dotocm");
  const companySiteBtn = clonedCompany.querySelector("#company-website");
  const jobLogo = clonedCompany.querySelector("#logo");
  jobLogo.src = "https://ecf-dwwm.cefim-formation.org" + data.logo;
  jobLogo.style.backgroundColor = data.logoBackground;
  jobCompany.textContent = data.company;
  jobCompanyDotCom.textContent = data.company + ".com";
  companySiteBtn.setAttribute("href", data.website);

  const clonedDetails = detailsTemplate.content.cloneNode(true);
//Ici la partie contenant les détails de l'offre d'emploi//
  const detailsPostedAt = clonedDetails.querySelector("#postedAt");
  const detailsContract = clonedDetails.querySelector("#contract");
  const detailsPosition = clonedDetails.querySelector("#position");
  const detailsLocation = clonedDetails.querySelector("#location");
  const detailsApplyBtn = clonedDetails.querySelector("#apply");
  const detailsDesc = clonedDetails.querySelector("#description");
  const detailsReqContent = clonedDetails.querySelector("#req-content");
  const detailsRoleContent = clonedDetails.querySelector("#do-content");
  
  detailsApplyBtn.setAttribute("href", data.apply);
  detailsPostedAt.textContent = data.postedAt;
  detailsPostedAt.textContent = detailsTimeFormat(data.postedAt);
  detailsContract.textContent = data.contract;
  detailsPosition.textContent = data.position;
  detailsLocation.textContent = data.location;
  detailsDesc.textContent = data.description;
  detailsReqContent.textContent = data.requirements.content;
  detailsRoleContent.textContent = data.role.content;

  RequirementsItems(clonedDetails, data);
  RoleItems(clonedDetails, data);

  const footerDetails = footerTemplate.content.cloneNode(true);
//Ici la partie contenant le footer//
//J'ai préféré cette mise en forme pour mon code car cela me paraissait plus clair, étant donné que nous aurons trois parties distinctes sur la page de détails//
  const footerPosition = footerDetails.querySelector("#footer-position")
  const footerCompany = footerDetails.querySelector("#footer-company")
  const footerApplyBtn = footerDetails.querySelector("#footer-apply-btn")
  
  footerApplyBtn.setAttribute("href", data.apply);
  footerPosition.textContent = data.position;
  footerCompany.textContent = data.company;

  return { company: clonedCompany, details: clonedDetails, footer: footerDetails };
};
//J'ai créé cette nouvelle fonction ci-dessous afin de reprendre mes différentes parties clonées afin de les incorporer en une seule fonction que j'irais appeler dans mon API//
jobCompanyDetails = (data) => {
  const { company, details, footer } = createDetailsJob(data);
  detailsContainer.appendChild(details);
  jobCompanyContainer.appendChild(company);
  footerContainer.appendChild(footer);
};

/**********RECUPERATION DE LA DATE DE PARUTION DE L'OFFRE*******/
/*************************************************************/

detailsTimeFormat = (timestamp) => {
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