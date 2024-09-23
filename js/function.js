function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const convertNumber = parseFloat(inputValue);
    return convertNumber;
  };
  function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    textConvertValue = parseFloat(textValue);
    return textConvertValue;
  }
  function showSectionById(id){
    document.getElementById('section-1').classList.add('hidden');
    document.getElementById('section-2').classList.add('hidden');
    document.getElementById('section-3').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
  
    document.getElementById(id).classList.remove('hidden');
  
  };