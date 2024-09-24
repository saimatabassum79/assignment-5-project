 document.getElementById("Noakhali-submit-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const donationNoakhaliName = document.getElementById("donation-name").innerText;
    CommonFeature("donate-of-noakhali","noakhali-amount",donationNoakhaliName
    );
  });
  
  // donation btn decler
  document.getElementById("feni-submit-btn").addEventListener("click", function(event)  {
    event.preventDefault();
    const feniName =document.getElementById("feni-name").innerText;
    CommonFeature("donate-of-feni","feni-amount",feniName);
  });
  
  // donation btn decler
   document.getElementById("quota-submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const quotaName =document.getElementById("quota-name").innerText;
    CommonFeature( "donate-quota", "quota-amount", quotaName );
  });