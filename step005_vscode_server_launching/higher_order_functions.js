// console.log("=========== higer order functions");

const companies = [ 
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

console.log("higer order functions && arrays ");

// basic for loop
// for (var i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach
// companies.forEach(company => {
//     console.log("componany: ", company);
// });

// for of
// for(const c of companies){
//     console.log("componany: ", c);
// }

// filter
// const canDrink = ages.filter(age => age >= 21);
// console.log("Can drink", canDrink);

// map
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log("ages square: ", agesSquare);

// sort
// const sortedCompanies = companies.sort( (a,b) => (a.start > b.start ? 1:-1));
// console.log("companies sorted by start year: ", sortedCompanies);

// reduce
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log("Age sum: ", ageSum);

// combined methods
// const combined = ages
//     .map(age => age *2)
//     .filter(age => age > 40)
//     .sort( (a,b) => a-b)
//     .reduce( (total, age) => total + age);
// console.log("combined: ", combined);

