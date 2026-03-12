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

let today=new Date().toLocaleDateString();

let record={
date:today,
bmi:bmi,
calories:calories
};

let records=JSON.parse(localStorage.getItem("fitnessRecords"))||[];

records.push(record);

localStorage.setItem("fitnessRecords",JSON.stringify(records));

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

let records=JSON.parse(localStorage.getItem("fitnessRecords"))||[];

let labels=records.map(r=>r.date);
let bmiData=records.map(r=>r.bmi);
let calorieData=records.map(r=>r.calories);

new Chart(document.getElementById("bmiChart"),{
type:"line",
data:{labels:labels,
datasets:[{label:"BMI",data:bmiData,borderColor:"blue"}]}
});

new Chart(document.getElementById("calorieChart"),{
type:"bar",
data:{labels:labels,
datasets:[{label:"Calories",data:calorieData,backgroundColor:"green"}]}
});

function showSection(section){

document.querySelectorAll(".section").forEach(s=>{
s.style.display="none";
});

if(section==="dashboard")
document.getElementById("dashboardSection").style.display="block";

if(section==="goals")
document.getElementById("goalsSection").style.display="block";

if(section==="workout")
document.getElementById("workoutSection").style.display="block";

if(section==="stats")
document.getElementById("statsSection").style.display="block";

if(section==="profile")
document.getElementById("profileSection").style.display="block";

}

function saveGoal(){

let weight=document.getElementById("goalWeight").value;
let type=document.getElementById("goalType").value;

localStorage.setItem("goalWeight",weight);
localStorage.setItem("goalType",type);

document.getElementById("goalDisplay").innerText=
"Goal: "+type+" | Target Weight: "+weight;

generateWorkout(type);

}

function generateWorkout(goal){

let workouts=[];

if(goal==="Weight Loss"){
workouts=["Running","Cycling","Jump Rope","HIIT"];
}

if(goal==="Muscle Gain"){
workouts=["Pushups","Bench Press","Squats","Deadlift"];
}

if(goal==="Stay Fit"){
workouts=["Yoga","Walking","Light Cardio","Stretching"];
}

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

