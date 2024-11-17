/*FOR LINKS*/
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
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

    //bibingka-section
    fetch('Dessert/bibingka.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bibingka-section').innerHTML = data;
    });

    // putoBumbong-section
    fetch('Dessert/putoBumbong.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('putoBumbong-section').innerHTML = data;
    });

    // halo-halo ection
    fetch('Dessert/haloHalo.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('haloHalo-section').innerHTML = data;
    });

    // ubeHalaya-section
    fetch('Dessert/ubeHalaya.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('ubeHalaya-section').innerHTML = data;
    });

    // taho-section
    fetch('Dessert/taho.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('taho-section').innerHTML = data;
    });


// STREETFOOD
    fetch('Streetfood/streetFoodPage.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('streetfood').innerHTML = data;
    });

    //balut-section
    fetch('Streetfood/balut.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('balut-section').innerHTML = data;
    });

    // isaw-section
    fetch('Streetfood/isaw.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('isaw-section').innerHTML = data;
    });

    // kwekKwek section
    fetch('Streetfood/kwekKwek.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('kwekKwek-section').innerHTML = data;
    });

    // betamax-section
    fetch('Streetfood/betamax.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('betamax-section').innerHTML = data;
    });

    // iceScramble-section
    fetch('Streetfood/scramble.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('iceScramble-section').innerHTML = data;
    });


// BEVERAGE
    fetch('Beverage/beveragePage.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('beverage').innerHTML = data;
    });

    //buko-section
    fetch('Beverage/buko.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('buko-section').innerHTML = data;
    });

    // sagotGulaman-section
    fetch('Beverage/sagotGulaman.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sagotGulaman-section').innerHTML = data;
    });

    // kapengBarako ection
    fetch('Beverage/kapengBarako.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('kapengBarako-section').innerHTML = data;
    });

    // bukoPandan-section
    fetch('Beverage/bukoPandan.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bukoPandan-section').innerHTML = data;
    });

    // lambanog-section
    fetch('Beverage/lambanog.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('lambanog-section').innerHTML = data;
    });
});


//ABOUT US
    fetch('About us/aboutUs.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('aboutUs').innerHTML = data;
        });
    

//CONTACT US
    fetch('About us/feedback.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('feedback').innerHTML = data;
        });