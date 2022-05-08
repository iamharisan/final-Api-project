const dropdownbtn = document.querySelector(".drop_down_btn");
const droplist = document.querySelector(".drop");
const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".btn");
const users_list = document.querySelector(".users");








window.addEventListener("load", function () {
  getUsers();
});

const getUsers = () => {
  const details = document.querySelector(".profile");
  console.log(localStorage.getItem("token"));
  fetch("http://3.16.194.5:8000/api/v1/admin/users?page=1&limit=10", {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let user = data;
      let employees = user.data.users;

      users(employees);

      let html = `<p class="ip name">${employees.name.first}</p>
                <p class="ip email">${employees.email}</p>`;
      details.insertAdjacentHTML("beforeend", html);
    });
};

const users = (employees) => {
  const emp = employees;
  
  emp.forEach(function (t) {
    console.log(t);

    let html = ` <div class="user">
    <div class="user">
          <div class="image_1">
            <img class="person" src="../assest/user1.png" width="100px" height="100px">
          </div>
          
          <div class="social_media">
            <img class="social" src="../assest/kindpng_6894.png" width="30px" height="30px">
            <img class="social" src="../assest/3-2-linkedin-download-png.png" width="30px" height="30px">
            <img class="social" src="../assest/logo-ig-png-32464.png"  width="30px" height="30px">
          </div>
        <h3>${t.name.first}</h3>
        <h4>${t.phone.national_number}</h4>
        <h3>${t.email}</h3>
      
      </div>`;

      users_list.insertAdjacentHTML("afterbegin", html);
  });

  // for (emp of employees)
  // {
  //     console.log(emp)
  // }
};



dropdownbtn.addEventListener("click", function () {
  const remove = droplist.classList.toggle("dropdownOn");
  dropdownbtn.classList.toggle("rotate");
  console.log(remove);
});

btn.addEventListener("click", function (e) {
  console.log(e);
  sidebar.classList.toggle("activate");
});
