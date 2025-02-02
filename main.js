const card = document.getElementById("carte");
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlay img")
const overlayButton = document.querySelector(".btn")

fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      const { date, id, url, title } = element
      card.innerHTML += `<div class="card p-2 mt-4 ms-4 me-4 col-md-4 col-lg-3 rotazione cards" data-id='${id}'>
            <img width="25px" class="position-absolute top-0 start-50 translate-middle" src="./assets_day1/img/pin.svg" alt="pin">
            <img src='${url}' alt='${url}'>
            <div class="card-body">
              <span>'${date}'</span>
              <p class="card-text"><strong>'${title}'</strong></p>
            </div>
          </div>`
      arrayCards = document.querySelectorAll(".cards")
    });
    console.log(arrayCards)
    arrayCards.forEach(element => {
      element.addEventListener("click", function () {
        console.log(element.getAttribute("data-id"))
        overlay.classList.remove("d-none")
        overlayImg.setAttribute("src", `https://marcolanci.it/boolean/assets/pictures/${element.getAttribute("data-id")}.png`)
      })
    })
    overlayButton.addEventListener("click", function () {
      overlay.classList.add("d-none")
    })

  })
  .catch(error => {
    console.error(error);
  });
