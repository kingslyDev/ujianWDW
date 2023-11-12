const HideNgaji = document.querySelector(".ngaji");
const IsNgaji = document.querySelector(".ruang-ngaji");
const HideDonasi = document.querySelector(".donasi");
const IsDonasi = document.querySelector(".ruang-donasi");

HideNgaji.addEventListener("click", () => {
  if (IsNgaji.style.display === "none" || IsNgaji.style.display === "") {
    IsNgaji.style.display = "flex";
    IsDonasi.style.display = "none";
  } else {
    IsNgaji.style.display = "none";
  }
});

HideDonasi.addEventListener("click", () => {
  if (IsDonasi.style.display === "none" || IsDonasi.style.display === "") {
    IsDonasi.style.display = "flex";
    IsNgaji.style.display = "none";
  } else {
    IsDonasi.style.display = "none";
  }
});
