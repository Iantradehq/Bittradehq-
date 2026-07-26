const WORKER_URL = "https://bittradehq-auth.ianmunene391.workers.dev";

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        window.location.href = `${WORKER_URL}/login`;
    });
}
