var winposi=null;var windata=null;    var ikouwin={};//★移 유키措置
let radio_btns = document.querySelectorAll("input[type='radio']:not([name='winno'])");
const save_btn=document.getElementById('save');
const status_txt=document.getElementById('status');
//페이지 표시 時呼び出し
function restore_options(){
  chrome.storage.sync.get(['levelone','idoflug','keikenflug','tousoflug','sclock','gdark','ddark','winposi','winposi2','winposi3'], function(items){
    console.log(items);

    if(items.levelone){
      document.getElementById('levelone').checked=true;
    }else{
      document.getElementById('leveloneshow').checked=true;
    }

    if(items.keikenflug){
      document.getElementById('keikenflug').checked=true;
    }else{
      document.getElementById('lvflug').checked=true;
    }

    if(items.tousoflug){
      document.getElementById('t_custom').checked=true;
    }else{
      document.getElementById('t_def').checked=true;
    }

    /*document.getElementById('keikoku').checked = items.keikoku;
    const keist = document.getElementById('alertstatus');
    if(items.keikoku){keist.textContent = '현재의 설정： 『 アラートを사용する 』';}
    else{keist.textContent = '현재의 설정： 『 アラートを사용しない 』';}*/

    if(items.idoflug){
      document.getElementById('idoflug').checked=true;
    }else{
      document.getElementById('idoflug_n').checked=true;
    }

    if(items.sclock){
      document.getElementById('sclock').checked=true;
    }else{
      document.getElementById('sclock_n').checked=true;
    }

    if(items.gdark){
      document.getElementById('gdark').checked=true;
    }else{
      document.getElementById('gdark_n').checked=true;
    }

    if(items.ddark){
      document.getElementById('ddark').checked=true;
    }else{
      document.getElementById('ddark_n').checked=true;
    }

    const winst = document.getElementById('winstatus');
    var tempwinst = "현재의 설정<br>";
    var ikouflug=0;//★移 유키措置
    if(items.winposi){
      var winposiJ = items.winposi;
      if(typeof winposiJ === "string" || winposiJ instanceof String){winposiJ = JSON.parse(items.winposi);ikouflug=1;ikouwin["winposi"]=winposiJ;}//★移 유키措置
      var temozoom = (winposiJ.z) ? (winposiJ.z):1;//移 유키措置
      tempwinst += '『1』 설정한다 （width:'+winposiJ.w+' height:'+winposiJ.h+' top:'+winposiJ.t+' left:'+winposiJ.l+' zoom:'+parseInt(temozoom*100)+'%）<br>';
    }else{tempwinst += '『1』 디폴트 설정 （width:1056 height:665 zoom:100%）<br>';}
    if(items.winposi2){
      var winposi2J = items.winposi2;
      if(typeof winposi2J === "string" || winposi2J instanceof String){winposi2J = JSON.parse(items.winposi2);ikouflug=1;ikouwin["winposi2"]=winposi2J;}//★移 유키措置
      tempwinst += '『2』 설정한다 （width:'+winposi2J.w+' height:'+winposi2J.h+' top:'+winposi2J.t+' left:'+winposi2J.l+' zoom:'+parseInt(winposi2J.z*100)+'%）<br>';
    }else{tempwinst += '『2』 디폴트 설정 （width:1496 height:977 zoom:150%）<br>';}
    if(items.winposi3){
      var winposi3J = items.winposi3;
      if(typeof winposi3J === "string" || winposi3J instanceof String){winposi3J = JSON.parse(items.winposi3);ikouflug=1;ikouwin["winposi3"]=winposi3J;}//★移 유키措置
      tempwinst += '『3』 설정한다 （width:'+winposi3J.w+' height:'+winposi3J.h+' top:'+winposi3J.t+' left:'+winposi3J.l+' zoom:'+parseInt(winposi3J.z*100)+'%）<br>';
    }else{tempwinst += '『3』 디폴트 설정 （width:805 height:537 zoom:80%）<br>';}
    if(ikouflug==1){tempwinst+='<div style="color:#ff0000">데이터 형식 변경으로 인해 설정 정보가 반영되지 않습니다.<br>一度『설정을 저장』데이터 형식 변경으로 인해 설정 정보가 반영되지 않습니다.<br>一度『설정을 저장』버튼을 누르면 상기의 설정이 인계됩니다.<br>아래의『창 설정』을 사용하시면 그쪽이 우선됩니다.</div>';}//★移 유키措置
    winst.innerHTML = tempwinst;
  });
  document.getElementById('popstatus').textContent = '';
  save_btn.style.backgroundColor="#3a81de";
}

//설정저장
function save_options(){
  var leveloneC = document.getElementById('levelone').checked;
  var keikenflugC = document.getElementById('keikenflug').checked;
  var idoflugC = document.getElementById('idoflug').checked;
  var tousoflugC = document.getElementById('t_custom').checked;
//var sallyflugC = document.getElementById('sallyflug').checked;
//var keikokuC = document.getElementById('keikoku').checked;
  var sclockC = document.getElementById('sclock').checked;
  var gdarkC = document.getElementById('gdark').checked;
  var ddarkC = document.getElementById('ddark').checked;

  //var winposiC = (winposi)?(winposi) : false;'keikoku':keikokuC,
  var setobj = {'levelone':leveloneC,'keikenflug':keikenflugC,'tousoflug':tousoflugC,'idoflug':idoflugC,'sclock':sclockC,'gdark':gdarkC,'ddark':ddarkC};
  if(windata){setobj[windata] = winposi;}
  else{Object.assign(setobj,ikouwin);}//★移 유키措置
  winposi = null; windata=null; 
  chrome.storage.sync.set(setobj, function(){
    status_txt.textContent = '설정이 저장되었습니다. 이 페이지를 닫아주세요.';
    restore_options();
  });
}

//ポップアップ窓사이즈取得
function popwin_size(){
  var radioList = document.getElementsByName("winno");
  var winno = null;var madono="";
  for(var i=0; i<3; i++){
    if (radioList[i].checked){winno = radioList[i].value; break;}
  }
  radioList = null;
  if(winno=="wset1"){windata="winposi";madono="『1』";}
  if(winno=="wset2"){windata="winposi2";madono="『2』";}
  if(winno=="wset3"){windata="winposi3";madono="『3』";}
  
chrome.tabs.query({url:"*://pc-play.games.dmm.com/play/tohken*",windowType:"popup"}, function(tabs){
  var popst = document.getElementById('popstatus');
  var zoomlv;
  if(tabs[0]){
    chrome.tabs.getZoom(tabs[0].id, function(zlv){zoomlv=zlv;});
    chrome.windows.get(tabs[0].windowId,function(win){
      popst.innerHTML = '<p>'+madono+' に下記의 정보を설정します<br>width:'+win.width+' height:'+win.height+' top:'+win.top+' left:'+win.left+' zoom:'+parseInt(zoomlv*100)+'%</p>이 정보에서 설정하실 경우 『설정을 저장』 버튼으로 저장해주세요';
      winposi={w:win.width, h:win.height, t:win.top, l:win.left, z:zoomlv};
      //winposi='{"w":'+win.width+', "h":'+win.height+', "t":'+win.top+', "l":'+win.left+', "z":'+zoomlv+'}';
      //console.log(windata,winposi);
      savebtn_col();
   });
  }
  else{
    popst.textContent = '정보를 취득할 수 없었습니다. 게임 윈도우의 상태를 확인하고 다시 시도해주세요.';
    winposi = null; windata=null;
  }   
 });
}

//ポップアップ窓사이즈取得
function popwin_def(){
  var radioList = document.getElementsByName("winno");
  var winno = null;var madono="";
  for(var i=0; i<3; i++){
    if (radioList[i].checked){winno = radioList[i].value; break;}
  }
  radioList = null;
  if(winno=="wset1"){windata="winposi";madono="『1』";}
  if(winno=="wset2"){windata="winposi2";madono="『2』";}
  if(winno=="wset3"){windata="winposi3";madono="『3』";}
  
  var popst = document.getElementById('popstatus');
  popst.innerHTML = '<b>'+madono+'</b>의 설정을 소거합니다';
  winposi=false;
  //console.log(windata,winposi);
  savebtn_col();
}

//저장ボタン
function savebtn_col(){
  save_btn.style.backgroundColor="#ff5722";
  status_txt.textContent = '←저장하지 않으면 설정이 확정되지 않습니다. 변경 시 반드시 저장해주세요.';
}

//설정삭제
document.getElementById('del').addEventListener('click',function(){
  let delcheck = document.getElementById('all_delcheck');
  if(delcheck.checked){
    chrome.storage.sync.clear(function(){
      restore_options();
      delcheck.checked = false;
      alert('설정을 리셋합니다'); 
    });
  }else{alert('삭제할 경우는 확인 체크박스를 ON으로 하고 버튼을 눌러주세요');}
});


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
document.getElementById('popwin').addEventListener('click',popwin_size);
document.getElementById('defwin').addEventListener('click',popwin_def);
for(let target of radio_btns){target.addEventListener('change',savebtn_col);}
