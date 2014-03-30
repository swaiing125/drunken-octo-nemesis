// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-derp-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-fat-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-gradient-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-hat-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-peepers-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-prizza-212.gif",        
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-rainbow-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-shake-space-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-sunglasses-212.gif",        
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-shake-212.gif",
        "img/212/2.jpg",
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-derp-114.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-fat-114.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-gradient-114.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-hat-114.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-peepers-114.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-prizza-114.gif",        
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-rainbow-114.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-shake-space-114.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-sunglasses-114.gif",        
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-shake-114.gif",
        "img/114/2.jpg",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
