class User {
  constructor (name, surName, ){
    this.name = name;
    this.surName = surName;
    
  }
  set name(n){
    if(typeof n ==='number'){
      throw new TypeError('Data must be a numbers')
    }
    this._name = n;
  }
  get name(){
    this._name
  }
  set surName(sn){
    if(typeof sn ==='number'){
      throw new TypeError('Data must be a numbers')
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
    if(typeof v  !== 'number'  || typeof v === 'Nan' ){
      throw new TypeError('Введите число');
    }this._startedStudy = v;
  
  } 
  
  get startedStudy(){
   return this._startedStudy;
  }

  getCourse(){
    const date = new Date();
    const yearNow = date.getFullYear();
    const result = yearNow - this.startedStudy;

    if(result < 1 || result >5){
      throw new RangeError('Вы ввели не правильный год обучения')
    }return result;
    
  }
}

const studentTest = new Student('Oleg','Ivanko',2018);

console.log(studentTest.getCourse());
