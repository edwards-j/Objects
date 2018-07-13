let district;

let platformStatements = {};

let donationFormURL;

let calendar = [];

let volunteerInfo = {};

let bio;

let images = {};

let missionStatement;

let registerURL;

/******************
Start of Functions
******************/

//Changes district
function changeDistrict(newDistrict) {
    district = newDistrict;
    return district;
}
console.log(changeDistrict("Alabama"));


//Changes platform statements
function changeStatements(taxes, jobs, infrastructure, healthCare, crimeAndEnforcement) {
    platformStatements = {
        taxes: taxes,
        jobs: jobs,
        infrastructure: infrastructure,
        healthCare: healthCare,
        crimeAndEnforcement: crimeAndEnforcement
    }
    return platformStatements;
};
console.log("The new statements are", changeStatements("more taxes plz", "I hate jobs", "Destroy all the roads", "get rid of healthcare", "Let 'em walk"));

//Changes donation form URL
function changeDonationURL(newURL) {
    donationFormURL = newURL;
    return donationFormURL;
}
console.log(changeDonationURL("https://www.givemeallofyourmoney.com"))

//Updates calender
function updateCalendar(event1, event2, event3) {
    calendar.push(event1, event2, event3);
    return calendar;
}
console.log(updateCalendar("Watch fireworks", "party", "take pics"));


//Changes volunteer info
function newVolunteer(name, address, email, phoneNumber, availability, activities) {
    volunteerInfo = {
        name: name,
        address: address,
        email: email,
        phoneNumber: phoneNumber,
        availability: availability,
        activities: activities,
    }
    return volunteerInfo;
};
console.log(newVolunteer("Michael Scott", "Scranton, PA", "michaelscott@dundermifflin.com", "911", "never", "being everyone's friend"));

//Update bio
newBio = (addBio) => {
    bio = addBio;
    return bio;
}
console.log(newBio("I've never been out of the US"));

//Adds new images
function newImages(pic1, pic2, pic3) {
    images = {
        pic1: pic1,
        pic2: pic2,
        pic3: pic3
    }
    return images;
}
console.log(newImages("Visiting pawnee, IN", "Eating at JJ's Diner", "Hating on Eagleton"))

//Changes mission statement
newMissionStatement = (newWords) => {
    missionStatement = newWords;
    return missionStatement;
}
newMissionStatement("Just have fun");
console.log(missionStatement);

//Updates URL to register to vote 
newRegisterURL = (newURL) => {
    registerURL = newURL
    return registerURL;
}
console.log(newRegisterURL("signmeup.com"));


/******************
PUT INFO ON PAGE
******************/

let newArticle = document.createElement("ARTICLE"); //creates the new article element

newArticle.setAttribute("id", district); //sets the ID of the article to the value of the district variable

document.body.appendChild(newArticle); //Appends the article to the body of the HTML



for (let property in platformStatements) {
    let content = ""; //sets an empty string as a variable
    content = platformStatements[property]; //changes the value of the empty string to the value of the key in platformStatements
    newArticle.innerHTML += content + ". "; //
}


