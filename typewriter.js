const sentence = "hello there from lighthouse labs";

let names = sentence.split(" ");
names.forEach((name, i) => {
    setTimeout(() => {
      process.stdout.write(`${name}  `);  // print the char here
    }, i * 50);

});
setTimeout(() => {
  process.stdout.write(`\n`);  // print the char here
}, sentence.length * 50);

