var dayofWeekName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Variable for the days of the week starting from Sunday indexed at [0]
var akanName;

function getDayofWeek(dateofBirth) {

  var dayofWeek;
  var dt = new Date(dateofBirth);
  var day = dt.getDay(); //Javascript inbuilt get day method that gives the day of the week
  if (day == 0) {
    dayofWeek = dayofWeekName[0];
  } else if (day == 1) {
    dayofWeek = dayofWeekName[1];
  } else if (day == 2) {
    dayofWeek = dayofWeekName[2];
  } else if (day == 3) {
    dayofWeek = dayofWeekName[3];
  } else if (day == 4) {
    dayofWeek = dayofWeekName[4];
  } else if (day == 5) {
    dayofWeek = dayofWeekName[5];
  } else if (day == 6) {
    dayofWeek = dayofWeekName[6];
  }

  return dayofWeek; // returns the day of the week
}

function getName() {
  var genderFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']; //Ghanian day names for the fenale gender
  var genderMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']; //Ghanian day names for male gender
  var dateofBirth = prompt("Enter your date of birth in the format: Month / Date / Year")
  var gender = prompt("Enter your gender, male or female")
  var dayOftheWeek = getDayofWeek(dateofBirth);
  if (gender == "male" && dayOftheWeek == dayofWeekName[0]) {
    akanName = genderMale[0];
  } else if (gender == 'male' && dayOftheWeek == dayofWeekName[1]) {
    akanName = genderMale[1];
  } else if (gender == 'male' && dayOftheWeek == dayofWeekName[2]) {
    akanName = genderMale[2];
  } else if (gender == 'male' && dayOftheWeek == dayofWeekName[3]) {
    akanName = genderMale[3];
  } else if (gender == 'male' && dayOftheWeek == dayofWeekName[4]) {
    akanName = genderMale[4];
  } else if (gender == 'male' && dayOftheWeek == dayofWeekName[5]) {
    akanName = genderMale[5];
  } else if (gender == 'male' && dayOftheWeek == dayofWeekName[6]) {
    akanName = genderMale[6];
  } else if (gender == 'female' && dayOftheWeek == dayofWeekName[0]) {
    akanName = genderFemale[0];
  } else if (gender == 'female' && dayOftheWeek == dayofWeekName[1]) {
    akanName = genderFemale[1];
  } else if (gender == 'female' && dayOftheWeek == dayofWeekName[2]) {
    akanName = genderFemale[2];
  } else if (gender == 'female' && dayOftheWeek == dayofWeekName[3]) {
    akanName = genderFemale[3];
  } else if (gender == 'female' && dayOftheWeek == dayofWeekName[4]) {
    akanName = genderFemale[4];
  } else if (gender == 'female' && dayOftheWeek == dayofWeekName[5]) {
    akanName = genderFemale[5];
  } else if (gender == 'female' && dayOftheWeek == dayofWeekName[6]) {
    akanName = genderFemale[6];
  } else {
    alert("Invalid!! Kindly Enter a correct date/ month or year of birth") //Alerts the user to enter correct details if the user enters a wrong format from the one defined in the prompt.
  }
  alert("You were born on " + dayOftheWeek + " Your Akan Name is " + akanName); // gives the day of the week and the Ghanian name, whether female or male.

}
