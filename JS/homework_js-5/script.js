var str = 'abcenglishdef';
var poisk = 'english';

for(var i=0;i<str.length;i++) {

var x = str.indexOf(poisk,i);
if(x === -1)  continue;
i += x;
console.log('неверно');
if(x !== -1);
i = x ;
console.log('верно');
}
