//로컬스토리지의 team, teamName의 string 가져오기
var teamName1String = localStorage.getItem('teamName1');
var teamName2String = localStorage.getItem('teamName2');
var team1String = localStorage.getItem('team1');
var team2String = localStorage.getItem('team2');
//team string을 객체로
var team1Obj = JSON.parse(team1String);
var team2Obj = JSON.parse(team2String);
//team 객체에서 선수명/타율 배열로
var team1ObjKeys = Object.keys(team1Obj);
var team1ObjValues= Object.values(team1Obj);
var team2ObjKeys = Object.keys(team2Obj);
var team2ObjValues= Object.values(team2Obj);

function game() {
    var inning = document.getElementById('inning');
    for(var i = 1; i < 7; i++) {
        inning.innerText = i + "회초 " + teamName1String + " 공격";
        ranN();
        add_div();
        inning.innerText = i + "회말 " + teamName2String + " 공격";
        ranN();
        add_div();
    }
}

function add_div(){
    var div = document.createElement('div');
    div.innerHTML = document.getElementById('game').innerHTML;
    //???? document.getElementsByTagName('body')[0].insertBefore(div, document.getElementsByTagName('script'));
}

//

var recordO = document.getElementById('recordO');
var type = ["스트라이크", "볼", "아웃", "안타"];
var btn_start = document.querySelector('.btn_start');
var list = document.getElementById("list")
var record = [0,0,0,0];

function ranN() {
    addBr = document.createElement('br'),
    addP = document.createElement('p');
    setTimeout(function() {
        //아웃 3회인 경우 게임오버
        if(record[2]<3) {
            //스트라이크~안타 랜덤 선정, 선정된 값 record에 반영 및 P태그로 추가
            var randomNum = Math.floor(Math.random() * type.length)
            record[randomNum]++;
            var type_number = document.createTextNode(type[randomNum]);
            addP.appendChild(type_number);
            list.appendChild(addP);
            //(4)스트라이크가 3회 누적되면 1 아웃이다.
            if(record[0] === 3) {
                next();
                record[2]++;
                recordPrint();
            } else if(record[1] === 4) {
            //(5)볼이 4회 누적되면 1 안타가 된다.
                next();
                record[3]++;
                recordPrint();
            //아웃, 안타인 경우 타자 변경
            } else if(randomNum === 2 || randomNum === 3) {
                next();
                recordPrint();
            } else {
            //3S 또는, 4B에 해당하지 않으면 계속 진행
            recordPrint()
            }
        } else {
            recordO.innerText = "최종 안타수 : " + record[3]; + " GAME OVER"
        }
    }, 1000);

    // (4)와 (5)의 경우를 포함한 안타 또는 아웃의 경우 "다음 타자가 타석에 입장했습니다." 메시지와 함께 경기가 이어진다.
    function next() {
        addP.appendChild(addBr);
        if(record[0] === 3) {
            var type_3S = document.createTextNode(" 아웃! 다음 타자가 타석에 입장했습니다.");
        } else {
            var type_3S = document.createTextNode(" 다음 타자가 타석에 입장했습니다.");
        }
        addP.appendChild(type_3S);
        list.appendChild(addP);
        //타자 변경 S,B 초기화
        record[0] = 0;
        record[1] = 0;
    }

    //record 출력 
    function recordPrint() {
        addP.appendChild(addBr);
        recordString = document.createTextNode(record[0] + "S " + record[1] + "B " + record[2] + "O");
        addP.appendChild(recordString);
        list.appendChild(addP);
        ranN();
    }
}

btn_start.addEventListener("click", game());