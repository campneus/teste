import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { auth } from "./app.js"; // Certifique-se que o nome e o caminho estão certos


<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

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
  const analytics = getAnalytics(app);
  const auth = getAuth();

  function sendMail(username) {
    var now = new Date();
    var formattedTime = now.toLocaleString();
    var params = {
        sendername: username,
        message: `O usuário ${username} realizou login no sistema em ${formattedTime}.`,
        timestamp: formattedTime
    };

    var serviceID = "service_t4s0ro9";
    var templateID = "template_jfme7fm";

    emailjs.send(serviceID, templateID, params)
    .then(res => console.log("Email enviado com sucesso!"))
    .catch(error => console.error("Erro ao enviar o email: ", error));
  }

  document.addEventListener("DOMContentLoaded", function () {
    function login() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                document.getElementById("loginContainer").style.display = "none";
                document.getElementById("selectionContainer").style.display = "flex";
                sendMail(email);
            })
            .catch((error) => {
                document.getElementById("error").textContent = "Erro: " + error.message;
            });
    }

    function logout() {
        signOut(auth).then(() => {
            document.getElementById("selectionContainer").style.display = "none";
            document.getElementById("loginContainer").style.display = "flex";
        }).catch((error) => {
            console.error("Erro ao sair: ", error);
        });
    }

    function selectDashboard(url) {
        document.getElementById("selectionContainer").style.display = "none";
        document.getElementById("dashboardContainer").style.display = "flex";
        const iframe = document.getElementById("dashboardFrame");
        iframe.src = url;
        iframe.style.display = "block";
    }

    document.getElementById("loginButton").addEventListener("click", login);
    document.getElementById("password").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            login();
        }
    });

    document.getElementById("logoutButton").addEventListener("click", logout);
    document.getElementById("varejoButton").addEventListener("click", function() {
        selectDashboard("https://app.powerbi.com/view?r=eyJrIjoiOWI2OTRkYTUtNjBiZC00YWM1LTllZTEtMmQ2MWIyNTJjMzI4IiwidCI6IjMxMjY2ODM1LTYwNDAtNGRlZS04NzA2LTkzY2M4OTYyMTYwNCJ9");
    });

    document.getElementById("atacadoButton").addEventListener("click", function() {
        selectDashboard("https://app.powerbi.com/view?r=eyJrIjoiZDhlY2U0YjMtZWZjOS00NjA5LWEyOGQtMzYzZWI4MzFiYmFhIiwidCI6IjMxMjY2ODM1LTYwNDAtNGRlZS04NzA2LTkzY2M4OTYyMTYwNCJ9");
    });

    document.getElementById("backButton").addEventListener("click", function() {
        document.getElementById("dashboardContainer").style.display = "none";
        document.getElementById("selectionContainer").style.display = "flex";
    });
  });
</script>
