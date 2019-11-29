var first = document.getElementById('first');
var type = ["스트라이크", "볼", "아웃", "안타"];
var btn_start = document.querySelector('.btn_start');
var list = document.getElementById("list")
var record = [0,0,0];

function ranN() {
    //스트라이크~아웃 랜덤 선정
    var randomNum = Math.floor(Math.random() * type.length);

    //선정된 값 p태그로 추가
    var addP = document.createElement('p');
    type_number = document.createTextNode(type[randomNum]);
    addP.appendChild(type_number);
    list.appendChild(addP);

    //선정된 값 history에 반영
    record[randomNum]++;
    var addBr = document.createElement('br');
    addP.appendChild(addBr);
    recordString = document.createTextNode(record[0] + "S " + record[1] + "B " + record[2] + "O");
    addP.appendChild(recordString);
    list.appendChild(addP);
}

function game() {
    first.innerText = "첫 번째 타자가 타석에 입장했습니다."
    for (var i = 0; i < 9; i++) {
        setTimeout(ranN(), 3000);
    }
}

btn_start.addEventListener("click", game);