/*FOR LINKS*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (d) {
       d.preventDefault();

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

// MAIN DISH
    fetch('Main Dish/mainDishPage.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mainDish').innerHTML = data;
    });

    // adobo-section
    fetch('Main Dish/adobo.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('adobo-section').innerHTML = data;
    });

    // sinigang-section
    fetch('Main Dish/sinigang.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sinigang-section').innerHTML = data;
    });

    // kare-kare-section
    fetch('Main Dish/kare.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('kareKare-section').innerHTML = data;
    });

    // tinola-section
    fetch('Main Dish/tinola.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('tinola-section').innerHTML = data;
    });

    // lechonKawali-section
    fetch('Main Dish/lechon.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('lechonKawali-section').innerHTML = data;
    });

    
// DESSERT
    fetch('Dessert/dessertPage.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('dessert').innerHTML = data;
    });
