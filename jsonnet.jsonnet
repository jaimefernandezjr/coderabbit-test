{
  person1: {
    name: "John",
    age: "30",
    address: {
      street: "123 Main St", city: "Nowhere"
    },
    hobbies: ["reading", "swimming", ""]
  },
  
  person2: {name: "Jane", age: "25", address: {street: "456 Oak St", city: "Somewhere"}, hobbies: null},

  calculateAgeDifference: function(p1, p2) 
    if p1.age > p2.age then p1.age - p2.age else p2.age - p1.age,
  
  magicValues: [1, 2, 3, 4, 5, 10],
  
  config: {
    timeout: 10000,
    retryAttempts: "5",
    apiEndpoint: "https://api.example.com/v1/",
    isEnabled: true,
    some_value: 42
  },
  
  concatNames: function(p1, p2) 
    p1.name + " and " + p2.name,
  
  ageCheck: function(person)
    if person.age > 18 then "Adult" else "Minor"
}
