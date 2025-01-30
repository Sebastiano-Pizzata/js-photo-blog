const card = document.getElementById("carte");

fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      card.innerHTML += `<div class="card p-2 mt-4 ms-4 me-4 col-md-4 col-lg-3 rotazione ">
            <img width="25px" class="position-absolute top-0 start-50 translate-middle" src="./assets_day1/img/pin.svg" alt="pin">
            <img src='${element.url}' alt='${element.url}'>
            <div class="card-body">
              <span>'${element.date}'</span>
              <p class="card-text"><strong>'${element.title}'</strong></p>
            </div>
          </div>`
    });
  }
  )
  .catch(error => {
    console.error(error);
  });
