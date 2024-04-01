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

// Ici, ci-dessus et ci-dessous, ce sont des fonctions utilisées pour créer les éléments <li> sur la page détails, car je n'ai pas trouvé de solution pour éviter l'injection d'HTML avec JavaScript.
// J'avais pré-créé un certain nombre d'éléments <li> dans mon template et je les ai clonés pour créer des listes à partir des appels à l'API. Cependant, je me suis retrouvé bloqué car les offres n'ont pas le même nombre d'"item" dans notre API. C'est donc une exception à la règle de ne pas manipuler le DOM directement. Puisque les listes étaient dans un tableau, il semblait plus logique au final de procéder de la manière coder maintenant.


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
