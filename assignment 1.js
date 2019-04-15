console.log('The new file!');

var x = 'Hello everyone my name is Naveed ';
console.log(x);

// console.log(document);

// console.log($(document));

console.log($('#myId p'));
var $mydiv = $('#myId');
var mydiv = document.getElementById('myId');
mydiv.setAttribute('style', 'color: red');

console.log($mydiv.css("color"));

// This is my new line!

console.log(mydiv);

// console.log($);

$( document ).ready(function() {
    // Handler for .ready() called.
	
    console.log('I am ready');

}
});
