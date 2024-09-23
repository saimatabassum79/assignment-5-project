console.log('HI MISES')
document.getElementById('btn-history').addEventListener('click',function(){
     showSectionById('history-container');
    const btnHist = document.getElementById('btn-history');
    const btnDone = document.getElementById('btnDone');
    btnHist.classList.add('bg-[#B4F461]');
    btnDone.classList.remove('bg-[#B4F461]');
    
  })
  document.getElementById('btnDone').addEventListener('click',function(){
    console.log('clicked!')
    btnDone.classList.add('bg-[#B4F461]');
    const btnHist = document.getElementById('btn-history');
    btnHist.classList.remove('bg-[#B4F461]');
  
    document.getElementById('section-1').classList.remove('hidden');
    document.getElementById('section-2').classList.remove('hidden');
    document.getElementById('section-3').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
    
  })