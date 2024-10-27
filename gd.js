document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
       e.preventDefault();

       const targetId = this.getAttribute('href').substring(1);
       const targetElement = document.getElementById(targetId);
       
       if (targetElement) {
           window.location.hash = targetId; //updates the url 

           const headerHeight = document.querySelector('#heather').offsetHeight;
           const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

           window.scrollTo({
               top: targetPosition,
               behavior: 'smooth'
           });
       }
   });
});