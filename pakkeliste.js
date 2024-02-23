// JavaScript til at tilføje funktionalitet til afkrydsningsfelter
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

checkbox1.addEventListener("change", function() {
  if (checkbox1.checked) {
    alert("Checkbox 1 er markeret!");
  } else {
    alert("Checkbox 1 er ikke markeret.");
  }
});


