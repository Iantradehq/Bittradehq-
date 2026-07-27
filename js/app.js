// BitTradeHQ App

const APP_ID = "33VbNHVpYmxTsHQYWYy4j";

const loginBtn = document.getElementById("loginBtn");
const connectBtn = document.getElementById("connectBtn");
const status = document.getElementById("status");

function connectDeriv() {

    status.textContent = "Connecting...";

    const redirect =
        "https://oauth.deriv.com/oauth2/authorize?app_id=" +
        APP_ID;

    window.location.href = redirect;
}

if (loginBtn) {
    loginBtn.addEventListener("click", connectDeriv);
}

if (connectBtn) {
    connectBtn.addEventListener("click", connectDeriv);
}

console.log("BitTradeHQ Loaded");
