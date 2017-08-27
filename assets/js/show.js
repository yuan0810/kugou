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


    /*当播放完毕的时候*/
    audio.onended = function() {
        play.className = 'play';
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
    var str = `
[00:00.71]薛之谦 - 丑八怪
↵[00:01.76]词：甘世佳
↵[00:02.67]曲：李荣浩
↵[00:03.43]编曲：李荣浩
↵[00:20.47]如果世界漆黑 其实我很美
↵[00:23.81]在爱情里面进退 最多被消费
↵[00:27.58]无关痛痒的是非
↵[00:29.56]又怎么不对 无所谓
↵[00:35.86]如果像你一样 总有人赞美
↵[00:39.17]围绕着我的卑微 也许能消退
↵[00:43.04]其实我并不在意 有很多机会
↵[00:46.39]像巨人一样的无畏
↵[00:49.38]放纵我 心里的鬼
↵[00:51.11]可是我不配
↵[00:54.52]丑八怪 能否别把灯打开
↵[01:01.88]我要的爱 出没在
↵[01:06.50]漆黑一片的舞台
↵[01:09.39]丑八怪 在这暧昧的时代
↵[01:17.46]我的存在 像意外
↵[01:37.69]有人用一滴泪 会红颜祸水
↵[01:41.34]有人丢掉称谓 什么也不会
↵[01:44.99]只要你足够虚伪 就不怕魔鬼 对不对
↵[01:52.97]如果剧本写好 谁比谁高贵
↵[01:56.62]我只能沉默以对 美丽本无罪
↵[02:00.68]当欲望开始贪杯 有更多机会
↵[02:03.93]像尘埃一样的无畏 化成灰 谁认得谁
↵[02:08.41]管他配不配
↵[02:11.95]丑八怪 能否别把灯打开
↵[02:19.36]我要的爱 出没在
↵[02:23.94]漆黑一片的舞台
↵[02:26.89]丑八怪 在这暧昧的时代
↵[02:34.79]我的存在 不意外
↵[03:01.76]丑八怪 其实见多就不怪
↵[03:09.75]放肆去high 用力踩
↵[03:14.02]那不堪一击的洁白
↵[03:17.18]丑八怪 这是我们的时代
↵[03:25.28]我不存在 才意外.`;
    var lyric = document.querySelector('.lyric');
    var arr = str.split('↵');
    var times = [];
    var str = '';
    arr.forEach(function(value) {
        times.push(turnTime(value.slice(value.indexOf('[') + 1, value.lastIndexOf(']'))));
        str += '<p>' + value.slice(value.lastIndexOf(']') + 1, value.length - 1) + '</p>';

    })
    lyric.innerHTML = str;
    var p = document.querySelectorAll('.lyric p');
    p[0].className = 'active5';
    audio.ondurationchange = function() {

        times.push(audio.duration * 1000);
    }
    audio.onloadedmetadata = function() {
        console.log(audio.duration)

        totaltime.innerHTML = time(audio.duration);
    }
    audio.ontimeupdate = function() {
        ontime.innerHTML = time(audio.currentTime);
        var bili = audio.currentTime / audio.duration;
        ball.style.left = progress.offsetWidth * bili - ball.offsetWidth / 2 + 'px';
        line.style.width = progress.offsetWidth * bili + 'px';
        var current = Math.floor(audio.currentTime * 1000);
        for (var i = 0; i < times.length; i++) {
            if (times[i] < current && current < times[i + 1]) {
                for (var j = 0; j < times.length - 1; j++) {
                    p[j].className = '';
                }
                p[i].className = 'active5';
                if (i > 4 && i < p.length - 7) {
                    lyric.style.top = -34 * (i - 4) + 'px';
                }
                if (i > p.length - 7) {
                    lyric.style.top = -(p.length - 7) * 34 + 'px';
                }
                break;
            }
        }

    }

    function turnTime(str) {
        var haomiao = str.slice(0, 2) * 60 * 1000 + str.slice(3, 5) * 1000 + str.slice(6) * 10;
        return haomiao;
    }
    $('.lyric').scroll(function() {
        var sTop = $(this).scrollTop();
        var sHeight = $(this).get(0).scrollHeight;
        var top = sTop / sHeight * $(this).height();
        if (top + $('.scroll-btn').height() >= $(this).height()) {
            top = $(this).height() - $('.scroll-btn').height();
        }
        $('.scroll-btn').css('top', top);
    })
    var a = true;
    $('.loop').click(function() {
        if (a) {
            $('.playloop').css('display', 'block');
            a = false;

        } else {
            $('.playloop').css('display', 'none');
            a = true;
        }
    })
    /*登录*/
    var d = dialog({
        content: $('.shadow'),
        lock: true,
        fixed: true,
    })
    $('.header .login').click(function() {

        d.showModal()

    })
    $('.close').click(function() {
        d.close();
    })
    $('.shadow .name').focus(function() {
        $('.shadow .name').attr('value', ' ');

    })

}