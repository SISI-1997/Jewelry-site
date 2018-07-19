/**
 * Created by Administrator on 2018/6/15.
 */
//轮播
var arr = ["img/secondB.jpg","img/sbanner.jpg","img/Fbaneer.jpg","img/Pbanner.jpg","img/Jbanner.gif","img/Kbanner.jpg","img/Ibanner.jpg","img/Abanner.jpg","img/Gbanner.jpg"];
var i = -1;
var a = null;
function t(){
    i++;
    if(i >= arr.length){
        i = 0;
    }
    $("#secondBB").attr("src",arr[i]);
    var list = $("#lunbo li").removeClass();
    $(list[i]).addClass("bg");
}
function t1(k){
    i = k;
    clearInterval(a);
    $("#secondBB").attr("src",arr[i]);
    var list = $("#lunbo li").removeClass();
    $(list[i]).addClass("bg");
}
a = setInterval("t()",2000);
$(function(){
    $("#bannern").mouseover(function(){
        clearInterval(a);
    });
    $("#bannern").mouseout(function(){
        a = setInterval("t()",2000);
    });
    t();
});


//无缝滚动(经典珠宝)
$(function(){
    var speed = -2;
    var timer = null;
    var $listt = $('#open ul');
    ulHtml = $listt.html();
    $listt.html(ulHtml+ulHtml);
    var allLi = $listt.children('li');
    var liSize = allLi.length;
    var liWidth =  allLi.eq(0).width();
    var ulWidth = liSize*liWidth;
    $listt.width(ulWidth);
    function silde(){
        if(speed<0)
        {
            var l = $listt.offset().left;
            if(l<=-ulWidth/2)
            {
                l =0;
            }
            l=l+speed;
            $listt.offset({'left':l});
        }
        if(speed>0)
        {
            var l = $listt.offset().left;
            if(l>=0)
            {
                l = -ulWidth/2;
            }
            l=l+speed;
            $listt.offset({'left':l});
        }
    }
    timer = setInterval(silde,30);
    $listt.mouseenter(function(){
        clearInterval(timer);
    });
    $listt.mouseleave(function(){
        timer = setInterval(silde,30);
    });
    $('#scrollLeft').mouseenter(function(){speed=-2; $(this).css('opacity',0.8);}).mouseleave(function(){$(this).css('opacity',0.2);});
    $('#scrollRight').mouseenter(function(){speed=2;$(this).css('opacity',0.8);}).mouseleave(function(){$(this).css('opacity',0.2);});
});



//注册验证
function f1(){
    var span1 = document.getElementById("span1");
    span1.innerHTML = "请输入11位数字";
    span1.style.color = "#7fcec9";
}
function f2(){
    var span1 = document.getElementById("span1");
    var aa = document.getElementById("aa").value;
    if(aa.length == 11 ){
        span1.innerHTML = "✔";
        span1.style.color = "#7fcec9";
    }else{
        span1.innerHTML = "✘";
        span1.style.color = "#7fcec9";
    }
}//手机号
function t11(){
    var span2 = document.getElementById("span2");
    span2.innerHTML = "请输入3-5个字符";
    span2.style.color = "#7fcec9";
}
function t2(){
    var span2 = document.getElementById("span2");
    var bb = document.getElementById("bb").value;
    if(bb.length >= 3 && bb.length <= 5 ){
        span2.innerHTML = "✔";
        span2.style.color = "#7fcec9";
    }else{
        span2.innerHTML = "✘";
        span2.style.color = "#7fcec9";
    }
}//用户名
function o(){
    var span3 = document.getElementById("span3");
    span3.innerHTML = "请输入8-10个字符";
    span3.style.color = "#7fcec9";
}
function c(){
    var span3 = document.getElementById("span3");
    var cc = document.getElementById("cc").value;
    if(cc.length >= 3 && cc.length <= 5 ){
        span3.innerHTML = "✔";
        span3.style.color = "#7fcec9";
    }else{
        span3.innerHTML = "✘";
        span3.style.color = "#7fcec9";
    }
}//密码
function n(){
    var span4 = document.getElementById("span4");
    span4.innerHTML = "请输入8-10个字符";
    span4.style.color = "#7fcec9";
}
function u(){
    var span4 = document.getElementById("span4");
    var ccc = document.getElementById("ccc").value;
    if(ccc.length >= 3 && ccc.length <= 5 ){
        span4.innerHTML = "✔";
        span4.style.color = "#7fcec9";
    }else{
        span4.innerHTML = "✘";
        span4.style.color = "#7fcec9";
    }
}//确认密码
//登录
function y(){
    var span5 = document.getElementById("span5");
    span5.innerHTML = "请输入3-5个字符";
    span5.style.color = "#7fcec9";
}
function r(){
    var span5 = document.getElementById("span5");
    var yonghu = document.getElementById("yonghu").value;
    if(yonghu.length >= 3 && yonghu.length <= 5 ){
        span5.innerHTML = "✔";
        span5.style.color = "#7fcec9";
    }else{
        span5.innerHTML = "✘";
        span5.style.color = "#7fcec9";
    }
}//用户名
function m(){
    var span6 = document.getElementById("span6");
    span6.innerHTML = "请输入8-10个字符";
    span6.style.color = "#7fcec9";
}
function b(){
    var span6 = document.getElementById("span6");
    var mima = document.getElementById("mima").value;
    if(mima.length >= 3 && mima.length <= 5 ){
        span6.innerHTML = "✔";
        span6.style.color = "#7fcec9";
    }else{
        span6.innerHTML = "✘";
        span6.style.color = "#7fcec9";
    }
}//密码


//放大镜
$(function(){
    $('#goodsPic .smallPicList li').mouseenter(function(){
        var n = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('#goodsPic .bigPicList li').eq(n).show().siblings().hide();
        $('#goodsPic .middlePicList li').eq(n).show().siblings().hide();
    });
    $('#maskLayer').mouseenter(function(){
        $('#floatLayer').show();
        $('#goodsPic .bigPicList').show();
    })
        .mouseleave(function(){
            $('#floatLayer').hide();
            $('#goodsPic .bigPicList').hide();
        });
    $('#maskLayer').mousemove(function(event){
        var x = event.offsetX;
        var y = event.offsetY;
        var fw = $('#floatLayer').width();
        var fh = $('#floatLayer').height();
        var mw = $('#maskLayer').width();
        var mh = $('#maskLayer').height();
        var l=0;
        var t=0;
        if(y<fh/2){t=0;}
        else{t=y-fh/2;}
        if(x<fw/2){l=0;}
        else{l=x-fw/2;}
        if(y>mh-fh/2){t=mh-fh;}
        if(x>mw-fw/2){l=mw-fw;}
        $('#floatLayer').css({top:t,left:l});
        var prex = l/(mw-fw);
        var prey = t/(mh-fh);
        var bh = $('#goodsPic .bigPicList li img').height();
        var bw = $('#goodsPic .bigPicList li img').width();
        var ph = $('#goodsPic .bigPicList').height();
        var pw = $('#goodsPic .bigPicList').width();
        var bl = -(bw-pw)*prex;
        var bt = -(bh-ph)*prey;
        $('#goodsPic .bigPicList li img').css({'left':bl,'top':bt});
    });
});





//选项卡
function card(i){
    var card = document.getElementById("card");
    var li = card.getElementsByTagName("li");
    var big_card = document.getElementsByClassName("big_card");
    for(var j = 0; j < big_card.length; j++){
        big_card[j].style.display = "none";
        li[j].style.borderBottom = "1px solid #cccccc";
        li[j].style.borderLeft = "none";
        li[j].style.borderRight = "none";
        li[j].style.borderTop = "none";
    }
    big_card[i].style.display = "block";
    li[i].style.borderBottom = "none";
    li[i].style.borderLeft = "1px solid #cccccc";
    li[i].style.borderRight = "1px solid #cccccc";
    li[i].style.borderTop = "2px solid #7fcec9";
}

//换一批
var arr1 = [
    [{src:"img/moneyy.gif"},{src:"img/moneyyy.gif"},{src:"img/moneyyyy.gif"},{src:"img/moneyyyy.gif"},{src:"img/moneyyyy.gif"}],
    [{src:"img/xiukouu.gif"},{src:"img/niukouuu.gif"},{src:"img/xiukouuu.gif"},{src:"img/xiukouuuu.gif"},{src:"img/xiukouuuuu.gif"}],
    [{src:"img/chunyin.gif"},{src:"img/chunyinnn.gif"},{ src:"img/chunyinnnn.gif"},{src:"img/chunyinnnnn.gif"},{src:"img/chunyinnnnnn.gif"}],
    [{src:"img/moneyyy.gif"},{src:"img/xiukouu.gif"},{ src:"img/chunyin.gif"},{src:"img/xiukouuuu.gif"},{src:"img/moneyyy.gif"}]
];
var h = 1;
function hyp(){
    var pic = $(".pic");
    for(var i = 0; i < pic.length; i++){
        pic[i].src = arr1[h][i].src;//$(img[i]).attr("src",arr[j][i]);
    }
    h++;
    if(h >= arr1.length){
        h = 0;
    }
}

