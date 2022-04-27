let myId = "";

async function getData() {
    myId = "";
    await axios.get("./assets/js/myPokedex.json")
        .then(function (response) {
            myId = response.data.pokedex.find(item => item.name.toLowerCase() == document.getElementById('mySearch').value.toLowerCase()).id
        })
    axios.get('https://pokeapi.co/api/v2/pokemon/' + myId)
        .then(function (response) {
            let myData = response.data;
            let typesTable = myData.types;
            let myDescription = "";
            document.getElementById('myImg').src = myData.sprites.front_default;
            myDescription = `${document.getElementById('mySearch').value.toUpperCase()}<br><br>Type :`;
            typesTable.forEach(element =>
                myDescription += ` <img src="assets/img/${element.type.name}.png" class="size"> /`
            );
            myDescription = myDescription.slice(0, -1);
            myDescription += `<br>
                            Taille : ${myData.height / 10}m<br>
                            Poids : ${myData.weight / 10}kg`;
            document.getElementById('description').innerHTML = myDescription;
        })
}

document.getElementById('searchPkmn').addEventListener('click', function () {
    getData();
})

document.getElementById('mySearch').addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        getData();
    }

})