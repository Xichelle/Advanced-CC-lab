// console.log("hello")

// Element.addEventListener(event, function(){

// })

let btn = document.querySelector("button");
console.log(btn)

btn.addEventListener("click", function(){
    let x = Math.floor(Math.random()*255);
    let y = Math.floor(Math.random()*255);
    let z = Math.floor(Math.random()*255);

    let bgColor = "rgb("+ x +", "+ y +" ,"+ z +")"

    console.log(bgColor);

    document.body.style.background=bgColor
    console. log(x);
    console. log(y);
    console. log(z);


    //form
    let form1 = document.getElementById("form1");
    let h2s = document.getElementsByTagName("h2");

    console.log(form1);
    console.log(h2s);

    let i=0;
    for(i=0; i<form1.length; i++){
        h2s[i].innerHTML = form1.elements[i].value;
    }

    // h2s[0].innerHTML = form1.elements[0].value;
    // h2s[1].innerHTML = form1.elements[1].value;
})