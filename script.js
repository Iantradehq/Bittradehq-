const APP_ID = "33VbNHVpYmxTsHQYWYy4j";

const loginBtn = document.getElementById("loginBtn");

const params = new URLSearchParams(window.location.search);
const token = params.get("token");

if (!token) {

    loginBtn.addEventListener("click", () => {

        const redirect = window.location.origin + window.location.pathname;

        window.location.href =
            `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&l=EN&redirect_uri=${encodeURIComponent(redirect)}`;

    });

} else {

    document.body.innerHTML = `
        <div style="color:white;text-align:center;margin-top:80px;font-family:sans-serif">
            <h1>✅ Login Successful</h1>
            <p>Welcome to BitTradeHQ</p>
            <p>Token received successfully.</p>
        </div>
    `;

}
