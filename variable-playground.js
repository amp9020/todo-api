var person = {
	name: 'Jasmine',
	age: 21
};

function updatePerson(obj) {
//	obj = {
//	name: 'Jasmine',
//	age: 26

	obj.age = 24;



}


updatePerson(person);
console.log(person);


var grades = [15, 88];

function addGrades (grades) {
	grades.push(55);
	debugger;
//	grades = [12, 33, 99];
}

addGrades(grades);
console.log(grades);


