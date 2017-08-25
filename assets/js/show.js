window.onload = function() {
    /*播放、暂停*/
    var audio = document.querySelector('audio');
    var bofang = document.querySelector('.bofang .icon-iconfontbofang');
    var play = document.querySelector('.play');
    var ontime = document.querySelector('.change-time');
    var totaltime = document.querySelector('.all-time');
    var progress = document.querySelector('.progress');
    var ball = document.querySelector('.ball');
    var line = document.querySelector('.line');
    var Audio = document.querySelector('.audio');
    var voice = document.querySelector('.voice');
    var yinliang = document.querySelector('.Progress');
    var progress1 = document.querySelector('.voice-progress');
    var line1 = document.querySelector('.voice-line');
    var ball1 = document.querySelector('.voice-ball');
    var ylj = document.querySelector('.ylj');
    play.onclick = function() {
        if (audio.paused) {
            audio.play();
            this.classList.add('active');
        } else {
            audio.pause();
            this.classList.remove('active');
        }
    }
    /*时间改变的时候*/

    audio.ontimeupdate = function() {
        ontime.innerHTML = time(audio.currentTime);
        var bili = audio.currentTime / audio.duration;
        ball.style.left = progress.offsetWidth * bili - ball.offsetWidth / 2 + 'px';
        line.style.width = progress.offsetWidth * bili + 'px';
    }
    /*当播放完毕的时候*/
    audio.onended = function() {
        play.className = 'play';
    }
    audio.ondurationchange = function() {

        totaltime.innerHTML = time(audio.duration);
    }

    function time(t) {
        var Time = Math.floor(t);
        var Minutes = Math.floor(Time / 60);
        Minutes = Minutes < 10 ? '0' + Minutes : Minutes;
        var Sections = Time % 60;
        Sections = Sections < 10 ? '0' + Sections : Sections;
        return Minutes + ':' + Sections;
    }
    ball.onmousedown = function(ent) {
        var e = ent || window.event;
        var startX = e.pageX;
        var startPos = ball.offsetLeft;
        window.onmousemove = function(ment) {
            var me = ment || window.event;
            var endX = me.pageX;
            var x = endX - startX;
            var left = startPos + x;
            if (left < -ball.offsetWidth / 2) {
                left = -ball.offsetWidth / 2;
            }
            if (left > progress.offsetWidth - ball.offsetWidth / 2) {
                left = progress.offsetWidth - ball.offsetWidth / 2;
            }
            ball.style.left = left + 'px';
            line.style.width = left + ball.offsetWidth / 2 + 'px';
            var bili = (left + ball.offsetWidth / 2) / progress.offsetWidth;
            audio.currentTime = audio.duration * bili;
        }
        window.onmouseup = function() {
            window.onmousemove = null;
        }
        return false;
    }

    //点击进度条改变视频播放位置 
    progress.onclick = function(ent) {
        e = ent || window.event;
        var x = e.offsetX;
        line.style.width = x + 'px';
        ball.style.left = x - ball.offsetWidth / 2 + 'px';
        var bili = x / progress.offsetWidth;
        audio.currentTime = audio.duration * bili;
    }
    /*音量控制*/
    console.log(ylj);
    ylj.onclick = function() {
        if (audio.muted) {
            audio.muted = false;
            line1.style.height = 100 + '%';
            ball1.style.bottom = 100 + '%';

            voice.classList.remove('active2');
            voice.classList.add('active3');
        } else {
            audio.muted = true;
            line1.style.height = 0;
            ball1.style.bottom = 0;
            voice.classList.add('active2');
            voice.classList.remove('active3');

        }

    }


    voice.onmouseover = function() {
        yinliang.style.display = 'block';
    }
    voice.onmouseout = function() {
        yinliang.style.display = 'none';
    }
    ball1.onmousedown = function(ent) {
        var e = ent || window.event;
        var startY = e.pageY;
        var startPos = line1.offsetHeight - ball1.offsetHeight / 2;
        window.onmousemove = function(ment) {
            yinliang.style.display = 'block';
            var me = ment || window.event;
            var endY = me.pageY;
            var y = startY - endY;
            var bottom = startPos + y;
            if (bottom < -ball1.offsetHeight / 2) {
                bottom = -ball1.offsetHeight / 2;
            }
            if (bottom > progress1.offsetHeight - ball1.offsetHeight / 2) {
                bottom = progress1.offsetHeight - ball1.offsetHeight / 2;
            }
            ball1.style.bottom = bottom + 'px';
            var bili = (bottom + ball1.offsetHeight / 2) / progress1.offsetHeight;
            audio.volume = bili;
            line1.style.height = progress1.offsetHeight * bili + 'px';
            if (audio.volume == 0) {

                voice.classList.add('active2');
                voice.classList.remove('active3');
                voice.classList.remove('active4');

            } else if (audio.volume > 0 && audio.volume <= 0.5) {
                voice.classList.add('active3');
                voice.classList.remove('active2');
                voice.classList.remove('active4');
            } else if (audio.volume > 0.5 && audio.volume <= 1) {
                voice.classList.add('active4');
                voice.classList.remove('active2');
                voice.classList.remove('active3');
            }

        }
        window.onmouseup = function() {
            window.onmousemove = null;
            yinliang.style.display = 'none';
        }
        return false;
    }
    progress1.onclick = function(ent) {
        e = ent || window.event;
        var y = progress1.offsetHeight - e.offsetY;
        line1.style.height = y + 'px';
        ball1.style.bottom = y - ball1.offsetHeight / 2 + 'px';
        var bili = y / progress1.offsetHeight;
        audio.volume = bili;
        if (audio.volume == 0) {

            voice.classList.add('active2');
            voice.classList.remove('active3');
            voice.classList.remove('active4');

        } else if (audio.volume > 0 && audio.volume <= 0.5) {
            voice.classList.add('active3');
            voice.classList.remove('active2');
            voice.classList.remove('active4');
        } else if (audio.volume > 0.5 && audio.volume <= 1) {
            voice.classList.add('active4');
            voice.classList.remove('active2');
            voice.classList.remove('active3');
        }
    }

}