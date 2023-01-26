var orgimg="";

//닫기 전 경고
//window.onbeforeunload = function(){return '';};

document.addEventListener('DOMContentLoaded', function(){
  //페이지 스탠바이
  chrome.runtime.sendMessage({mode:"canvasok"});
  //캡쳐로딩
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.img){
      if(request.err){
        orgimg=request.img;
        document.getElementById("newimg").innerHTML = "좌표를 파악할 수 없었습니다. 페이지의 표시 부분 전체의 스샷을 표시하고 있습니다.<br><a href=\""+orgimg+"\" download=\""+fname()+"\">이미지를 저장</a><br><img src=\""+orgimg+"\" id=\"nowimg\" style=\"max-height:580px;max-width:1030px;\">";
      }else{
        var img = new Image();
        img.src = request.img;
        img.onload = function(){
          var canvas = document.getElementById('sukusyo');
          var ctx = canvas.getContext('2d');
          canvas.width = 1030;
          canvas.height = 599;
          //레티나 대응
          var ratio = window.devicePixelRatio;
          if(ratio>1){
            var ratx = Math.round(request.sx*ratio); var raty = Math.round(request.sy*ratio);
            var ratwid = Math.round(img.width*ratio); var rathei = Math.round(img.height*ratio);
            img = ctx.drawImage(img,ratx,raty,ratwid,rathei,0,0,img.width,img.height);
            document.getElementById("edithead").innerHTML = '※촬영은 페이지를 스크롤하지 않은 상태에서 실시해 주세요.<b style="color:#ff0000">화면 표시 배율이 100% 이외의 경우는 좌표 차이나 화질의 열화가 일어납니다.『현재의 배율：'+parseInt(ratio*100)+'%』</b>';
          }else{
            ctx.drawImage(img, request.sx, request.sy, 1030, 599,0,0,1030,599);
          }
          orgimg=canvas.toDataURL('image/png');
          /*var cutimg = new Image();
          cutimg.src = orgimg;
          cutimg.onload = function(){
            var canvas = document.getElementById('sukusyo');
            var ctx2 = canvas.getContext('2d');
            canvas.width = 1030;
            canvas.height = 580;
            ctx2.drawImage(cutimg, 0, 0, 1030, 580,0,0,1030,580);
            Ccutimg = canvas.toDataURL('image/png');
            document.getElementById("newimg").innerHTML = "<img src=\""+Ccutimg+"\" id=\"nowimg\">카피라이트 部は『편집を리셋』で 표시 できます";
            document.getElementById("savelink").innerHTML = "<a href=\""+Ccutimg+"\" download=\""+fname()+"\">이미지를 저장</a> (1030x580px)";
          };*/
          document.getElementById("newimg").innerHTML = "<img src=\""+orgimg+"\" id=\"nowimg\">";
          document.getElementById("savelink").innerHTML = "<a href=\""+orgimg+"\" download=\""+fname()+"\">이미지를 저장</a> (1030x599px)";
        };
      }
    }
  });  
});

//사니와 이름 마스크
document.getElementById("namemask").addEventListener("click", function (){
  var msk = "maname";
  var radioList = document.getElementsByName("mask");
  for(var i=0; i<3; i++){
    if (radioList[i].checked){msk = radioList[i].value +"name"; break;}
  }
  radioList = null;
  hensyu(msk);trimreset();return null;
}, false);

//Lv 마스크
document.getElementById("lvmask").addEventListener("click", function(){
  var msk = "malv";
  var radioList = document.getElementsByName("mask");
  for(var i=0; i<3; i++){
    if (radioList[i].checked){msk = radioList[i].value +"lv"; break;}
  }
  radioList = null;
  hensyu(msk);trimreset();return null;
}, false);

//80%
document.getElementById("syukusyo").addEventListener("click", function (){hensyu("syuku");trimreset();return null;}, false);
//카피라이트 컷
document.getElementById("copycut").addEventListener("click", function (){hensyu("ccut");trimreset();return null;}, false);
//주위 트리밍
document.getElementById("wakucut").addEventListener("click", function (){hensyu("wcut");trimreset();return null;}, false);
//JPG
document.getElementById("tojpg").addEventListener("click", function (){hensyu("jpg");trimreset();return null;}, false);


//리셋
document.getElementById("resetimg").addEventListener("click", function (){
  document.getElementById("newimg").innerHTML = "<img src=\""+orgimg+"\" id=\"nowimg\">";
  document.getElementById("savelink").innerHTML = "<a href=\""+orgimg+"\" download=\""+fname()+"\">이미지를 저장</a>"+imgjyoho();
  trimreset();return null;
});

function hensyu(swi){
  //console.log(swi);
  var img = document.getElementById('nowimg');
  var canvas = document.getElementById('sukusyo');
  var ctx = canvas.getContext('2d');
  var xstart=0;var ystart=0;var canwid=img.width; var canhei=img.height;
  
  //縮코・컷
  switch(swi){
    case "ccut": //copy컷
      canwid = 1030; canhei = 580;
      break;
    case "wcut": //枠컷
      xstart=80; ystart=76; canwid = 946; canhei = 504;
      break;
    case "ncut": //任意컷
      var siteix=document.getElementById("sitenx").value;
      var siteiy=document.getElementById("siteny").value;
      var haba=document.getElementById("haba").value;
      var takasa=document.getElementById("takasa").value;
      if(Number(siteix)){xstart=siteix;}if(Number(siteiy)){ystart=siteiy;}
      if(Number(haba)){canwid=haba;}if(Number(takasa)){canhei=takasa;}
      break;
    case "syuku": //縮코
      canwid = Math.floor(img.width*0.8); canhei = Math.floor(img.height*0.8);
      break;
  }

  canvas.width = canwid; canvas.height = canhei;
  if(swi=="wcut" || swi=="ccut" || swi=="ncut"){ctx.drawImage(img, xstart, ystart, canwid, canhei,0,0,canwid,canhei);}
  else if(swi=="syuku"){ctx.drawImage(img,0,0,img.width,img.height,0,0,canwid,canhei);}
  else{ctx.drawImage(img,0,0);}
  
  // 마스크
  switch(swi){
    case "maname": //本마루名
      ctx.fillStyle = 'rgb(173, 50, 56)'; 
      ctx.fillRect(110, 11, 184, 25);
      break;
    case "malv": //本마루Lv
      ctx.fillStyle = 'rgb(173, 50, 56)'; 
      ctx.fillRect(110, 38, 50, 23);
      break;
    case "sename": //戦績名
      ctx.fillStyle = 'rgb(237, 220, 188)'; 
      ctx.fillRect(208, 130, 715, 24);
      break;
    case "selv": //戦績Lv
      ctx.fillStyle = 'rgb(237, 220, 188)'; 
      ctx.fillRect(192, 158, 42, 25);
      break;
    case "btname": //戦後名
      ctx.fillStyle = 'rgb(45, 8, 10)'; 
      ctx.fillRect(7, 46, 230, 25);//16, 46, 220, 25
      break; 
    case "btlv": //戦後Lv
      ctx.fillStyle = 'rgb(45, 8, 10)'; 
      ctx.fillRect(43, 77, 50, 25);//52, 77, 50, 25
      break;
  }
  
  //저장가타式
  var editimg ="";
  if(swi=="jpg"){editimg = canvas.toDataURL('image/jpeg',0.7);}
  else{editimg = canvas.toDataURL('image/png');}

  var eimg = new Image();
  eimg.src = editimg;
  eimg.onload = function(){
    document.getElementById("newimg").innerHTML = "<img src=\""+eimg.src+"\" id=\"nowimg\">";
    document.getElementById("savelink").innerHTML = "<a href=\""+editimg+"\" download=\""+fname()+"\">이미지를 저장</a>"+imgjyoho();
  };
  return null;
}

//타이틀名
function fname(){
  var date = new Date();
  var mm = tdouble(date.getMonth() + 1);
  var dd = tdouble(date.getDate());
  var hh = tdouble(date.getHours());
  var mi = tdouble(date.getMinutes());
  var se = tdouble(date.getSeconds());
  return "tourabu"+date.getFullYear()+mm+dd+hh+mi+se;
}
function tdouble(num){
  num += "";
  if(num.length === 1){num = "0" + num;}
  return num;
}

//이미지정보
function imgjyoho(){
  var nimg=document.getElementById('nowimg');
  return " ("+nimg.width+"x"+nimg.height+"px)";
}

//任意トリミング
document.getElementById("siteicut").addEventListener("change", function(){
  if(document.getElementById("siteicut").checked){
    document.addEventListener('click', onClick, false);
    document.getElementById("capmes").innerText="클릭으로 시작점(왼쪽 위) 설정";
    document.getElementById("ninicut").style.display="block";
  }
  else{
    trimreset();
  }
}, false);
function onClick(e){
  var trimline = document.getElementById('trimline');
  var capmes = document.getElementById("capmes");
  var sitenx = document.getElementById("sitenx");
  var siteny = document.getElementById("siteny");
  var rect = document.getElementById('nowimg').getBoundingClientRect();//rect.left,rect.top,rect.width,rect.height
  var mX =  Math.round(e.clientX - rect.left);
  var mY =  Math.round(e.clientY - rect.top);
  
  if(mX>0 && mY>0 && mX<rect.width && mY<rect.height){ //이미지範囲判定
    if(Number(document.getElementById("haba").value ) > 0 ){
      capmes.innerText="버튼으로 컷 실행, 이미지 밖을 클릭해 리셋";
      return null;
    }
    //始点
    if(sitenx.value === ""){
      trimline.style.display="block";
      trimline.style.top=(e.clientY+window.pageYOffset)+"px";
      trimline.style.left=(e.clientX+window.pageXOffset)+"px";
      sitenx.value = mX;
      siteny.value = mY;
      capmes.innerText="종료점(왼쪽 아래)을 클릭. 이미지 바깥 클릭으로 리셋";
    }
    //終点
    if(Number(sitenx.value) > 0){
      var mW = mX-sitenx.value;
      var mH = mY-siteny.value;
      if(mW>0 && mH>0){
        trimline.style.width=mW+"px";
        trimline.style.height=mH+"px";
        document.getElementById("haba").value = mW;
        document.getElementById("takasa").value = mH;
        capmes.innerText="이미지 바깥을 클릭으로 리셋";
        document.getElementById("cutEnt").style.display="block";
      }
    }
  }
  else{
    capmes.innerText="클릭으로 시작점(왼쪽 위) 설정";
    sitenx.value = "";
    siteny.value = "";
    document.getElementById("haba").value = "";
    document.getElementById("takasa").value = "";
    trimline.style.display="none";
    document.getElementById("cutEnt").style.display="none";
    trimline.style.width="0px";
    trimline.style.height="0px";
  }
}

document.getElementById("cutEnt").addEventListener("click", function (){
  hensyu("ncut");
  trimreset();
  return null;
}, false);

function trimreset(){
  document.getElementById("sitenx").value = "";
  document.getElementById("siteny").value = "";
  document.getElementById("haba").value = "";
  document.getElementById("takasa").value = "";
  
  document.getElementById("cutEnt").style.display="none";
  document.getElementById("trimline").style.display="none";
  document.getElementById("trimline").style.width="0px";
  document.getElementById("trimline").style.height="0px";
  
  document.removeEventListener('click', onClick, false);
  document.getElementById("siteicut").checked=false;
  document.getElementById("capmes").innerText="체크박스 ON으로 범위 지정 시작";
  document.getElementById("ninicut").style.display="none";
}

document.getElementById("mask_ma").addEventListener("click", function(){
  document.getElementById("maskbtn").style.backgroundColor = '#709772';
});
document.getElementById("mask_se").addEventListener("click", function(){
  document.getElementById("maskbtn").style.backgroundColor = '#906fa9';
});
document.getElementById("mask_bt").addEventListener("click", function(){
  document.getElementById("maskbtn").style.backgroundColor = '#c1758a';
});
/*
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      var content = xhr.getResponseHeader('Content-Type');
      console.log("Content: " + content);
    }
  };
  xhr.open("GET" ,nimg.src);
  xhr.send(null);// XHR通信開始
*/