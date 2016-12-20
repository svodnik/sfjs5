function Car(model, color){
  this.model = model;
  this.color = color;
  this.fuel = 100;
  this.drive = function(){
    this.fuel--;
    return 'Vroom!';
  }
  this.refuel = function(){
    this.fuel = 100;
  }
}

var celica = new Car("Celica","red")
console.log(celica)
