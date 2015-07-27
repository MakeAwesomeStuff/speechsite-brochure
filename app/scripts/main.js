// jshint devel:true

//Example
// typeWriter('type-box', "Deliver a memorable wedding speech", 100);
var theater = new TheaterJS();
theater.describe("Problem", { speed: 1, accuracy: 1}, "#typer");
theater //.write( "Problem:Deliver a memorable wedding speech", 3000)
        .write("Problem:Inspire your new team at work", 3000)
        .write("Problem:Nail that job interview", 3000)
        .write("Problem:Improve networking abilities", 3000)
        .write("Problem:No longer be the quite one", 3000)
        .write(function () { theater.play(true); });

