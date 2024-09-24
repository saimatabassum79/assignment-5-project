const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

donationBtn.addEventListener("click", function() {
  donationBtn.classList.add("btn-success");
  historyBtn.classList.remove("btn-success");

  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden")                                                     ;
});

historyBtn.addEventListener("click", function() {
  donationBtn.classList.remove("btn-success");
  historyBtn.classList.add("btn-success");

  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
});