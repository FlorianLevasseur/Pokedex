document.getElementById('searchPkmn').addEventListener('click', function () { //=>
    axios.get('https://pokeapi.co/api/v2/pokemon/' + document.getElementById('mySearch').value.toLowerCase())
        .then(function (response) {
            console.log(response.data);
            let myData = response.data;
            document.getElementById('myImg').src = myData.sprites.front_default;
            document.getElementById('description').innerHTML = `
                                                                ${myData.name.toUpperCase()}<br><br>
                                                                Type : <img src="assets/img/${myData.types[0].type.name}.png" class="size"><br>
                                                                Taille : ${myData.height / 10}m<br>
                                                                Poids : ${myData.weight / 10}kg`;
        })
})

document.getElementById('mySearch').addEventListener('keyup', function (e) { //=>
    if (e.keyCode == 13) {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + document.getElementById('mySearch').value.toLowerCase())
            .then(function (response) {
                console.log(response.data);
                let myData = response.data;
                let typesTable = myData.types;
                let myDescription = "";
                document.getElementById('myImg').src = myData.sprites.front_default;
                myDescription = `${myData.name.toUpperCase()}<br><br>Type :`;
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

})