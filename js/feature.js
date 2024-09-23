document.getElementById('donate-btn-1').addEventListener('click',function(){
    const exitingBalance = getTextValueById('valueOne');
    const donate1Value = getInputValueById('donate-input-one');
    const newBalance = exitingBalance + donate1Value;
      // add to transaction history
      const p = document.createElement('p');
      p.innerText =  `${donate1Value} Tk. Donate for Flood at Noakhali, Bangladesh`;
      console.log(p); 
  
      // should be a common function
      document.getElementById('history-container').appendChild(p);
      
    document.getElementById('valueOne').innerText =newBalance;
    const mainWallet = getTextValueById('mainWallet');
    const donateWallet = donate1Value - mainWallet;
    document.getElementById('mainWallet').innerText = donateWallet;
    
  });
  document.getElementById('donate-btn-2').addEventListener('click',function(){
    const exitingBalance = getTextValueById('valueTwo');
    const donate1Value = getInputValueById('donate-input-two');
    const newBalance = exitingBalance + donate1Value;
    // add to transaction history
    const p = document.createElement('p');
    p.innerText =  `${donate1Value} Tk. Donate for Flood at Noakhali, Bangladesh`;
    console.log(p); 
  
    // should be a common function
    document.getElementById('history-container').appendChild(p);
  
    document.getElementById('valueTwo').innerText =newBalance;
    const mainWallet = getTextValueById('mainWallet');
    const donateWallet = donate1Value - mainWallet;
    document.getElementById('mainWallet').innerText = donateWallet;
    
  });
  document.getElementById('donate-btn-3').addEventListener('click',function(){
    const exitingBalance = getTextValueById('valueThree');
    const donate1Value = getInputValueById('donate-input-three');
    const newBalance = exitingBalance + donate1Value;
    // add to transaction history
    const p = document.createElement('p');
    p.innerText =  `${donate1Value} Tk. Aid for Injured in the Quota Movement`;
  
  
    // should be a common function
    document.getElementById('history-container').appendChild(p);
  
    document.getElementById('valueThree').innerText =newBalance;
    const mainWallet = getTextValueById('mainWallet');
    const donateWallet = donate1Value - mainWallet;
    document.getElementById('mainWallet').innerText = donateWallet;
    
  });