$.get("./bilder.json", function (data) {
  if (data !== undefined)
    for (var i = 0; i < data.length; i++) {
      document.getElementById("galerie__").innerHTML +=
        `<div class="container container-img">
          <div class="card">
            <div class="card-img">
              <img
                src="` +
        data[i].src +
        `"
                alt="` +
        data[i].alt +
        `"
                class="card-img_"
              />
            </div>
          </div>
        </div>`;
    }
});
