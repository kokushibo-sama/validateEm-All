<<<<<<< HEAD
console.log("Loaded");

let result = {
  tag: "",
  free: false,
  role: false,
  user: "akshaykumar",
  email: "akshaykumar@codewithharry.com",
  score: 0.64,
  state: "undeliverable",
  domain: "codewithharry.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};
resultTable = document.getElementById("resultTable");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  //   console.log("Clicked!");
  resultTable.innerHTML = `<img width="123" src="img/loading.svg" alt="loading-svg">`;
  key = "ema_live_ysnMWsDS7NBFZKBuTD3ngbpjr8lttkZ9ZmPchM5X";
  let email = document.getElementById("username").value;
  url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str =
        str +
        `
        <tr>
        <td>${key}</td>
        <td>${result[key]}</td>
        </tr>
        `;
    }
  }
  console.log(str);
  resultTable.innerHTML = str;

  // console.log(str)
});
=======
console.log("Loaded");

let result = {
  tag: "",
  free: false,
  role: false,
  user: "akshaykumar",
  email: "akshaykumar@codewithharry.com",
  score: 0.64,
  state: "undeliverable",
  domain: "codewithharry.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};
resultTable = document.getElementById("resultTable");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  //   console.log("Clicked!");
  resultTable.innerHTML = `<img width="123" src="img/loading.svg" alt="loading-svg">`;
  key = "ema_live_ysnMWsDS7NBFZKBuTD3ngbpjr8lttkZ9ZmPchM5X";
  let email = document.getElementById("username").value;
  url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str =
        str +
        `
        <tr>
        <td>${key}</td>
        <td>${result[key]}</td>
        </tr>
        `;
    }
  }
  console.log(str);
  resultTable.innerHTML = str;

  // console.log(str)
});
>>>>>>> add5897f805dee104a4b4b85765b6a9f1b09547a
