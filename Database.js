class Student{
    constructor(id=10,name="empty",gpa=0,courses=[]){
        this.id=id;
        this.name=name;
        this.gpa=gpa;
        this.courses=courses;
    }
    toString(){
      return this.id+"";
    }
}
class Course{
    constructor(name="empty",time="empty",date="empty",rooms=[]){
        this.name=name;
        this.time=time;
        this.date=date;
        this.rooms=rooms;
    }
    toString(){
      return this.name;
    }
}

