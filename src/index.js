window.lovelyTabMessage = (function(){
    var messages = require('./messages.js');
    // Let's see what lovely options we have to build our very romantic string
    var lovelyMessages = Object.keys(messages);
    var lovelyHearts = ['❤','💓','💖','💗','💘','💝','💕'];
    // Roll the dices of love and get our string base!
    var lovelyMessage = lovelyOptions[Math.floor(Math.random() * (lovelyMessages.length))];
    var lovelyHeart = lovelyHearts[Math.floor(Math.random() * (lovelyHearts.length))];
    // Maybe we can make our users REALLY happy by using their native language?
    var lang = (window && window.navigator && window.navigator.userLanguage || window.navigator.language);;
    // Now let's glue our lovely string together!
    return ( messages[lovelyMessage][lang] || messages[lovelyMessage]['en'] ) + ' ' + lovelyHeart;
})();

window.cachedTitle = document.title;
window.onblur = function () {
    document.title= window.lovelyTabMessage;
}
window.onfocus = function () {
    document.title= window.cachedTitle;
}