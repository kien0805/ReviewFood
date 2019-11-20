var data;

var dataReceive =
    fetch('https://dev-c4t-test.herokuapp.com/api/food')
        .then(response => { return response.json() })
        .then(json => { data = json })

function showData(id) {
    console.log(id)
    const idFood = document.getElementById("food_pick")
    const food = document.getElementById("food")
    idFood.style.display = "none"
    data.map(item => {
        if (id === item.type) {
            const html = `
    <h1><b class="darkblue">${item.type}</b></h1>

    <div id="${item.name}" onclick="showDetailFood(this.id)" class="line" >
        <div class="container">
            <img src="https://media.cooky.vn/recipe/g6/50772/s800x500/cooky-recipe-637093679153815286.JPG"
                alt="Thịt bò xào dưa cải chua" class="image">
            <div class="overlay" >${item.name}</div>
        </div>
    </div>
    `
            food.insertAdjacentHTML("beforeend", html)
            food.style.display = "block"

        }
    })
}


function showDetailFood(id) {
    const idElement = document.getElementById("line")
    document.getElementById('food').style.display = "none"
    data.map(item => {
        const ingrediente = item.ingrediente
        const steps = item.steps
        if (item.name === id) {
            const html = `
                <h1>${id}</h1>
                <img src=${item.thumbnail} />
                <p>Nguyên Liệu:</p>
                ${ingrediente.map((value, index) => { return `<p>${index} ${value} </p>` })}
                <p>Các bước thực hiện: </p>
                ${steps.map((value, index) => { return `<p>${index}  ${value}  </p>` })}
            `
            idElement.insertAdjacentHTML("beforeend", html)
            idElement.style.display = "block"
        }
    })


}