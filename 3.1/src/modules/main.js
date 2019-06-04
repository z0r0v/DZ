let name;
let lastName;
let lastMiddle;
let age;
let sexMan;
let ageDays;
let after5Years;
let gender;
let retired;


function onclickQuestioning() {
    name = prompt("Enter your name");
    lastName = prompt("Enter last name");
    lastMiddle = prompt("Enter middle name");
    age = prompt("How old are you ?");
    console.log(typeof age);
    sexMan = confirm("Are you male?");
    if (!sexMan) {
        gender = "Female";
    } else {
        gender = "Male";
    }
    if (sexMan) {
        if (age < 61.5) {
            retired = "No";
        } else {
            retired = "Yes";
        }
    } else {
        if (age < 56.5) {
            retired = "No";
        } else {
            retired = "Yes";
        }
    }
    after5Years = parseFloat(age) + 5;
    ageDays = parseInt(age) * 365;
    alert(`Your full name: ${name} ${lastName} ${lastMiddle}\nYour age in: ${age} years\nYour age in days: ${ageDays} days\nIn 5 years you will be: ${after5Years} years\nYour gender: ${gender}\nYou are retired: ${retired}
    `);
}
let startOnclickQuestioning = document.querySelector('.onclickQuestioning');
startOnclickQuestioning.addEventListener('click', onclickQuestioning);