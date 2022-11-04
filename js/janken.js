    var You;
    var random;
    var opponent;
    var point = You - opponent;
    var judge;
    var time = 1;
    var prefecture_name = localStorage.getItem('prefectureName') ;
    var yourscore = Number(localStorage.getItem('yourscore2'));
    var opponentscore = Number(localStorage.getItem('opponentscore2'));
    
    console.log(yourscore);
    console.log(opponentscore);

    // 選択したじゃんけんで数値を変更
    function gu(){
      You = 1;
    };
    function choki(){
      You = 0;
    };
    function pa(){
      You = -1;
    };

    // タイトルを押すと音楽が流れる
    $('#opening_audio').on('click', function(){
      document.getElementById( 'sound-file' ).play() ;
      });
      $('#sound-file').on('ended', function(){
      window.location.href = 'map.html';
    });
    $('.title .small').on('click', function(){
      window.location.href = 'map.html';
    });

    function modoru(){
      localStorage.clear();
    }

    // 相手のじゃんけんの出し手を乱数で決める
    function jankenpon(random){

      if (random === 1){
          return "グー！";
        }else if(random === 0){
          return "チョキ！";
        }else if(random === -1){
          return "パー！";
      };

    };

    // セレクタ設定
    var prefecture = $(".js-prefecture");
    var janken = $(".js-janken");
    var player = $(".js-player");
    var opponent = $(".js-opponent");
    var kekka = $(".js-kekka");
    var anko = $(".img__anko");
    var camp = $(".img__camp");
    var charisma = $(".img__charisma");
    var don = $(".js-don");
    var dodon = $(".js-dodon");
    var kaka = $(".js-kaka");

    // 表示するコンテンツの初期化
    prefecture.html(prefecture_name);
    prefecture.show();
    janken.hide();
    player.hide();
    opponent.hide();
    kekka.hide();
    anko.hide();
    camp.hide();
    charisma.hide();
    
    // じゃんけん表示後、一定時間で画面切り替え
    setTimeout(function(){
      
      prefecture.hide();
      don.get(0).play();
      janken.show();

      setTimeout(function(){

        janken.hide();
        player.show();
        opponent.show();
  
      }, time*1000);

    }, time*1000);

    // 出し手選択後の処理

    function judge(){

      random = Math.floor ( Math.random() * 3 - 1);

      // 選択効果音と相手の出し手表示
      kaka.get(0).play();
      opponent.show();
      opponent.html(jankenpon(random));

      // 勝敗の決定と表示
      setTimeout(function(){

        player.hide();
        opponent.hide();
        charisma.hide();
        anko.hide();
        camp.hide();
      
      // 勝敗の場合分け      
        point = You - random;

        if (point === -2){
          judge = "勝ち！";
          charisma.show();
          yourscore += 1
        }else if(point === -1){
          judge = "負け！";
          anko.show();
          opponentscore += 1
        }else if(point === 0){
          judge = "あいこ！";
          camp.show();
        }else if(point === 1){
          judge = "勝ち！";
          charisma.show();
          yourscore += 1
        }else{
          judge = "負け！";
          anko.show();
          opponentscore += 1
        };

        localStorage.setItem('yourscore1', yourscore );
        localStorage.setItem('opponentscore1', opponentscore );
    
        dodon.get(0).play();
        kekka.html(judge);
        kekka.show();

        // console.log(You);
        // console.log(random);
        // console.log(point);
        // console.log(judge);
        
        // あいこの場合は元に戻り、勝敗が決まったらマップに戻る
        setTimeout(function(){
          if(yourscore + opponentscore < 47){

            if(point === 0){
              document.location.reload();
            }else{
              window.location.href = 'map.html';
            };

          }
          else{
            // エンディング画面
          }

          
        }, time*1000);
        
      }, time*1000);
    };
    
