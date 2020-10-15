var mouse = {
    name: 'Mickey',
    sayHi: function(){
        console.log('hi, my name is ', this.name);
    }
}

var cat = {
    name: 'Tom'
}

// mouse.sayHi();
// var say = mouse.sayHi.bind(mouse);
var say = mouse.sayHi.bind(cat);
// say = function() { console.log...}
say(); // global context

