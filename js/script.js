let listEmail = document.getElementById('list-email');
let btnChange = document.getElementById('btn-change');
btnChange.addEventListener('click', changeEmail);

let api = 'https://flynn.boolean.careers/exercises/api/random/mail';
let items = '';

generatorEmail();

function generatorEmail(){
    for (let i = 0; i < 10; i++) {
        axios.get(api)
            .then(response => {
                const result = response.data;
                console.log(result);
                if (i === 0) {
                listEmail.innerHTML += `<li class="list-group-item active">${result.response} </li>`;
                }else{
                listEmail.innerHTML += `<li class="list-group-item">${result.response} </li>`;
                }
            })
            .catch(error => {
                console.error(error);
            })
    
    }
}

function changeEmail(){
    listEmail.innerHTML = '';
    generatorEmail();
}
