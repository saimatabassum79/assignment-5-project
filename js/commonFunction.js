// total donated amount need (navbar amount)
const totalDonationNeed = document.getElementById("total-donation-need");
const donationDataHistory = document.getElementById("donation-data-history");
const modal = document.getElementById("modal_dialog_box");

const CommonFeature = function(donateAmount, id, title) {
  const inputElement = document.getElementById(donateAmount);
  const inputFiled = parseFloat(inputElement.value);
  const floodDonateAmount = parseFloat(document.getElementById(id).innerText);
  if (inputFiled < 0 || isNaN(inputFiled)) {
   alert('Failed to add money');
    return;
  }
  // card taka + input filed data increment
  const totalDonateAmount = inputFiled + floodDonateAmount;
  document.getElementById(id).innerText = totalDonateAmount;

  // total donation amount need decrement
  totalDonationNeed.innerText =parseFloat(totalDonationNeed.innerText - inputFiled);
    modal.showModal();

  const div = document.createElement("div");
  div.className =
    "bg-white p-[25px] rounded-2xl border border-[rgba(17,17,17,0.1)] border-solid mb-2";
  div.innerHTML = `<h4 class="text-lg font-bold text-[rgb(17,17,17)]">
                ${inputFiled} Taka is ${title}</h4>
              <div class=" font-light text-[rgba(17,17,17,0.7)] mt-4">
                <span class="text-xl  text-[rgb(17,17,17)]">
                  Date :</span
                >
                ${new Date()}
                       </div>`;
  donationDataHistory.appendChild(div);
};