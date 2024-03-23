const loadMoreBtn = document.querySelector("#load-more-button");
const loadEndedMsg = document.querySelector("#load-ended")

loadMoreBtn.addEventListener("click", () => {
  offSetJobs += 12;
  apiGetAllCard(offSetJobs);

  if (offSetJobs >= totalJobs) {
    loadMoreBtn.classList.add("load-ended");
    loadEndedMsg.classList.remove("load-ended")
    loadEndedMsg.classList.add("msg-style")
  }
});
