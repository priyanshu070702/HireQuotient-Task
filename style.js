const faqcard=document.getElementsByClassName('faq-card');

for(i=0;i<faqcard.length;i++){
    faqcard[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show-menu');
  }
