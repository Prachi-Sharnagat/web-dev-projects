// 
const modal = document.querySelector('#shareModal');
const overlayactive = document.querySelector('.overlay');

const openModal =()=>{
    console.log("modal is open");
    modal.classList.remove('hidden');
    overlayactive.classList.remove('hidden');
    // active.classList.add('blurBg');

}

const closeModal =()=>{
    modal.classList.add('hidden');
    overlayactive.classList.add('hidden');
}