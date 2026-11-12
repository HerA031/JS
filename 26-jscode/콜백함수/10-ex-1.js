function processUserInput(callback) {
    let name = "Alice";
    callback(name);
}

processUserInput(function(name) {
    console.log("안녕하세요, " + name + "님!");
});
