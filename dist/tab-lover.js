/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	window.lovelyTabMessage = (function(){
	    var messages = __webpack_require__(1);
	    // Let's see what lovely options we have to build our very romantic string
	    var lovelyMessages = Object.keys(messages);
	    var lovelyHearts = ['❤','💓','💖','💗','💘','💝','💕'];
	    // Roll the dices of love and get our string base!
	    var lovelyMessage = lovelyMessages[Math.floor(Math.random() * (lovelyMessages.length))];
	    var lovelyHeart = lovelyHearts[Math.floor(Math.random() * (lovelyHearts.length))];
	    // Maybe we can make our users REALLY happy by using their native language?
	    var lang = (window && window.navigator && window.navigator.userLanguage || window.navigator.language);
	    // But lump them together anyways, because i'm ignorant 
	    var simplifiedLang = lang.split('-')[0];
	    // Now let's glue our lovely string together!
	    return ( messages[lovelyMessage][simplifiedLang] || messages[lovelyMessage]['en'] ) + ' ' + lovelyHeart;
	})();

	window.cachedTitle = document.title;
	window.onblur = function () {
	    document.title= window.lovelyTabMessage;
	}
	window.onfocus = function () {
	    document.title= window.cachedTitle;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	var messages = {
	    comeBackIMissYou: {
	        de: 'Komm zurück, ich vermisse dich.',
	        en: 'Come back, i miss you.'
	    },
	    iVeAlwaysLovedYou: {
	        de: 'Ich habe dich schon immer geliebt.',
	        en: 'I\'ve always loved you.'
	    }
	}

	module.exports = messages;

/***/ }
/******/ ]);