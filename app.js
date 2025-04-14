function selectDashboard(url) {
  document.getElementById("selectionContainer").style.display = "none";
  const iframe = document.getElementById("dashboardFrame");
  iframe.src = url;
  document.getElementById("dashboardContainer").style.display = "block";
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
