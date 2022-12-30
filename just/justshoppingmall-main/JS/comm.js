$(document).ready(function(){
  ////처리해야할 일을 넣는다
  //$(누가).어떻게되면(이렇게 하자)
  //$(누구의).1번을(어떻게 하자).2번을(어떻게 하자)
  // link-bnr 를 클릭했을 때

  // #modal 의 css 값을 display:flex 로 변경하자
  $('.link-bnr').click(function(){
    $('#modal').css("display","flex");
  })
  $('.btn-close').click(function(){
    $('#modal').css("display","none");
  })

let now = 1,
  height = 100 ,
  $slide = $('.slide > ul')
  setInterval(function(){
    slide()
  }, 3000)

  function slide(){
    // if 조건문
    // 만약에 1=>2, 2=>3번째 슬라이드라면 
    // 그게 아니라면 (3번 슬라이드라면 3=>1)
    if(now < 3){
      // .slide ul 이 애니메이션 되게 하라
      $slide.animate({
        top : (height * now * (-1)) + '%'
      })
      now = now + 1;
    }else{
      $slide.animate({
        top:0
      })
      now = 1;
    }
    // tab의 모든 section 의 on class를 제거한다. (removeClass('on'))
    // 방금 클릭한 아이의 엄마(부모)의 SECTION TAG에만 on class를 추가한다.(addClass('on'))
    $('.tab .sec-tit').click(function(){
      $('.tab section').removeClass('on')
      $(this).parent().addClass('on')
    })
  }
  
}) //document 종류 괄호
