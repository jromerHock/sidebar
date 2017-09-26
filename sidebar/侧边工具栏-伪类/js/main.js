requirejs.config({
    paths :{
        jquery:'jquery'
    }
});
requirejs(['jquery','backtop'],function ($, backtop) {

  //  new backtop.BackTop($('#backTop'),{
  //      mode:'go'
  //  })

    $('#backTop').backtop({
        mode:'move'
    })
 //   var scroll = new scrollto.ScrollTo({
 //       dest:0,
 //       speed:800
 //   });
 //   $("#backTop").on('click', $.proxy(scroll.move,scroll));
//    $(window).on('scroll',function(){
//        checkPosition($(window).height());
//    });
//
//    checkPosition($(window).height());
//    function move() {
//        $('body, html').animate({
//            scrollTop:0
//        },800)
//    }
//    function go() {
//        $('body, html').scrollTop(0);
//    }
//    function checkPosition(pos) {
//        if($(window).scrollTop() > pos){
//            $("#backTop").fadeIn();
//            $("#backTop").css("display","block");
 //       }else {
//            $("#backTop").fadeOut();
//        }
//    }
});