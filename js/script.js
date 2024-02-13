function calculate() {
  var c = parseFloat(document.getElementById("c").value);

  // hitung luas keliling
  var fahrenheit = c * (9 / 5) + 32;
  var reamur = (4 / 5) * c;
  var kelvin = c + 273;

  // menampilkan hasil
  document.getElementById("result").innerHTML = `
      <p>Fahrenheit: ${fahrenheit} °F</p>
      <p>Reamur: ${reamur} °R</p>
      <p>Kelvin: ${kelvin} °K</p>
    `;
}

//reset
function resetForm() {
  document.getElementById("c").value = "";
  document.getElementById("result").innerHTML = "";
}

//popup
document.addEventListener("DOMContentLoaded", function () {
  var popupButton = document.getElementById("popupButton");
  var popup = document.querySelector(".popup");
  var closeButton = document.querySelector(".close");

  popupButton.addEventListener("click", function () {
    popup.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
