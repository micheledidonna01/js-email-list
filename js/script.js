let listEmail = document.getElementById('list-email');
let api = 'https://flynn.boolean.careers/exercises/api/random/mail';
let items = '';
for(let i=0; i<10; i++){
    axios.get(api)
        .then(response => {
            const result = response.data;
            console.log(result);
            listEmail.innerHTML += `<li>Email ${i+1}: ${result.response} </li>`;
        })
        .catch(error => {
            console.error(error);
        })
    
}

