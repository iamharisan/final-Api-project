

const form = {
    userid: document.querySelector(".type_id"),
    password: document.querySelector(".type_password"),
    submit: document.querySelector(".signin"),

}

form.submit.addEventListener('click', function () {

    console.log(form.userid.value)
    console.log(form.password.value)

    fetch('http://3.16.194.5:8000/api/v1/auth/admin/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            username: form.userid.value,
            password: form.password.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                let employee = data;
                let jwt = employee.data.token
                localStorage.setItem("token", jwt)
                
                let base = window.location.href;
                
                window.location.replace(base +'pages/dashboard.html')
            }
            else
            {
                alert("Wrong Credentials")
            }
        })

        .catch((err) => console.log(err));
})













// function getapi() {
//   fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/photos', {
// 	...options, 
// 	headers: {
//     	'Authorization': 'Basic ' + btoa(`${}:${password}`)
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json))
// }

// getapi()



// let base64 = require('base-64');

// let url = 'http://eu.httpbin.org/basic-auth/user/passwd';
// let username = 'user';
// let password = 'passwd';

// let headers = new Headers();


// headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

// fetch(url, {method:'GET',
//         headers: headers,
//         //credentials: 'user:passwd'
//        })
// .then(response => response.json())
// .then(json => console.log(json));
// //.done();

// function parseJSON(response) {
// return response.json()
// }


// fetch('http://3.16.194.5:8000/api/v1/auth/admin/signin', {method:'GET', 
// headers: {'Authorization': 'Basic ' + btoa('login:password')}})
// .then(response => response.json())
// .then(json => console.log(json));

// function fetchAuth()
// {
//     var url = 'http://3.16.194.5:8000/api/v1/auth/admin/signin'
//     Credential = btoa("")

//     fetch(url , {
//         headers:{
//             "Authorization": `Basic ${}`
//         }
//     })

//     .then((response) => response.json())
//     .then(data => console.log(data))
// }





// const url = 'http://3.16.194.5:8000/api/v1/auth/admin/signin';
// const options = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json', 
//     Authorization: 'Basic ' + btoa("admin:Welcome@123") 
//   }
// };

// fetch(url, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


//   fetch ('http://3.16.194.5:8000/api/v1/auth/admin/signin', {
//     method: 'POST',
//     body: JSON.stringify({
//         username: "admin",
//       password: "Welcome@123"
//    }),
// })
//  .then((response) => response.json())
//  .then((result) => console.log(result))