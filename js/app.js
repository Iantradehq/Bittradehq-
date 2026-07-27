const loginBtn = document.getElementById("loginBtn");
const accountName = document.getElementById("accountName");
const balance = document.getElementById("balance");
const marketStatus = document.getElementById("marketStatus");

marketStatus.textContent = "Online";

loginBtn.addEventListener("click", () => {
    alert("Deriv login will be connected in the next step.");
});

function updateDashboard(name, amount) {
    accountName.textContent = name;
    balance.textContent = amount;
}
