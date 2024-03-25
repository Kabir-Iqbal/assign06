//6. Stripping Names: 
//Store a person’s name, and include some whitespace characters at the beginning and end of 
//the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name 
var personname = "\t \n Kabir Iqbal \t\n";
console.log("Name with white space :".concat(personname));
var personname1 = personname.trim();
console.log("Name without white space : ".concat(personname1));
