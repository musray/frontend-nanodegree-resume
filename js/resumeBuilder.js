/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%","褚瑞");
var formattedRole = HTMLheaderRole.replace("%data%","Frondend Developer 我的第一份在线简历");
$("#header").append(formattedName, formattedRole);

var myContactInfo = {
      "mobile": "+86 135-0139-9815",
      "email" : "yizhe.chu@gmail.com" 
}

formattedMobile = HTMLmobile.replace("%data%", myContactInfo.mobile);
$("#topContacts").append(formattedMobile);
formattedEmail = HTMLemail.replace("%data%", myContactInfo.email);
$("#topContacts").append(formattedEmail);

var skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Github', 'VIM']
var bio = {
      "name" : "Chu Rui",
      "role" : "Front End Developer",
      "picURL" : "#",
      "welcome" : "Welcome to visit this website!",
      "skills" : skills,
}

var works = {
  "workExp": [
    {
      "position": "manufacture",
      "employer": "Far-China",
      "base": "Shanghai",
      "dates": "July 15, 2006 ~ Feb 05, 2006",
      "description": "The first job in my life!"
    },
    {
      "position": "engineer",
      "employer": "CTEC",
      "base": "Beijing",
      "dates": "Mar 05, 2007 ~ Present",
      "description":"Nuclear Safety Engineer for I&C"
    },
    {
      "position": "Front End Developer",
      "employer": "nowhere",
      "base": "null",
      "dates": "Future",
      "description":"working like a web master"
    }
  ]
};

var education = {
    "schools": [
        {
            "name": "Daqing No.1 Middle",
            "year": 3,
            "major": "e",
            "minor": "w"
        },
        {
            "name": "Heilongjiang Sciense",
            "year": 4,
            "major": "E",
            "minor": "W"
        }
    ]
}

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkill);

}

function displayWork() {
  for (work in works.workExp) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", works.workExp[work].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", works.workExp[work].position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", works.workExp[work].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedBase = HTMLworkLocation.replace("%data%", works.workExp[work].base);
    $(".work-entry:last").append(formattedBase);
    var formattedDes = HTMLworkDescription.replace("%data%", works.workExp[work].description);
    $(".work-entry:last").append(formattedDes);
  }
}
displayWork();

//$(document).click(function(loc){
  //var xLocation = loc.pageX;
  //var yLocation = loc.pageY;
  //console.log(loc);
  //logClicks(xLocation, yLocation);
//})

$("#main").append(internationalizeButton);
function inName(){
  var names = bio.name.trim().split(" ");
  var firstName = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
  var lastName = names[1].toUpperCase();
  return firstName + " " + lastName 
}

var projects = {
  "info" : [
    {
      "title": "portfolio #1",
      "date": "1999",
      "description": "Basic self-instruction program build on plain HTML and CSS",
      "image":"./images/projectThumb1.jpg"
    },  
    {
      "title":"portfolio #2",
      "date":"2002",
      "description":"Interactive web page using HTML, CSS and plain JavaScript",
      "image":"./images/projectThumb2.jpg"
    }
  ]
}

projects.display = function(projects) {
  var projectsInfo = projects.info; 
  for (item in projectsInfo) {
    $("#projects").append(HTMLprojectStart); 
    var formattedTitle = HTMLprojectTitle.replace("%data%", projectsInfo[item].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDate = HTMLprojectDates.replace("%data%", projectsInfo[item].date); 
    $(".project-entry:last").append(formattedDate);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projectsInfo[item].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImage = HTMLprojectImage.replace("%data%", projectsInfo[item].image);
    $(".project-entry:last").append(formattedImage);
  }
}

projects.display(projects);
