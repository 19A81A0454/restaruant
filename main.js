let a = document.getElementById("food1");
let b = document.getElementById("food2");
let foods = document.getElementById("food");

a.addEventListener("click", () => {
  foods.style.backgroundImage =
    "url('https://img.freepik.com/premium-photo/collection-fruits-vegetables-isolated_135427-230.jpg')";
});

b.addEventListener("click", () => {
  foods.style.backgroundImage =
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShlZSQQLHhRIoluEtg0u8GZ7--xdEx0GX9NA&usqp=CAU')";
});

