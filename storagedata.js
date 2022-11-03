//페이지 표시 時呼び出し
function restore_options(){
  chrome.storage.local.get(function(items){
    if(items.saniwalv){document.getElementById('saniwalv').textContent = '사니와Lv：'+items.saniwalv;}
    if(items.syugyou){document.getElementById('syugyou').textContent = '최근 수행 귀환 일시：'+items.syugyou;}
    //console.log(items);
  });
  chrome.storage.local.getBytesInUse(function(bytes){
    const lcapap=(bytes/5000000)*100;
    document.getElementById('localcapacity').textContent = "저장 영역 사용 사이즈： "+bytes+"/5000000 Byte ("+lcapap.toFixed(2)+"%)";
  });
}

//자원목록
document.getElementById('show_sigen').addEventListener('click',function(){
  chrome.storage.local.get({sigen:{}}, function ({sigen}){
    if(!Object.keys(sigen).length){document.getElementById('sigen_err').innerText ="데이터가 없습니다";return;}
    let sigentable="";
    for(let key in sigen){
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      sigentable += '<tr><td>'+sakuseidate+'</td><td>'+sigen[key]['smoku']+'</td><td>'+sigen[key]['sgyo']+'</td><td>'+sigen[key]['srei']+'</td><td>'+sigen[key]['sto']+'</td></tr>';
    }
    //document.getElementById("tousotable").classList.remove("hide");
    document.getElementById('sigenbody').innerHTML = sigentable;
    restore_options();
  });
}); 

//도장목록
document.getElementById('show_touso').addEventListener('click',function(){
  chrome.storage.local.get({touso:{}}, function ({touso}){
    if(!Object.keys(touso).length){document.getElementById('touso_err').innerText ="데이터가 없습니다";return;}
    let tousotable="";
    for(let key in touso){
      let hirou = (touso[key]['sakura'])?"벚꽃":"통상";
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      tousotable += '<tr><td>'+sakuseidate+'</td><td>'+touso[key]['tousoname']+'</td><td>'+touso[key]['moku']+'</td><td>'+touso[key]['gyo']+'</td><td>'+touso[key]['rei']+'</td><td>'+touso[key]['to']+'</td><td>'+touso[key]['fuda']+'</td><td>'+touso[key]['kinjiname']+'</td><td>Lv'+touso[key]['kinjilv']+'</td><td>'+hirou+'</td><td>Lv'+touso[key]['saniwalv']+'</td></tr>';
    }
    //document.getElementById("tousotable").classList.remove("hide");
    document.getElementById('tousobody').innerHTML = tousotable;
    restore_options();
  });
});  

//10연속 목록
document.getElementById('show_jyuren').addEventListener('click',function(){
  chrome.storage.local.get({jyuren:{}}, function ({jyuren}){
    if(!Object.keys(jyuren).length){document.getElementById('jyuren_err').innerText ="데이터가 없습니다";return;}
    let tousotable="";
    for(let key in jyuren){
      let jhead = jyuren[key].head;
      let hirou = (jhead.sakura)? "벚꽃":"통상";
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      let jyurentemp='</td><td>'+jhead.moku+'</td><td>'+jhead.gyo+'</td><td>'+jhead.rei+'</td><td>'+jhead.to+'</td><td>'+jhead.fuda+'</td><td>'+jhead.kinjiname+'</td><td>Lv'+jhead.kinjilv+'</td><td>'+hirou+'</td><td>Lv'+jhead.saniwalv+'</td></tr>';
      for(let i=0;i<10;i++){
        tousotable += '<tr><td>'+sakuseidate+'</td><td>'+jyuren[key].jtouso[i]+jyurentemp;
      }
    }
    //document.getElementById("jyurentable").classList.remove("hide");
    document.getElementById('jyurenbody').innerHTML = tousotable;
    restore_options();
  });
});

//도검제작목록
document.getElementById('show_tanto').addEventListener('click',function(){
  chrome.storage.local.get({tanto:{}}, function ({tanto}){
    if(!Object.keys(tanto).length){document.getElementById('tanto_err').innerText ="데이터가 없습니다";return;}
    let tantotable="";
    for(let key in tanto){
      let hirou = (tanto[key]['sakura'])?"벚꽃":"통상";
      let tokenname = (tanto[key]['tokenname'])? tanto[key]['tokenname']:"";
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      tantotable += '<tr><td>'+sakuseidate+'</td><td>'+tokenname+'</td><td>'+tanto[key]['tantojikan']+'</td><td>'+tanto[key]['moku']+'</td><td>'+tanto[key]['gyo']+'</td><td>'+tanto[key]['rei']+'</td><td>'+tanto[key]['to']+'</td><td>'+tanto[key]['fuda']+'</td><td>'+tanto[key]['kinjiname']+'</td><td>Lv'+tanto[key]['kinjilv']+'</td><td>'+hirou+'</td><td>Lv'+tanto[key]['saniwalv']+'</td></tr>';
    }
    document.getElementById('tantobody').innerHTML = tantotable;
  });
  //결과
  chrome.storage.local.get({kekka:{}}, function ({kekka}){
    if(!Object.keys(kekka).length){document.getElementById('kekkabody').value ="데이터가 없습니다";return;}
    let kekkatable="";
    for(let key in kekka){
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      kekkatable += sakuseidate+"\t"+kekka[key]+"\n";
    }
    document.getElementById('kekkabody').value = kekkatable;
    restore_options();
  });
}); 

//10연속 도검제작목록
document.getElementById('show_tantoten').addEventListener('click',function(){
  chrome.storage.local.get({tantoten:{}}, function ({tantoten}){
    if(!Object.keys(tantoten).length){document.getElementById('tantoten_err').innerText ="데이터가 없습니다";return;}
    let tantotable="";
    for(let key in tantoten){
      let jhead = tantoten[key].head;
      let hirou = (jhead.sakura)?"벚꽃":"통상";
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      let jyurentemp='</td><td>'+jhead.moku+'</td><td>'+jhead.gyo+'</td><td>'+jhead.rei+'</td><td>'+jhead.to+'</td><td>'+jhead.fuda+'</td><td>'+jhead.kinjiname+'</td><td>Lv'+jhead.kinjilv+'</td><td>'+hirou+'</td><td>Lv'+jhead.saniwalv+'</td></tr>';
      for(let i=0;i<10;i++){
        let tokenname = (tantoten[key]['tokenname'][i])? tantoten[key]['tokenname'][i]:"";
        let tantojikan = (tantoten[key]['tantojikan'][i])? tantoten[key]['tantojikan'][i]:"";
        tantotable += '<tr><td>'+sakuseidate+'</td><td>'+tokenname+'</td><td>'+tantojikan+jyurentemp;
      }
     }
    document.getElementById('tantotenbody').innerHTML = tantotable;
  });
  //결과
  chrome.storage.local.get({kekkaten:{}}, function ({kekkaten}){
    if(!Object.keys(kekkaten).length){document.getElementById('kekkatenbody').value ="데이터가 없습니다";return;}
      let kekkatable="";
      for(let key in kekkaten){
        let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
        for(let i=0;i<10;i++){
          kekkatable += sakuseidate+"\t"+kekkaten[key][i]+"\n";
        }
      }
      document.getElementById('kekkatenbody').value = kekkatable;
      restore_options();
    });
}); 

//도검목록
document.getElementById('show_tokenhyo').addEventListener('click',function(){
  chrome.storage.local.get({tokendata:{}}, function({tokendata}){
    if(!Object.keys(tokendata).length){document.getElementById('kentablehead').innerText ="데이터가 없습니다";return;}
    let kentable='<tr>';
    const thead =["부대","No","도검명","부적","Lv","생존","피로","타격","통솔","기동","충력","필살","정찰","은폐","도장1","도장2","도장3","말","난무","입수일"];
    const para=tokendata.para;
    const time=tokendata.time;
    let memo =('memo' in tokendata)? tokendata.memo:"";
    const head="저장일시："+time+"<br>파라미터 표시 ："+para+"<br>메모："+memo;
    const hyolength=tokendata.tokenhyo.length;
    const lowlength=tokendata.tokenhyo[0].length;
    for(let t=0;t<lowlength;t++){kentable += '<th>'+thead[t]+'</th>';}
    kentable += '</tr>';
    for(let i=0;i<hyolength;i++){
      let temp="";
      for(let j=0;j<lowlength;j++){
        temp += '<td>'+tokendata.tokenhyo[i][j]+'</td>';
      }
      kentable += '<tr>'+temp+'</tr>';
    }
    document.getElementById('kentablehead').innerHTML = head;
    document.getElementById("kentable").classList.remove("hide");
    document.getElementById('kentablebody').innerHTML = kentable;
    restore_options();
  });
});

//項目別삭제
document.getElementById('tokendata_del').addEventListener('click',data_del);
document.getElementById('touso_del').addEventListener('click',data_del);
document.getElementById('jyuren_del').addEventListener('click',data_del);
document.getElementById('tanto_del').addEventListener('click',data_del);
document.getElementById('kekka_del').addEventListener('click',data_del);
document.getElementById('tantoten_del').addEventListener('click',data_del);
document.getElementById('kekkaten_del').addEventListener('click',data_del);
document.getElementById('sigen_del').addEventListener('click',data_del);
function data_del(){
  let delcontent= this.name;
  let delcheckid = delcontent+'_delcheck';
  let delcheck = document.getElementById(delcheckid);
  if(delcheck.checked){
    let dellist=[delcontent];
    if(delcontent=='sigen'){dellist.push('sigenday');}
    chrome.storage.local.remove(dellist,function(){
      restore_options();
      delcheck.checked = false;
      alert('삭제했습니다');    
    });
  }else{alert('삭제할 경우 체크박스를 ON으로 하고 버튼을 눌러주세요.');}
}
//local全삭제
document.getElementById('dellocal').addEventListener('click',function(){
  let delcheck = document.getElementById('all_delcheck');
  if(delcheck.checked){
    chrome.storage.local.clear(function(){
      restore_options();
      delcheck.checked = false;
      alert('모든 데이터를 삭제했습니다'); 
    });
  }else{alert('삭제할 경우 체크박스를 ON으로 하고 버튼을 눌러주세요.');}
});

//자원csv
document.getElementById('down_sigen').addEventListener('click',function(){
  chrome.storage.local.get({sigen:{}}, function ({sigen}){
    if(!Object.keys(sigen).length){return;}
    let temptable="";
    for(let key in sigen){
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      temptable += '"'+sakuseidate+'","'+sigen[key]['smoku']+'","'+sigen[key]['sgyo']+'","'+sigen[key]['srei']+'","'+sigen[key]['sto']+'"\r\n';
    }
    const filename = '자원량 기록-'+new Date().toLocaleString('ja-JP').replace(/\s|:|\//g,'');
    //console.log(filename,tousotable);
    downloadCsv(temptable,filename);
  });
});  

//도장목록csv
document.getElementById('down_touso').addEventListener('click',function(){
  chrome.storage.local.get({touso:{}}, function ({touso}){
    if(!Object.keys(touso).length){return;}
    let tousotable="";
    for(let key in touso){
      let hirou = (touso[key]['sakura'])?"벚꽃":"통상";
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      tousotable += '"'+sakuseidate+'","'+touso[key]['tousoname']+'","'+touso[key]['moku']+'","'+touso[key]['gyo']+'","'+touso[key]['rei']+'","'+touso[key]['to']+'","'+touso[key]['fuda']+'","'+touso[key]['kinjiname']+'","Lv'+touso[key]['kinjilv']+'","'+hirou+'","Lv'+touso[key]['saniwalv']+'"\r\n';
    }
    const filename = '도장이력-'+new Date().toLocaleString('ja-JP').replace(/\s|:|\//g,'');
    //console.log(filename,tousotable);
    downloadCsv(tousotable,filename);
  });
});  

//10연속 목록csv
document.getElementById('down_jyuren').addEventListener('click',function(){
  chrome.storage.local.get({jyuren:{}}, function({jyuren}){
    if(!Object.keys(jyuren).length){return;}
    let tousotable="";
    for(let key in jyuren){
      let jhead = jyuren[key].head;
      let hirou = (jhead.sakura)? "벚꽃":"통상";
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      let jyurentemp='","'+jhead.moku+'","'+jhead.gyo+'","'+jhead.rei+'","'+jhead.to+'","'+jhead.fuda+'","'+jhead.kinjiname+'","Lv'+jhead.kinjilv+'","'+hirou+'","Lv'+jhead.saniwalv+'"';
      for(let i=0;i<10;i++){
        tousotable += '"'+sakuseidate+'","'+jyuren[key].jtouso[i]+jyurentemp+"\r\n";
      }
    }
    const filename = '10연속 도장이력-'+new Date().toLocaleString('ja-JP').replace(/\s|:|\//g,'');
    //console.log(filename,tousotable);
    downloadCsv(tousotable,filename);
  });
});

//도검제작목록csv
document.getElementById('down_tanto').addEventListener('click',function(){
  chrome.storage.local.get({tanto:{}}, function ({tanto}){
    if(!Object.keys(tanto).length){return;}
    let tantotable="";
    for(let key in tanto){
      let hirou = (tanto[key]['sakura'])?"벚꽃":"통상";
      let tokenname = (tanto[key]['tokenname'])? tanto[key]['tokenname']:"";
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      tantotable += '"'+sakuseidate+'","'+tokenname+'","'+tanto[key]['tantojikan']+'","'+tanto[key]['moku']+'","'+tanto[key]['gyo']+'","'+tanto[key]['rei']+'","'+tanto[key]['to']+'","'+tanto[key]['fuda']+'","'+tanto[key]['kinjiname']+'","Lv'+tanto[key]['kinjilv']+'","'+hirou+'","Lv'+tanto[key]['saniwalv']+'"\r\n';
    }
    const filename = '도검제작이력-'+new Date().toLocaleString('ja-JP').replace(/\s|:|\//g,'');
    //console.log(filename,tantotable);
    downloadCsv(tantotable,filename);
  });
}); 

//10연속 도검제작목록
document.getElementById('down_tantoten').addEventListener('click',function(){
  chrome.storage.local.get({tantoten:{}}, function ({tantoten}){
    if(!Object.keys(tantoten).length){return;}
    let tantotable="";
    for(let key in tantoten){
      let jhead = tantoten[key].head;
      let hirou = (jhead.sakura)?"벚꽃":"통상";
      let sakuseidate = new Date(parseInt(key)).toLocaleString('ja-JP');
      let jyurentemp=jhead.moku+'","'+jhead.gyo+'","'+jhead.rei+'","'+jhead.to+'","'+jhead.fuda+'","'+jhead.kinjiname+'","Lv'+jhead.kinjilv+'","'+hirou+'","Lv'+jhead.saniwalv+'"';
      for(let i=0;i<10;i++){
        let tokenname = (tantoten[key]['tokenname'][i])? tantoten[key]['tokenname'][i]:"";
        let tantojikan = (tantoten[key]['tantojikan'][i])? tantoten[key]['tantojikan'][i]:"";
        tantotable += '"'+sakuseidate+'","'+tokenname+'","'+tantojikan+'","'+jyurentemp+'\r\n';
      }
    }
    const filename = '10연속 도검제작이력-'+new Date().toLocaleString('ja-JP').replace(/\s|:|\//g,'');
    downloadCsv(tantotable,filename);
  });
}); 

//도검목록csv
document.getElementById('down_tokenhyo').addEventListener('click',function(){
  chrome.storage.local.get({tokendata:{}}, function({tokendata}){
    if(!Object.keys(tokendata).length){return;}
    const para=tokendata.para;
    const memo=(tokendata.memo)? '-'+tokendata.memo:"";
    const time=tokendata.time;
    const filename = time.replace(/\s|:|\//g,'')+'-'+para+memo;
    let csvdatat= tokendata.tokenhyo.map(row => row.map(str => '"' + (str ? str.replace(/"/g, '""') : '') + '"'));
    let csvdata = csvdatat.map(row => row.join(',')).join('\r\n');
    downloadCsv(csvdata,filename);
  });
});
function downloadCsv(array,filename){
  const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
  const blob = new Blob([bom,array],{type:"text/csv"});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.setAttribute('download', filename+'.csv');
  a.type = 'text/csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

//설정저장
/*function save_options(){
  var leveloneC = document.getElementById('levelone').checked;
  var idoflugC = document.getElementById('idoflug').checked;
//var sallyflugC = document.getElementById('sallyflug').checked;
  var keikenflugC = document.getElementById('keikenflug').checked;
  var keikokuC = document.getElementById('keikoku').checked;
  var sclockC = document.getElementById('sclock').checked;
  //var winposiC = (winposi)?(winposi) : false;
  var setobj = {'levelone':leveloneC,'keikoku':keikokuC,'keikenflug':keikenflugC,'idoflug':idoflugC,'sclock':sclockC};
  if(windata){setobj[windata] = winposi;}
  console.log(setobj);
  winposi = null; windata=null; 
  chrome.storage.sync.set(setobj, function(){
    document.getElementById('status').textContent = '설정が저장されました。こ의 페이지を閉じて下さい。';
    restore_options();
  });
}

//sync
function sync_data(){
  chrome.storage.sync.get(function(items){
    document.getElementById('syncstoragedata').textContent = JSON.stringify(items,null,'\t');
  });
  chrome.storage.sync.getBytesInUse(function(bytes){
    const scapap=(bytes/102400)*100;
    document.getElementById('synccapacity').textContent = bytes+"/102400 Byte ("+scapap.toFixed(2)+"%)";
  });
}
var j_key=Date.parse("2021-10-22 00:40:57");
var temptouso ={"fuda":"","gyo": "51","kinjilv": "46","kinjiname": "나마즈오 토시로 [극]","moku": "52","rei": "53","sakura": true,"saniwalv": 188,"to": "50"}
var kekkaname=["병1(평)","병2(평)","병3(평)","병4(평)","병5(평)","병6(평)","병7(평)","병8(평)","병9(평)","병10(평)"];
chrome.storage.local.get({jyuren:{}}, function ({jyuren}) {
  let j_keys = Object.keys(jyuren);
  if(j_keys.length>2){delete jyuren[j_keys[0]];}
  jyuren[j_key] = {head:temptouso,jtouso:kekkaname}; 
  console.log(new Date(j_key).toLocaleString(),j_keys);
  chrome.storage.local.set({jyuren}, function(){restore_options();});
});

document.getElementById('DLlink').addEventListener("click",function(){
	var downtxt = document.querySelector('#downtext').value;
	this.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(downtxt);
}, false);
*/
document.addEventListener('DOMContentLoaded', restore_options);
//document.getElementById('save').addEventListener('click',save_options);
