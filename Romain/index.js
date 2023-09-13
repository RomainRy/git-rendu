let btn = document.getElementById("button1");
let txt = document.getElementById("p");
btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.value === "Stopper la course") {
    btn.value = "Redémarer la course";
    txt.textContent = "La course est arrêtée !";
    location.reload();
  } else {
    btn.value = "Stopper la course";
    txt.textContent = "La course est lancée ! ";
  }

  let element1 = document.getElementsByClassName("img")[0];
  let element2 = document.getElementsByClassName("img")[1];
  let element3 = document.getElementsByClassName("img")[2];
  let element4 = document.getElementsByClassName("img")[3];

  for (let i = 0; i <= 750; i++) {
    if ((btn.value = "Stopper la course")) {
      setTimeout(function () {
        element1.style.transform = "translateX(" + i + "px)";
        if (i > 650) {
          addElement4.innerHTML =
            "<p style='text-align:center;color:black;font-size:20px;'>4<sup>e</sup> : Charles Leclerc</p>";
        }
      }, 15 * i);
      setTimeout(function () {
        element2.style.transform = "translateX(" + i + "px)";
        if (i > 650) {
          addElement2.innerHTML =
            "<p style='text-align:center;color:black;font-size:20px;'>2<sup>e</sup> : Max Verstappen</p>";
        }
      }, 11 * i);
      setTimeout(function () {
        element3.style.transform = "translateX(" + i + "px)";
        if (i > 650) {
          addElement3.innerHTML =
            "<p style='text-align:center;color:black;font-size:20px;'>3<sup>e</sup> : Esteban Ocon</p>";
        }
      }, 12 * i);
      setTimeout(function () {
        element4.style.transform = "translateX(" + i + "px)";
        if (i > 650) {
          txt.style.color = "#FF9700";
          txt.style.fontSize = "24px";
          txt.textContent = "MC laren à gagné la course !! ";

          let addElement = document.getElementById("addElement");
          addElement1.innerHTML =
            "<p style='text-align:center;color:black;font-size:20px;'>1<sup>er</sup> : Lando Norris</p>";
        }
      }, 10 * i);
    }
  }
}
