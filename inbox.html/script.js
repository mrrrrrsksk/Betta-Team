const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentValue = "";

// Kalkulyator düymələri
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const value = e.target.dataset.value;

    if (value === "AC") {
      currentValue = "";
    } else if (value === "CE") {
      currentValue = currentValue.slice(0, -1);
    } else if (value === "=") {
      try {
        currentValue = eval(currentValue).toString();
      } catch {
        alert("Xəta! Düzgün ifadə daxil et.");
        currentValue = "";
      }
    } else {
      currentValue += value;
    }

    display.value = currentValue;
  });
});

// ✅ Window obyektindən istifadə
setTimeout(() => {
  alert("Kalkulyatora xoş gəlmisiniz!");
}, 1000);

setInterval(() => {
  console.log("Hesablamalara davam edin 🚀");
}, 10000);

// ✅ Async / Fetch API nümunəsi
async function getJoke() {
  try {
    let res = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
    let data = await res.json();
    console.log("Random Joke:", data[0].setup + " - " + data[0].punchline);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
getJoke();
