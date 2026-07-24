const APP_ID = "33VbNHVpYmxTsHQYWYy4j";

const loginBtn = document.getElementById("loginBtn");
const account = document.getElementById("account");
const balance = document.getElementById("balance");
const market = document.getElementById("market");

loginBtn.addEventListener("click", () => {
    const redirect = encodeURIComponent(window.location.href);

    window.location.href =
        `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&l=EN&redirect_uri=${redirect}`;
});

const params = new URLSearchParams(window.location.search);

if (params.get("token1")) {

    account.innerHTML = "Connected to Deriv ✔";
    balance.innerHTML = "Loading...";
    market.innerHTML = "Connected";

} else {

    account.innerHTML = "Not connected";
    balance.innerHTML = "--";
    market.innerHTML = "Waiting for connection...";

}
