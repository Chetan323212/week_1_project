//  Get elements from HTML
const username = document.getElementById("username")
const password = document.getElementById("password")   // matches your HTML id
const loginBtn = document.getElementById("loginBtn")

// fault login credentials
const defaultUser = "admin"
const defaultPass = "1234"


// Login button click event
loginBtn.addEventListener("click", function(){

    const userValue = username.value
    const passValue = password.value

    // Check empty fields
    if(userValue === "" || passValue === ""){
        alert("Please fill all fields")
        return
    }

    // Check login credentials
    if(userValue === defaultUser && passValue === defaultPass){

        showAlert()

        startLuxurySparkles()

    }else{

        alert("Invalid Username or Password")

    }

})


// Sparkle animation function
function startLuxurySparkles(){

const container = document.getElementById("luxury-sparkles")

const stars = ["✦","✧","★"]

for(let i=0;i<60;i++){

const sparkle = document.createElement("div")

sparkle.classList.add("sparkle")

sparkle.innerText = stars[Math.floor(Math.random()*stars.length)]

sparkle.style.left = Math.random()*window.innerWidth + "px"
sparkle.style.top = Math.random()*window.innerHeight + "px"

sparkle.style.animationDuration = (Math.random()*3+2) + "s"

container.appendChild(sparkle)

setTimeout(()=>{
sparkle.remove()
},4000)

}

}


function showAlert(){

const alertBox = document.getElementById("custom-alert")

alertBox.classList.add("show")

setTimeout(()=>{
alertBox.classList.remove("show")
},3000)

}
