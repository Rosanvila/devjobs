/************PARTIE POUR LES LISTES D'ITEM DE LA PAGE DETAILS**********/

RequirementsItems = (blah, data) => {
  const detailsListItem = blah.querySelectorAll(".job-req");
  const reqItems = data.requirements.items;

  detailsListItem.forEach((reqList, i) => {
    if (reqItems[i]) {
      reqList.textContent = reqItems[i];
    }
  });
};

RoleItems = (bloup, data) => {
  const detailsRoleItem = bloup.querySelectorAll(".job-role");
  const roleItems = data.role.items;

  detailsRoleItem.forEach((roleList, i) => {
    if (roleItems[i]) {
      roleList.textContent = roleItems[i];
    }
  });
};


/*************BOUTON MENANT A LA PAGE DETAILS DE l'OFFRE*************/

const detailsLinks = document.querySelectorAll(".job-title");

detailsLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); 
    const jobId = link.getAttribute("href").split("/")[1];
    console.log(jobId);
    apiGoDetails(jobId);
  });
});
