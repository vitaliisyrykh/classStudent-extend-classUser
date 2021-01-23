class User {
  constructor (name, surName, ){
    this.name = name;
    this.surName = surName;
    
  }
  set name(n){
    if(typeof n !=='string'){
      throw new TypeError('Name must be a string')
    }
    this._name = n;
  }
  get name(){
    this._name
  }
  set surName(sn){
    if(typeof sn !=='string'){
      throw new TypeError('Name must be a string')
    }
    this._surName = sn;
  }
  get surName(){
    return this._surName; 
  }
  
 
  get fullName(){
    return this._fullName = `${this.name} ${this.surName}`
  }
}

class Student extends User{
  constructor(name,surName,startedStudy){
    super(name,surName);
    this.startedStudy = startedStudy;
  }

   set startedStudy(v){
    if(typeof v  !== 'number'){
      throw new TypeError('Введите число');
    }this._startedStudy = v;
  
  } 
  
  get startedStudy(){
   return this._startedStudy;
  }

  getCourse(){
    const date = new Date();
    const result = date.getFullYear() - this.startedStudy;

    if(result < 0 || result >5){
      throw new RangeError('Вы ввели не правильный год обучения')
    }return result +1;
    
  }
}

const studentTest = new Student('Oleg','Ivanko',2018);

console.log(studentTest.getCourse());