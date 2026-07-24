const APP_ID = "33VbNHVpYmxTsHQYWYy4j";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    const redirect = window.location.origin + window.location.pathname;

    const loginUrl =
        `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&l=EN&redirect_uri=${encodeURIComponent(redirect)}`;

    window.location.href = loginUrl;

});
