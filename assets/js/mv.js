window.onload = function() {
    /*播放、暂停*/
    var container = document.querySelector('#container');
    var video = document.querySelector('video');
    var bofang = document.querySelector('.bofang .icon-iconfontbofang');
    var play = document.querySelector('.bofang');
    var ontime = document.querySelector('.ontime');
    var totaltime = document.querySelector('.totaltime');
    var progress = document.querySelector('.progress');
    var rage = document.querySelector('.rage');
    var line = document.querySelector('.line');
    var quanping = document.querySelector('.icon-quanping');
    var Video = document.querySelector('.Video');
    var playbig = document.querySelector('.playbig .icon-bofang1');
    var ctro = document.querySelector('.ctro');
    var yinliang = document.querySelector('.yljian .yinliang');
    var yljian = document.querySelector('.yljian');
    var progress1 = document.querySelector('.progress1');
    var line1 = document.querySelector('.line1');
    var rage1 = document.querySelector('.rage1');
    var yli = document.querySelector('.yljian i');
    video.ondurationchange = function() {
        play.onmouseover = function() {
            bofang.className = 'iconfont icon-bofang'
        }
        play.onmouseout = function() {
            bofang.className = 'iconfont icon-iconfontbofang';
        }
        play.onclick = function() {
            if (video.paused) {
                video.play();
                bofang.className = 'iconfont icon-zanting';
                ctro.innerHTML = '播放';
                playbig.style.display = 'none';
                play.onmouseover = function() {

                    bofang.className = 'iconfont icon-zanting2';
                }
                play.onmouseout = function() {

                    bofang.className = 'iconfont icon-zanting';
                }
            } else {
                video.pause();
                bofang.className = 'iconfont icon-iconfontbofang';
                ctro.innerHTML = '暂停';
                playbig.style.display = 'block';
                play.onmouseover = function() {
                    bofang.className = 'iconfont icon-bofang'
                }
                play.onmouseout = function() {
                    bofang.className = 'iconfont icon-iconfontbofang';
                }
            }
        }

        video.onclick = function() {
            if (video.paused) {
                video.play();
                bofang.className = 'iconfont icon-zanting';
                playbig.style.display = 'none';
                ctro.innerHTML = '播放';

            } else {
                video.pause();
                bofang.className = 'iconfont icon-iconfontbofang';
                playbig.style.display = 'block';
                ctro.innerHTML = '暂停';

            }

        }
        /*时间改变的时候*/

        video.ontimeupdate = function() {
            ontime.innerHTML = time(video.currentTime);
            var bili = video.currentTime / video.duration;
            console.log(bili)
            rage.style.left = progress.offsetWidth * bili - rage.offsetWidth / 2 + 'px';
            line.style.width = progress.offsetWidth * bili + 'px';
        }
        /*当播放完毕的时候*/
        video.onended = function() {
            bofang.className = 'iconfont icon-iconfontbofang';
        }
        totaltime.innerHTML = time(video.duration);

        function time(t) {
            var Time = Math.floor(t);
            var Minutes = Math.floor(Time / 60);
            Minutes = Minutes < 10 ? '0' + Minutes : Minutes;
            var Sections = Time % 60;
            Sections = Sections < 10 ? '0' + Sections : Sections;
            return Minutes + ':' + Sections;
        }
        rage.onmousedown = function(ent) {
            var e = ent || window.event;
            var startX = e.pageX;
            var startPos = rage.offsetLeft;
            window.onmousemove = function(ment) {
                var me = ment || window.event;
                var endX = me.pageX;
                var x = endX - startX;
                var left = startPos + x;
                if (left < -rage.offsetWidth / 2) {
                    left = -rage.offsetWidth / 2;
                }
                if (left > progress.offsetWidth - rage.offsetWidth / 2) {
                    left = progress.offsetWidth - rage.offsetWidth / 2;
                }
                rage.style.left = left + 'px';
                line.style.width = left + rage.offsetWidth / 2 + 'px';
                var bili = (left + rage.offsetWidth / 2) / progress.offsetWidth;
                video.currentTime = video.duration * bili;
            }
            window.onmouseup = function() {
                window.onmousemove = null;
            }
            return false;
        }
        /*全屏*/
        quanping.onclick = function() {
            if (fullscreen()) {
                exitFullscreen();
                container.classList.add('active');
                progress.style.width = '76%';
            } else {
                requestFullscreen(Video);
                container.classList.remove('active');
                progress.style.width = '80%';
            }
        }
        //点击进度条改变视频播放位置 
        progress.onclick = function(ent) {
            e = ent || window.event;
            var x = e.offsetX;
            line.style.width = x + 'px';
            rage.style.left = x - rage.offsetWidth / 2 + 'px';
            var bili = x / progress.offsetWidth;
            video.currentTime = video.duration * bili;
        }
        /*音量控制*/
        yli.onclick = function() {
            if (video.muted) {
                video.muted = false;
                yli.className = 'iconfont icon-yinliangjian';
                line1.style.height = 100 + '%';
                rage1.style.bottom = 100 + '%';
            } else {
                video.muted = true;
                yli.className = 'iconfont icon-jingyin';
                line1.style.height = 0;
                rage1.style.bottom = 0;
            }

        }
        yljian.onmouseover = function() {
            yinliang.style.display = 'block';
        }
        yljian.onmouseout = function() {
            yinliang.style.display = 'none';
        }
        rage1.onmousedown = function(ent) {
            var e = ent || window.event;
            var startY = e.pageY;
            var startPos = line1.offsetHeight - rage1.offsetHeight / 2;
            window.onmousemove = function(ment) {
                yinliang.style.display = 'block';
                var me = ment || window.event;
                var endY = me.pageY;
                var y = startY - endY;
                var bottom = startPos + y;
                if (bottom < -rage1.offsetHeight / 2) {
                    bottom = -rage1.offsetHeight / 2;
                }
                if (bottom > progress1.offsetHeight - rage1.offsetHeight / 2) {
                    bottom = progress1.offsetHeight - rage1.offsetHeight / 2;
                }
                rage1.style.bottom = bottom + 'px';
                var bili = (bottom + rage1.offsetHeight / 2) / progress1.offsetHeight;
                video.volume = bili;
                line1.style.height = progress1.offsetHeight * bili + 'px';
                if (video.volume == 0) {
                    yli.className = 'iconfont icon-jingyin';
                } else {
                    yli.className = 'iconfont icon-yinliangjian';
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
            rage1.style.bottom = y - rage.offsetHeight / 2 + 'px';
            var bili = y / progress1.offsetHeight;
            video.volume = bili;
            console.log(bili);
        }



        function requestFullscreen(ele) {
            // 全屏兼容代码
            if (ele.requestFullscreen) {
                ele.requestFullscreen();
            } else if (ele.webkitRequestFullscreen) {
                ele.webkitRequestFullscreen();
            } else if (ele.mozRequestFullScreen) {
                ele.mozRequestFullScreen();
            } else if (ele.msRequestFullscreen) {
                ele.msRequestFullscreen();
            }
        }

        // 取消全屏
        function exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
        }

        // 判断是否全屏
        function fullscreen() {
            return document.fullscreen ||
                document.webkitIsFullScreen ||
                document.mozFullScreen ||
                document.msFullscreenElement ||
                false;
        }


    }

}