
var x = 1;
function test() {
    var x = 2;
   console.log(this.x);
}
test();  // 1