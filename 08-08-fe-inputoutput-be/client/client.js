
function search(){
    //console.log(event.target.value)
    var text = event.target.value.trim().toLowerCase();

    fetch(`http://localhost:3000/search/${text}`)
        .then ( response => {
            return response.json();
        })
        .then( usersJson => {
            console.log(usersJson);

            //???
            //cu ajutorul unui forEach si dom.createElement, append sa se afiseze rezultatul in urmatorul format
            //bs4 list group
        })

}