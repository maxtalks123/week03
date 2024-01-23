const declineButton = document.getElementById("decline");
const acceptButton = document.getElementById("accept");
const cookieNotice = document.getElementById("cookie-notice");
const darkTheme = document.getElementsByClassName("darktheme");
const lightButton = document.getElementById("light");
const darkButton = document.getElementById("dark");

declineButton.addEventListener("click", () => {
  console.log("DECLINED");
});
acceptButton.addEventListener("click", () => {
  console.log("ACCEPTED");
});
acceptButton.addEventListener("click", () => {
  document.cookie = "cookiesAccepted=true";
});

const cookiesAccepted = document.cookie.includes("cookiesAccepted");
if (!cookiesAccepted) {
  cookieNotice.style.display = "block";
}

declineButton.addEventListener("click", () => {
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=false";
});

acceptButton.addEventListener("click", () => {
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=true";
});

darkButton.addEventListener("click", () => {
  console.log("Dark mode chosen");
  document.body.classList.toggle("darktheme");
  alert("You have chosen dark mode");
});

lightButton.addEventListener("click", () => {
  console.log("light mode chosen");
  alert("You have chosen light mode");
});
