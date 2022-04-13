let args = process.argv.slice(2)

args = args.sort(function(a, b) {
  return a - b;
});

// console.log(args)
let timer = 0;
for (const x of args) {
  timer = parseInt(x) * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer)
  
}
// process.stdout.write('\x07');
