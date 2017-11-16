

function strings(line) {
	var str = 'abcenglishdef';
    return line.toLocaleLowerCase().indexOf('english') !== -1 ? true : false;
  
}
strings(str);
console.log('abcEnglishdef содержит "english": ' + strings(str));
console.log('abcnEglishsef содержит "english": ' + strings(str));
