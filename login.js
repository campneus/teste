import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9b7BXNm8HijR-k-GZUJeCJn5gT0rKBbk",
  authDomain: "campneus-dashboard.firebaseapp.com",
  projectId: "campneus-dashboard",
  storageBucket: "campneus-dashboard.appspot.com",
  messagingSenderId: "172203992376",
  appId: "1:172203992376:web:91d4ddf048071f110d8dcd",
  measurementId: "G-E6MZYD2YXG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const usuariosSemRestricao = [
  "edgard.freitas@pirelli.com",
  "pedro.sales@pirelli.com",
  "rodrigo.silveira@pirelli.com",
  "mayara.ferreira@pirelli.com",
  "alex.cancian@campneus.com.br"  
];

document.getElementById("loginButton").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const now = new Date();
  const hour = now.getHours();
  const isUserAllowedAnytime = usuariosSemRestricao.includes(email);

  if (!isUserAllowedAnytime && (hour < 7 || hour >= 19)) {
    document.getElementById("error").textContent = "O acesso só é permitido das 07:00 às 19:00.";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("loginContainer").style.display = "none";
      document.getElementById("selectionContainer").style.display = "block";
      enviarEmailJS(email); // envia email
    })
    .catch((error) => {
      document.getElementById("error").textContent = "Email ou senha inválidos!";
      console.error(error);
    });
});

document.getElementById("forgotPasswordButton").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();

  if (!email) {
    document.getElementById("error").textContent = "Informe o email para recuperar a senha.";
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("E-mail de recuperação enviado!");
    })
    .catch((error) => {
      console.error(error);
      alert("Erro ao enviar e-mail de recuperação.");
    });
});
