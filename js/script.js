
//Step 1

window.console.log("\n");
window.console.log("**Step 1**");


var a=["Soul", "Avengers", "Dead Poet's Society", "Harry Potter", "Storks"];
window.console.log(a[1]);

//Step 2

window.console.log("\n");
window.console.log("**Step 2**");


var favMovies = new Array(5);
favMovies[0]="Soul";
favMovies[1]="Avengers";
favMovies[2]="Dead Poet's Society";
favMovies[3]="Harry Potter";
favMovies[4]="Storks";
window.console.log(favMovies[0]);

//Step 3

window.console.log("\n");
window.console.log("**Step 3**");


favMovies.splice(2, 0, "The Proposal");
window.console.log(favMovies.length);

//Step 4

window.console.log("\n");
window.console.log("**Step 4**");


var favMovies1 = [];
favMovies1[0]="Soul";
favMovies1[1]="Avengers";
favMovies1[2]="Dead Poet's Society";
favMovies1[3]="Harry Potter";
favMovies1[4]="Storks";

delete favMovies1[0];
window.console.log(favMovies1);

//Step 5

window.console.log("\n");
window.console.log("**Step 5**");


var favMovies2 = [];
favMovies2[0]="Soul";
favMovies2[1]="Avengers";
favMovies2[2]="Dead Poet's Society";
favMovies2[3]="Harry Potter";
favMovies2[4]="Storks";
favMovies2[5]="The Notebook";
favMovies2[6]="Tag";
for (var i in favMovies2) {
  window.console.log(favMovies2[i]);
}

//Step 6
window.console.log("\n");
window.console.log("**Step 6**");

for(var i of favMovies2) {
  window.console.log(i);
}

//Step 7 

window.console.log("\n");
window.console.log("**Step 7**");

favMovies2.sort();
for(var i of favMovies2) {
  window.console.log(i);
}

//Step 8 

window.console.log("\n");
window.console.log("**Step 8**");


var favMovies2 = ["Soul", "Avengers", "Dead Poet's Society", "Harry Potter", "Storks","Us","You"];
var leastFavMovies = ["Mama", "Heriditary", "It Follows"];

window.console.log("Movies I like:");

window.console.log("\n");
for(var i of favMovies2) {
  window.console.log(i);
}

window.console.log("\n");
window.console.log("Movies I regret watching:");

window.console.log("\n");
for(var i of leastFavMovies) {
  window.console.log(i);
}

//Step 9

window.console.log("\n");
window.console.log("**Step 9**");


var allMovies = favMovies2.concat(leastFavMovies);
allMovies.sort().reverse();
for(var i of allMovies) {
  window.console.log(i);
}

//Step 10

window.console.log("\n");
window.console.log("**Step 10**");

var lastmovie = allMovies.slice(-1)[0];
window.console.log(lastmovie);

//Step 11

window.console.log("\n");
window.console.log("**Step 11**");


window.console.log(allMovies.shift());

//Step 12

window.console.log("\n");
window.console.log("**Step 12**");



var favMovies2 = ["Soul", "Avengers", "Dead Poet's Society", "Harry Potter", "Storks","Us","You"];
var leastFavMovies = ["Mama", "Heriditary", "It Follows"];
var allMovies = favMovies2.concat(leastFavMovies);
allMovies.sort().reverse();
var leastFavMoviesindices = [];

allMovies.forEach((movie, index) => {
  if (leastFavMovies.includes(movie)) {
    leastFavMoviesindices.push(index); }
});

var goodMovies = ["Da Vinci Code","James Bond","The Conjuring"]

leastFavMoviesindices.forEach((index) => {
    allMovies[index] = goodMovies.shift();
});

for (var index = 0; index < allMovies.length; index++) {
    "use strict";
    window.console.log(allMovies[index] );
}
window.console.log("\n");


//Step 13

window.console.log("\n");
window.console.log("**Step 13**");


var movies3 = [["Soul", 1], ["Avengers", 2], ["Dead Poet's Society", 3], ["Harry Potter", 4], ["Storks", 5]];

var movieNames = movies3.filter(function(movie) {
  return typeof movie[0] === "string";
});

window.console.log(movieNames.map(movie => movie[0]));


//Step 14

window.console.log("\n");
window.console.log("**Step 14**");


var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {
  window.console.log("Employees: ");
  window.console.log("\n"); 
  employees.forEach(function(employee) {
    window.console.log(employee);
  });
};

showEmployee(employees);

//Step 15

window.console.log("\n");
window.console.log("**Step 15**");


var values = [58, '', 'abcd', true, null, false, 0];

var filterValues = function(values){
    return values.filter(function(val) {
  return val !== false && val !== null && val !== 0  && val !== "";
});
};

window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//Step 16

window.console.log("\n");
window.console.log("**Step 16**");



var randomNum = function(val) {
  return val[Math.floor(Math.random() * val.length)];
};
var nums = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
window.console.log(randomNum(nums));

//Step 17

window.console.log("\n");
window.console.log("**Step 17**");




var largestNum = function(val){
    return Math.max(...val);
}

var arr = [789 , 193, 200 , 67 , 88900 ,00 , 76 ];
window.console.log(largestNum(arr));
