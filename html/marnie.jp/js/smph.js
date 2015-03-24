if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    if(confirm('映画『思い出のマーニー』にはスマートフォン用のサイトがあります。表示しますか？')) {
        location.href = 'smph/index.html';
    }
}
