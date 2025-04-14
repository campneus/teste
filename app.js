function selectDashboard(url) {
  // Esconde a tela de seleção e exibe o container do dashboard
  document.getElementById("selectionContainer").style.display = "none";
  const dashboardContainer = document.getElementById("dashboardContainer");
  dashboardContainer.style.display = "flex";
  dashboardContainer.style.flexDirection = "column";
  dashboardContainer.style.width = "100vw";
  dashboardContainer.style.height = "100vh";
  dashboardContainer.style.margin = "0";
  dashboardContainer.style.padding = "0";

  // Configura o iframe para ocupar toda a tela
  const iframe = document.getElementById("dashboardFrame");
  iframe.src = url;
  iframe.style.flex = "1";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
}

document.getElementById("varejoButton").addEventListener("click", function () {
  selectDashboard("https://app.powerbi.com/view?r=eyJrIjoiYmZiNTUyZGEtYTY4NC00MjI0LThhNWQtMjAzMGM2NmQ0NmVkIiwidCI6IjMxMjY2ODM1LTYwNDAtNGRlZS04NzA2LTkzY2M4OTYyMTYwNCJ9");
});

document.getElementById("atacadoButton").addEventListener("click", function () {
  selectDashboard("https://app.powerbi.com/view?r=eyJrIjoiZjVlZWU3Y2YtZjBhZS00MjhkLTg4NmMtZWViZjYyOTU5OWVhIiwidCI6IjMxMjY2ODM1LTYwNDAtNGRlZS04NzA2LTkzY2M4OTYyMTYwNCJ9");
});

document.getElementById("logoutButton").addEventListener("click", function () {
  document.getElementById("dashboardContainer").style.display = "none";
  document.getElementById("selectionContainer").style.display = "none";
  document.getElementById("loginContainer").style.display = "block";
});

document.getElementById("backButton").addEventListener("click", function () {
  document.getElementById("dashboardContainer").style.display = "none";
  document.getElementById("selectionContainer").style.display = "block";
});
