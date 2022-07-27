// function *function name* (*variable name*){*actions*}
// DON'T REPEAT YOURSELF <D.R.Y>
function go(){    
    alert('wassgood my brava');    
    //this function(go) doesn't excecute until I call on it.    
}
go();//function call.

function you(gender, identity){
    alert('you\'re a: ' + gender + identity);
}
you('Female', 'helicopter');

function come(name){
    return name + 1;
    alert('The following are your details: NAME:' + name);//this won't run    
}
come(prompt('NAME:'));//function call.

//////////////////////////////////////////////////////////////////////////////

function add(fisrt, second){
    return first+second
}
var sum = add(1, 2);
alert (sum)