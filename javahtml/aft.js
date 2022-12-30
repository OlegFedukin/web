const signUp = e => {
    let fname = document.getElementById('name').value,
        lname = document.getElementById('fam').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pas').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Аккаунт создан.\n\n  войдите по ссылке ниже.");
    }
    else{
        alert("Такой аккаунт уже существует\n Вы уже залогинены");
    }
    e.preventDefault(); 
}

function signIn(e) {
    let email = document.getElementById('email').value, pas = document.getElementById('pas').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pas);
    if(!exist){
        alert("Некорректно введены данные");
    }
    else{
        window.location = "site.html";
    }
    e.preventDefault();
}