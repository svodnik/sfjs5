var Person = {
  species: "Homo Sapiens",
  speak: function() { 
      console.log("Hello! I'm " + this.name)
  }
};

var me = Object.create(Person);
// equivalent to var me = new Person();
me.name = "Adam";

me.speak();
me.species;
