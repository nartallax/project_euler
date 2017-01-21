// found no better solution in couple of hours
// so, let's just use brute force
var i = 20;
var s = Stream(() => i += 20);
nums(2, 20).each(n => s = s.filter(x => (x % n) === 0));
solution(s.take());