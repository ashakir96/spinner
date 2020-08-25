const array = ["| ", "/ ", "- ", "\\ ", "\n"];

let counter = 0;

for (let item of array) {
  setTimeout(() => {
    process.stdout.write("\r" + item);
  }, counter);
  counter += 200
}