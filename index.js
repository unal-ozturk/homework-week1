let searchBar = document.querySelector('#searchbar'); // Select searchbar on html via DOM

// CREATE A FILTER FOR SEARCHBAR, TRIGGERS ON KEYUP
searchBar.addEventListener("keyup", (e) => {
    let value = e.target.value.toLowerCase()
    let filteredPhotos = response.data.filter((photo) => {
        return photo.title.toLowerCase().includes(value)
    })
    writeToScreen(filteredPhotos);
});


// GET DATA FROM API
let getData = async () => {
    try {
        response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50');
        if (response.status === 200) {
            writeToScreen(response.data);
        }
    }
    catch (error) {
        console.log(error);
    }
};


// CALL DATA
getData();


// CREATE ELEMENT AND PUT API DATA TO WRITE ON SCREEN
    let writeToScreen = (data = []) => {
        let photoAlbum = document.querySelector('.list');
        let elements = '';
        photoData = data.forEach(photo => {
            elements += `<div class="card"><h4>${photo.title}</h4><img src="${photo.url}" class="album"></div>`;
        });
        photoAlbum.innerHTML = elements;
    };


// TODO: CREATE A BUTTON ON EACH CARD TO DELETE RELEVANT CARD ON THE WEBSITE
// TODO: BUTTON CREATED INSIDE "elements" CAUSES BUTTON TO NOT BE ADJUSTED PROPERLY IN THE CARD