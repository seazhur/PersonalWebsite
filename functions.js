
function showNextImage(){

    var currentImage = document.getElementById('portfolioImage');

    if (currentImage.style.visibility == 'hidden') {

        currentImage.style.visibility = 'visible';
        currentImage.height = 800;
        currentImage.width = 500;
        document.getElementById('title').textContent = "Personal Website";
        document.getElementById('subtitle').textContent = "Web Development";
        document.getElementById('description').textContent = "This website was created for the purpose of practicing my web development skills and having a place to display my accomplishments for reference. It was created with HTML, CSS, and Javascript. I learned the basic of web development, and it inspired me to get more into web development to really test my skills.";
        document.getElementById('portfolioLeftButton').textContent = "Next";

    } else if (document.getElementById('title').textContent == "Personal Website") {

        currentImage.src = "photos/iphone.png";

        currentImage.height = 471;
        currentImage.width = 275;
        document.getElementById('title').textContent = "Remember Me!";
        document.getElementById('subtitle').textContent = "iOS Application";
        document.getElementById('description').textContent = "I developed an iOS mobile application to remind people when to replace household items such as air filters, contact lens cases, etc. I got the idea when my my dad would consistently ask me to remind him of when to replace his air filter. Since the native Calendar app on his phone was too complicated for him to use, I decided to create a simple app as my introduction to iOS development.";
        document.getElementById('portfolioLeftButton').textContent = "Next";

    } else {

        currentImage.src = "photos/ipad.png";

        currentImage.style.visibility = 'hidden';
        document.getElementById('title').textContent = "Projects";
        document.getElementById('subtitle').textContent = "iOS & Web Development";
        document.getElementById('description').textContent = "The following are a collection of projects that I've done in the past. Enjoy!";
        document.getElementById('portfolioLeftButton').textContent = "Get Started";
        
    }




}

function changeLightMode(){

    var icon = document.getElementById("lightModeIcon");
    if (icon.name == "sunny-outline") {
        icon.name = "moon-outline";        
        document.getElementById("indexVideo").src = "videos/indexNight.mp4";
        document.getElementById("showcase").color = "black";
    } else {
        icon.name = "sunny-outline";
        document.getElementById("indexVideo").src = "videos/indexDay.MOV";
    }

}

function changeVolumeMode(){

    var icon = document.getElementById("volumeModeIcon");
    if (icon.name == "volume-high-outline") {
        icon.name = "volume-off-outline";
    } else {
        icon.name = "volume-high-outline";
    }

}