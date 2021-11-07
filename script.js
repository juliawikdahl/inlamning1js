const password = document.getElementById("password")
const confirmpassword = document.getElementById("confirm-password")

setselectorListener()

function minvalidvaluetwo(value) {
    const regexvalue =/^.{2,}$/
    if (!regexvalue.test(value)) {
        return false
    }
    else {
        return true 
    }
}

/^.{5,}$/
function minvalidvaluefive(value) {
    const regexvaluefive = /\b\d{5}\b/ 
    if (!regexvaluefive.test(value)) {
        return false
    }
    else {
        return true 
    }
}

function validemail(value) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(value)) {
        return false
    }
    else {
        return true 
    }
}

function validpassword(value) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if (!regex.test(value)) {
        return false
    }
    else {
        return true 
    }
}

function matchpassword (password, confirmpassword) {
    if (password !== confirmpassword) {
        return false
    }
    else {
        return true
    }
}

populateSelector("year", 1921, 2021)
populateSelector("month", 1, 12)
populateSelector("day", 1, 31)


function populateSelector(selectorId, to, from){
    const selector = document.getElementById(selectorId);

    for(let i = to; i <= from; ++i) {  
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        selector.appendChild(option);
    }
}

function setselectorListener(){

const agevalidation = document.querySelectorAll(".form-select")
agevalidation.forEach(element => {
    element.addEventListener("change", function(e){
    validateAge()
    })
})
}


function validateAge (){
    const todayYear = new Date().getFullYear();
    const todayMonth = new Date().getMonth() + 1;
    const todayDay = new Date().getDate();

    const year =document.getElementById("year").value
    const month =document.getElementById("month").value
    const day =document.getElementById("day").value
    if(isNaN(year) || isNaN(month) || isNaN(day) ) {
        return;
    }
    const birthDate = new Date(year, month, day);
    const today = new Date(todayYear, todayMonth, todayDay);

     var userAge = dateDiffInDays(today, birthDate) / 365.25; 
    if (userAge >= 18)
    { 
        document.getElementById('selector-error').style.display= "none"
    }
    else {
        document.getElementById('selector-error').style.display= "block"
    }
  
}

function dateDiffInDays(todaysDate, birthDate) {
    var difference = todaysDate.getTime() - birthDate.getTime();
    
    return difference / (1000 * 3600 * 24);
  }
 



var forms = document.querySelectorAll('.needs-validation')
setEventListeners()



function setEventListeners() {
    forms.forEach(element => {
        switch(element.type) {
            case "text":
                element.addEventListener("keyup", function(e) { 
                    if(!minvalidvaluetwo(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                        
                    }        
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                        
                    }
                })
                break;

            case "email": 
                element.addEventListener("keyup", function(e) {
                    if(!validemail(e.target.value))  {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                       
                    }        
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                      
                    }
                })
                break;

                case "password":
                    element.addEventListener("keyup", function(e) {
                    if(validpassword(e.target.value))
                    {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
            
                        const confirmpassword = document.getElementById("confirm-password");
                        if(matchpassword(e.target.value, confirmpassword.value)) {
                            
                            confirmpassword.classList.remove("is-invalid");
                            document.getElementById(`${confirmpassword.id}-error`).style.display = "none"
                        } else 
                        {
                            
                            confirmpassword.classList.add("is-invalid");
                            document.getElementById(`${confirmpassword.id}-error`).style.display = "block"
                        }
                    } else 
                    {
                       
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                    }
                })
                    break;
                
                case "confirm-password":
                    element.addEventListener("keyup", function(e) {
                    const confirmpassword = document.getElementById("confirm-password");
                    const password = document.getElementById("password");
            
                    if(matchpassword(password.value, confirmpassword.value)) 
                    {
                       
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                    } else
                    {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                    }
                })
                    break;

  

            case "number": 
            element.addEventListener("keyup", function(e) {
                if(!minvalidvaluefive(e.target.value)) {
                    e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                    
                }        
                else {
                    e.target.classList.remove("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                   
                }
            })
            break;
        }     
    })
}

