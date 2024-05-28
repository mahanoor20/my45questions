//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich (...items: string[]){
    console.log(`Making a sandwich with ${items.join(",")}`);
};
sandwich("cheese","chicken")
sandwich("tomato","lettuce","onion")
sandwich("beef","peperoni","bbqsauce","mayo")