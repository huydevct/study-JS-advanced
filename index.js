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

// Function context & bind
function run(cb) {
    console.log('running...');
    cb();
  }
  
  var mouse = {
    name: 'Mickey',
    sayHi: function(){
      console.log('hi ', this.name);
    }
  }
  
  run(mouse.sayHi.bind(mouse));
  
  // arrow function
  
  var sum = (a,b) => {
    return a+b;
  }
  
  var sum = (a,b) => a+b;
  sum(4,8);
  
  var square = x => x*x;
  square(4);
  
  var doSth = () => Date.now();
  
  doSth();
  
  var arr = [1,4,6];
  
  arr.map(x => x*x);
  
  // different normal vs arrow
  
  var a = {
    name: 'AAA',
    run: function(){
      var run2 = function(){
        console.log(this.name);
      }.bind(this); //a
      run2();
    }
  };
  
  a.run();
  
  var a = {
    foo: 'bar',
    run: function(){
      setTimeout(() => {
        console.log(this.foo);
      }, 2000);
    }
  }
  
  a.run();
  
  // Template string
  
  function greeting(name){
    return 'Hi, ' + name + "!";
  }
  
  function greeting2(name){
    return `Hi, ${name} ${1+2}!`;
  }
  
  var result = greeting2('Minh');
  console.log(result);
  
  // Array-like objects & Arguments:
  
  const name = ['Thanh', 'Trang', 'Thuy'];
  
  for(let i=0; i<name.length; i++){
    console.log(name[i]);
  }
  
  // tương tự:
  
  const obj ={
    0: 'Thanh',
    1: 'Trang',
    2: 'Thuy',
    length: 3
  };
  for(let i=0; i<obj.length; i++){
    console.log(name[i]);
  }
  
  function sum(){
    // Cách 1:
    let result=0;
    for(let i=0; i<arguments.length; i++){
      result += arguments[i];
    }
    return result;
    
    //  Cách 2:
    const numbers = Array.from(arguments);
    return numbers.reduce(function(sum, num){
      return sum+num;
    }, 0);
  }
  
  sum(1,2,3,4,5,6); 
  
  // Default parameters:
  
  function greeting(name = 'friend', lan = 'ja'){
    if(lan === 'en'){
      return `Hi, ${name}`;
    }
    if(lan === 'ja'){
      return `Konichiwa, ${name}`;
    }
  
    return `Chào bạn`;
  }
  
  greeting(); 
  
  // .call
  // call: function(this, pram1, pram2,...)
  // apply: function(this, [pram1, pram2,...])
  
  function greeting(){
    console.log(`Hi! ${this.name}. I am ${this.age} `);
  }
  
  const cat ={
    name: 'Tom',
    age: '10'
  }
  
  // greeting.call(cat);
  greeting.apply(cat);
  
  function sum(){
    const numbers = Array.from(arguments);
    return numbers.reduce((sum,num) => sum+num, 0);
  }
  
  function average(){
    // sum
    const recentSum = sum.apply(null, arguments);
    // average
    return recentSum/arguments.length;
  }
  
  average(1,2,3,4,5);
  
  
  //object literals: 
  
  const jerry = {
    name: 'Jerry',
    run: function(){
      console.log(`${this.name} is running!`);
    }
  }
  jerry.run();
  
  // Enhanced object literals:
  
  const name = 'Tom';
  
  const cat = {
    name,
    run(){
      console.log(`${this.name} is running!`);
    }
  }
  
  cat.run();
  
  // class:
//   contructor function:
  function Mouse(name){
    this.name = name;
  }
  
  Mouse.prototype.run = function(){
    console.log(`${this.name} is running`);
  }
  
  class Mouse{
    constructor(name){
      this.name = name;
    }
  
    run(){
      console.log(`${this.name} is running`);
    }
  }
  const mouse = new Mouse('Mickey');
  mouse.run();
  
  // class inheritance: // sự thừa kế
  // inheritance:
  
  class Animals {
    constructor(name){
      this.name = name;
    }
  
    eat(){
      console.log(`Eating...`);
    }
  }
  
  class Bird extends Animals {
    fly(){
      console.log(`Flying...`);
    }
  }
  
  class Parrot extends Bird {
    speak(){
      console.log(`Speaking...`);
    }
  }
  
  const bird = new Parrot('Thong');
  bird.speak();
  
  
  // Method overriding: (ghi đè 1 method)
  
  class CoffeMachine {
    makeCoffe(){
      console.log(`Making coffe...`);
    }
  }
  
  class SpecialCoffeMachine extends CoffeMachine {
    makeCoffe(cb){
       console.log(`Making coffe to the boss...`);
       cb();
    }
  }
  
  const coffeMachine = new SpecialCoffeMachine();
  coffeMachine.makeCoffe(function(){
    console.log(`Finish and call the boss!`);
  });
  
  
  // super
  
  class Hero{
    constructor(name,hp,damage){
      this.name = name;
      this.hp = hp;
      this.damage = damage;
    }
  
    applyDamage(damage){
      this.hp -= damage;
    }
  
    attack(enemy){
      enemy.applyDamage(this.damage);
    }
  }
  
  class RangedHero extends Hero{ //subclass extends baseclass
    constructor(name,hp,damage,range){
      super(name,hp,damage);
      this.range = range;
    }
  
    attack(enemy){
      super.attack(enemy);
      this.hp += this.damage;
    }
  }
  
  const heroA = new RangedHero('A', 100, 10, 50);
  const heroB = new Hero('B', 200, 5);
  console.log({ heroA, heroB });
  heroA.attack(heroB);
  console.log({ heroA, heroB });
  
  // static
  
  class Foo{
    static someMethod(){
      console.log('some method');
    }
  
    anotherMethod(){
      console.log('another method');
    }
  }
  
  Foo.someMethod();
  
  const foo = new Foo(); // instance 
  foo.anotherMethod();
  
  // ...rest
  
  function logs(a, ...numbers){
    console.log(a);
    console.log(numbers);
    console.log(arguments);
  }
  logs(1,2,3,4,5)
  
  function sum(...nums){
    return nums.reduce((a,b) => a+b, 0);
  }
  sum(1,2,3,4,5);
  
  function concat(sepa, ...strings){
    return strings.join(sepa);
  }
  
  concat('.','a','b','c');
  
  // ...spread 
  // spread an Array:
  
  const a = [1,2,3];
  const b = [0, ...a, 5];
  // const b = [0,a,5];
  console.log(b);
  
  function sum(...numbers){
  }
  
  sum(...a);
  
  // Values types vs Reference types:
  
  let a1 = 1;
  let a2 = 1;
  console.log(a1 === a2);
  
  let obj1 = { a: 1 };
  let obj2 = { a: 1 };
  console.log(obj1 === obj2);
  
  let a3 = a2;
  console.log(a3 === a2);
  a3 = 2;
  console.log(a2);
  
  let obj3 = obj2;
  console.log(obj3 === obj2);
  obj3.a = 2;
  console.log(obj3 === obj2);
  
  
  // spread part 2:
  // spread an object:
  
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 11 }
  }
  
  let obj2 = {
    ...obj1,
    z: 100
  };
  for(let key in obj1){
    obj2[key] = obj1[key];
  }
  obj2.d.e = 10;
  // deep cloning
  console.log({ obj1, obj2 });
  
  // Closure: 
  
  function sum(a,b){
    const c = a+b;
    
    return function(){
      console.log(c);
    };
  }
  
  sum(1,2)();
  
  function debug(name){
    return function(str){
      console.log(`[${name}] ${str}`);
    }
  }
  
  const log = debug('Mouse');
  log('Error happens');
  
  // Higher order functions:
  
  function waitAndRun(ms, func){
    setTimeout(func, ms);
  }
  
  function run(){
    console.log('Run');
  }
  
  waitAndRun(2000, run);
  
  // Destructuring:
  
  const arr = [1,2,3,4,5];
  // const [a,b,c,d,e] = arr;
  // const [a,b,d] = arr;
  // const [a, , , ,e] = arr;
  const [a, ...e] = arr;
  console.log(a,e);
  
  const arr = [10];
  const [a, b = 20] = arr;
  console.log(a,b);
  
  const obj = {
    a: 1,
    b: 2,
    c: 3
  }
  
  // const { a, b, c } = obj;
  const { a, ...c } = obj;
  console.log(a,c);
  
  
  
  
  
  
  
  

