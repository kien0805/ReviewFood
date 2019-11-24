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
    
    <div id="${item.name}" onclick="showDetailFood(this.id)" class="line" >
        <div class="container">
            <div class="green"><img src=${item.thumbnail} /></div>
            <div class="overlay" >${item.name}</div>
        </div>
    </div>
    `
            food.insertAdjacentHTML("beforeend", html)
            food.style.display = "block"
            document.getElementById("line").style.display = "none"

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
                <h1 >${id}</h1>
                <div class ="green">
                <img src=${item.thumbnail} />
                </div>
                <h1 class="darkblue">Nguyên Liệu</h1>
                
                <ul class ="green1">
                ${ingrediente.map((value, index) => { return `<p>${index} ${value} </p>` })}
                </ul>
                
                <h1 class="darkblue">Các bước thực hiện </h1>
                <ul class ="green1">
                ${steps.map((value, index) => { return `<p>${index}  ${value}  </p>` })}
                </ul>
                
            `
            idElement.insertAdjacentHTML("beforeend", html)
            idElement.style.display = "block"
        }
    })


}




