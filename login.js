<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC9b7BXNm8HijR-k-GZUJeCJn5gT0rKBbk",
    authDomain: "campneus-dashboard.firebaseapp.com",
    projectId: "campneus-dashboard",
    storageBucket: "campneus-dashboard.firebasestorage.app",
    messagingSenderId: "172203992376",
    appId: "1:172203992376:web:91d4ddf048071f110d8dcd",
    measurementId: "G-E6MZYD2YXG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  document.addEventListener("DOMContentLoaded", function () {
    function login() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login successful
                const user = userCredential.user;
                document.getElementById("loginContainer").style.display = "none";
                document.getElementById("selectionContainer").style.display = "flex";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                document.getElementById("error").textContent = "Erro: " + errorMessage;
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

    // Removing the commented out buttons for now
    // document.getElementById("industrialCarButton").addEventListener("click", function() {
    //     selectDashboard("");
    // });

    // document.getElementById("industrialMotoButton").addEventListener("click", function() {
    //     selectDashboard("");
    // });

    document.getElementById("backButton").addEventListener("click", function() {
        document.getElementById("dashboardContainer").style.display = "none";
        document.getElementById("selectionContainer").style.display = "flex";
    });
  });
</script>
