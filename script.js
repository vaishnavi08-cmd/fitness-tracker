function register(){

let email=document.getElementById("regEmail").value;
let password=document.getElementById("regPassword").value;

localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("Account created");

window.location="index.html";

}

function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email===localStorage.getItem("email") &&
password===localStorage.getItem("password")){

localStorage.setItem("loggedUser",email);

window.location="dashboard.html";

}else{

alert("Invalid login");

}

}

function logout(){

localStorage.removeItem("loggedUser");

window.location="index.html";

}

function loadDashboard(){

let user=localStorage.getItem("loggedUser");

document.getElementById("welcome").innerText="Welcome "+user.split("@")[0];

loadCharts();

loadSavedData();

}

function saveFitness(){

let height=document.getElementById("height").value;
let weight=document.getElementById("weight").value;

let breakfast=Number(document.getElementById("breakfast").value);
let lunch=Number(document.getElementById("lunch").value);
let dinner=Number(document.getElementById("dinner").value);
let snacks=Number(document.getElementById("snacks").value);

let calories=breakfast+lunch+dinner+snacks;

let bmi=weight/((height/100)*(height/100));

document.getElementById("caloriesToday").innerText=calories;
document.getElementById("bmiValue").innerText=bmi.toFixed(2);

localStorage.setItem("calories",calories);
localStorage.setItem("bmi",bmi);

}

function loadSavedData(){

let calories=localStorage.getItem("calories");
let bmi=localStorage.getItem("bmi");

if(calories){
document.getElementById("caloriesToday").innerText=calories;
}

if(bmi){
document.getElementById("bmiValue").innerText=Number(bmi).toFixed(2);
}

}

function loadCharts(){

new Chart(document.getElementById("bmiChart"),{

type:"line",

data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
label:"BMI Progress",
data:[22,22.5,23,23.1,22.9,23.2,23],
borderColor:"blue"
}]
}

});

new Chart(document.getElementById("calorieChart"),{

type:"bar",

data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
label:"Calories",
data:[200,300,250,400,350,450,500],
backgroundColor:"green"
}]
}

});

}