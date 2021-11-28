

//제목
$(document).ready(function() {
    $(".title").lettering();
    $(".button").lettering();
});





$(document).ready(function() {
  animation();
}, 1000);

$('.button').click(function() {
  animation();
});


function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}
        

// 버튼 이벤트
$('.fun-btn').on('click', function(event) {
    $(this).toggleClass('start-fun');
    var $page = $('.page');
    $page.toggleClass('color-bg-start')
      .toggleClass('bg-animate-color');
  
    //change text when when button is clicked
  
    $(this).hasClass('start-fun') ?
      $(this).text('stop the fun') :
      $(this).text('start the fun');
  
  });


        
        //현재 몇번 문제에 있는지 변수로 설정
        var num = 1;

        //문제 정보 KEY-VALUE 형태로 저장
        //문제이름 + 타입정보 + 각 선택지 영향 타입요소
        var q= {
            1:{"title1":"Q1",
                "title2":"오랜만에 휴일. 나는",
                "type":"EI",
                "A":"집 안은 답답해! 밖에 나가서 논다.",
                "B":"나가기 귀찮아... 당당히 집콕한다."},

            2:{"title1":"Q2",
                "title2":"조별과제를 위해 만들어진 단톡방. 나는",
                "type":"EI",
                "A":"먼저 조원들에게 호기롭게 카톡을 보낸다.",
                "B":"우선 조용히 상황을 살핀다."},
                
            3:{"title1":"Q3",
                "title2":"화려한 도시와 고요한 숲. 나는",
                "type":"EI",
                "A":"화려한 도시",
                "B":"고요한 숲"},

            4:{"title1":"Q4",
                "title2":"공부하기 싫을 때 나는",
                "type":"SN", 
                "A":"범위가 줄었으면 좋겠다.", 
                "B":"...시험을 대체 왜 봐야 하는 거지?"},

            5:{"title1":"Q5",
                "title2":"내 상사를 직접 고를 수 있다면 나는",
                "type":"SN",
                "A":"할 일을 구체적으로 지시해주는 상사",
                "B":"대강 방향만 제시해주고 자율에 맡기는 상사"},

            6:{"title1":"Q6",
                "title2":"어딘가 목적지로 향할 때 나는", 
                "type":"SN", 
                "A":"늘 가던 길로 빠르게 간다", 
                "B":"가끔씩은 새로운 길로 들어선다"},

            7:{"title1":"Q7",
                "title2":"벚꽃이 지는걸 보며 나는", 
                "type":"TF", 
                "A":"이제 슬슬 기온이 올라가는 걸 보니 며칠이면 여름이겠구나.", 
                "B":"아아, 벚꽃은 제가 절정인 줄도 모르고 덧없이 지는구나..."},

            8:{"title1":"Q8",
                'title2':'"한번 생각해볼게"라는 말의 뜻은', 
                "type":"TF", 
                "A":"이 얘기가 정말 맞는 말인지 곰곰히 생각해본다는 뜻이다.", 
                "B":"대충 돌려서 거절하는 뜻이다."},

            9:{"title1":"Q9",
                "title2":"너 힘들어 보여서 아이스크림 사왔어", 
                "type":"TF", 
                "A":"내가 힘들어 보였다고???", 
                "B":"(격하게 감동하며) 너무 고마워!!!"},

            10:{"title1":"Q10",
                "title2":"만약 여행을 떠난다면 나는", 
                "type":"JP", 
                "A":"미리 최대한 계획을 세워놓는다.", 
                "B":"즉흥적으로 마음이 내키는 곳으로 향한다."},

            11:{"title1":"Q11",
                "title2":"청소를 할 때 추억의 물견을 발견한다면?", 
                "type":"JP", 
                "A":"지금은 청소중! 일단 청소부터 끝낸다.", 
                "B":"손을 멈추고 추억에 푸욱 잠긴다."},

            12:{"title1":"Q12",
                "title2":"과제를 할때 나는", 
                "type":"JP", 
                "A":"시작일을 기점으로 계획을 세워 완성일을 잡아둔다", 
                "B":"최대한 미루다 마감일에 맞추어 즉흥적으로 완성시킨다"},
        }


        //MBTI 결과를 키로 하는 정보 저장
        var result = {
            //속성을 추가하고 싶으면 더 추가해도 됨
            "ISTJ": {"animal": "하마", "explain": "하마 설명", "img": "ex1.png"},
            "ISFJ": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "INFJ": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "INTJ": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "ISTP": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "ISFP": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "INFP": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "INTP": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            
            "ESTP": {"animal": "멋쟁이사자", "explain": "멋쟁이사자 설명", "img": "ex1.png"},
            "ESFP": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "ENFP": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "ENTP": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "ESTJ": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "ESFJ": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "ENFJ": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
            "ENTJ": {"animal": "호랑이", "explain": "호랑이 설명", "img": "ex1.png"},
        }


        //시작버튼 누르면 초기화면 사라지고, 문제는 보이게
        function start(){
            $(".start").hide();
            $(".question").show();
            $(".container2").hide();

            //시작버튼 누를 경우, 시작화면 숨기고 문제화면 보여주며 첫번째 문제
            next();
        }


        //각 버튼 클릭시 점수상승 함수 - id가 A인 버튼 클릭시
        $("#A").click(function(){
            var type = $("#type").val();

            //해당 타입 아이디에 해당하는 값을 가져옴
            var preValue = $("#"+type).val();

            //형변환 후 이전 값에서 1 값 추가
            $("#"+type).val(parseInt(preValue)+1);

            //다음으로 넘어감
            next();
        });

        //B버튼은 점수 증가할 필요가 없음
        $("#B").click(function(){
            
            //다음으로 넘어감
            next();
        });



        //다음 문제로 넘어가는 함수 설정
        function next(){

            //만약 문제가 끝번호 이후로 넘어가면 - 마지막 문제 이후
            if(num==13){
                $(".question").hide();
                $(".result").show();

                //MBTI를 구하는 최종 로직
                var mbti = "";
                
                //삼항연산자
                ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
                ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
                ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
                ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
                
                //alert(mbti);

                //
                $("#img").attr("src",result[mbti]["img"]);
                $("#animal").html(result[mbti]["animal"]);
                $("#explain").html(result[mbti]["explain"]);


            }  else{ //마지막 문제가 아닐 경우

                //문제 번호에 따라 프로그래스 바 증가   
                //$(".progress").attr('style','width: calc(100/12*'+num+'%)');

                $(".progress").animate({width: (100/12*+num+'%')},800);

                //$(".progress").animate({width:"+=28px"},800);


                //문제에 해당하는 id - html 안에 있는 - q 안의 num 번째 "title"로 대체
                $("#title1").html(q[num]["title1"]);
                $("#title2").html(q[num]["title2"]);
                $("#type").val(q[num]["type"]);
                $("#A").html(q[num]["A"]);
                $("#B").html(q[num]["B"]);

                num++;
            }
        }

