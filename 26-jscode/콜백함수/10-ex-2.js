function calculate(a, b, callback) {
    let result = a+b
    callback(result)
}

calculate(5, 3, function(result) {
    console.log("결과:", result);
});
