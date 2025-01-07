let myName = "Suzanna";

console.log(myName);
// debugger;
console.log(typeof myName);

let throws = 0;
let currentTarget = 1;
  while (currentTarget <= 6) {
    let roll = Math.floor(Math.random() * 6) + 1;
    throws++;
    console.log(`Ditt ComputerScore för mål ${currentTarget}: ${roll} , Throws nummer: ${throws}`);
   if (roll == currentTarget){
      console.log(`Mål ${roll}: ${currentTarget}`);
      currentTarget++;
  }
}
   console.log(`Ditt mål för steget 1-6 efter: ${throws} throws`);
   console.log(typeof throws);