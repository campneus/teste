(function() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.onload = function() {
        console.log("Disparo carregado com sucesso!");
        if (typeof emailjs !== "undefined") {
            emailjs.init("RSADC3ijDTpV_vUPp"); // USER ID
        }
    };
    document.head.appendChild(script);
})();
