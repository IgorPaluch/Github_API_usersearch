import "./style.scss";
import { app } from "./app";

app();

const words = ["computer it", "hacking", "working it", "programming"];

let customBackground = words[Math.floor(Math.random() * words.length)];

// function valueInputFunction(valueOfInput) {
//   console.log(valueOfInput)
//   return valueOfInput.split("").join("");
// }

let github = {
  fetchUser: function (userName) {
    userName.split("").join("");
    console.log(userName);
    fetch("https://api.github.com/users/" + userName)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          alert("Uzytkownik nie zostal znaleziony, sprobuj ponownie!");
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => this.displayUser(data));
  },
  displayUser: function (data) {
    // const { company } = data.company;
    // const { email } = data.email;

    // document.querySelector(".city").innerText = "Profile" + login;
    document.querySelector(".profile").innerHTML =
      "Profile name: " + data.login;
    document.querySelector(".id").innerHTML = "id: " + data.id;
    document.querySelector(".avatar").src = data.avatar_url;
    document.querySelector(".profile-type").innerHTML =
      "Profile type: " + data.type;
    document.querySelector(".full-name").innerHTML = "Fullname: " + data.name;
    document.querySelector(".email").innerHTML = "Email: " + data.email;
    document.querySelector(".followers").innerHTML =
      "Followers: " + data.followers;
    document.querySelector(".createdAT").innerHTML =
      "Profile created: " + data.created_at;
    document.querySelector(".repositories").innerHTML =
      "Repositories: " + data.public_repos;
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + customBackground + "')";
    console.log(customBackground);
    console.log(data);
  },
  search: function () {
    this.fetchUser(document.querySelector(".search-bar").value);
  },
};

document
  .querySelector(".search button")
  ?.addEventListener("click", function () {
    github.search();
  });

document
  .querySelector(".search-bar")
  ?.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      github.search();
    }
  });

github.fetchUser("Igorpaluch");
