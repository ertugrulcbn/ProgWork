class Course{
	constructor (name,time,date,rooms){
		this.name =name
		this.time=time
		this.date=date
		this.rooms=rooms
	}
	toString (){
		return  this.name;
	}
}

class Student{
	constructor (id,name,gpa,courses){
		this.name=name
		this.id=id
		this.gpa=gpa
		this.courses=courses
	}
	toString(){
		return this.id+"";
	}
}

class Database{

	readStudentsData(file) {
		console.log("read Data from "+file);
		fetch(url+file)
		.then(r => r.text(), report)
		.then(this.addStudents, report);
	}
	readCoursesData(file) {
		console.log("read Data from "+file);
		fetch(url+file)
		.then(t => t.text(), report)
		.then(this.addCourses, report);
	}

	addStudents(txt) {
		let msg = txt.length+" chars, ";
		let a = txt.split("\n");
		msg += a.length+" lines, ";
   		for (let s of a) { // one line of txt
    		let b = s.split("\t");
    		let id = parseInt(b[0]), name = b[1], gpa =parseFloat(b[2]);
    		let list = [];//course list
    		for (let i=3; i<b.length; i++) 
    			list.push(b[i]); 
    		let std = new Student(id, name, gpa, list);
    		keys.push(std.id); vals.push(std);
    		if(!Smap.has(std.id)){
    			Smap.set(id,std);
    		}
    	}
    	console.log(Smap);
    	report(msg + Smap.size+" students");
	}

	addCourses(txt) {
		let msg = txt.length+" chars, ";
		let a = txt.split("\n");
		msg += a.length+" lines, ";
	    for (let c of a) { // one line of txt
	    	let b = c.split("\t");
	    	let name = b[0], time = b[1], date =b[2];
	    	let list = [];//rooms list
	    	for (let i=3; i<b.length; i++) 
	    		list.push(b[i]); 
	    	let crs = new Course(name, time, date, list);
	    	if(!Cmap.has(crs.name)){
	    		Cmap.set(crs.name,crs);
	    	}
		}
		console.log(Cmap);
		report(msg + Cmap.size +" courses");
	}

}



