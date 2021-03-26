$.ready(console.log("jquery loaded"));

// header scroll listner

window.onscroll = (e) => {
  if (pageYOffset > 150) {
    $("header")[0].classList.add("scrolled");
  } else {
    $("header")[0].classList.remove("scrolled");
  }
};

//ham menu
const ham = $(".ham-container .ham")[0];
const header = $("header")[0];
ham.addEventListener("click", (e) => {
  const target = e.target.closest(".ham");
  header.classList.toggle("hide")
});
