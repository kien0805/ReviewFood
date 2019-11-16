var data;

var dataReceive =
    fetch('https://arcane-ridge-39561.herokuapp.com/api/food')
        .then(response => { return response.json() })
        .then(json => { data = json })
