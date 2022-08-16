const username=document.getElementById('username');
const email=document.getElementById('email');
const phone = document.getElementById('phone');
const password =document.getElementById('password');
const button =document.getElementById('button');


// -----------------name section------------
username.addEventListener("blur",()=>{
     
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let value = username.value;
    if(regx.test(value)){
        // console.log("matched");
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');


    }else{
        // console.log("not matched")
        username.classList.add('is-invalid');
        username.classList.remove('is-valid');

    }
})

// --------------------email section -----------------
email.addEventListener("blur",()=>{
     
    let regx = /^([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9\_\-\.]+)\.([a-zA-Z]){2,10}$/;
    let value = email.value;
    if(regx.test(value)){
        // console.log("matched");
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');


    }else{
        // console.log("not matched")
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');

    }
})

// --------------------phone section -----------------
phone.addEventListener("blur",()=>{
     
    let regx = /^([0-9]){10}$/;
    let value = phone.value;
    if(regx.test(value)){
        // console.log("matched");
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');


    }else{
        // console.log("not matched")
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');

    }
})

// --------------------password section -----------------
password.addEventListener("blur",()=>{
     
     let regx=/[a-zA-Z0-9!@#$%^&*()_+-]{8,20}/g;
     let Ucase=/(?=.*[A-Z])/gm;
    let Lcase= /(?=.*[a-z])/gm;
    let numb =/(?=.*[0-9])/gm;
    let special = /(?=.*[!@#$%^&*()_+-])/gm;
    let value = password.value;
    // ----------------------8 character condition------------------------
    if(regx.test(value)){
        // console.log("matched");
        document.getElementById('character').style.color="green";
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }else{
        // console.log("not matched")
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        document.getElementById('character').style.color="red";

        // ------------------------upper case condition----------------------------
    }
    if(Ucase.test(value)){
        // console.log("matched");
        document.getElementById('upper').style.color="green";
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }else{
        // console.log("not matched")
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        document.getElementById('upper').style.color="red";

    }
    // ----------------------lower case condition -----------------------------
    if(Lcase.test(value)){
        // console.log("matched");
        document.getElementById('lower').style.color="green";
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }else{
        // console.log("not matched")
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        document.getElementById('lower').style.color="red";

    }
    // ----------------------------atleast one number condition --------------------
    if(numb.test(value)){
        // console.log("matched");
        document.getElementById('number').style.color="green";
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }else{
        // console.log("not matched")
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        document.getElementById('number').style.color="red";

    }

    // -------------------------special  character condition ---------------------
    if(special.test(value)){
        // console.log("matched");
        document.getElementById('special').style.color="green";
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }else{
        // console.log("not matched")
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        document.getElementById('special').style.color="red";

    }
})
