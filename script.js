let imgs = document.querySelectorAll(".zoomer img");
let mirror = document.querySelector("#mirror");

imgs.forEach(function (img) {
  img.addEventListener("mousemove", function (e) {
    mirror.style.display = "block";
    const urlImage = this.src;
    console.log(urlImage);
    mirror.style.backgroundImage = `url(${urlImage})`;

    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;

    mirror.style.backgroundSize = `1000px 1000px`;

    let percentMouseOfWidth = (e.offsetX / this.offsetWidth) * 100;
    let percentMouseOfHeight = (e.offsetY / this.offsetHeight) * 100;

    mirror.style.backgroundPosition = `${percentMouseOfWidth}% ${percentMouseOfHeight}%`;

    img.addEventListener("mouseleave", function () {
      mirror.style.display = "none";
    });
  });
});
