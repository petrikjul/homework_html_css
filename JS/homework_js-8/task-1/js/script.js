var i = 0;
var elementsNum = document.getElementsByClassName('light').length;

/*** Сервисный код. Пока в нем можно не разбираться ***/
document.addEventListener('click', function (event) {
    if (event.target.nodeName.toLowerCase() === 'button') {
    processButtonClick(event.target);
    }
});            
    function processButtonClick (element) {
        var light = element.parentElement.querySelector('.light');
        light.style.backgroundColor = 'lightblue';
        i++;
        if (i === elementsNum) {            
            alert('Готово!');
        }
    }