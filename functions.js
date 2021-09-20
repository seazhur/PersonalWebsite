
function showNextImage(){

    var currentImage = document.getElementById('portfolioImage');
    var currentGithubButton = document.getElementById('githubButton');

    if (currentImage.style.visibility == 'hidden') {
        
        currentImage.style.visibility = 'visible';
        currentGithubButton.style.visibility = 'visible';

        currentImage.src = "photos/iphone.png";
        currentGithubButton.setAttribute("href", "https://github.com/seazhur/replaceMe.git")
        currentImage.height = 471;
        currentImage.width = 275;

        document.getElementById('title').textContent = "Replace Me!";
        document.getElementById('subtitle').textContent = "iOS Application";
        document.getElementById('description').textContent = "I developed an iOS mobile application to remind people when to replace household items such as air filters, contact lens cases, etc. I got the idea when my my dad would consistently ask me to remind him of when to replace his air filter. Since the native Calendar app on his phone was too complicated for him to use, I decided to create a simple app as my introduction to iOS development.";
        document.getElementById('portfolioLeftButton').textContent = "Next";

    } else if (document.getElementById('title').textContent == "Replace Me!") {

        currentImage.src = "photos/macbook.png";
        currentGithubButton.setAttribute("href", "https://github.com/seazhur/PersonalWebsite.git")
        currentImage.height = 750;
        currentImage.width = 1333;

        document.getElementById('title').textContent = "Personal Website";
        document.getElementById('subtitle').textContent = "Web Development";
        document.getElementById('description').textContent = "This website was created for the purpose of practicing my web development skills and having a place to display my accomplishments for reference. It was created with HTML, CSS, and Javascript. I learned the basic of web development, and it inspired me to get more into web development to really test my skills.";
        document.getElementById('portfolioLeftButton').textContent = "Next";


    } else if (document.getElementById('title').textContent == "Personal Website") {

        currentImage.src = "photos/ipad.png";
        currentGithubButton.setAttribute("href", "https://github.com/seazhur/ebbi.git")
        currentImage.height = 800;
        currentImage.width = 500;

        document.getElementById('title').textContent = "Ebbi";
        document.getElementById('subtitle').textContent = "iOS Development";
        document.getElementById('description').textContent = "My most recent project has been developing an iOS application that helps students study less and relax more. It can often be difficult for students to manage how long to study for certain topics, and most students either end up understudying or work themselves too hard. To remedy this, I researched the Ebbinghaus’ curve of forgetting, which is simply the principle that if you study a topic at regular time intervals for decreasing amounts of time, then you can maximize your study time and more easily submit information into your long-term memory. This app embodies this principle by reminding students of when and how long to study for."
        document.getElementById('portfolioLeftButton').textContent = "Next";

    } else {

        currentImage.style.visibility = 'hidden';
        currentGithubButton.style.visibility = 'hidden';

        document.getElementById('title').textContent = "Projects";
        document.getElementById('subtitle').textContent = "iOS & Web Development";
        document.getElementById('description').textContent = "The following is a collection of projects that I've done in the past. Enjoy!";
        document.getElementById('portfolioLeftButton').textContent = "Get Started";

    }
}










function changeLightMode(){

    var icon = document.getElementById("lightModeIcon");

    if (icon.name == "sunny-outline") {
        icon.name = "moon-outline";        

        document.getElementById("indexVideo").src = "videos/galaxy.mp4";
        // localStorage.setItem("isLightOn", "false");

    } else {
        icon.name = "sunny-outline";

        document.getElementById("indexVideo").src = "videos/sunflowers.MOV";
        // localStorage.setItem("isLightOn", "true");
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

/*
window.onload = function(){

    var lightMode = localStorage.getItem("isLightOn");
    var icon = document.getElementById("lightModeIcon");

    if (lightMode == "true") {
        icon.name = "sunny-outline";
        document.getElementById("indexVideo").src = "videos/indexDay.MOV";
        
    } else {
        icon.name = "moon-outline";
        document.getElementById("indexVideo").src = "videos/indexNight.mp4";
        
    }
}
*/
