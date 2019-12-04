var teamName2 = document.getElementById('teamName2');
var save = document.querySelector('.save');
var list = document.getElementById('list');
var ob2 = {};

//input창 그리기
for (var i = 1; i < 10; i++) {
    var inputBatter = document.createElement('input');
    inputBatter.setAttribute('placeholder', i+'번 선수명');
    inputBatter.setAttribute('id', i);
    list.appendChild(inputBatter);

    var inputBA = document.createElement('input');
    // inputBA.setAttribute('onkeyPress', 'onlyNumber()'); 
    inputBA.setAttribute('placeholder', '타율');
    inputBA.setAttribute('id', "BA"+i);
    list.appendChild(inputBA);

    addBr = document.createElement('br')
    list.appendChild(addBr);
}

//1팀 선수리스트 ob2객체에 추가
function teamList2() {
    for(var i = 1; i < 10; i++) {
        var getName = document.getElementById(i).value;
        var getBA = document.getElementById("BA"+i).value;
        ob2[getName] = getBA;
    }
}

//유효성검사_미입력, 포커싱
function emptyValue() {
    //팀명
    if(! teamName2.value) {
        alert(teamName2.placeholder);
        teamName2.focus();
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
    rangeNumber();
}

//타율 숫자만 입력가능 >> 소수점 처리 필요..
// function onlyNumber() {
//     if(event.keyCode >= 48 && event.keyCode <= 57) {
//         return true;
//     } else {
//         event.returnValue = false;
//     }
// }

function rangeNumber() {
    for(var i = 1; i < 10; i++) {
        var eachIdBA = document.getElementById("BA"+i);
        if(eachIdBA.value <= 0.1 || eachIdBA.value >= 0.5) {
            alert('타율(h)은 0.1<h<0.5 범위 내 숫자로 입력되어야합니다.');
        }
    }
}

save.addEventListener("click", function() {
    emptyValue();
    teamList2();
    //팀명 로컬스토리지에 string으로 저장
    localStorage.setItem('teamName2', teamName2.value);
    //선수리스트(ob2) 로컬스토리지에 string으로 저장
    localStorage.setItem('team2', JSON.stringify(ob2));
    }
);