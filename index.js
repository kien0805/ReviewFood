var data;

var dataReceive =
    fetch('https://dev-c4t-test.herokuapp.com/api/food')
        .then(response => { return response.json() })
        .then(json => { data = json })

function showData(id) {
    const idFood = document.getElementById("food_pick")
    const food = document.getElementById("food")
    idFood.style.display = "none"
    const html = `
    <h1><b class="darkblue">Đồ ăn tối</b></h1>

    <div class="line">
        <div class="container">
            <img src="https://media.cooky.vn/recipe/g6/50772/s800x500/cooky-recipe-637093679153815286.JPG"
                alt="Thịt bò xào dưa cải chua" class="image">
            <div class="overlay">${data.name}</div>
        </div>
    </div>
    `
    food.insertAdjacentHTML("beforeend", html)
    food.style.display = "block"
}