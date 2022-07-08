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
        Swal.fire({
            position: 'top-end',
            html: '<span>¿Desea cerrar sesión?</span>',
            footer: 'Su carrito se vaciará al cerrar sesión',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Obvio Pa',
            cancelButtonText: 'No',
            confirmButtonColor: '#e29f29',
            cancelButtonColor: '#0e1213',
            backdrop: false,
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                document.location.reload()
            }
        })
    }

    else {

        (async () => {
            const { value: userinput } = await Swal.fire({
                position: 'top-end',
                html: '<span>Ingrese con su numbre de usuario</span>',
                input: 'text',
                inputPlaceholder: 'Nombre',
                inputAttributes: {
                    autocapitalize: 'on'
                },
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: 'Ingresar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#e29f29',
                cancelButtonColor: '#0e1213',
                backdrop: false,
                allowOutsideClick: false
            })
            if (userinput) {
                let str2 = userinput.charAt(0).toUpperCase() + userinput.slice(1).toLowerCase();
                localStorage.setItem("user", str2);
                document.location.reload()
            }
        })()



    }
}