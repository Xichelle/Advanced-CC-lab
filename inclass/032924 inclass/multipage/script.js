//------- QUESTION 1 -----------

let q1 = document.getElementById("q1_submit");

if (q1 != undefined){
q1.addEventListener("click", () => {
    let q1_answer = document.getElementById("q1"); 
    localStorage.setItem("q1", q1_answer.elements[0].value)
})
}
//------- QUESTION 2 -----------

let q2 = document.getElementById("q2"); 
if(q2 != undefined){
q2.addEventListener("change", () => {
    let q2_radios = document.getElementsByName("q2");
    for(let i = 0; i < q2_radios.length; i++){
        if(q2_radios[i].checked){
            localStorage.setItem("q2",q2_radios[i].value)     
        }
    }
})
}

//-------QUESTION 3---------
let q3 = document.getElementById("q3_submit"); 
if(q3 != undefined){
    q3.addEventListener("click", () => {
        let q3_answer = document.getElementById("q3").value; 
        localStorage.setItem("q3",q3_answer)
    })
}

//------- QUESTION 4 -----------

let q4 = document.getElementById("q4_submit"); 
if(q4 != undefined){
    console.log(document.getElementById("q4").value)
    q4.addEventListener("click", () => {
        let q4_answer = document.getElementById("q4").value; 
        localStorage.setItem("q4",q4_answer)
    })
}


//------- ANSWER -----------

let results = document.getElementById("results");
if (results != undefined){
    let q1 = localStorage.getItem("q1")
    let q2 = localStorage.getItem("q2")
    let q3 = localStorage.getItem("q3")
    let q4 = parseInt(localStorage.getItem("q4"))

    console.log(q1)
    console.log(q2)
    console.log(q3)
    console.log(q4)

    let points = 0; 

    if (q1 == "A"){
        points += 5; 
    } else {
        points += 15; 
    }

    if (q2 == "C"){
        points += 5; 
    } else {
        points += 15; 
    }
    if (q3 == "F"){
        points += 5;  
    } else {
        points += 15; 
    }
     
    console.log(points)

    let results = document.getElementById("results");
    results.innerHTML = `Results: ${points}`; 
    
}



let reset = document.getElementById("reset");
if (reset != undefined){
reset.addEventListener("click", () => {
    localStorage.clear()
})
}