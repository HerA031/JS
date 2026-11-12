function delayedMessage(callback) {
    setTimeout(function(){
        callback('완료')
    },2000)
}

delayedMessage(function(message) {
    console.log(message);
});
