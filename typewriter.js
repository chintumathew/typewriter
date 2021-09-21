const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  for (let i = 0; i < char.length; i++) {
    const timeout = setTimeout(() => {
      process.stdout.write(char[i]);  // print the char here
      
    }, i * 50);
}
}
setTimeout(() => {
  console.log();
}, sentence.length);

 