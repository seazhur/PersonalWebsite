function showNextImage(){

    var currentImage = document.getElementById('portfolioImage');

    if (currentImage.style.visibility == 'hidden') {

        currentImage.style.visibility = 'visible';

        currentImage.height = 671;
        currentImage.width = 500;

        document.getElementById('title').textContent = "Personal Website";
        document.getElementById('subtitle').textContent = "CSCE 315";
        document.getElementById('description').textContent = "...";
        document.getElementById('button').textContent = "Next";

    } else if (document.getElementById('title').textContent == "Personal Website") {
        // currentImage.src == "photos/ipad.png") 
        // change image
        currentImage.src = "photos/iphone.png";

        currentImage.height = 471;
        currentImage.width = 300;

        document.getElementById('title').textContent = "Remember Me!";
        document.getElementById('subtitle').textContent = "iOS Application";
        document.getElementById('description').textContent = "Developing an iOS mobile application to remind people when to replace household items such as air filters, contact lens cases, etc.";
        document.getElementById('button').textContent = "Next";
    } else {

        // change image
        currentImage.src = "photos/ipad.png";
        currentImage.style.visibility = 'hidden';

        document.getElementById('title').textContent = "Projects";
        document.getElementById('subtitle').textContent = "iOS & Web Development";
        document.getElementById('description').textContent = "The following are a collection of projects that I've done in the past.";
        document.getElementById('button').textContent = "Get Started";
    }

}

