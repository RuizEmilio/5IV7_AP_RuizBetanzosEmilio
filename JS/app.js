const marvel = {
    render: () => {

      //8d33c9e4566fd4c3d3d063de5829db88
      //01707a13f4397b738ce9916801ba8a253e620331
      //303eb9b08f830f8c522942fa2f9176f4
      const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8d33c9e4566fd4c3d3d063de5829db88&hash=303eb9b08f830f8c522942fa2f9176f4';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results){
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.name}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();

const marvel1 ={

  render: () =>{

    const urlAPI = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=8d33c9e4566fd4c3d3d063de5829db88&hash=303eb9b08f830f8c522942fa2f9176f4'
    const container = document.querySelector('#marvel-row2');
    let contentHTML = '';

    fetch(urlAPI)
    .then(res => res.json())
    .then((json) => {

      for(const comic of json.data.results){

        let urlComic = comic.urls[0].url;
        contentHTML += `
        <div class="col-md-4">
            <a href="${urlComic}" target="_blank">
              <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="img-thumbnail">
            </a>
            <h3 class="title">${comic.title}</h3>
        </div>`
      }

      container.innerHTML = contentHTML;

    });

  }

}

marvel1.render()

const marvel2 ={

  render: () =>{

    const urlAPI = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=8d33c9e4566fd4c3d3d063de5829db88&hash=303eb9b08f830f8c522942fa2f9176f4'
    const container = document.querySelector('#marvel-row3');
    let contentHTML = '';

    fetch(urlAPI)
    .then(res => res.json())
    .then((json) => {

      for(const serie of json.data.results){

        let urlSerie = serie.urls[0].url;
        contentHTML += `
        <div class="col-md-4">
            <a href="${urlSerie}" target="_blank">
              <img src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}" class="img-thumbnail">
            </a>
            <h3 class="title">${serie.title}</h3>
        </div>`
      }

      container.innerHTML = contentHTML;

    });

  }

}

marvel2.render()