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
        emailjs.init("PD__gOpVxp8iqfbYz"); // USER ID
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

  const serviceID = "service_d1atkuj";
  const templateID = "template_z0lerf3";

  emailjs.send(serviceID, templateID, params)
    .then(() => console.log("Email enviado com sucesso!"))
    .catch((error) => console.error("Erro ao enviar o email: ", error));
}
