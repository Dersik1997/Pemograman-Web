const elemenFadeIn = document.querySelectorAll(".fade-in");

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("muncul");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

elemenFadeIn.forEach((elemen) => {
  observer.observe(elemen);
});

const formKontak = document.getElementById("formKontak");

formKontak.addEventListener("submit", function (event) {
  event.preventDefault();

  const namaUser = document.getElementById("nama").value;
  const btnSubmit = document.querySelector(".btn-primary");

  const teksAsli = btnSubmit.innerText;
  btnSubmit.innerText = "Mengirim...";
  btnSubmit.style.opacity = "0.7";

  setTimeout(() => {
    alert(
      `Halo ${namaUser}! Pesan Anda telah berhasil terkirim. Saya akan segera membalasnya.`,
    );

    formKontak.reset();
    btnSubmit.innerText = teksAsli;
    btnSubmit.style.opacity = "1";
  }, 1500);
});
