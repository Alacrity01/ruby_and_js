

function thing() {
  console.log("Hi there");
}

thing();

var thing = function() {
  console.log("Hi there")
};

thing();

var person = {
  name: "George",
  age: "56",
  print_info: function() {
    console.log(this.name + " is " this.age + " yearsold.");
  }
};

console.log(person.name);
person.print_info();

for(var i = 0; i < 10; i ++) {
 console.log(i);
}