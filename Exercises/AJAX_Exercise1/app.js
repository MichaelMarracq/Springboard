// get searchbar, search button, clear button, api, and apikey
let imageContainer = $('#imgs');
let searchBar = $('#searchbar')
let clearImgs = $('#clear')
let apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"



// on form submit, take the search input value and apply it to the api url

function addGif(response){
    let numResults = response.data.data.length
    let randomIdx = Math.floor(Math.random() * numResults);
    // let newImg = $('#imgs').add('img').atrr('src', response.data.data[randomIdx].images.orginal.url)
    let newImg = $("<img>", {src: response.data.data[randomIdx].images.original.url})
    imageContainer.append(newImg)
}






$('form').on('submit', async function(event){
    event.preventDefault();
    let searchInput = document.querySelector('#searchbar').value;
    let apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${apiKey}`
    let response = await axios.get(apiUrl);
    console.log(response)
    console.log(searchInput)
    addGif(response);
})

$('#clear').on('click', function(event){
    event.preventDefault();
    imageContainer.empty();
})