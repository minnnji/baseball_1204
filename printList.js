//로컬스토리지의 team, teamName의 string 가져오기
var team1String = localStorage.getItem('team1');
var team2String = localStorage.getItem('team2');
var teamName1String = localStorage.getItem('teamName1');
var teamName2String = localStorage.getItem('teamName2');
//team string을 객체로
var team1Obj = JSON.parse(team1String);
var team2Obj = JSON.parse(team2String);
//team 객체에서 선수명/타율 배열로
var team1ObjKeys = Object.keys(team1Obj);
var team1ObjValues= Object.values(team1Obj);
var team2ObjKeys = Object.keys(team2Obj);
var team2ObjValues= Object.values(team2Obj);

function printList() {
    var td = document.querySelectorAll('td');

    //1팀 선수명
    td[0].textContent = teamName1String + " 선수명";
    for (var i = 1; i < 10; i++) {
        td[i].textContent = team1ObjKeys[i-1];
    }
    //1팀 타율
    for (var j = 11; j < 20; j++) {
        td[j].textContent = team1ObjValues[j-11];
    }
    //2팀 선수명
    td[20].textContent = teamName2String + " 선수명";
    for (var i = 21; i < 30; i++) {
        td[i].textContent = team2ObjKeys[i-21];
    }
    //2팀 타율
    for (var j = 31; j < 40; j++) {
        td[j].textContent = team2ObjValues[j-31];
    }
}

printList();