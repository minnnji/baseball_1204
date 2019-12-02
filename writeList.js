var teamName1 = document.getElementById('teamName1');
var storage = document.querySelector('.storage');
var list = document.getElementById('list');
var ob1 = {};
var obKeys;

//input창 그리기
for (var i = 1; i < 10; i++) {
    var inputBatter = document.createElement('input');
    inputBatter.setAttribute('placeholder', i+'번 선수명');
    inputBatter.setAttribute('id', i);
    list.appendChild(inputBatter);

    var inputBA = document.createElement('input');
    inputBA.setAttribute('placeholder', '타율');
    inputBA.setAttribute('id', "BA"+i);
    list.appendChild(inputBA);

    addBr = document.createElement('br')
    list.appendChild(addBr);
}

//1팀 선수리스트 객체에 추가
function teamList1() {
    for(var i = 1; i < 10; i++) {
        var getName = document.getElementById(i).value;
        var getBA = document.getElementById("BA"+i).value;
        ob1[getName] = getBA;
    }
}

//유효성검사_미입력
function emptyValue() {
    //팀명
    if(! teamName1.value) {
        alert(teamName1.placeholder);
        teamName1.focus();
        return;
    } else {
        for(var i = 1; i < 10; i++) {
            var eachId = document.getElementById(i);
            var eachIdBA = document.getElementById("BA"+i);
            //선수명
            if(! eachId.value) {
                alert(eachId.placeholder + "을 입력해주세요.");
                eachId.focus();
                return;
            //타율
            } else if(! eachIdBA.value) {
                alert(eachIdBA.placeholder + "을 입력해주세요.");
                eachIdBA.focus();
                return;
            }
        }
    }
}

storage.addEventListener("click", function() {
    emptyValue();
    //팀명 로컬스토리지에 저장
    localStorage.setItem('teamName1', teamName1.value);
    teamList1();
    //선수리스트 로컬스토리지에 저장
    localStorage.setItem('team1', JSON.stringify(ob1));
    obKeys = Object.keys(ob1);
    }
);