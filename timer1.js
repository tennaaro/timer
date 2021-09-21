const getArguements = function() {
  const arg = process.argv.slice(2);
  return arg;
}

const timer = function(times) {
  if (!times.length) {
    return
  }
  for(let i = 0; i < times.length; i++) {
    if (times[i] < 0 || isNaN(times[i])) {
      continue
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * (times[i]))
  }
}

const arg = getArguements();
const results = timer(arg);

console.log(results);
