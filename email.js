document.addEventListener("DOMContentLoaded", function () {
  function verificarEmailJS() {
    if (typeof emailjs === "undefined") {
      console.log("Aguardando carregamento do EmailJS...");
      setTimeout(verificarEmailJS, 500);
    } else {
      console.log("EmailJS carregado e pronto!");
    }
  }

  (function () {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.onload = function () {
      console.log("EmailJS carregado com sucesso!");
      if (typeof emailjs !== "undefined") {
        emailjs.init("bnv9mOuJF0AUUuTV4"); // USER ID
      }
    };
    document.head.appendChild(script);
  })();

  verificarEmailJS();
});

function enviarEmailJS(userEmail) {
  const params = {
    user_email: userEmail,
    message: "Usuário acessou o painel com sucesso."
  };

  const serviceID = "service_pgaxlwt";
  const templateID = "template_ebja9y1";

  emailjs.send(serviceID, templateID, params)
    .then(() => console.log("Email enviado com sucesso!"))
    .catch((error) => console.error("Erro ao enviar o email: ", error));
}
