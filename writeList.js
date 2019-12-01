var teamName1 = document.getElementById('teamName1');
var storage = document.querySelector('.storage');
var list = document.getElementById('list');

storage.addEventListener("click", function() {
    localStorage.setItem('teamName1', teamName1.value);
});

for (var i = 1; i < 10; i++) {
    var inputBatter = document.createElement('input');
    inputBatter.setAttribute('placeholder', i+'번 선수명');
    inputBatter.setAttribute('id', i);
    list.appendChild(inputBatter);

    var inputBA = document.createElement('input');
    inputBA.setAttribute('placeholder', '타율');
    inputBA.setAttribute('id', i);
    list.appendChild(inputBA);

    addBr = document.createElement('br')
    list.appendChild(addBr);
}