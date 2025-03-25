import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC9b7BXNm8HijR-k-GZUJeCJn5gT0rKBbk",
    authDomain: "campneus-dashboard.firebaseapp.com",
    projectId: "campneus-dashboard",
    storageBucket: "campneus-dashboard.firebasestorage.app",
    messagingSenderId: "172203992376",
    appId: "1:172203992376:web:91d4ddf048071f110d8dcd",
    measurementId: "G-E6MZYD2YXG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function () {

    function login() {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                document.getElementById("loginContainer").style.display = "none";
                document.getElementById("selectionContainer").style.display = "flex";
                sendMail(email);
            })
            .catch(error => {
                document.getElementById("error").textContent = "Erro: " + error.message;
            });
    }

    function logout() {
        signOut(auth).then(() => {
            document.getElementById("loginContainer").style.display = "flex";
            document.getElementById("selectionContainer").style.display = "none";
            document.getElementById("dashboardContainer").style.display = "none";
            document.getElementById("dashboardFrame").src = "";
        });
    }

    onAuthStateChanged(auth, user => {
        if (user) {
            document.getElementById("loginContainer").style.display = "none";
            document.getElementById("selectionContainer").style.display = "flex";
        } else {
            document.getElementById("loginContainer").style.display = "flex";
            document.getElementById("selectionContainer").style.display = "none";
        }
    });

    function sendMail(username) {
        var now = new Date();
        var formattedTime = now.toLocaleString();
        var params = {
            sendername: username,
            message: `O usuário ${username} realizou login no sistema em ${formattedTime}.`,
            timestamp: formattedTime
        };

        var serviceID = "service_pgaxlwt";
        var templateID = "template_ebja9y1";

        emailjs.send(serviceID, templateID, params)
            .then(res => console.log("Email enviado com sucesso!"))
            .catch(error => console.error("Erro ao enviar o email: ", error));
    }

    function resetPassword() {
        const email = document.getElementById("resetEmail").value.trim();

        sendPasswordResetEmail(auth, email)
            .then(() => {
                document.getElementById("resetSuccess").textContent = 'Link de recuperação enviado para o seu e-mail.';
                document.getElementById("resetError").textContent = '';
            })
            .catch((error) => {
                document.getElementById("resetError").textContent = error.message;
                document.getElementById("resetSuccess").textContent = '';
            });
    }

    // Evento para mostrar a tela de recuperação de senha
    document.getElementById("forgotPasswordLink").addEventListener("click", () => {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("forgotPasswordContainer").style.display = "block";
    });

    // Evento para enviar e-mail de recuperação de senha
    document.getElementById("resetPasswordButton").addEventListener("click", resetPassword);

    // Evento para carregar o iframe com o link do Power BI
    document.getElementById("varejoButton").addEventListener("click", function () {
        const iframe = document.getElementById("dashboardFrame");
        if (iframe) {
            iframe.src = "https://app.powerbi.com/view?r=eyJrIjoiOWI2OTRkYTUtNjBiZC00YWM1LTllZTEtMmQ2MWIyNTJjMzI4IiwidCI6IjMxMjY2ODM1LTYwNDAtNGRlZS04NzA2LTkzY2M4OTYyMTYwNCJ9";
            iframe.onload = function () {
                console.log("Iframe carregado com sucesso!");
            };
            iframe.onerror = function () {
                console.error("Erro ao carregar o iframe.");
            };
        } else {
            console.error("Elemento iframe não encontrado!");
        }
        document.getElementById("dashboardContainer").style.display = "flex";
        document.getElementById("selectionContainer").style.display = "none";
    });

    // Evento para carregar outro iframe, se necessário
    document.getElementById("atacadoButton").addEventListener("click", function () {
        const iframe = document.getElementById("dashboardFrame");
        if (iframe) {
            iframe.src = "https://app.powerbi.com/view?r=eyJrIjoiZDhlY2U0YjMtZWZjOS00NjA5LWEyOGQtMzYzZWI4MzFiYmFhIiwidCI6IjMxMjY2ODM1LTYwNDAtNGRlZS04NzA2LTkzY2M4OTYyMTYwNCJ9";
            iframe.onload = function () {
                console.log("Iframe carregado com sucesso!");
            };
            iframe.onerror = function () {
                console.error("Erro ao carregar o iframe.");
            };
        } else {
            console.error("Elemento iframe não encontrado!");
        }
        document.getElementById("dashboardContainer").style.display = "flex";
        document.getElementById("selectionContainer").style.display = "none";
    });

    document.getElementById("backButton").addEventListener("click", function () {
        document.getElementById("dashboardContainer").style.display = "none";
        document.getElementById("selectionContainer").style.display = "flex";
    });

    // Limpar cache a cada 10 minutos
    setInterval(function () {
        localStorage.clear();
        sessionStorage.clear();
        console.log("Cache limpo.");
    }, 600000); // 600000ms = 10 minutos

    // Eventos de login e logout
    document.getElementById("loginButton").addEventListener("click", login);
    document.getElementById("logoutButton").addEventListener("click", logout);
});
