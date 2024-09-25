const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

donationBtn.addEventListener("click", function() {
  donationBtn.classList.add("btn-warning");
  historyBtn.classList.remove("btn-warning");

  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden")                                                     ;
});

historyBtn.addEventListener("click", function() {
  donationBtn.classList.remove("btn-warning");
  historyBtn.classList.add("btn-warning");

  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
});