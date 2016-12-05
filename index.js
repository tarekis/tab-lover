window.lovelyTabMessage = (function(){
    var stringTree = {
        comeBackIMissYou: {
            de: 'Komm zurück, ich vermisse dich.',
            en: 'Come back, i miss you.'
        }
    }
    // Let's see what lovely options we have to build our very romantic string
    var lovelyOptions = Object.keys(stringTree);
    var lovelyHearts = ['❤','💓','💖','💗','💘','💝','💕'];
    // Shuffle the dices of love and get our string base!
    var lovelyOption = lovelyOptions[Math.floor(Math.random() * (lovelyOptions.length))];
    var lovelyHeart = lovelyHearts[Math.floor(Math.random() * (lovelyHearts.length))];
    // Maybe we can make our users REALLY happy by using their native language?
    var lang = (window && window.navigator && window.navigator.userLanguage || window.navigator.language);;
    // Now let's glue our lovely string together!
    return ( stringTree[lovelyOption][lang] || stringTree[lovelyOption]['en'] ) + ' ' + lovelyHeart;
})()
window.cachedTitle = document.title;
window.onblur = function () {
    document.title= window.lovelyTabMessage;
}
window.onfocus = function () {
    document.title= window.cachedTitle;
}