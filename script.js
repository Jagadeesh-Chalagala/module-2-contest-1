/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  const profession = arr.filter((person) => {
    return person.profession == "developer"
  }).map((p) => p);
  console.log(profession);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.filter((person) => {
    return person.profession == "developer"
  }).forEach((p) => console.log(p));
}

function addData() {
  //Write your code here, just console.log
  arr = [...arr, { id: 4, name: "susan", age: "20", profession: "intern" }];
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const newArr = arr.filter((p) => {
    return p.profession !== "admin";
  });
  arr = newArr;
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let concatenationOfArrays = [
    { id: 5, name: "glenn", age: "21", profession: "tester" },
    { id: 6, name: "david", age: "22", profession: "hr" },
    { id: 7, name: "pat", age: "23", profession: "manager" },
  ];
  const newArr = [...arr,...concatenationOfArrays];
  console.log(newArr);
}
