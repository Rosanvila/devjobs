/************PARTIE POUR LES LISTES D'ITEM DE LA PAGE DETAILS**********/

RequirementsItems = (blah, data) => {
  const detailsListItem = blah.querySelector("#req-list");
  const reqItems = data.requirements.items;

  reqItems.forEach((itemText) => {
    const li = document.createElement("li");

    li.className = "job-req";
    li.textContent = itemText;
    detailsListItem.appendChild(li);
  });
};

RoleItems = (bloup, data) => {
  const detailsRoleItem = bloup.querySelector(".do-list");
  const roleItems = data.role.items;

  roleItems.forEach((itemText) => {
    const li = document.createElement("li");

    li.className = "job-role";
    li.textContent = itemText;
    detailsRoleItem.appendChild(li);
  });
};

/************RECUPERATION DE l'ID DANS L'URL POUR APPEL API******************/

const urlParamsId = new URLSearchParams(window.location.search);
const jobId = urlParamsId.get("id");
