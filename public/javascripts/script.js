//fetches from web server for chrome and stores in var
fetch('/db')
//converts from JSON string to JSON object
.then(response => response.json()).then(products => {

//puts results into var portfolio
var portfolio = products;

//imports name
var z = document.querySelector("#name")
z.innerHTML = portfolio.portfolio.header.name;

//imports contact information
    //sets empty var for array to be stored in
    var contact = [];
    //maps through contact info
    var contactInfo = portfolio.portfolio.header.contact_info.map(function(ex){
    //stores contact info in var html
    var html =  ex["address"] + " - " + ex["phone"] + "<br/>" + "<a href=mailto:bill.j.carrigan@gmail.com>" + ex["email"] + "</a> - <a href = https://www.linkedin.com/in/carriganwilliam>" + ex["linked_in"] + "</a>";
    //pushes var html into var contact, which is global scope
    contact.push(html);
    });
    //imports contact into HTML and joins with dashes between
    var y = document.querySelector("#contact")
    y.innerHTML = contact;

//imports objective title
var a = document.querySelector("#objectiveTitle")
a.innerHTML = portfolio.portfolio.objective.section_title;

//imports objective data
var b = document.querySelector("#objectiveData")
b.innerHTML = portfolio.portfolio.objective.section_data;

//imports experience account manager title
var c = document.querySelector("#experienceTitle")
c.innerHTML = portfolio.portfolio.experience.section_title;

//imports experience title
var d = document.querySelector("#amExperienceTitle")
d.innerHTML = portfolio.portfolio.experience.section_data[0].title;

//imports account manager skills
    //sets empty var for array to be stored in
    var amExperience = [];
    //maps through skills
    var arrExperience = portfolio.portfolio.experience.section_data[0].skills.map(function(ex){
    //stores skills in var html
    var html =  ex["data"];
    //pushes var html into var amExperience, which is global scope
    amExperience.push(html);
    });
    //imports amExperience into HTML and joins with dashes between
    var e = document.querySelector("#amExperience")
    e.innerHTML = amExperience.join(" - ");

//imports experience title
var f = document.querySelector("#rdExperienceTitle")
f.innerHTML = portfolio.portfolio.experience.section_data[1].title;

//imports research director skills
    //sets empty var for array to be stored in
    var rdExperience = [];
    //maps through skills
    var arrExperience = portfolio.portfolio.experience.section_data[1].skills.map(function(ex){
    //stores skills in var html
    var html =  ex["data"];
    //pushes var html into var rdExperience, which is global scope
    rdExperience.push(html);
    });
    //imports rdExperience into HTML and joins with dashes between
    var g = document.querySelector("#rdExperience")
    g.innerHTML = rdExperience.join(" - ");

//imports experience title
var h = document.querySelector("#raExperienceTitle")
h.innerHTML = portfolio.portfolio.experience.section_data[2].title;

//imports research associate skills
    //sets empty var for array to be stored in
    var raExperience = [];
    //maps through skills
    var arrExperience = portfolio.portfolio.experience.section_data[2].skills.map(function(ex){
    //stores skills in var html
    var html =  ex["data"];
    //pushes var html into var rdExperience, which is global scope
    raExperience.push(html);
    });
    //imports rdExperience into HTML and joins with dashes between
    var i = document.querySelector("#raExperience")
    i.innerHTML = rdExperience.join(" - ");

//imports education title
var i = document.querySelector("#educationTitle")
i.innerHTML = portfolio.portfolio.education.section_title;

//imports acadgild title
var j = document.querySelector("#agEducationTitle")
j.innerHTML = portfolio.portfolio.education.section_data[0].title;

//imports acadgild achivements
    //sets empty var for array to be stored in
    var agAchievements = [];
    //maps through achievements
    var arrAchievements = portfolio.portfolio.education.section_data[0].achievements.map(function(ex){
    //stores skills in var html
    var html =  "<span style='font-weight:bold'>" + ex["title"] + "</span>" + ex["data"] + "<br/>";
    //pushes var html into var agAchievements, which is global scope
    agAchievements.push(html);
    });
    //imports agAchievements into HTML and joins with dashes between
    var k = document.querySelector("#agAchievements")
    k.innerHTML = agAchievements.join(" ");

//imports monmouth title
var l = document.querySelector("#muEducationTitle")
l.innerHTML = portfolio.portfolio.education.section_data[1].title;

//imports monmouth achivements
    //sets empty var for array to be stored in
    var muAchievements = [];
    //maps through achievements
    var arrAchievements = portfolio.portfolio.education.section_data[1].achievements.map(function(ex){
    //stores skills in var html
    var html =  "<span style='font-weight:bold'>" + ex["title"] + "</span>" + ex["data"] + "<br/>";
    //pushes var html into var muAchievements, which is global scope
    muAchievements.push(html);
    });
    //imports muAchievements into HTML and joins with dashes between
    var m = document.querySelector("#muAchievements")
    m.innerHTML = muAchievements.join(" ");

//imports skills title
var n = document.querySelector("#skillsTitle")
n.innerHTML = portfolio.portfolio.skills.section_title;

//imports research associate skills
    //sets empty var for array to be stored in
    var skills = [];
    //maps through skills
    var arrExperience = portfolio.portfolio.skills.section_data.map(function(ex){
    //stores skills in var html
    var html =  ex["data"];
    //pushes var html into var rdExperience, which is global scope
    skills.push(html);
    });
    //imports rdExperience into HTML and joins with dashes between
    var o = document.querySelector("#skills")
    o.innerHTML = skills.join(" - ");

})
