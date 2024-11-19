const header=document.querySelector('header');

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
});


let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.portfolio-content .box img').forEach((img) => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex'; 
    modalImage.src = img.src; 
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; 
});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
