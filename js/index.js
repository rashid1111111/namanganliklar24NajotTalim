const elModal = document.querySelector(".modal");
const elModalOpenBtn = document.querySelector(".banner-btn");
const elModalCloseBtn = document.querySelector(".x-btn");
const elModalCloseBtn2 = document.querySelector(".close-btn");

elModalOpenBtn.addEventListener("click", function () {
  elModal.classList.add("modal-open");
});

elModalCloseBtn.addEventListener("click", function () {
  elModal.classList.remove("modal-open");
});

elModalCloseBtn2.addEventListener("click", function () {
  elModal.classList.remove("modal-open");
});

elModal.addEventListener("click", function () {
  elModal.classList.remove("modal-open");
});
