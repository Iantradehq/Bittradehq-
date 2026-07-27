// BitTradeHQ Frontend

const loginBtn = document.getElementById("loginBtn");
const connectBtn = document.getElementById("connectBtn");
const status = document.getElementById("status");

async function login() {
    status.textContent = "Connecting...";

    try {
        const response = await fetch(
            "https://bittradehq-auth-v2.ianmunene391.workers.dev/login"
        );

        const data = await response.json();

        if (data.url) {
            window.location.href = data.url;
        } else {
            status.textContent = "Login unavailable";
        }
    } catch (error) {
        console.error(error);
        status.textContent = "Connection failed";
    }
}

if (loginBtn) loginBtn.addEventListener("click", login);
if (connectBtn) connectBtn.addEventListener("click", login);

console.log("BitTradeHQ Loaded");
