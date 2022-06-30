let loginLi = document.getElementById('login-li');
let user;
let userLStorage = localStorage.getItem('user');
let loginBtn = document.createElement('a');
loginBtn.classList.add('btn');
loginBtn.href = '#';

loginBtn.addEventListener('click', openLogin);

if (userLStorage) {
    user = userLStorage;
    loginBtn.classList.add('btn-color-30-alt');
    loginBtn.innerHTML = `${user}`;
    loginLi.append(loginBtn);
}

else {
    loginBtn.classList.add('btn-color-10');
    loginBtn.innerHTML = `Ingresar`;
    loginLi.append(loginBtn);
}

function openLogin() {
    if (userLStorage) {
        let salir = confirm("¿Desea cerrar sesión?");
        if (salir) {
            localStorage.clear();
            document.location.reload()
        }
    }

    else {
        let userinput = prompt('Ingrese con su nombre de usuario:');
        let str2 = userinput.charAt(0).toUpperCase() + userinput.slice(1);
        userinput = str2;
        localStorage.setItem("user", userinput);
        document.location.reload()
    }
}