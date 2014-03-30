// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "img/212/2.jpg",
        "img/212/4.jpg",
        "img/212/8.jpg",
        "img/212/16.jpg",
        "img/212/32.jpg",
        "img/212/64.jpg",        
        "img/212/128.jpg",
        "img/212/256.jpg",
        "img/212/512.jpg",        
        "img/212/1024.jpg",
        "img/212/2048.jpg",
        "img/212/boss.jpg",
        "img/114/2.jpg",
        "img/114/4.jpg",
        "img/114/8.jpg",
        "img/114/16.jpg",
        "img/114/32.jpg",
        "img/114/64.jpg",        
        "img/114/128.jpg",
        "img/114/256.jpg",
        "img/114/512.jpg",        
        "img/114/1024.jpg",
        "img/114/2048.jpg",
        "img/114/boss.jpg",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
