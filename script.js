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

}

function showSection(section){

document.querySelectorAll(".section").forEach(s=>{
s.style.display="none";
});

document.getElementById(section+"Section").style.display="block";

}

function saveGoal(){

let weight=document.getElementById("goalWeight").value;
let type=document.getElementById("goalType").value;

localStorage.setItem("goalWeight",weight);
localStorage.setItem("goalType",type);

document.getElementById("goalDisplay").innerText=
type+" | Target: "+weight;

generateWorkout(type);

}

function generateWorkout(goal){

let workouts=[];

if(goal==="Weight Loss")
workouts=["Running","Cycling","Jump Rope"];

if(goal==="Muscle Gain")
workouts=["Pushups","Bench Press","Squats"];

if(goal==="Stay Fit")
workouts=["Yoga","Walking","Stretching"];

let list=document.getElementById("workoutList");

list.innerHTML="";

workouts.forEach(w=>{
let li=document.createElement("li");
li.innerText=w;
list.appendChild(li);
});

}

function saveProfile(){

let name=document.getElementById("profileName").value;
let age=document.getElementById("profileAge").value;

localStorage.setItem("profileName",name);
localStorage.setItem("profileAge",age);

document.getElementById("profileDisplay").innerText=
name+" | Age "+age;

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

}