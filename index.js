window.lovelyTabMessage = (function(){
    var hearts = ['❤','💓','💖','💗','💘','💝','💕'];
    var heart = hearts[Math.floor(Math.random() * (hearts.length))];
    var lang = (window && window.navigator && window.navigator.language || 'en');
    switch(lang){
        case 'en':
            return 'Come back, i miss you. '+heart;
        case 'de':
            return 'Komm zurück, ich vermisse dich. '+heart;
        default:
            return 'Come back, i miss you. '+heart;
    }
})()
window.cachedTitle = document.title;
window.onblur = function () {
    document.title= window.lovelyTabMessage;
}
window.onfocus = function () {
    document.title= window.cachedTitle;
}