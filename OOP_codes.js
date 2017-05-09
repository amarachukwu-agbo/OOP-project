function person(firstName,lastName,gender,hobby,favouriteFood){
	this._fullName = {
		firstName, 
		lastName
	};
	this._gender = gender;
	this.hobby = hobby;
	this.favouriteFood = favouriteFood;
	this.getBioPerson = function(){
		console.log(this._fullName.firstName + ' ' +this._fullName.lastName + ' is a ' + this._gender + ' who loves ' + this.favouriteFood + ' and ' + this.hobby );
	};
	this.greeting = function(){
		console.log('Hi, this is ' + this._fullName.lastName);
	};
}
 var person1 = new person("Agbo", "Amara", "female", "skiing", "rice");
 person1.getBioPerson();
 person1.greeting();


function teacher(firstName,lastName,gender,hobby,favouriteFood,subjects,marital_status){
	person.call(this,firstName,lastName,gender,hobby,favouriteFood );
	this._marital_status = marital_status;
	this._subjects = subjects;
	teacher.prototype = Object.create(person.prototype);
	teacher.prototype.constructor = teacher;

	this.greeting = function(){
		var title;
		if ((gender == "female") && (this._marital_status == "married")){
			title = "Mrs";
			console.log("Hello I am " + title + " " + this._fullName.firstName);
		}
		else if ((gender == "female") && (this._marital_status == "single")){
			title = "Miss";
			console.log("Hello I am " + title + " " + this._fullName.firstName);
		}
		else {
			title = "Mr";
			console.log("Hello I am " + title + " " + this._fullName.firstName);
		}
	}

	this.getBioTeacher = function(){
		console.log("I am " + this._fullName.firstName + ' ' +this._fullName.lastName + ' the ' +  subjects[0] + " and " + subjects[1] + " teacher. I love "
			+ this.favouriteFood + ' and ' + this.hobby );
	};

	this.computeResult = function(scores){
		for(counter = 0; counter<scores.length - 1; counter++){
			var total = 0;
			total += scores[counter];
		}
		return total/(scores.length);
	}

};

var teacher1 = new teacher("Agbo", "Amara", "female", "cooking", "rice", ["Maths", "English"], "married");
teacher1.getBioTeacher();
teacher1.greeting();
console.log(teacher1.computeResult([20,45,67,]));

