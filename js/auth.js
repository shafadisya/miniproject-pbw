document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-container form");
    const signupForm = document.querySelector(".signup-container form");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const role = document.getElementById("role").value;
            
            if (email === "admin@example.com" && password === "admin123" && role === "admin") {
                window.location.href = "../admin/dashboard.html";
            } else if (email === "user@example.com" && password === "user123" && role === "user") {
                window.location.href = "../user/dashboard.html";
            } else {
                alert("Email atau password salah");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Registrasi berhasil! Silakan login.");
            window.location.href = "login.html";
        });
    }
});
