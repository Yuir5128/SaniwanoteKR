//사니와수첩  (c) 2015 Kagami.E
$(document).ready(function(){
//도검명
const swordname={ 
"3":["미카즈키 무네치카","ta"],"4":["미카즈키 무네치카 [극]","taK"],"5":["코기츠네마루","ta"],"6":["코기츠네마루 [극]","taK"],"7":["이시키리마루","oot"],"8":["이시키리마루 [극]","ootK"],"9":["이와토오시","nag"],"10":["이와토오시 [극]","nagK"],"11":["이마노츠루기","tan"],"12":["이마노츠루기 [극]","tanK"],
"13":["오오덴타 미츠요","ta"],"14":["오오덴타 미츠요 [극]","taK"],"15":["소하야노츠루기","ta"],"16":["소하야노츠루기 [극]","taK"],
"17":["쥬즈마루 츠네츠구","ta"],"18":["쥬즈마루 츠네츠구 [극]","taK"],"19":["닛카리 아오에","wa"],"20":["닛카리 아오에 [극]","waK"],
"21":["오니마루 쿠니츠나","ta"],"23":["나키기츠네","uti"],"24":["나키기츠네 [극]","utiK"],"25":["이치고히토후리","ta"],"26":["이치고히토후리 [극]","taK"],"27":["나마즈오 토시로","wa"],"28":["나마즈오 토시로 [극]","waK"],"29":["호네바미 토시로","wa"],"30":["호네바미 토시로 [극]","waK"],
"31":["히라노 토시로","tan"],"32":["히라노 토시로 [극]","tanK"],"33":["아츠시 토시로","tan"],"34":["아츠시 토시로 [극]","tanK"],
"35":["고토 토시로","tan"],"36":["고토 토시로 [극]","tanK"],"37":["시나노 토시로","tan"],"38":["시나노 토시로 [극]","tanK"],
"39":["마에다 토시로","tan"],"40":["마에다 토시로 [극]","tanK"],"41":["아키타 토시로","tan"],"42":["아키타 토시로 [극]","tanK"],"43":["하카타 토시로","tan"],"44":["하카타 토시로 [극]","tanK"],
"45":["미다레 토시로","tan"],"46":["미다레 토시로 [극]","tanK"],"47":["고코타이","tan"],"48":["고코타이 [극]","tanK"],
"49":["야겐 토시로","tan"],"50":["야겐 토시로 [극]","tanK"],"51":["호쵸 토시로","tan"],"52":["호쵸 토시로 [극]","tanK"],
"53":["오오카네히라","ta"],"54":["오오카네히라 [극]","taK"],"55":["우구이스마루","ta"],"56":["우구이스마루 [극]","taK"],"57":["아카시 쿠니유키","ta"],"58":["아카시 쿠니유키 [극]","taK"],"59":["호타루마루","oot"],"60":["호타루마루 [극]","ootK"],
"61":["아이젠 쿠니토시","tan"],"62":["아이젠 쿠니토시 [극]","tanK"],"63":["센고 무라마사","uti"],"64":["센고 무라마사 [극]","rutiK"],"65":["톤보키리","ya"],"66":["톤보키리 [극]","yaK"],"67":["모노요시 사다무네","wa"],"68":["모노요시 사다무네 [극]","waK"],
"69":["타이코가네 사다무네","tan"],"70":["타이코가네 사다무네 [극]","tanK"],"71":["킷코 사다무네","uti"],"72":["킷코 사다무네 [극]","utiK"],"73":["쇼쿠다이키리 미츠타다","ta"],"74":["쇼쿠다이키리 미츠타다 [극]","taK"],"75":["다이한냐 나가미츠","ta"],"76":["다이한냐 나가미츠 [극]","taK"],"77":["코류 카게미츠","ta"],"78":["코류 카게미츠 [극]","taK"],
"79":["코우세츠 사몬지","ta"],"80":["코우세츠 사몬지 [극]","taK"],"81":["소우자 사몬지","uti"],"82":["소우자 사몬지 [극]","utiK"],"83":["사요 사몬지","tan"],"84":["사요 사몬지 [극]","tanK"],
"85":["카슈 키요미츠","uti"],"86":["카슈 키요미츠 [극]","utiK"],"87":["야마토노카미 야스사다","uti"],"88":["야마토노카미 야스사다 [극]","utiK"],
"89":["카센 카네사다","uti"],"90":["카센 카네사다 [극]","utiK"],"91":["이즈미노카미 카네사다","ruti"],"92":["이즈미노카미 카네사다 [극]","rutiK"],"93":["무츠노카미 요시유키","uti"],"94":["무츠노카미 요시유키 [극]","utiK"],
"95":["야만바기리 쿠니히로","uti"],"96":["야만바기리 쿠니히로 [극]","utiK"],"97":["야마부시 쿠니히로","ta"],"98":["야마부시 쿠니히로 [극]","taK"],"99":["호리카와 쿠니히로","wa"],"100":["호리카와 쿠니히로 [극]","waK"],
"101":["하치스카 코테츠","uti"],"102":["하치스카 코테츠 [극]","utiK"],"103":["우라시마 코테츠","wa"],"104":["우라시마 코테츠 [극]","waK"],"105":["나가소네 코테츠","uti"],"106":["나가소네 코테츠 [극]","utiK"],
"107":["히게키리","ta"],"108":["히게키리 [특]","ta"],"109":["히게키리 [특二]","ta"],"110":["히게키리 [특三]","ta"],"111":["히게키리 [극]","taK"],
"112":["히자마루","ta"],"113":["히자마루 [특]","ta"],"114":["히자마루 [특二]","ta"],"115":["히자마루 [극]","taK"],
"116":["오오쿠리카라","ruti"],"117":["오오쿠리카라 [극]","rutiK"],"118":["헤시키리 하세베","uti"],"119":["헤시키리 하세베 [극]","utiK"],"120":["후도 유키미츠","tan"],"121":["후도 유키미츠 [극]","tanK"],
"122":["시시오","ta"],"123":["시시오 [극]","taK"],"124":["코가라스마루","ta"],"125":["코가라스마루 [극]","taK"],"126":["누케마루","ta"],"128":["도다누키 마사쿠니","ruti"],"129":["도다누키 마사쿠니 [극]","rutiK"],
"130":["츠루마루 쿠니나가","ta"],"131":["츠루마루 쿠니나가 [극]","taK"],"132":["타로타치","oot"],"133":["타로타치 [극]","ootK"],"134":["지로타치","oot"],"135":["지로타치 [극]","ootK"],
"136":["니혼고","ya"],"137":["니혼고 [극]","yaK"],"138":["오테기네","ya"],"139":["오테기네 [극]","yaK"],
"140":["토모에가타 나기나타","nag"],"141":["토모에가타 나기나타 [극]","nagK"],"142":["모리 토시로","tan"],"143":["모리 토시로 [극]","tanK"],"144":["코테기리 고우","wa"],"145":["코테기리 고우 [극]","waK"],
"146":["켄신 카게미츠","tan"],"147":["켄신 카게미츠 [극]","tanK"],"148":["아즈키 나가미츠","ta"],"149":["아즈키 나가미츠 [극]","taK"],"150":["휴가 마사무네","tan"],"151":["휴가 마사무네 [극]","tanK"],
"152":["시즈카가타 나기나타","nag"],"153":["시즈카가타 나기나타 [극]","nagK"],"154":["난센 이치몬지","uti"],"155":["난센 이치몬지 [극]","utiK"],"156":["치요가네마루","ta"],"157":["치요가네마루 [극]","taK"],
"158":["야만바기리 쵸우기","uti"],"159":["야만바기리 쵸우기 [극]","utiK"],"160":["부젠 고우","uti"],"161":["부젠 고우 [극]","utiK"],"162":["네네키리마루","oot"],"163":["네네키리마루 [극]","ootK"],
"164":["하쿠산 요시미츠","tur"],"166":["난카이 타로 쵸우손","uti"],"168":["히젠 타다히로","wa"],"170":["챠탄나키리","tan"],"172":["쿠와나 고우","uti"],
"174":["스이신시 마사히데","uti"],"176":["미나모토 키요마로","uti"],"178":["마츠이 고우","uti"],"180":["산쵸모","ta"],"182":["코킨덴쥬노타치","ta"],"184":["지조 유키히라","uti"],"186":["치가네마루","wa"],
"188":["닛코 이치몬지","ta"],"190":["타이코 사몬지","tan"],"192":["사미다레 고우","uti"],"194":["오오치도리 쥬몬지야리","ya"],"196":["한진","wa"],"198":["이치몬지 노리무네","ta"],"200":["무라쿠모 고우","uti"],
"202":["히메츠루 이치몬지","ta"],"204":["후쿠시마 미츠타다","ta"],"206":["시치세이켄","tur"],"210":["이나바 고우","ruti"],"212":["사사누키","ta"],
"def":["（데이터 없음）","tan"]
};

//도장データ 명 ,クラス,병,타,통,기,충,정,은폐
const equipname={
"1":["투석(평)","eq1","8","0","0","0","0","1","1"],
"2":["투석(상)","eq2","9","0","0","0","0","2","2"],
"3":["투석(특)","eq3","10","0","0","0","0","3","3"],
"4":["창(평)","eq4","7","0","0","1","2","0","0"],
"5":["창(상)","eq5","7","0","0","2","3","0","0"],
"6":["창(특)","eq6","8","0","0","3","5","0","0"],
"7":["경보(평)","eq7","8","0","0","2","0","0","1"],
"8":["경보(상)","eq8","9","0","0","2","0","0","2"],
"9":["경보(특)","eq9","10","0","0","5","0","0","3"],
"10":["중보(평)","eq10","10","1","2","0","0","0","0"],
"11":["중보(상)","eq11","11","2","2","0","0","0","0"],
"12":["중보(특)","eq12","12","3","5","0","0","0","0"],
"13":["방패(평)","eq13","11","0","5","0","0","0","0"],
"14":["방패(상)","eq14","13","0","7","0","0","0","0"],
"15":["방패(특)","eq15","15","0","10","0","0","0","0"],
"16":["경기(평)","eq16","9","1","0","2","0","0","0"],
"17":["경기(상)","eq17","10","2","1","3","0","0","0"],
"18":["경기(특)","eq18","12","3","3","5","0","0","0"],
"19":["중기(평)","eq19","11","1","3","0","1","0","0"],
"20":["중기(상)","eq20","12","2","3","1","2","0","0"],
"21":["중기(특)","eq21","13","3","5","3","3","0","0"],
"22":["정예(평)","eq22","11","0","2","2","0","1","1"],
"23":["정예(상)","eq23","12","0","3","3","0","2","2"],
"24":["정예(특)","eq24","13","0","5","5","0","3","3"],
"25":["궁(평)","eq25","6","0","0","0","0","0","2"],
"26":["궁(상)","eq26","7","1","0","0","1","0","3"],
"27":["궁(특)","eq27","8","3","0","0","3","0","5"],
"28":["총(평)","eq28","5","0","0","0","0","2","0"],
"29":["총(상)","eq29","6","1","0","0","1","3","0"],
"30":["총(특)","eq30","6","3","0","0","3","5","0"],
"31":["투콩(평)","eq31","8","2","0","0","0","1","1"],
"32":["투콩(상)","eq32","9","3","0","0","0","2","2"],
"33":["투콩(특)","eq33","12","6","0","0","0","3","3"],
"34":["수포(평)","eq34","8","0","0","0","0","2","0"],
"35":["수포(상)","eq35","9","1","0","0","1","3","0"],
"36":["수포(특)","eq36","10","3","0","0","3","5","0"],
"10001":["01오우바","ho10001","0","3","0","7","0","0","0"],
"10002":["02미쿠니구로","ho10002","0","0","3","10","3","0","0"],
"10003":["03마츠카제","ho10003","0","2","2","13","0","0","0"],
"10004":["04코히바리","ho10004","0","0","2","17","0","2","2"],
"10005":["05타카다테구로","ho10005","0","0","0","13","3","0","0"],
"10006":["06하나코지","ho10006","0","0","3","15","0","0","0"],
"10007":["07세이가이하","ho10007","0","0","0","13","0","3","2"],
"10008":["08모치즈키","ho10008","0","3","0","17","0","0","2"],
"11011":["시로게","ho11011","0","0","0","5","0","0","0"],
"11021":["카게","ho11021","0","3","0","2","0","0","0"],
"11031":["아오게","ho11031","0","5","0","0","0","0","0"],
"11041":["제1호","ho11041","0","2","2","2","2","2","2"],
"11042":["제2호","ho11042","0","2","2","2","2","2","2"],
"11043":["제3호","ho11043","0","2","2","2","2","2","2"],
"11044":["제4호","ho11044","0","2","2","2","2","2","2"],
"11045":["제5호","ho11045","0","5","5","5","5","5","5"],
"11046":["제6호","ho11046","0","3","3","3","3","3","3"],
"11047":["제7호","ho11047","0","3","3","3","3","3","3"],
"def":["데이터 없음","def","0","0","0","0","0","0","0"]
};

// 도검種アイコン
function tosyuico(tosyu){
  const tousyuico={
    "tan":'<span class="tanico">단</span>',
    "tanK":'<span class="tanKico">극단</span>',
    "wa":'<span class="waico">협</span>',
    "waK":'<span class="waKico">극협</span>',
    "uti":'<span class="utiico">은타</span>',
    "ruti":'<span class="rutiico">금타</span>',
    "utiK":'<span class="utiKico">은극타</span>',
    "rutiK":'<span class="rutiKico">금극타</span>',
    "ta":'<span class="taico">태</span>',
    "taK":'<span class="taKico">극태</span>',
    "oot":'<span class="ootico">대</span>',
    "ootK":'<span class="ootKico">극대</span>',
    "ya":'<span class="yaico">창</span>',
    "yaK":'<span class="yaKico">극창</span>',
    "nag":'<span class="nagico">치</span>',
    "nagK":'<span class="nagKico">극치</span>',
    "tur":'<span class="turico">검</span>',
    "turK":'<span class="turKico">극검</span>'
  };
  return tousyuico[tosyu];
}
//실장일
function jisso(tokennno){
  const jissobi ={1:"",2:"",3:"2015-01-14",4:"2022-04-12",5:"2015-01-23",6:"2021-04-20",7:"2015-01-14",8:"2019-02-26",9:"2015-01-14",10:"2020-02-12",
    11:"2015-01-14",12:"2016-06-14",13:"2016-08-16",14:"",15:"2016-08-16",16:"",17:"2016-03-18",18:"",19:"2015-01-14",20:"2017-08-01",
    21:"2020-03-01",22:"",23:"2015-01-14",24:"2017-12-05",25:"2015-01-14",26:"2021-01-14",27:"2015-01-14",28:"2017-08-01",29:"2015-01-14",30:"2017-08-01",
    31:"2015-01-14",32:"2016-05-17",33:"2015-01-14",34:"2016-05-17",35:"2015-11-19",36:"2017-03-14",37:"2016-04-12",38:"2017-04-25",39:"2015-01-14",40:"2016-07-26",
    41:"2015-01-14",42:"2016-09-14",43:"2015-06-11",44:"2017-02-21",45:"2015-01-14",46:"2016-05-17",47:"2015-01-14",48:"2016-05-17",49:"2015-01-14",50:"2016-10-04",
    51:"2016-10-18",52:"2017-07-25",53:"2016-12-20",54:"",55:"2015-01-14",56:"2021-02-16",57:"2015-05-01",58:"2021-05-18",59:"2015-01-14",60:"2019-02-26",
    61:"2015-01-14",62:"2016-07-26",63:"2017-01-31",64:"2018-02-27",65:"2015-01-14",66:"2019-07-30",67:"2015-10-29",68:"2017-08-29",69:"2016-06-23",70:"2017-07-04",
    71:"2016-08-23",72:"2018-02-27",73:"2015-01-14",74:"2020-08-18",75:"2017-10-18",76:"2021-09-14",77:"2017-08-08",78:"2021-08-17",79:"2015-01-14",80:"2021-03-16",
    81:"2015-01-14",82:"2017-10-31",83:"2015-01-14",84:"2016-09-14",85:"2015-01-14",86:"2018-06-28",87:"2015-01-14",88:"2017-10-10",89:"2015-01-14",90:"2018-07-17",
    91:"2015-01-14",92:"2017-10-10",93:"2015-01-14",94:"2018-04-10",95:"2015-01-14",96:"2018-08-21",97:"2015-01-14",98:"2020-09-08",99:"2015-01-14",100:"2017-08-01",
    101:"2015-01-14",102:"2018-05-22",103:"2015-03-17",104:"2017-08-29",105:"2015-03-17",106:"2017-10-10",107:"2015-12-30",108:"2015-12-30",109:"2015-12-30",110:"2015-12-30",
    111:"2020-11-17",112:"2015-12-29",113:"2015-12-29",114:"2015-12-29",115:"2020-12-17",116:"2015-01-14",117:"2017-12-05",118:"2015-01-14",119:"2017-10-31",120:"2016-02-16",
    121:"2017-05-09",122:"2015-01-14",123:"2020-10-13",124:"2016-11-18",125:"",126:"2022-08-29",127:"",128:"2015-01-14",129:"2017-12-05",130:"2015-01-14",
    131:"2021-01-14",132:"2015-01-14",133:"2018-12-14",134:"2015-01-14",135:"2018-12-14",136:"2015-08-11",137:"2019-08-20",138:"2015-01-14",139:"2019-06-25",140:"2017-07-04",
    141:"2020-02-12",142:"2017-07-25",143:"2021-04-20",144:"2017-08-15",145:"",146:"2017-09-05",147:"2021-06-15",148:"2017-10-03",149:"2021-06-15",150:"2017-12-19",
    151:"2021-05-18",152:"2018-04-17",153:"2020-02-12",154:"2018-04-24",155:"2021-10-12",156:"2018-06-28",157:"2021-07-13",158:"2018-10-31",159:"",160:"2018-11-27",
    161:"",162:"2018-12-18",163:"",164:"2019-02-19",165:"",166:"2019-04-24",167:"",168:"2019-04-24",169:"",170:"2019-07-30",
    171:"",172:"2019-09-24",173:"",174:"2019-11-19",175:"",176:"2019-11-19",177:"",178:"2019-12-10",179:"",180:"2019-12-24",
    181:"",182:"2020-04-28",183:"",184:"2020-04-28",185:"",186:"2020-07-21",187:"",188:"2020-08-10",189:"",190:"2020-10-20",
    191:"",192:"2020-12-01",193:"",194:"2020-12-17",195:"",196:"2021-01-01",197:"",198:"2021-01-19",199:"",200:"2021-02-09",
    201:"",202:"2021-08-11",203:"",204:"2021-12-21",205:"",206:"2022-04-12",207:"",208:"",209:"",210:"2022-04-26",211:"",212:"2022-07-26",213:"",214:"",215:"",216:"",217:""
  };
  return jissobi[tokennno];
}

var tokenobj = new Object(null);
var equipobj = new Object(null);
var partyobj = new Object(null);
var repairobj = new Object(null);
var forgeobj = new Object(null);
var tousousoubi = new Object(null);
var enseitime = new Object(null);
var tokenIdNa = new Object(null);//非鍵含 도검シリアル： 도검No
var tousyu = [0,0,0,0,0,0,0,0,0,0];// 도검種 표시 
var soubion_frag=1; //파라미터전환フラグ
var hensei_frag=0; //장비替え
var kinji = "";var secnum = "";
var maplog = "";
var sort = {}; //정렬昇降スイッチ
var nowsort = 38;
var comp_frag=0;
var icoflg=0;
const kentable=$("#kentable");
const nyusyu_td = document.getElementById('nyusyu_td');
var tousokekka="";var saniwalv=""; var tousocustom=false;let s_hozonday="";let k_hozonday="";//var alertfrag=false; 출진アラート
//["#tno","1"],["#lv","4"],["#atk","8"],["#def","11"],["#mov","14"],["#bac","17"],["#loy","20"],["#sco","21"],["#hid","24"],["#hiro","27"],["#tai","38"]

//개발 도구의 네트워크 정보를 줍다---------------------------------------------
chrome.devtools.network.onRequestFinished.addListener(function(requ) {
  if(requ.request.method != "POST") return;
  if (!/^https?:\/\/[a-z0-9]+\.touken-ranbu\.jp\/[a-z/_]+?(\?uid=[0-9]+)*$/.test(requ.request.url)) return; //url正規목록現チェック
  var requrl = requ.request.url;
  requrl =requrl.replace(/\/?\?uid=[0-9]+$/, "");
  //var requrl = requ.request.url.replace(/^http:\/\/.+?\.touken-ranbu\.jp/, "");
  //console.dir(requrl); //★コンソールrequ.request.postData
  if(requrl.endsWith('/battle'))return;
  if(requrl.endsWith('/shop/list'))return;
  if(requrl.endsWith('/furniture/index'))return;
  requ.getContent(function (content) { 
    if(!content) return;
    var items = new Object(null);
    //本마루
    if(requrl.endsWith('/home')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      tokenIdNa = null;
      maplog = "";
      $("#flontpanel").empty();
      $("#teireuchi").clone().appendTo("#flontpanel");
      $("#flontpanel").append('<button id="timerhyoji">▼ 통지설정</button><div id="timerinfo"></div>');
      //자원기록
      const s_today = items.now.substr(0,10);
      if(s_today != s_hozonday){
        const createtime = Date.parse(items.now);
        const tempsigen = {smoku:items.resource.charcoal,sgyo:items.resource.steel,srei:items.resource.coolant,sto:items.resource.file};
        chrome.storage.local.get({sigen:{}}, function ({sigen}){
          let t_keys = Object.keys(sigen);
          if(t_keys.length>99){delete sigen[t_keys[0]];}
          sigen[createtime] = tempsigen; 
          chrome.storage.local.set({sigen,sigenday:s_today}, function(){});
        });
        console.log(s_today,tempsigen);
        s_hozonday=s_today;
      }
      content=null;tousokekka="";return;
    }

    //출진開始
    if(requrl.endsWith('/sally/sally')||requrl.endsWith('/sally/eventsally')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").empty();
      syupatu(items.now,requ.request.postData.params);
      //if(alertfrag){window.alert("★☆★ 출진중はDevtool窓を閉じて下さい ★☆★");}
      $('html,body').animate({scrollTop:0}, 'fast');
      content=null;return;
    }

    //출진進 유키
    if(requrl.endsWith('/sally/forward')||requrl.endsWith('/sally/eventforward')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      forward(items);
      content=null;return;
    }

    //출진・レイド
    if(requrl.endsWith('/sally')||requrl.endsWith('/raid_main')){
			//廃止 if($('#sallyflag').prop('checked')){
      if (/\/sally\/sally$/.test(requrl)) return;
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").empty();
      $("#tousouhi").empty();
      //teire(items,0);//수리정보
      tokendata(items);syojyun(38);hyouji();hensei_frag=0;nowsort=38;sort[38]=1;
      //코반기록
      const k_today = items.now.substr(0,10);
      const tempkoban = (Object.keys(items.currency).length) ? items.currency.money : null;
      if(k_today != k_hozonday && tempkoban){
        const createtime = Date.parse(items.now);
        chrome.storage.local.get({koban:{}}, function ({koban}){
          let t_keys = Object.keys(koban);
          if(t_keys.length>99){delete koban[t_keys[0]];}
          koban[createtime] = tempkoban; 
          chrome.storage.local.set({koban,kobanday:k_today}, function(){});
        });
        k_hozonday=k_today;
        console.log(k_today,tempkoban);
      }
      $("#date").text(items.now+" - 도검정보　코반："+tempkoban);
      syutujin();
      $('html,body').animate({scrollTop:0}, 'fast');
      content=null;return;
			//}
    }

    //연련 편성
    if(requrl.endsWith('/party/list') || requrl.endsWith('practice')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").empty();
      $("#tousouhi").empty();
      tokendata(items);syojyun(38);hyouji();hensei_frag=0;nowsort=38;sort[38]=1;
      $("#date").text(items.now+" - 도검정보");
      content=null;return;
    }

    //연결
    if(requrl.endsWith('/composition')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").empty();
      $("#tousouhi").empty();
      var sortno = 1;
      var datetext = "";
      if($('#compflag').prop('checked')){sortno=38;comp_frag=0;}else{comp_frag=1;datetext="　※안 잠김・Lv1자동 표시 　노란색은 수행 가능 도검";}//특수動作
      tokendata(items.composition);syojyun(sortno);hyouji();hensei_frag=0;
      $("#date").text(items.now+" - 도검정보"+datetext);
      if(items.composition.extreme.leave){
        var syugyoka = "";
        for(var i in items.composition.extreme.leave){syugyoka += '#'+items.composition.extreme.leave[i]+',';}
        if(syugyoka.length>0){
          syugyoka = syugyoka.slice(0,-1);//console.log(syugyoka);
          kentable.find(syugyoka).addClass('syugyo');  
        }
      }
      comp_frag=0;content=null;return;
    }

    //편성실행
    if(requrl.endsWith('/party/setsword') || requrl.endsWith('/party/removesword') || requrl.endsWith('/party/partyreplacement')){
      if(!Object.keys(tokenobj).length)return;
      if(!Object.keys(equipobj).length)return;
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      tokenset(items);sorthozon(nowsort);hyouji();
      content=null;return;
    }

    //장비변경  
    if(requrl.endsWith('/setequip') || requrl.endsWith('/removeequip') || requrl.endsWith('/setitem') || requrl.endsWith('/removeitem') || requrl.endsWith('/removeall')){
      if(!Object.keys(tokenobj).length)return;
      if(!Object.keys(equipobj).length)return;
      if(!Object.keys(partyobj).length)return;
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      tousouset(items);sorthozon(nowsort);hyouji();hensei_frag=1;
      content=null;return;
    }
    
		//장비解放
    if(requrl.endsWith('/releaseequip')){
      if(!Object.keys(tokenobj).length)return;
      if(!Object.keys(equipobj).length)return;
      if(!Object.keys(partyobj).length)return;
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      tokendata(items);sorthozon(nowsort);hyouji();hensei_frag=1;
      content=null;return;
    }

		//부대解散
    if(requrl.endsWith('/partydissolution')){
      if(!Object.keys(tokenobj).length)return;
      if(!Object.keys(equipobj).length)return;
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      tokenset(items.party);sorthozon(nowsort);hyouji();
      content=null;return;
    }
		
    //도검제작
    if(requrl.endsWith('/forge')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").empty();
      $("#tousouhi").empty();
      tokendata(items);syojyun(38);hyouji();hensei_frag=0;
      tanto(items);
      //$("#teireuchi").clone().appendTo("#flontpanel");
      $("#date").text(items.now+" - 도검제작정보");
      $('html,body').animate({scrollTop:0}, 'fast');
      content=null;return;
    }
    
    //도검제작실행
    if(requrl.endsWith('/forge/start')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").children("#teireuchi").remove();
      tantos(items,requ.request.postData.params);
      //$("#teireuchi").clone().appendTo("#flontpanel");
      $("#date").text(items.now+" - 도검제작정보");
      content=null;return;
    }

    //10연속 도검제작
    if(requrl.endsWith('/forge/startmultiple')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").children("#teireuchi").remove();
      tantosten(items,requ.request.postData.params);
      $("#date").text(items.now+" - 도검제작정보");
      content=null;return;
    }
    
    //도검제작완료
    if(requrl.endsWith('/forge/complete') || requrl.endsWith('/forge/fast')){
      var positem=requ.request.postData.params;
      if(positem[0]['name']=="slot_no"){var slot_no=parseInt(positem[0]['value']);forgeobj[slot_no] = "";}
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      const createtime = Date.parse(items.now);
      let kekkaname = (swordname.hasOwnProperty(items.sword_id))? swordname[items.sword_id][0]:"도검번호"+items.sword_id;
      //저장
      chrome.storage.local.get({kekka:{}}, function ({kekka}){
        let t_keys = Object.keys(kekka);
        if(t_keys.length>99){delete kekka[t_keys[0]];}
        kekka[createtime] = kekkaname; 
        chrome.storage.local.set({kekka}, function(){});
      });
      positem=null;return;
    }

    //10연속 도검제작완료
    if(requrl.endsWith('/forge/completemultiple') || requrl.endsWith('/forge/fastmultiple')){
      let positem_ten=requ.request.postData.params;
      if(positem_ten[0]['name']=="slot_no"){let slot_no_ten=parseInt(positem_ten[0]['value']);forgeobj[slot_no_ten] = "";}
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      const createtime = Date.parse(items.now);
      let kekkaname =[];
      for(let i in items.sword){
        kekkaname[i] = (swordname.hasOwnProperty(items.sword[i].sword_id))? swordname[items.sword[i].sword_id][0]:"도검번호"+items.sword[i].sword_id;
      }
      //저장
      chrome.storage.local.get({kekkaten:{}}, function ({kekkaten}){
        let t_keys = Object.keys(kekkaten);
        if(t_keys.length>19){delete kekkaten[t_keys[0]];}
        kekkaten[createtime] = kekkaname; 
        chrome.storage.local.set({kekkaten}, function(){});
      });
      positem_ten=null;return;
    }
    
    //도장
    if(requrl.endsWith('/produce')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").empty().html('<div class="con_head">도장</div>'+sigen(items.resource)+''+touso(items));
      $("#date").text(items.now+" - 도장정보");
      $('html,body').animate({scrollTop:0}, 'fast');
      content=null;return;
    }
    //도장실행
    if(requrl.endsWith('/produce/start')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      tousos(items,requ.request.postData.params);
      content=null;return;
    }
    //10연속 실행
    if(requrl.endsWith('/produce/continue')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      tousoten(items,requ.request.postData.params);
      content=null;return;
    }
    
    //수리
    if(requrl.endsWith('/repair')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      if(items.sword){
        $("#flontpanel").empty();
        teire(items,1);
        $("#teireuchi").clone().appendTo("#flontpanel");
        if(Object.keys(items.sword).length === 1){//부상 도검いないとき근시取得
          const secNum=Object.keys(items.sword)[0];
          console.log(secNum);
          chrome.storage.local.set({secnum:secNum}, function(){});
          secnum=secNum;
        }
        if(Object.keys(equipobj).length){tokendata(items);hensei_frag=1;$("#tousouhi").empty();}
      }else{
        $("#flontpanel").children("#teireuchi").remove();
        teires(items);
        $("#teireuchi").clone().appendTo("#flontpanel");
      } 
      if(Object.keys(tokenobj).length>0){syojyun(38);hyouji();}
      $("#date").text(items.now+" - 수리정보");
      $('html,body').animate({scrollTop:0}, 'fast');
      content=null;return;
    }

    //내번
    if(requrl.endsWith('/duty')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").empty();
      tokendata(items);syojyun(38);hyouji();hensei_frag=0;$("#tousouhi").empty();
      uchiban(items);
      $("#teireuchi").clone().appendTo("#flontpanel");
      $("#date").text(items.now+" - 내번정보");
      content=null;return;
    }

    //내번실행
    if(requrl.endsWith('/duty/start')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      $("#flontpanel").empty();
      uchibanst(items);
      $("#teireuchi").clone().appendTo("#flontpanel");
      $("#date").text(items.now+" - 내번정보");
      content=null;return;
    }

    //원정
    if(requrl.endsWith('conquest')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      //teire(items,0);//수리反映
      if(Object.keys(tokenobj).length>0){hyouji();}
      $("#flontpanel").html('<div class="con_head" style="--con-head-back:#d4a7a8 70%">원정</div>'+sigen(items.resource)+'<div id="enseihyo">'+enseihyo(items.summary,items.season_reward_list)+'</div>');
      $('html,body').animate({scrollTop:0}, 'fast');
      content=null;return;
    }
    //원정出発
    if(requrl.endsWith('conquest/start')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      for(var x=1;x<=4;x++){
        if(items["party"][x]["status"]==2){enseitime[x] = items["party"][x]["finished_at"];}
        else if(items["party"][x]["status"]==3){enseitime[x] = "특명조사";}
        else{enseitime[x] = "";}
      }
      $("#enseihyo").html(enseihyo(items.summary,0));
      content=null;return;
    }

    //임무
    if(requrl.endsWith('/mission/index')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      ninmu(items);
      $("#date").text(items.now+" - 임무정보");
      $('html,body').animate({scrollTop:0}, 'fast');
      content=null;return;
    }

    // 도첩
    if(requrl.endsWith('/album/list')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      toucyo(items);
      $("#date").text(items.now+" -  도첩정보");
      $('html,body').animate({scrollTop:0}, 'fast');
      content=null;return;
    }

    //戦績
    if(requrl.endsWith('/user/profile')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      const saniwalvset = items.level;
      chrome.storage.local.set({saniwalv:saniwalvset}, function(){});
      saniwalv=saniwalvset;
      console.log(saniwalv);
      content=null;return;
    }

    //수취
    if(requrl.endsWith('/receive/get')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      uketori(items);
      $("#date").text(items.now+" - 소지도구");
      $('html,body').animate({scrollTop:0}, 'fast');
      content=null;return;
    }
    
    //수행出発
    if(requrl.endsWith('/leave')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      if(items.evolution.back.finished_at){
        var leave_time=items.evolution.back.finished_at;
        chrome.storage.local.set({syugyou:leave_time}, function(){});
        console.log(leave_time);          
        enseitime[5] = leave_time;
        chrome.alarms.create("s1", {"when":new Date(leave_time).getTime()});
      }
      content=null;return;
    }

    //근시설정・로그인
    if(requrl.endsWith('/sword/secretary') || requrl.endsWith('/login/start')){
      try{items = $.parseJSON(content);}
      catch(e){alert('데이터 취득에 실패했습니다');}
      const secNum = items.secretary_serial_id;
      chrome.storage.local.set({secnum:secNum}, function(){});
      secnum=secNum;
      for(let ti=0;ti<tokenobj.length;ti++){
        if(tokenobj[ti][0]==secnum){kinji=[tokenobj[ti][1],tokenobj[ti][3],tokenobj[ti][27]];break;}
      }
      if(items.level){
        const saniwalvset = items.level;
        chrome.storage.local.set({saniwalv:saniwalvset}, function(){});
        saniwalv=saniwalvset;
      }
      content=null;return;
    }
  });
});
//データ取得部分ここまで---------------------------------------------------------------


//2桁 표시 
function tdouble(num){
  num += "";
  if(num.length === 1){num = "0" + num;}
  return num;     
}

//本마루 home
//function honmaru(){}

//수리れ repair
function teire(items,fken){
  var repsword = [];//부상 도검No,HP,Lv,ID
  if(items.sword){
    //非鍵含 도검シリアル：[ 도검No]
    tokenIdNa = {};
    for(var i in items.sword){
      if(items["sword"][i]["hp_max"]-items["sword"][i]["hp"]){
        tokenIdNa[items["sword"][i]["serial_id"]]=[items["sword"][i]["sword_id"]];
        if(fken)repsword.push([items["sword"][i]["sword_id"],items["sword"][i]["hp"],items["sword"][i]["hp_max"],items["sword"][i]["level"],items["sword"][i]["serial_id"]]);
      }
    }
  }
  if(items.repair){
    repairobj={};
    for(var j in items.repair){
      repairobj[items['repair'][j]['slot_no']] = [ items['repair'][j]['sword_serial_id'] , items['repair'][j]['finished_at']];//スロットNo [ 도검ID,시간]
    }
    var teireb = "";
    for(var rpi=1;rpi<=4;rpi++){
      if(repairobj[rpi]){
       if(!tokenIdNa){teireb += rpi+"：--- （"+repairobj[rpi][1]+"）<br>";}
       else if(swordname.hasOwnProperty(tokenIdNa[repairobj[rpi][0]][0])){teireb += rpi+"："+swordname[tokenIdNa[repairobj[rpi][0]][0]][0]+" （"+repairobj[rpi][1]+"）<br>";}
       else{teireb += rpi+"：--- （"+repairobj[rpi][1]+"）<br>";}
      }else{teireb += rpi+"： --- （---）<br>";}
    }
    $("#teire").html(teireb);
  }
  //부상도검 표시 
  if(fken){
    let repdata ='<table border="1" class="ta"><tr><th>도검명</th><th>Lv</th><th>생존</th><th>필요자원</th><th>시간</th></tr>';
    if(repsword.length){
      var repsigen={
        "tan":["1","2","0","1","1"],"wa":["2","4","0","2","1.5"],"uti":["4","4","1","4","2"],"ruti":["4","10","10","2","4"],
        "ta":["4","10","10","2","4"],"oot":["4","12","12","2","6"],"ya":["12","12","4","12","2.5"],"nag":["12","12","4","12","3"],
        "tur":["12","8","10","16","5"],
        "tanK":["5","5","5","5","1"],"waK":["6","7","5","6","1.5"],"utiK":["8","8","5","8","2"],"rutiK":["8","13","13","6","4"],"taK":["8","13","13","6","4"],"yaK":["16","16","8","16","2.5"],"ootK":["8","15","15","6","6"],"nagK":["16","16","8","16","3"]
      };//★타치극仮설정
      repsword.sort(function (a,b){return((b[2]-b[1])-(a[2]-a[1]));});
      for(let k=0;k<repsword.length;k++){
        var kizu="";        
        if(Math.floor((repsword[k][1]/repsword[k][2])*100) <= 30){kizu = ' class="jyusyo"';}
        else if(repsword[k][1]/repsword[k][2] < 0.65){kizu = ' class="cyusyo"';}
        else if(repsword[k][1]/repsword[k][2] < 0.9){kizu = '  class="keisyo"';}
        if(Object.keys(repairobj).length>0){
          for(let key in repairobj){
            if(repsword[k][4] == repairobj[key][0]){kizu = ' class="teirecyu"';break;}
          }
        }
        let tokenno = "def";
        if(swordname.hasOwnProperty(repsword[k][0])){tokenno = repsword[k][0];}
        repdata += '<tr><td'+kizu+'>'+swordname[tokenno][0]+'</td><td>'+repsword[k][3]+'</td><td>'+repsword[k][1]+"/"+repsword[k][2]+'</td><td>';
        let rephp = repsword[k][2]-repsword[k][1];
        if(tokenno==5){repdata += 2*rephp +'/'+ 5*rephp +'/'+ 5*rephp +'/'+ rephp +'</td>';}//코기츠네
        else if(tokenno==63){repdata += 4*rephp +'/'+ 10*rephp +'/'+ 10*rephp +'/'+ 2*rephp +'</td>';}//村正
				//else if(tokenno==64){repdata += 15*rephp +'/'+ 20*rephp +'/'+ 22*rephp +'/'+ 13*rephp +'</td>';}//村正극
        else{
          repdata += repsigen[swordname[tokenno][1]][0]*rephp+'/'+repsigen[swordname[tokenno][1]][1]*rephp+
          '/'+repsigen[swordname[tokenno][1]][2]*rephp+'/'+repsigen[swordname[tokenno][1]][3]*rephp+'</td>';
        }
        //(Lv*10)*X*HP+30 (Lv*5+([√Lv-11]*10+50))*X*HP+30
        let reptime;
        if(12-repsword[k][3]>0){reptime = Math.floor(repsword[k][3]*10*repsigen[swordname[tokenno][1]][4]*rephp)+30;}
        else{reptime = Math.floor((repsword[k][3]*5+(Math.floor(Math.sqrt(repsword[k][3]-11))*10+50))*repsigen[swordname[tokenno][1]][4]*rephp)+30;}
        repdata += '<td>'+jikanhyoji(reptime);
        if(items.campaign.hasOwnProperty()){repdata += "　（"+jikanhyoji(Math.floor(reptime*0.5))+"）";}
        repdata +='</td></tr>';  
      }
      repdata += '</table>';
    }else{repdata = "※부상중인 도검이 없습니다<br>근시 정보를 갱신했습니다";}
    $("#flontpanel").html('<div class="con_head">부상중도검</div>'+sigen(items.resource)+""+repdata);
  }
}

//시간 표시 
function jikanhyoji(reptime){
  var repsec = tdouble(reptime%60);
  var repmin = tdouble(((reptime-repsec)%3600)/60);
  var rephour = tdouble(Math.floor((reptime-repsec)/3600));
  return rephour+':'+repmin+':'+repsec;
}

//수리실행
function teires(items){
  if(items.repair){
    repairobj={};
    for(var j in items.repair){
      repairobj[items['repair'][j]['slot_no']] = [ items['repair'][j]['sword_serial_id'] , items['repair'][j]['finished_at']];//スロットNo [ 도검ID,시간]
    }
    var teireb = "";
    for(var rpi=1;rpi<=4;rpi++){
      if(repairobj[rpi]){
       if(!tokenIdNa){teireb += rpi+"：--- （"+repairobj[rpi][1]+"）<br>";}
       else if(swordname.hasOwnProperty(tokenIdNa[repairobj[rpi][0]][0])){teireb += rpi+"："+swordname[tokenIdNa[repairobj[rpi][0]][0]][0]+" （"+repairobj[rpi][1]+"）<br>";}
       else{teireb += rpi+"：--- （"+repairobj[rpi][1]+"）<br>";}
      }else{teireb += rpi+"： --- （---）<br>";}
    }
    $("#teire").html(teireb);
  }
}

//도검제작 forge
function tanto(items){
  var kinjihyoji = "데이터가 로드되지 않았거나 미등록 도검입니다";
   //근시データ
  if(swordname.hasOwnProperty(kinji[0])){
    kinjihyoji = swordname[kinji[0]][0]+" Lv："+kinji[1];
    if(kinji[2]>=50)kinjihyoji += " （벚꽃）";
  }
  var saniwalvh = saniwalv>0 ? saniwalv : "전적 화면으로 취득할 수 있습니다";
  if(items.forge){
    forgeobj={};
    for(var i in items.forge){
      forgeobj[items['forge'][i]['slot_no']] = items['forge'][i]['finished_at'];//スロットNo [시간]
    }
    var tantob = "";
    for(var rpi=1;rpi<=4;rpi++){
      if(forgeobj[rpi]){tantob += rpi+"："+forgeobj[rpi]+"<br>";}
      else{tantob += rpi+"： ---<br>";}
    }
    $("#tanto").html(tantob);
    var fpanel= sigen(items.resource)+'근시：'+kinjihyoji+'　사니와Lv：'+saniwalvh+helptip(1)+'<br><div class="wakubody" id="tanto_end">【도검제작완료시간】<br>'+tantob+'</div><div style="float:left;margin:0px 5px;"><textarea id="tanto_set" placeholder="이 양식 내의 데이터는 도검제작화면에서 이동하면 지워집니다. \n자원의 기재는『목/옥/냉/숫』\n※도검제작결과와 같이 표시할 수 없습니다. \n10연속은 기록으로만 남고 이곳에선 표시되지 않습니다."></textarea><br>이력은 우측 위 메뉴『저장정보』에서 확인할 수 있습니다（100건까지）</div><br style="clear:both">';
    $("#flontpanel").html('<div class="con_head">도검제작</div>'+fpanel+mapdrop(1));
  }
}
//도검제작실행 forge
function tantos(items,positem){
  var tcha=0;var tste=0;var tcoo=0;var tfil=0;var fuda=0;
  var kinjiname="데이터 미취득";var kinjilv="";var kinjisakura=false;
  for(var i in positem){
    if(positem[i]['name']=="charcoal"){tcha=positem[i]['value'];}
    if(positem[i]['name']=="steel"){tste=positem[i]['value'];}
    if(positem[i]['name']=="coolant"){tcoo=positem[i]['value'];}
    if(positem[i]['name']=="file"){tfil=positem[i]['value'];}
    if(positem[i]['name']=="consumable_id"){fuda=positem[i]['value'];}
  }
  //근시
  if(swordname.hasOwnProperty(kinji[0])){
    kinjiname = swordname[kinji[0]][0];
    kinjilv = kinji[1];
    if(kinji[2]>=50)kinjisakura = true;
  }
  //오후다
  let fudaname ="";
  if(fuda=="7"){fudaname ="매화오후다";}
  if(fuda=="6"){fudaname ="대나무오후다";}
  if(fuda=="5"){fudaname ="소나무오후다";}
  if(fuda=="4"){fudaname ="후지오후다";}
  
  //완료시간
  if(items.slot_no){
    forgeobj[items.slot_no] = items.finished_at;//スロットNo [시간]
    let tantob = "";
    for(let rpi=1;rpi<=4;rpi++){
      if(forgeobj[rpi]){tantob += rpi+"："+forgeobj[rpi]+"<br>";}
      else{tantob += rpi+"： ---<br>";}
    }
    //시간
    const createtime = Date.parse(items.now);
    const finishtime = Date.parse(items.finished_at);
    let keikatmp  =(finishtime-createtime)/1000;
    let keikajikan =Math.ceil(keikatmp/10)*10;
    let tantojikan = Math.floor(keikajikan/3600)+':'+tdouble(Math.floor((keikajikan/60)%60));
    //결과
    let kekkaname=null;
    if(items.sword_id){
      kekkaname = (swordname.hasOwnProperty(items.sword_id))? swordname[items.sword_id][0]:"도검번호"+items.sword_id;
    }
    //저장
    const temptanto = {tokenname:kekkaname,moku:tcha,gyo:tste,rei:tcoo,to:tfil,fuda:fudaname,kinjiname:kinjiname,kinjilv:kinjilv,sakura:kinjisakura,saniwalv:saniwalv,tantojikan:tantojikan};

    chrome.storage.local.get({tanto:{}}, function ({tanto}){
      let t_keys = Object.keys(tanto);
      if(t_keys.length>99){delete tanto[t_keys[0]];}
      tanto[createtime] = temptanto; 
      chrome.storage.local.set({tanto}, function(){});
    });
    //出力
    $("#tanto").html(tantob);
    $("#tanto_end").html('【도검제작완료시간】<br>'+tantob);
    const hirou = (kinjisakura)? "（벚꽃）":"";//（통상）
    var fudahyoji = (fudaname=="")? "없음":fudaname;
    if($("#tanto_set")[0]){
      let tantoset = $("#tanto_set").val()+items.now+"\t"+tcha+"/"+tste+"/"+tcoo+"/"+tfil+"\t"+fudahyoji+"\t"+tantojikan+"\t"+kinjiname+"\tLv"+kinjilv+"\t"+hirou+"\n";
      //일시 목/옥/냉/숫 오후다 시간 사니와 이름 Lv （벚꽃）
      $("#tanto_set").val(tantoset);
    }
  }
}

//도검제작10연속 
function tantosten(items,positem){
  var tcha=0;var tste=0;var tcoo=0;var tfil=0;var fuda=0;
  var kinjiname="데이터 미취득";var kinjilv="";var kinjisakura=false;
  for(var i in positem){
    if(positem[i]['name']=="charcoal"){tcha=positem[i]['value'];}
    if(positem[i]['name']=="steel"){tste=positem[i]['value'];}
    if(positem[i]['name']=="coolant"){tcoo=positem[i]['value'];}
    if(positem[i]['name']=="file"){tfil=positem[i]['value'];}
    if(positem[i]['name']=="consumable_id"){fuda=positem[i]['value'];}
  }
  //근시
  if(swordname.hasOwnProperty(kinji[0])){
    kinjiname = swordname[kinji[0]][0];
    kinjilv = kinji[1];
    if(kinji[2]>=50)kinjisakura = true;
  }
  //오후다
  let fudaname ="";
  if(fuda=="7"){fudaname ="매화오후다";}
  if(fuda=="6"){fudaname ="대나무오후다";}
  if(fuda=="5"){fudaname ="소나무오후다";}
  if(fuda=="4"){fudaname ="후지오후다";}

  if(items.slot_no){
    //완료시간forgeobj[items.slot_no] = items.finished_at;
    //시간
    const createtime = Date.parse(items.now);
    let kekkaname=[];let tantojikan=[];
    for(let j=0;j<=9;j++){
      if(items.multiple.hasOwnProperty(j)){
        let finishtime = Date.parse(items.multiple[j].finished_at);
        let keikatmp  =(finishtime-createtime)/1000;
        let keikajikan =Math.ceil(keikatmp/10)*10;
        tantojikan[j] = Math.floor(keikajikan/3600)+':'+tdouble(Math.floor((keikajikan/60)%60));
      }
      if(items.sword.hasOwnProperty(j)){
        let tmpswordid=items.sword[j].sword_id;
        console.log(tmpswordid);
        kekkaname[j] = (swordname.hasOwnProperty(tmpswordid))? swordname[tmpswordid][0]:"도검번호"+tmpswordid;
      }
    }
    //저장
    const temptanto = {moku:tcha,gyo:tste,rei:tcoo,to:tfil,fuda:fudaname,kinjiname:kinjiname,kinjilv:kinjilv,sakura:kinjisakura,saniwalv:saniwalv};
    let jyutanto={};
    jyutanto[createtime] = {head:temptanto,tokenname:kekkaname,tantojikan:tantojikan}; 
    console.log(jyutanto);
    chrome.storage.local.get({tantoten:{}}, function ({tantoten}){
      let t_keys = Object.keys(tantoten);
      if(t_keys.length>19){delete tantoten[t_keys[0]];}
      tantoten[createtime] = {head:temptanto,tokenname:kekkaname,tantojikan:tantojikan}; 
      chrome.storage.local.set({tantoten}, function(){});
    });
  }
}

//도장화면
function touso(items){
  var kinjihyoji = "데이터가 로드되지 않았거나 미등록 도검입니다";
  var tosoon = new Object(null);
  var tocount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var tocountS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var tocountb = "";
  //근시データ
  if(swordname.hasOwnProperty(kinji[0])){
    kinjihyoji = swordname[kinji[0]][0]+" Lv："+kinji[1];
    if(kinji[2]>=50)kinjihyoji += " （벚꽃）";
  }
  //도장IDに장비有無付け
  if(items.sword){
    for(var i in items.sword){
      var equips=['equip_serial_id1','equip_serial_id2','equip_serial_id3'];
      for(var eqi=0;eqi<=2;eqi++){
        if(items['sword'][i][equips[eqi]]){tosoon[items['sword'][i][equips[eqi]]] = true;}
      }
    }
  }
  for(var key in items.equip){
    if(items.equip[key]['equip_id'] < 10000){
      tocount[0]++;
      tocount[items.equip[key]['equip_id']]++;
      if(tosoon[key])tocountS[items.equip[key]['equip_id']]++;
    }
  }
  for(var j=1 ; j<31 ; j++){
    var ej=j;
    if(!equipname.hasOwnProperty(j)){ej="def";}
    tocountb+= '<td class="'+equipname[ej][1]+'">'+equipname[ej][0]+'</td><td class="'+equipname[ej][1]+' rig">'+tocountS[j]+" / "+tocount[j]+"</td>";
    if(j%6===0 && j<30)tocountb+="</tr><tr>";
  }
  var saniwalvh = saniwalv>0 ? saniwalv : "전적화면으로 취득할 수 있습니다";
  var customst = tousocustom ? '커스텀 형식으로 출력됩니다\n예시：Lv사니와/목/옥/냉/숫/오후다/근시 이름극/Lv근시/벚꽃눈보라/도장병/특/' : '디폴트 형식으로 출력합니다\n예시：2021-10-20 04:05:00  도장(특)　목/옥/냉/숫  오후다  근시 이름 [극] Lv근시　（벚꽃）';
//Object.keys(items.equip).filter(function(keys){return items['equip'][keys]['equip_id'] < 10000;}).length;
  var fpanel='근시：'+kinjihyoji+'　도장 총 소지수：'+tocount[0]+'　사니와Lv：'+saniwalvh+helptip(1)+'<br><textarea id="tousokekka" placeholder="'+customst+'\n\n변경하는 경우엔 설정 화면에서 설정한 후, 도검패널을 재부팅할 시 반영됩니다. \n※사니와레벨이 실제 수치와 다를 경우「전적」화면에 드렁가야 현재 수치가 로드됩니다">'+tousokekka+'</textarea><br>이력은 우측 위 메뉴『저장정보』에서 확인할 수 있습니다（통상・10연속은 100건까지）'+
      '<br><table class="touso"><caption>장비수／소지수　（도장화면에 들어왔을 때의 수입니다）</caption><tr>'+tocountb+'</tr></table>'+
      '<span id="recipe">참고 레시피（클릭으로  표시 ）</span>';
  tousokekka="";
  return fpanel;
}
//도장실행 produce/start
function tousos(items,positem){
  var tcha=0;var tste=0;var tcoo=0;var tfil=0;//var fuda=0;
  var kinjiname="데이터 미취득";var kinjilv="";var kinjisakura=false;
  for(var i in positem){
    if(positem[i]['name']=="charcoal"){tcha=positem[i]['value'];}
    if(positem[i]['name']=="steel"){tste=positem[i]['value'];}
    if(positem[i]['name']=="coolant"){tcoo=positem[i]['value'];}
    if(positem[i]['name']=="file"){tfil=positem[i]['value'];}
    //if(positem[i]['name']=="consumable_id"){fuda=positem[i]['value'];}
  }
  //근시
  if(swordname.hasOwnProperty(kinji[0])){
    kinjiname = swordname[kinji[0]][0];
    kinjilv = kinji[1];
    if(kinji[2]>=50)kinjisakura = true;
  }
  //도장
  var kekkaname="작성실패";
  if(!equipname.hasOwnProperty(items.equip_id)){kekkaname="불명도장";}
  else if(items.success>0){kekkaname=equipname[items.equip_id][0];}
  //오후다
  var fudaname ="";
  //저장
  const createtime = Date.parse(items.now);
  const temptouso = {tousoname:kekkaname,moku:tcha,gyo:tste,rei:tcoo,to:tfil,fuda:fudaname,kinjiname:kinjiname,kinjilv:kinjilv,sakura:kinjisakura,saniwalv:saniwalv};
  chrome.storage.local.get({touso:{}}, function ({touso}){
    let t_keys = Object.keys(touso);
    if(t_keys.length>99){delete touso[t_keys[0]];}
    touso[createtime] = temptouso; 
    chrome.storage.local.set({touso}, function(){});
  });
  //出力
  var tkekka = "";
  var fudahyoji = (fudaname=="")? "없음":fudaname;
  if(tousocustom){
    let hirou = (kinjisakura)? "벚꽃눈보라":"없음";
    tkekka = "Lv"+saniwalv+"/"+tcha+"/"+tste+"/"+tcoo+"/"+tfil+"/"+fudahyoji+"/"+kinjiname.replace(' [극]','극')+"/Lv"+kinjilv+"/"+hirou+"/"+kekkaname.replace(/\((.)\)/,'병/$1')+"/\n";
  }else{
    let hirou = (kinjisakura)? "（벚꽃）":"（통상）";
    tkekka = items.now+"\t"+kekkaname+"\t"+tcha+"/"+tste+"/"+tcoo+"/"+tfil+"\t"+fudahyoji+"\t"+kinjiname+"\tLv"+kinjilv+"\t"+hirou+"\n";
  }
  if($("#tousokekka")[0]){
    tousokekka = $("#tousokekka").val() +tkekka;
  }
}

//10연속 실행
function tousoten(items,positem){
  var tcha=0;var tste=0;var tcoo=0;var tfil=0;var fuda=0;
  var kinjiname="데이터 미취득";var kinjilv="";var kinjisakura=false;
  for(var i in positem){
    if(positem[i]['name']=="charcoal"){tcha=positem[i]['value'];}
    if(positem[i]['name']=="steel"){tste=positem[i]['value'];}
    if(positem[i]['name']=="coolant"){tcoo=positem[i]['value'];}
    if(positem[i]['name']=="file"){tfil=positem[i]['value'];}
    if(positem[i]['name']=="consumable_id"){fuda=positem[i]['value'];}
  }
  //근시
  if(swordname.hasOwnProperty(kinji[0])){
    kinjiname = swordname[kinji[0]][0];
    kinjilv = kinji[1];
    if(kinji[2]>=50)kinjisakura = true;
  }
  //오후다
  var fudaname ="";
  if(fuda=="0"){fudaname ="";}
  else if(fuda=="7"){fudaname ="매화";}
  else if(fuda=="6"){fudaname ="대나무";}
  else if(fuda=="5"){fudaname ="소나무";}
  else if(fuda=="4"){fudaname ="후지";}
  else{fudaname ="특수오후다";}
  //도장
  var kekkaname=[];
  for(let j in items.equip){
    if(!equipname.hasOwnProperty(items['equip'][j]['equip_id'])){kekkaname[j]="불명도장";}
    kekkaname[j] =(items['equip'][j]['serial_id']>0) ? equipname[items['equip'][j]['equip_id']][0] : "작성실패";
  }
  var kekkaleng = kekkaname.length;
  //저장
  const createtime = Date.parse(items.now);
  var temptouso = {moku:tcha,gyo:tste,rei:tcoo,to:tfil,fuda:fudaname,kinjiname:kinjiname,kinjilv:kinjilv,sakura:kinjisakura,saniwalv:saniwalv};
  chrome.storage.local.get({jyuren:{}}, function ({jyuren}) {
    let j_keys = Object.keys(jyuren);
    if(j_keys.length>9){delete jyuren[j_keys[0]];}
    jyuren[createtime] = {head:temptouso,jtouso:kekkaname}; 
    chrome.storage.local.set({jyuren}, function(){});
  });

  //出力
  var tkekka="";
  var fudahyoji = (fudaname=="")? "없음":fudaname;
  if(tousocustom){
    let hirou = (kinjisakura)?"벚꽃눈보라":"없음";
    let tkekka_tmp = "Lv"+saniwalv+"/"+tcha+"/"+tste+"/"+tcoo+"/"+tfil+"/"+fudahyoji+"/"+kinjiname.replace(' [극]','극')+"/Lv"+kinjilv+"/"+hirou+"/";
    for(let i=0;i<kekkaleng;i++){
      tkekka += tkekka_tmp+kekkaname[i].replace(/\((.)\)/,'병/$1')+"/\n";
    }
  }else{
    let hirou = (kinjisakura)?"（벚꽃）":"（통상）";
    let tkekka_tmp = tcha+"/"+tste+"/"+tcoo+"/"+tfil+"\t"+fudahyoji+"\t"+kinjiname+"\tLv"+kinjilv+"\t"+hirou+"\n";
    for(let i=0;i<kekkaleng;i++){
      tkekka += items.now+"\t"+kekkaname[i]+"\t"+tkekka_tmp;
    }
  }
  if($("#tousokekka")[0]){
    tousokekka = $("#tousokekka").val() + tkekka;
  }
}

//내번 duty
function uchiban(items){
  //非鍵含 도검シリアル： 도검No
  var tokenIdNau = {};
  if(items.sword){     
    for(var i in items.sword){
      tokenIdNau[items['sword'][i]['serial_id']]=items['sword'][i]['sword_id'];
    }
  }
  if(items.duty){
    var uchimem = "말当番： ";
    if(swordname.hasOwnProperty(tokenIdNau[items.duty.horse_id1])){uchimem += swordname[tokenIdNau[items.duty.horse_id1]][0];}else{uchimem += "---";}
    if(swordname.hasOwnProperty(tokenIdNau[items.duty.horse_id2])){uchimem += " ，"+swordname[tokenIdNau[items.duty.horse_id2]][0];}else{uchimem += " ， ---";}
    uchimem += "<br>畑当番： ";
    if(swordname.hasOwnProperty(tokenIdNau[items.duty.field_id1])){uchimem += swordname[tokenIdNau[items.duty.field_id1]][0];}else{uchimem += "---";}
    if(swordname.hasOwnProperty(tokenIdNau[items.duty.field_id2])){uchimem += " ，"+swordname[tokenIdNau[items.duty.field_id2]][0];}else{uchimem += " ， ---";}
    uchimem += "<br>手合せ： ";
    if(swordname.hasOwnProperty(tokenIdNau[items.duty.bout_id1])){uchimem += swordname[tokenIdNau[items.duty.bout_id1]][0];}else{uchimem += "---";}
    if(swordname.hasOwnProperty(tokenIdNau[items.duty.bout_id2])){uchimem += " ，"+swordname[tokenIdNau[items.duty.bout_id2]][0];}else{uchimem += " ， ---";}
    var dutytime = "";
    if(items.duty.finished_at){dutytime = items.duty.finished_at;enseitime[0] = dutytime;}else{dutytime = "---";}
    $("#uchiban").html("완료시간： "+dutytime+"<br>"+uchimem);
  }
}

//내번실행 duty/start
function uchibanst(items){
  if(items.finished_at){
    var uchimem = "완료시간 취득 완료<br>내번화면에서 확인<br>캐릭터명도 표시할 수 있습니다";
    var dutytime = items.finished_at;
    enseitime[0] = dutytime;
    $("#uchiban").html("완료시간： "+dutytime+"<br>"+uchimem);
  }
}

//자원
function sigen(resource){
  var nsigen=[];
  nsigen[0]=resource.charcoal;
  nsigen[1]=resource.steel;
  nsigen[2]=resource.coolant;
  nsigen[3]=resource.file;
  var maxsigen=resource.max_resource;
  var nowsigen= '<div class="nsigw">';
  var nsname=["목","옥","냉","숫"];
  for(var x=0;x<=3;x++){
    nowsigen+= '<span class="nsig'+x+'">'+nsname[x]+"："+nsigen[x];
    if(maxsigen-nsigen[x]>0){
      var min = Math.ceil((maxsigen-nsigen[x])/3)*3 % 60;
      var hour = (Math.ceil((maxsigen-nsigen[x])/3)*3 - min) / 60;
      nowsigen+=" ("+hour+":"+tdouble(min)+")</span> ";
    }else{nowsigen+="</span> ";}
   }
  nowsigen+='　MAX '+maxsigen+'　<small>( )은 자연회복 최대값까지의 시간</small></div><input type="hidden" name="charcoal" value="'+nsigen[0]+'"><input type="hidden" name="steel" value="'+nsigen[1]+'"><input type="hidden" name="coolant" value="'+nsigen[2]+'"><input type="hidden" name="file" value="'+nsigen[3]+'">';
  return nowsigen;     
}

//원정목록
function enseihyo(summ,season){
var ensei=[
["1-1 토바・후시미 전투","10","15","0","0","10","Lv5","6","-"],
["1-2 요나오시 잇키","0","0","30","30","30",'Lv10 '+tosyuico('tan'),"2","-"],
["1-3 코슈・카츠누마 전투","20","0","20","0","20",'Lv20 '+tosyuico('wa'),"3","-"],
["1-4 시라카와 전선","0","60","0","60","60",'Lv30 '+tosyuico('tan')+tosyuico('wa'),"1","-"],
["2-1 공무합체운동","0","0","90","90","90","Lv50","0.666","코반（소）"],
["2-2 가역 인부 집합소","0","50","0","250","180",'Lv60 '+tosyuico('uti'),"0.333","코반（소）"],
["2-3 교호 대기근","120","0","120","0","120",'Lv80 '+tosyuico('ta'),"0.5","제작패"],
["2-4 천하태평","0","180","0","120","150",'Lv100 '+tosyuico('uti')+tosyuico('ta'),"0.4","도움패"],
["3-1 미노국 결전","130","240","0","0","240","Lv110","0.25","제작패"],
["3-2 반기를 든 원인","0","100","60","150","180",'Lv120 '+tosyuico('oot'),"0.333","도움패"],
["3-3 아츠지 성 경비","200","0","500","0","600","Lv130","0.1","코반（중）"],
["3-4 천하포무","0","200","0","500","480","Lv140","0.125","도움패"],
["4-1 나가시노 성 공성전","0","80","100","60","120","Lv150","0.5","제작패"],
["4-2 세이죠 작전","100","380","0","0","300","Lv180","0.2","코반（중）"],
["4-3 코소슨 삼국동맹","100","200","500","0","720","Lv200","0.083","도움패×2"],
["4-4 히에이잔 엔라쿠지","150","0","0","400","360","Lv220","0.166","코반（대）"],
["5-1 가마쿠라 방위전","250","250","250","0","720","Lv240","0.083","도움패×2"],
["5-2 원구 요새","200","500","300","0","1080",'Lv260 '+tosyuico('ya'),"0.055","도움×2 코반（대）"],
["5-3 야부사메 정렬","350","200","100","250","900",'Lv280 '+tosyuico('nag'),"0.066","코반（대）"],
["5-4 오슈 합전","300","400","500","0","1440","Lv300","0.0417","제작×3 코반（대）"]
];
var tai1;var tai2;var tai3;var tai4;var taicla ="";var totalsigen=[0,0,0,0,0,0,0,0];//출진중부대
var ids="";var eiseileng=ensei.length;let seasonitem=new Array();
var simmes='주의）원정을 실행하면 선택은 리셋됩니다';
if(summ === 0){ids="s";simmes='각자원　전부 성공～<span class="nhdais">전부 대성공</span>';}//手動 표시 用
if(summ){if(summ[1]){tai1=summ[1].field_id-1;}if(summ[2]){tai2=summ[2].field_id-1;}if(summ[3]){tai3=summ[3].field_id-1;}if(summ[4]){tai4=summ[4].field_id-1;}}
if(season){
  const sleng=season.length;
  for(let sei=0;sei<sleng;sei++){seasonitem[parseInt(season[sei].field_id)-1]=parseInt(season[sei].item_id)%2+1;}
}
  var nowdate = Date.now();
  var date = new Date();
  var fpanel='<table class="ta"><tr><th>원정<label class="nhdais"><input type="checkbox" id="daiseiko'+ids+'">대성공</label></th><th>시간</th><th>Lv합계(필요 도종)</th><th>목</th><th>옥</th><th>냉</th><th>숫</th><th>도구(대성공시)</th><th>1h정도에</th><th>귀환예정</th></tr>';  
  for(var en_i=0;en_i<eiseileng;en_i++){
    if(summ){//자원集합계
      if(en_i==tai1){taicla=" class=tai1";}if(en_i==tai2){taicla=" class=tai2";}if(en_i==tai3){taicla=" class=tai3";}if(en_i==tai4){taicla=" class=tai4";}
      if(taicla !== ""){
        for(var sigi=0;sigi<4;sigi++){
          totalsigen[sigi] += Number(ensei[en_i][sigi+1]);
          totalsigen[sigi+4] += Math.floor(ensei[en_i][sigi+1]*1.5);
        }
      }
    }
    var emin = tdouble(ensei[en_i][5] % 60);
    var ehour = tdouble((ensei[en_i][5] - emin) / 60);
    date.setTime(nowdate+ensei[en_i][5] * 60000);
    var mm = tdouble(date.getMonth() + 1);
    var dd = tdouble(date.getDate());
    var hh = tdouble(date.getHours());
    var mi = tdouble(date.getMinutes());
    let kisetu = seasonitem[en_i] ? '<span class="kisetu'+seasonitem[en_i]+'">■</span>' : '';
    fpanel+= '<tr><td'+taicla+'><input type="checkbox" name="esigensim'+ids+'" value="'+en_i+'" id="enchk'+ids+en_i+'"><label class="ensiml" for="enchk'+ids+en_i+'">'+ensei[en_i][0]+'</label></td><td>'+ehour+':'+emin+'</td><td>'+ensei[en_i][6]+'</td><td class="mo"><div class="seiko">'+ensei[en_i][1]+'</div><div class="dais hide">'+Math.floor(ensei[en_i][1]*1.5)+'</div>'+
    '</td><td class="gy"><div class="seiko">'+ensei[en_i][2]+'</div><div class="dais hide">'+Math.floor(ensei[en_i][2]*1.5)+'</div>'+'</td><td class="ri"><div class="seiko">'+ensei[en_i][3]+'</div><div class="dais hide">'+Math.floor(ensei[en_i][3]*1.5)+'</div>'+
    '</td><td class="to"><div class="seiko">'+ensei[en_i][4]+'</div><div class="dais hide">'+Math.floor(ensei[en_i][4]*1.5)+'</div>'+'</td><td>'+ensei[en_i][8]+kisetu+'</td>';
    fpanel+= '<td><div class="seiko">'+Math.round(ensei[en_i][1]*60/ensei[en_i][5])+'/'+Math.round(ensei[en_i][2]*60/ensei[en_i][5])+'/'+Math.round(ensei[en_i][3]*60/ensei[en_i][5])+
    '/'+Math.round(ensei[en_i][4]*60/ensei[en_i][5])+
    '</div><div class="dais hide">'+Math.round(Math.floor(ensei[en_i][1]*1.5)*60/ensei[en_i][5])+'/'+Math.round(Math.floor(ensei[en_i][2]*1.5)*60/ensei[en_i][5])+'/'+Math.round(Math.floor(ensei[en_i][3]*1.5)*60/ensei[en_i][5])+
    '/'+Math.round(Math.floor(ensei[en_i][4]*1.5)*60/ensei[en_i][5])+'</div></td><td>'+mm+'/'+dd+' '+hh+':'+mi+'</td></tr>';
    taicla ="";
  }
  if(totalsigen[0]+totalsigen[1]+totalsigen[2]+totalsigen[3]>0){
    fpanel+='<tr><td colspan=10>실행중 원정이 완료된 후 총 합계 <span class="nsig0">목：'+totalsigen[0]+
    '～<span class="nhdais">'+totalsigen[4]+'</span></span> <span class="nsig1">옥：'+totalsigen[1]+'～<span class="nhdais">'+totalsigen[5]+'</span></span> <span class="nsig2">冷：'+totalsigen[2]+'～<span class="nhdais">'+totalsigen[6]+'</span></span> <span class="nsig3">砥：'+totalsigen[3]+'～<span class="nhdais">'+totalsigen[7]+'</span></span></td></tr>';
  }
  fpanel+='</table><small>※귀환예정은 원정목록을 표시한 시각부터의 합계치입니다.</small><div class="wakuhead" style="width:650px">획득자원 시뮬레이션</div><div class="wakubody" style="width:650px"><div id="ensei_sim'+ids+'">목록의 원정명 클릭으로 입수자원 합계의 시뮬레이션이 가능합니다</div>선택한 원정의 획득자원을 가산, 한 번 더 클릭하면 선택 해제<br>'+simmes+'</div>';
  return fpanel;
}

function eisei_sim(swi){
  var checkname = 'input[name="esigensim"]:checked';
  if(swi==1){checkname = 'input[name="esigensims"]:checked';}
  var en_sigen=[
  [10,15,0,0],[0,0,30,30],[20,0,20,0],[0,60,0,60],
  [0,0,90,90],[0,50,0,250],[120,0,120,0],[0,180,0,120],
  [130,240,0,0],[0,100,60,150],[200,0,500,0],[0,200,0,500],
  [0,80,100,60],[100,380,0,0],[100,200,500,0],[150,0,0,400],
  [250,250,250,0],[200,500,300,0],[350,200,100,250],[300,400,500,0]
  ];
  var sim_mok=0; var sim_tmh=0; var sim_rei=0; var sim_to=0;
  $(checkname).each(function(){
    var eno = $(this).val();
    sim_mok += en_sigen[eno][0];
    sim_tmh += en_sigen[eno][1];
    sim_rei += en_sigen[eno][2];
    sim_to += en_sigen[eno][3];
  });
  var sim_mok_d = Math.floor(sim_mok*1.5);
  var sim_tmh_d = Math.floor(sim_tmh*1.5);
  var sim_rei_d = Math.floor(sim_rei*1.5);
  var sim_to_d = Math.floor(sim_to*1.5);
  var ensim_buf = '';
  if(swi==1){
     ensim_buf ='<div class="nsig0 ensimd">목탄 '+sim_mok+'～<span class="nhdais">'+sim_mok_d+'</span></div><div class="nsig1 ensimd">옥강 '+sim_tmh+'～<span class="nhdais">'+sim_tmh_d+'</span></div><div class="nsig2 ensimd">冷却 '+sim_rei+'～<span class="nhdais">'+sim_rei_d+'</span></div><div class="nsig3 ensimd">숫돌 '+sim_to+'～<span class="nhdais">'+sim_to_d+'</span></div><button id="ensim_resets">리셋</button>';
  }else{
    var charcoal = parseInt($('input[name="charcoal"]').val());
    var steel = parseInt($('input[name="steel"]').val());
    var coolant = parseInt($('input[name="coolant"]').val());
    var file = parseInt($('input[name="file"]').val());
    ensim_buf ='<table><tr><td></td><th class="nsig0">목탄</th><th class="nsig1">옥강</th><th class="nsig2">냉각재</th><th class="nsig3">숫돌</th></tr>'+'<tr><td>현재값</td><td class="nsig0">'+charcoal+'</td><td class="nsig1">'+steel+'</td><td class="nsig2">'+coolant+'</td><td class="nsig3">'+file+'</td></tr>'+'<tr><td>전부 성공</td><td class="nsig0">'+(charcoal+sim_mok)+'　(+ '+sim_mok+')</td><td class="nsig1">'+(steel+sim_tmh)+'　(+ '+sim_tmh+')</td><td class="nsig2">'+(coolant+sim_rei)+'　(+ '+sim_rei+')</td><td class="nsig3">'+(file+sim_to)+'　(+ '+sim_to+')</td></tr>'+'<tr class="nhdais"><td>전부 대성공</td><td class="nsig0">'+(charcoal+sim_mok_d)+'　(+ '+sim_mok_d+')</td><td class="nsig1">'+(steel+sim_tmh_d)+'　(+ '+sim_tmh_d+')</td><td class="nsig2">'+(coolant+sim_rei_d)+'　(+ '+sim_rei_d+')</td><td class="nsig3">'+(file+sim_to_d)+'　(+ '+sim_to_d+')</td></tr>'+'</table><button id="ensim_reset">리셋</button>';
  }
  return ensim_buf;
}
$("#flontpanel").on('change','input[name="esigensim"]',function(){ $("#ensei_sim").html(eisei_sim(0));});
$("#flontpanel").on('click','#ensim_reset',function(){
  $('input[name="esigensim"]:checked').each(function(){
    $(this).prop('checked', false);
  });
  $("#ensei_sim").html('목록의 원정명 클릭으로 입수자원合합계의 시뮬레이션이 가능합니다');
});
$("#tousouhi").on('change','input[name="esigensims"]',function(){ $("#ensei_sims").html(eisei_sim(1));});
$("#tousouhi").on('click','#ensim_resets',function(){
  $('input[name="esigensims"]:checked').each(function(){
    $(this).prop('checked', false);
  });
  $("#ensei_sims").html('<div class="nsig0 ensimd">목탄 0</div><div class="nsig1 ensimd">옥강 0</div><div class="nsig2 ensimd">冷却 0</div><div class="nsig3 ensimd">숫돌 0</div>');
});

//임무
function ninmu(items){
var nikka=[
["673","아자 출진","출진","1","50","75","100","125","제작패","da"],	
["674","보스전에서 승리","보스승리","1","150","150","150","150","제작・코반200","da"],	
["675","검비위사를 1번 격퇴","검비違使","1","300","300","300","300","-","da"],
["676","적 부대를 3번 격퇴","戦闘","3","100","125","150","75","-","da"],
["677","적 부대를 5번 격퇴","戦闘","5","150","175","100","125","-","da"],
["678","적 부대를 10번 격퇴","戦闘","10","200","125","150","175","-","da"],
["679","「연련」을 3번 도전","연련","3","75","100","125","50","도움패","da"],
["680","「연련」에서 1번 승리","연련승리","1","125","150","75","100","코반50","da"],
["681","「연련」에서 2번 승리","연련승리","2","175","100","125","150","코반100","da"],	
["682","「연련」에서 3번 승리","연련승리","3","125","150","175","200","코반150","da"],	
["683","「원정」을 3번 실행","원정","3","100","125","50","75","도움패","da"],	
["684","「원정」을 1번 성공","원정성공","1","150","75","100","125","코반100","da"],	
["685","「원정」을 2번 성공","원정성공","2","100","125","150","175","코반150","da"],
["686","「원정」을 3번 성공","원정성공","3","150","175","200","125","코반200","da"],
["687","「도장」을 1体작성","도장","1","30","30","30","30","-","da"],
["688","「도장」을 2体작성","도장","2","50","50","50","50","-","da"],
["689","「도장」을 3体작성","도장","3","70","70","70","70","-","da"],
["690","「도검제작」을 1번 実施","도검제작","1","30","30","30","30","제작패","da"],
["691","「도검제작」을 2번 実施","도검제작","2","50","50","50","50","제작패","da"],
["692","「도검제작」을 3번 実施","도검제작","3","70","70","70","70","제작패","da"],
["693","「도해」를 1번 実施"," 도검解","1","50","50","50","50","도움패","da"],
["694","「연결」을 1번 実施","연결","1","50","50","50","50","도움패","da"],

["695","성실함은 힘이다 그 1","로그인","5","100","100","100","100","코반100","mo"],
["696","성실함은 힘이다 그 2","로그인","10","150","150","150","150","제작패×2","mo"],
["697","성실함은 힘이다 그 3","로그인","15","300","300","300","300","도움패×2","mo"],
["698","성실함은 힘이다 그 4","로그인","20","600","600","600","600","수행도구","mo"],
["699","적 부대를 40번 격퇴","戦闘","40","100","0","0","0","-","mo"],
["700","적 부대를 80번 격퇴","戦闘","80","200","0","0","0","-","mo"],
["701","적 부대를 120번 격퇴","戦闘","120","400","0","0","0","-","mo"],
["702","적 부대를 200번 격퇴","戦闘","200","800","0","0","0","-","mo"],
["703","「원정」을 15번 실행","원정","15","0","0","100","0","-","mo"],
["704","「원정」을 30번 실행","원정","30","0","0","200","0","-","mo"],
["705","「원정」을 45번 실행","원정","45","0","0","400","0","-","mo"],
["706","「원정」을 60번 실행","원정","60","0","0","800","0","-","mo"],
["707","검비위사를 5번 격퇴","검비違使","5","0","0","0","100","-","mo"],
["708","검비위사를 10번 격퇴","검비違使","10","0","0","0","200","-","mo"],
["709","검비위사를 15번 격퇴","검비違使","15","0","0","0","400","-","mo"],
["710","검비위사를 20번 격퇴","검비違使","20","0","0","0","800","-","mo"],
["711","「연련」을 15번 도전","연련","15","0","100","0","0","-","mo"],
["712","「연련」을 30번 도전","연련","30","0","200","0","0","-","mo"],
["713","「연련」을 45번 도전","연련","45","0","400","0","0","-","mo"],
["714","「연련」을 60번 도전","연련","60","0","800","0","0","-","mo"]
];

  if(items.mission){
    var tassei;var tasseiP;var sumi;var sumiC;var endcount_d = 0;var endcount_m = 0;
    var fpanel = "";
    nikka.forEach(function(nval){
      tassei=0;sumi=0;
      if(items.mission.hasOwnProperty(nval[0])){
        tassei=items['mission'][nval[0]]['value'];
        sumi=items['mission'][nval[0]]['status'];
        if(sumi>1 && nval[9]=="da"){endcount_d++;}
				else if(sumi>1 && nval[9]=="mo"){endcount_m++;}
      }

      tasseiP=Math.round(tassei/nval[3]*100);
      if(tasseiP>100){tasseiP=100;}
      if(sumi==3){sumiC="sumi";}
      else if(sumi==2){sumiC="tasei";}
      else{sumiC="mikan";}
      fpanel+= '<tr class="mi'+nval[9]+'"><td>'+nval[1]+'</td><td>'+nval[2]+'×'+nval[3]+'</td><td class="'+sumiC+'">'+tassei+'</td><td class="'+sumiC+'">'+tasseiP+' ％</td><td class="mo">'+nval[4]+'</td><td class="gy">'+nval[5]+'</td><td class="ri">'+nval[6]+'</td><td class="to">'+nval[7]+'</td><td>'+nval[8]+'</td></tr>';
    });

    fpanel = '<div class="con_head" style="--con-head-back:#eacfa9 70%">임무</div><table class="ta flo"><tr><th colspan=2>일과 ['+endcount_d+'/22]　・　월과 ['+endcount_m+'/20]</th><th>수</th><th>달성도</th><th>목</th><th>옥</th><th>냉</th><th>숫</th><th>도구</th></tr>' +fpanel+ '</table><br style="clear:both;">';
    $("#flontpanel").html(fpanel);
  }
}

// 도첩
function toucyo(items){
  var kyoku ={
    3:[3,4,1,5,7],4:[3,4,1,5,7],5:[2,1,4,3,2],6:[2,1,4,3,2],7:[3,2,2,3,2],8:[3,2,2,3,2],9:[3,2,2,4,1],10:[3,2,2,4,1],11:[2,1,1,2,1],12:[2,1,1,2,1],13:[6,3,6,4,1],14:[6,3,6,4,1],15:[4,1,3,3,1],16:[4,1,3,3,1],17:[7,2,1,4,6],18:[7,2,1,4,6],19:[2,3,2,0,0],20:[2,3,2,0,0],23:[1,3,3,0,0],24:[1,3,3,0,0],25:[4,3,1,3,4],26:[4,3,1,3,4],27:[1,4,2,0,0],28:[1,4,2,0,0],29:[1,3,3,0,0],30:[1,3,3,0,0],31:[2,1,2,2,0],32:[2,1,2,2,0],33:[1,2,1,1,2],34:[1,2,1,1,2],35:[1,2,1,3,0],36:[1,2,1,3,0],37:[2,1,1,3,0],38:[2,1,1,3,0],39:[1,2,1,2,1],40:[1,2,1,2,1],41:[2,1,1,0,3],42:[2,1,1,0,3],43:[2,1,1,1,2],44:[2,1,1,1,2],45:[2,1,2,1,1],46:[2,1,2,1,1],47:[3,1,1,1,1],48:[3,1,1,1,1],49:[3,1,2,1,0],50:[3,1,2,1,0],51:[1,1,1,1,3],52:[1,1,1,1,3],55:[5,1,1,3,5],56:[5,1,1,3,5],57:[2,1,1,5,3],58:[2,1,1,5,3],59:[5,2,1,4,3],60:[5,2,1,4,3],61:[1,1,2,2,1],62:[1,1,2,2,1],65:[2,4,3,2,1],66:[2,4,3,2,1],67:[2,2,3,0,0],68:[2,2,3,0,0],69:[1,2,1,2,1],70:[1,2,1,2,1],73:[3,2,1,5,1],74:[3,2,1,5,1],79:[3,5,4,2,1],80:[3,5,4,2,1],81:[3,3,1,0,0],82:[3,3,1,0,0],83:[1,1,2,1,2],84:[1,1,2,1,2],85:[4,2,1,0,0],86:[4,2,1,0,0],87:[2,4,1,0,0],88:[2,4,1,0,0],89:[3,3,1,0,0],90:[3,3,1,0,0],91:[5,5,2,0,0],92:[5,5,2,0,0],93:[2,1,4,0,0],94:[2,1,4,0,0],95:[4,2,1,0,0],96:[4,2,1,0,0],97:[3,2,2,3,2],98:[3,2,2,3,2],99:[3,1,3,0,0],100:[3,1,3,0,0],101:[3,2,2,0,0],102:[3,2,2,0,0],103:[2,4,1,0,0],104:[2,4,1,0,0],105:[4,2,1,0,0],106:[4,2,1,0,0],107:[2,3,4,3,3],108:[2,3,4,3,3],109:[2,3,4,3,3],110:[2,3,4,3,3],111:[2,3,4,3,3],112:[4,2,4,2,3],113:[4,2,4,2,3],114:[4,2,4,2,3],115:[4,2,4,2,3],116:[6,4,2,0,0],117:[6,4,2,0,0],118:[4,1,2,0,0],119:[4,1,2,0,0],120:[2,2,1,1,1],121:[2,2,1,1,1],122:[4,3,2,2,1],123:[4,3,2,2,1],128:[4,4,4,0,0],129:[4,4,4,0,0],130:[5,2,4,1,3],131:[5,2,4,1,3],132:[3,1,4,3,1],133:[3,1,4,3,1],134:[3,2,1,4,2],135:[3,2,1,4,2],136:[4,2,2,2,5],137:[4,2,2,2,5],138:[3,3,2,3,1],139:[3,3,2,3,1]
  };
  if(items.sword){
     var fpanel = '<div class="con_head" style="--con-head-back:#cdbfd4 70%"> 도첩 スチル収集・근시曲입수状況</div><table border="1" class="ta flo">';
     var kencount=0;
     var kencomax=Math.floor(Object.keys(items.sword).length/2)-1;
     for(var i in items.sword){
      var tokenno = "def";
      if(swordname.hasOwnProperty(items["sword"][i]["sword_id"])){tokenno = items["sword"][i]["sword_id"];}
      fpanel += "<tr><td>"+items["sword"][i]["sword_id"]+"</td><td>"+swordname[tokenno][0]+"</td><td>";
      //31＝コンプ 23＝필살없음 15＝내번없음 7＝필살・내번없음
      var img_nyusyu = items["sword"][i]["image_flg"];
      var img_keiso = ""; var img_kanryo = "부상○　필살○　내번○";
      if(items["sword"][i]["flg_max"] == 63){
        if(img_nyusyu==63){img_nyusyu = img_nyusyu-32; img_kanryo = '완료！';}
        else if(img_nyusyu>32){img_nyusyu = img_nyusyu-32; img_keiso='　경장○';}
        else if(img_nyusyu==31){img_kanryo = '부상○　필살○　내번○　<span class="nyusyu">경장×</span>';}
        else{img_keiso='　<span class="nyusyu">경장×</span>';}
      }
      if(img_nyusyu == 31){fpanel += img_kanryo;}
      else if(img_nyusyu == 23){fpanel += '부상○　<span class="nyusyu">필살×</span>　내번○' + img_keiso;}
      else if(img_nyusyu == 15){fpanel += '부상○　필살○　<span class="nyusyu">내번×</span>' + img_keiso;}
      else if(img_nyusyu == 19){fpanel += '<span class="nyusyu">부상×　필살×</span>　내번○' + img_keiso;}
      else if(img_nyusyu == 7){fpanel += '부상○　<span class="nyusyu">필살×　내번×</span>' + img_keiso;}
      else if(img_nyusyu == 3){fpanel += '<span class="nyusyu">부상×　필살×　내번×</span>' + img_keiso;}
      else if(img_nyusyu == 11){fpanel += '<span class="nyusyu">부상×</span>　필살○　<span class="nyusyu">내번×</span>' + img_keiso;}
      else if(img_nyusyu == 27){fpanel += '<span class="nyusyu">부상×</span>　필살○　내번○' + img_keiso;}
      else {fpanel += "미 콤프（상태불명）";}
      //曲
      if(items["sword"][i]["bgm_flg"]===true){fpanel += '</td><td class="muon">♪';}
      else if(kyoku.hasOwnProperty(tokenno)){fpanel += '</td><td class="muoff" title="'+kyoku[tokenno]+'">♪';}
      else{fpanel += "</td><td class=\"muoff\">－";}
      fpanel += "</td></tr>";
      if(kencount==kencomax){fpanel += '</table><table border=1 class="ta flo">';}
      kencount++;
     }
     fpanel += '</table><br style="clear:both">';
     $("#flontpanel").html(fpanel);
   }
}

//수취 get
function uketori(items){
  //10:"",11:"",12:"",16:"",22:"0",23:"0" 10,11,16増築？ 22～23イベントアイテム？
  var dougu=[];
  var mamo=0;var mamok=0;var koban=parseInt(items.currency.money);
  for(var d=0;d<61;d++){
    dougu[d]= d in items.item ? items.item[d].num : "0";
  }
  for(var i in items.sword){
    if(items.sword[i].item_id==1)mamo++;
    if(items.sword[i].item_id==2)mamok++;
  }
  if(items){
    var fpanel = '<div class="con_head" style="--con-head-back:#bdd8cd 70%">소지도구</div>'+sigen(items.resource)+'<table border="1" class="ta flo">';
    fpanel += '<tr><th>코반</th><td>'+koban+'　　상자：소×'+dougu[13]+'　중×'+dougu[14]+'　대×'+dougu[15]+'　합계：'+(koban+(dougu[13]*200)+(dougu[14]*400)+(dougu[15]*700))+'</td></tr>';
    fpanel += '<tr><th>오후다</th><td>도움패×'+dougu[8]+'　제작패×'+items.resource.bill+'</td></tr>';
    fpanel += '<tr><th>부적</th><td>부적×'+dougu[1]+' + 장비×'+mamo+'　부적・극×'+dougu[2]+' + 장비×'+mamok+'</td></tr>';
    fpanel += '<tr><th>음식</th><td>선인당고×'+dougu[3]+'　도시락×'+dougu[17]+'　한입당고×'+dougu[37]+'</td></tr>';
    fpanel += '<tr><th>오후다</th><td>후지×'+dougu[4]+'　소나무×'+dougu[5]+'　대나무×'+dougu[6]+'　매화×'+dougu[7]+'</td></tr>';
    fpanel += '<tr><th>수행</th><td>편지지×'+dougu[18]+'　여행복×'+dougu[19]+'　수행도구×'+dougu[20]+'</td></tr>';
    fpanel += '<tr><th>악기</th><td>피리×'+dougu[25]+'　금×'+dougu[26]+'　샤미센×'+dougu[27]+'　북×'+dougu[28]+'　방울×'+dougu[29]+'</td></tr>';
    fpanel += '<tr><th>기타</th><td>원정 귀환 비둘기×'+dougu[21]+'　수행귀환 비둘기×'+dougu[9]+'　소언기×'+dougu[24]+'　콩×'+dougu[60]+'</td></tr>';
		//fpanel += '<tr><th>収穫</th><td>赤茄子×'+dougu[71]+'真桑瓜×'+dougu[72]+'向日葵×'+dougu[73]+'타치魚×'+dougu[74]+'</td></tr>';
    fpanel += '</table><br style="clear:both;">';
    $("#flontpanel").html(fpanel);
  }
}

//출진화면
function syutujin(){
  var droptitle =["도검","도검제작","2-2","2-3","2-4","3-1","3-2","3-3","3-4","4-1","4-2","4-3","4-4","5-1","5-2","5-3","5-4","6-1","6-2","6-3","6-4","7-1","7-2","7-3","7-4","8-1","8-2","8-3"];
  var dbtncount=droptitle.length;
  var dbtnbuf='<div id="dbtnbox">';
  for(var j=2;j<dbtncount;j++){dbtnbuf += '<button id="dropbtn'+j+'">'+droptitle[j]+'</button>';}
  dbtnbuf += '</div>';
  $("#flontpanel").html('<div class="con_head" style="--con-head-back:#d4a7a8 70%">출진</div>'+dbtnbuf+'<div id="sarry_drop">위 버튼으로 각 맵의 드롭 도검을 표시합니다</div>');
}
//출진開始/sally/sally
function syupatu(now,positem){
  //console.log(JSON.stringify(positem));
  var episode=0;var field=0;var butai=0;
  var sa_butai = [];
  var bumember="";var budata={};
  maplog="";
  for(var i in positem){
    //if(positem[i]['name']=="episode%5Fid"){episode=positem[i]['value'];}//flash用
    //if(positem[i]['name']=="field%5Fid"){field=positem[i]['value'];}
    //if(positem[i]['name']=="party%5Fno"){butai=positem[i]['value'];}
    //if(positem[i]['name']=="event%5Fid"){episode="EventMap";}
    //if(positem[i]['name']=="event%5Ffield%5Fid"){field=positem[i]['value'];}
    if(positem[i]['name']=="episode_id"){episode=positem[i]['value'];}
    if(positem[i]['name']=="field_id"){field=positem[i]['value'];}
    if(positem[i]['name']=="party_no"){butai=positem[i]['value'];}
    if(positem[i]['name']=="event_id"){episode="EventMap";}//+positem[i]['value']
    if(positem[i]['name']=="event_field_id"){field=positem[i]['value'];}
  }
  if(tokenobj){
    for(var si=0;si<tokenobj.length;si++){
      if(Math.floor(tokenobj[si][38]/10) == butai){
        sa_butai.push([tokenobj[si][38],tokenobj[si][1],tokenobj[si][3]]);//部No,검No,Lv
      }
    }
    sa_butai.sort(function (a,b){return(a[0]-b[0]);});
    var mapno = episode+'-'+field;
    budata[now]= {"map":mapno,"butai":butai,"member":{}};
    for(var bi=0;bi<sa_butai.length;bi++){
      if(swordname.hasOwnProperty(sa_butai[bi][1])){
        bumember += tosyuico(swordname[sa_butai[bi][1]][1])+swordname[sa_butai[bi][1]][0]+" Lv"+sa_butai[bi][2]+"<br>";
        budata[now]["member"][bi] = [sa_butai[bi][1],sa_butai[bi][2]];
      }else{bumember += "（데이터 없음）<br>";}
    }
  }
  var syupatub = episode+"-"+field+"　차례"+butai+"부대　("+now+')<br><div class="bumember">'+bumember+'</div><div class="bumember" style="margin-left:50px;"><textarea id="rootjyoho"></textarea><br><small>아이템명 표시는 일부만 표기됩니다</small></div><br style="clear:both;">';

  var map_number= episode+field;var dmap_num=0;
  var droptitle =["","","22","23","24","31","32","33","34","41","42","43","44","51","52","53","54","61","62","63","64","71","72","73","74","81","82"];
  for(var di=2;di<27;di++){if(map_number == droptitle[di])dmap_num=di;}
  if(dmap_num>0)syupatub += mapdrop(dmap_num);
  $("#flontpanel").html('<div class="con_head" style="--con-head-back:#d4a7a8 70%">출진</div>'+syupatub);
  console.log(budata);
}

//출진進 유키/sally/forward
function forward(items){
  //console.log(items.square_id,items.is_finish);
  var mapno = [0,1,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ"];
  var mapsq = " →"+ mapno[items.square_id];
  var itemnom = "";var itemryo = 0;
  if(items.hasOwnProperty("powerful")){if(items.powerful.is_appear == true){mapsq+=":검비";}}
  if(items.item_effect>0){
    if(items["reward"][0]){
      var itemtype = items["reward"][0];
      itemnom = String(itemtype.item_type) + String(itemtype.item_id);
      itemryo = parseInt(itemtype.item_num);
      if(itemtype.hasOwnProperty(itemtype["bonus"])){itemryo += parseInt(itemtype.bonus);}console.log(itemnom,itemryo);
      switch(itemnom){
        case "51": mapsq+=":제작패×"+itemryo;break;
        case "52": mapsq+=":목탄×"+itemryo;break;
        case "53": mapsq+=":옥강×"+itemryo;break;
        case "54": mapsq+=":냉각재×"+itemryo;break;
        case "55": mapsq+=":숫돌×"+itemryo;break;
        case "40": mapsq+=":코반×"+itemryo;break;
        case "18": mapsq+=":도움패×"+itemryo;break;
        default:mapsq+=":item";break;
      }
    }
  }
  
  if(items.is_finish){
    if($("#rootjyoho")[0]){
      $("#rootjyoho").val(maplog+" →●");
      maplog+=mapsq;
      $("#rootjyoho").val(maplog);//setTimeout(function(){$("#rootjyoho").val(maplog);},2600);
      console.log('"root":'+maplog+'"');
    }else{maplog="";}
  }else{
    if($("#rootjyoho")[0]){
      $("#rootjyoho").val(maplog+" →●");
      maplog+=mapsq;
    }
  }
}

//편성실행
function tokenset(items){
  //パーティ편성だけ변경
  if(items){
    partyobj={};//enseitime=[];
    for(var x=1;x<=4;x++){
      if(items[x]){
        if(items[x]["status"]==2){//원정 종료시간
          enseitime[x] = items[x]["finished_at"];
        }else if(items[x]["status"]==3){//특命
          enseitime[x] = "특명조사";
        }else{enseitime[x] = "";}
        for(var y in items[x]["slot"]){
          if(items[x]["slot"][y]["serial_id"]){partyobj[items[x]["slot"][y]["serial_id"]] = x+y;}
        }
      }
    }
    //부대설정
    for(var ti=0;ti<tokenobj.length;ti++){
      tokenobj[ti][38]=99;
      for(var pi in partyobj){
        if(tokenobj[ti][0] == pi){
          tokenobj[ti][38]=partyobj[tokenobj[ti][0]];
          //근시설정if(partyobj[tokenobj[ti][0]]=="11"){kinji=[tokenobj[ti][1],tokenobj[ti][3],tokenobj[ti][27]];}
          break;
        }
      }
    }
  }
}

//장비실행
function tousouset(items){
  if(items.sword){
    for(var ti=0;ti<tokenobj.length;ti++){
     if(tokenobj[ti][0] == items.sword.serial_id){
       tokenobj[ti][28] = items.sword.equip_serial_id1;
       tokenobj[ti][29] = items.sword.equip_serial_id2;
       tokenobj[ti][30] = items.sword.equip_serial_id3;
       tokenobj[ti][31] = items.sword.horse_serial_id;
       tokenobj[ti][33] = items.sword.item_id;
       
       var ehei=0;var eda=0;var etou=0;var eki=0;var esyo=0;var etei=0;var ein=0;
       var equips=['equip_serial_id1','equip_serial_id2','equip_serial_id3'];
       var tousouno = "def";
       for(var eqi=0;eqi<=2;eqi++){
        if(items['sword'][equips[eqi]]){
          if(equipname.hasOwnProperty(equipobj[items['sword'][equips[eqi]]])){tousouno = equipobj[items['sword'][equips[eqi]]];}
          tousousoubi[items['sword'][equips[eqi]]] = items.sword.sword_id;
          ehei += parseInt(equipname[tousouno][2]);
          eda += parseInt(equipname[tousouno][3]);
          etou += parseInt(equipname[tousouno][4]);
          eki += parseInt(equipname[tousouno][5]);
          esyo += parseInt(equipname[tousouno][6]);
          etei += parseInt(equipname[tousouno][7]);
          ein += parseInt(equipname[tousouno][8]);
        }
      }
       tokenobj[ti][10] = eda; 
       tokenobj[ti][13] = etou;
       tokenobj[ti][16] = eki;
       tokenobj[ti][19] = esyo;
       tokenobj[ti][23] = etei;
       tokenobj[ti][26] = ein;
       
       break;
     }
    }
    //tousousoubi[items.serial_id] = items.sword.sword_id;
  }
}

//タイマー통지
function timerset(){
  chrome.alarms.getAll(function(timer){
    var timerobj = new Object(null);
    for(var rpi=1;rpi<=4;rpi++){//手r1-4
      if(repairobj[rpi]){
        timerobj["r"+rpi] = '<lavel>'+rpi+'：'+repairobj[rpi][1]+'<input type="checkbox" name="timer" value="r'+rpi+'"></lavel><br>';
      }else{timerobj["r"+rpi] =  rpi+"： ---<br>";}
    }
    for(var foi=1;foi<=4;foi++){//鍛t1-4
      if(forgeobj[foi]){timerobj["t"+foi] = '<lavel>'+foi+"："+forgeobj[foi]+'<input type="checkbox" name="timer" value="t'+foi+'"></lavel><br>';}
      else{timerobj["t"+foi] = foi+"： ---<br>";}
    }
    for(var eni=1;eni<=4;eni++){//遠e1-4
      if(enseitime[eni]=="특명조사"){timerobj["e"+eni] = eni+"： ---<br>";}
      else if(enseitime[eni]){timerobj["e"+eni] = '<lavel>'+eni+"："+enseitime[eni]+'<input type="checkbox" name="timer" value="e'+eni+'"></lavel><br>';}
      else{timerobj["e"+eni] = eni+"： ---<br>";}
    }
    if(enseitime[0]){timerobj["u1"] = '<lavel>'+enseitime[0]+'<input type="checkbox" name="timer" value="u1"></lavel><br>';}//内
    else{timerobj["u1"] = "---<br>";}
    timerobj["s1"] = "---<br>";//수행
    if(Object.keys(timer).length>0){
      console.log(timer,enseitime);
      for(var key in timer){
        var timer_num = timer[key].name.charAt(1);
        var timer_time = new Date(timer[key].scheduledTime).toLocaleString();
        if(timer[key].name =="s1"){
          enseitime[5]=timer_time;
          timerobj["s1"] = '<lavel>'+enseitime[5]+'<input type="checkbox" name="timer" value="s2"></lavel><br>';
        }else if(timer[key].name =="s2"){
          timerobj["s1"] = '<lavel class="timerset">'+timer_time+'<input type="checkbox" name="timer" value="s2" checked></lavel><br>';
        }else if(timer[key].name =="u1"){
          timerobj["u1"] = '<lavel class="timerset">'+timer_time+'<input type="checkbox" name="timer" value="u1" checked></lavel><br>';
        }
        else{timerobj[timer[key].name] = '<lavel class="timerset">'+timer_num+"："+timer_time+'<input type="checkbox" name="timer" value="'+timer[key].name+'" checked></lavel><br>';}
      }
    }
    var timerb = "";
    //console.log(timerobj);
    timerb = '<div class="timer_waku">수리<br>'+timerobj['r1']+timerobj['r2']+timerobj['r3']+timerobj['r4']+'</div><div class="timer_waku">원정<br>'+timerobj['e1']+timerobj['e2']+timerobj['e3']+timerobj['e4']+'</div><div class="timer_waku">도검제작<br>'+timerobj['t1']+timerobj['t2']+timerobj['t3']+timerobj['t4']+'</div><div class="timer_waku">내번<br>'+timerobj['u1']+'<br>수행<br>'+timerobj['s1']+'</div><br style="clear:both;">체크하면 통지 ON으로, 아니면 OFF이 됩니다.<br>각 완료시간은 최근이 아닐 수도 있습니다. 각각 수리・편성・도검제작・내번화면에서 최근 정보로 갱신할 수 있습니다.<br><span class="syugyo">※수행완료시간의 취득에는 수행 출발 시 도검정보패널을 표시한 상태였어야 합니다.</span>';
    $("#timerinfo").html(timerb);
    //chrome.notifications.getPermissionLevel(function(permission){console.log(permission);});
  });
}
$("#flontpanel").on('click','#timerhyoji',function(){
  timerset();
});
$("#flontpanel").on('change','input[name="timer"]',function(){
  var timer_id = $(this).val();
  if($(this).prop('checked')){
    var timer_cat = timer_id.charAt(0);
    var timer_num = parseInt(timer_id.charAt(1));
    var timer_time = "";
    if(timer_cat=="r"){timer_time = repairobj[timer_num][1];}
    if(timer_cat=="t"){timer_time = forgeobj[timer_num];}
    if(timer_cat=="e"){timer_time = enseitime[timer_num];}
    if(timer_cat=="u"){timer_time = enseitime[0];}
    if(timer_cat=="s"){timer_time = enseitime[5];}
    chrome.alarms.create(timer_id, {"when":new Date(timer_time).getTime()});
    timerset();
  }else{
    //console.log($(this).val(),"off");
    chrome.alarms.clear(timer_id);
    timerset();
  }
});

//도검データ party+sword+equip
function tokendata(items){
  var kagi = 1;var kenlv = 1;//鍵・Lv 全 표시 は0
  if(comp_frag>0){kagi = 0;kenlv = 0;}
  else{
    if($('#kagiflag').prop('checked')){kagi = 0;}
    if($('#levelflag').prop('checked')){kenlv = 0;}
  }
  //도장シリアルに도장データを紐付け
  if(items.equip){
    equipobj = [];
    for(var z in items.equip){
      equipobj[items["equip"][z]["serial_id"]] = items["equip"][z]["equip_id"];
    }
  }
  //キャラシリアルに所属부대紐付け+원정 종료시간
  if(items.party){
    partyobj={};
    //enseitime=[];
    for(var x in items.party){
      if(items["party"][x]["status"]==2){//원정 종료시간
        enseitime[x] = items["party"][x]["finished_at"];
      }else if(items["party"][x]["status"]==3){
        enseitime[x] = "특명조사";
      }else{enseitime[x] = "";}
      for(var y in items["party"][x]["slot"]){
        if(items["party"][x]["slot"][y]["serial_id"]){partyobj[items["party"][x]["slot"][y]["serial_id"]] = x+y;}
      }
    }
  }
  
  if(items.sword){
    var ti = 0;
    tokenobj = [];tousousoubi = [];
    for(var i in items.sword){
     if(kenlv>0 && items['sword'][i]['level']<=1)continue;//Lvフラグ
     if(items["sword"][i]["protect"]>=kagi){//かぎっ子フラグ
      //도장IDに장비者명 紐付け、장비파라미터集합계
      var ehei=0;var eda=0;var etou=0;var eki=0;var esyo=0;var etei=0;var ein=0;
      var equips=['equip_serial_id1','equip_serial_id2','equip_serial_id3'];
      for(var eqi=0;eqi<=2;eqi++){
        if(items['sword'][i][equips[eqi]]){
          var tousouno = "def";
          if(equipname.hasOwnProperty(equipobj[items['sword'][i][equips[eqi]]])){tousouno = equipobj[items['sword'][i][equips[eqi]]];}
          tousousoubi[items['sword'][i][equips[eqi]]] = items['sword'][i]['sword_id'];
          ehei += parseInt(equipname[tousouno][2]);
          eda += parseInt(equipname[tousouno][3]);
          etou += parseInt(equipname[tousouno][4]);
          eki += parseInt(equipname[tousouno][5]);
          esyo += parseInt(equipname[tousouno][6]);
          etei += parseInt(equipname[tousouno][7]);
          ein += parseInt(equipname[tousouno][8]);
        }
      }
      if(items['sword'][i]['horse_serial_id']){tousousoubi[items['sword'][i]['horse_serial_id']] = items['sword'][i]['sword_id'];}
      
      //부대설정
      let butai=99;
      if(partyobj[items['sword'][i]['serial_id']]){butai=partyobj[items['sword'][i]['serial_id']];}
      //근시설정if(partyobj[items['sword'][i]['serial_id']]==11)
      if(items['sword'][i]['serial_id']==secnum){kinji=[items['sword'][i]['sword_id'],items['sword'][i]['level'],items['sword'][i]['fatigue']];}

      //귀환
      let recovered=null;
      if(items['sword'][i]['fatigue']<49){recovered=Date.parse(items['sword'][i]['recovered_at'])/1000;}

      //도검データ配列생成
      tokenobj[ti] = [
        items['sword'][i]['serial_id'], //0:識別ID
        items['sword'][i]['sword_id'], //1:도검No
        "",//swordname[items['sword'][i]['sword_id']][0], //2:도검명
        items['sword'][i]['level'], //3:Lv
        items['sword'][i]['exp'], //4:Exp
        items['sword'][i]['hp'],items['sword'][i]['hp_max'],items['sword'][i]['hp_up'], //5:생존 6:最대HP 7:상한HP
        items['sword'][i]['atk'],items['sword'][i]['atk_up'], eda, //8:攻撃 9:상한 10：＋장비
        items['sword'][i]['def'],items['sword'][i]['def_up'], etou, //11:防御 12:상한 13：＋장비
        items['sword'][i]['mobile'],items['sword'][i]['mobile_up'], eki, //14:速さ 15:상한 16：＋장비
        items['sword'][i]['back'],items['sword'][i]['back_up'], esyo, //17:충력 18:상한 19：＋장비
        items['sword'][i]['loyalties'], //20:필살
        items['sword'][i]['scout'],items['sword'][i]['scout_up'], etei, //21:정찰 22:상한 23：＋장비
        items['sword'][i]['hide'],items['sword'][i]['hide_up'],ein, //24:은폐 25:상한 26：＋장비
        items['sword'][i]['fatigue'], //27:피로
        items['sword'][i]['equip_serial_id1'],items['sword'][i]['equip_serial_id2'],//28,29장비1,2
        items['sword'][i]['equip_serial_id3'],items['sword'][i]['horse_serial_id'],//30장비3,31말
        items['sword'][i]['ranbu_level'],//32난무
        items['sword'][i]['item_id'], //33:부적
        items['sword'][i]['status'], //34원정중？
        items['sword'][i]['rarity'], //35レア度
        items['sword'][i]['symbol'], //36특2普1？
        items["sword"][i]["protect"],//37鍵
        butai, //38所属부대
        ehei, //39병
        items['sword'][i]['created_at'],//40誕생日
        recovered//41recovered_at
        //items['sword'][i]['evol_num']42특번 수？
      ];
      ti++;
     }
    }
  }
}


//力押しで정렬処理--------------------------------------------------------------
//昇降설정
function syojyun(col){
  tokenobj.sort(function (a,b){return(a[col]-b[col]);});
  $("#kentb").find("th").removeClass('syocol koucol');
}
function koujyun(col){
  tokenobj.sort(function (a,b){return(b[col]-a[col]);});
  $("#kentb").find("th").removeClass('syocol koucol');
}

//정렬장비有無
function syojyun_s(col,umano){
  tokenobj.sort(function (a,b){
    var uma_a=0; var uma_b=0;
    if(soubion_frag==1){a=parseInt(a[col])+parseInt(a[col+2]); b=parseInt(b[col])+parseInt(b[col+2]);}
    else if(soubion_frag==2){
      if(equipname.hasOwnProperty(equipobj[a[31]])){uma_a=parseInt(equipname[equipobj[a[31]]][umano]);}
      if(equipname.hasOwnProperty(equipobj[b[31]])){uma_b=parseInt(equipname[equipobj[b[31]]][umano]);}
      a=parseInt(a[col])+parseInt(a[col+2])+uma_a;
      b=parseInt(b[col])+parseInt(b[col+2])+uma_b;
    }
    else{a=a[col]; b=b[col];}
    return(a-b);      
  });
  $("#kentb").find("th").removeClass('syocol koucol');
}

function koujyun_s(col,umano){
  tokenobj.sort(function (a,b){
    var uma_a=0; var uma_b=0;
    if(soubion_frag==1){a=parseInt(a[col])+parseInt(a[col+2]); b=parseInt(b[col])+parseInt(b[col+2]);}
    else if(soubion_frag==2){
      if(equipname.hasOwnProperty(equipobj[a[31]])){uma_a=parseInt(equipname[equipobj[a[31]]][umano]);}
      if(equipname.hasOwnProperty(equipobj[b[31]])){uma_b=parseInt(equipname[equipobj[b[31]]][umano]);}
      a=parseInt(a[col])+parseInt(a[col+2])+uma_a;
      b=parseInt(b[col])+parseInt(b[col+2])+uma_b;
    }
    else{a=a[col]; b=b[col];}
    return(b-a);
  });
  $("#kentb").find("th").removeClass('syocol koucol');
}

$("#tno").on('click',function(){
  if(sort[1]){koujyun(1);$(this).addClass('koucol');sort[1]=0;}
  else{syojyun(1);$(this).addClass('syocol');sort[1]=1;}
  nowsort = 1;
  hyouji();
});

$("#lv").on('click',function(){
  var lvexp = 3;  //3:Lv 4:exp
  if($('#lvexp').prop('checked')){lvexp = 4;}
  if(sort[4]){koujyun(lvexp);$(this).addClass('koucol');sort[4]=0;sort[3]=0;}
  else{syojyun(lvexp);$(this).addClass('syocol');sort[4]=1;sort[3]=1;}
  nowsort = lvexp;
  hyouji();
});

$("#atk").on('click',function(){
  if(sort[8]){koujyun_s(8,3);$(this).addClass('koucol');sort[8]=0;}
  else{syojyun_s(8,3);$(this).addClass('syocol');sort[8]=1;}
  nowsort = 8;
  hyouji();
});

$("#def").on('click',function(){
  if(sort[11]){koujyun_s(11,4);$(this).addClass('koucol');sort[11]=0;}
  else{syojyun_s(11,4);$(this).addClass('syocol');sort[11]=1;}
  nowsort = 11;
  hyouji();
});

$("#mov").on('click',function(){
  if(sort[14]){koujyun_s(14,5);$(this).addClass('koucol');sort[14]=0;}
  else{syojyun_s(14,5);$(this).addClass('syocol');sort[14]=1;}
  nowsort = 14;
  hyouji();
});

$("#bac").on('click',function(){
  if(sort[17]){koujyun_s(17,6);$(this).addClass('koucol');sort[17]=0;}
  else{syojyun_s(17,6);$(this).addClass('syocol');sort[17]=1;}
  nowsort = 17;
  hyouji();
});

$("#loy").on('click',function(){
  if(sort[20]){koujyun(20);$(this).addClass('koucol');sort[20]=0;}
  else{syojyun(20);$(this).addClass('syocol');sort[20]=1;}
  nowsort = 20;
  hyouji();
});

$("#sco").on('click',function(){
  if(sort[21]){koujyun_s(21,7);$(this).addClass('koucol');sort[21]=0;}
  else{syojyun_s(21,7);$(this).addClass('syocol');sort[21]=1;}
  nowsort = 21;
  hyouji();
});

$("#hid").on('click',function(){
  if(sort[24]){koujyun_s(24,8);$(this).addClass('koucol');sort[24]=0;}
  else{syojyun_s(24,8);$(this).addClass('syocol');sort[24]=1;}
  nowsort = 24;
  hyouji();
});

$("#hiro").on('click',function(){
  if(sort[27]){koujyun(27);$(this).addClass('koucol');sort[27]=0;}
  else{syojyun(27);$(this).addClass('syocol');sort[27]=1;}
  nowsort = 27;
  hyouji();
});

$("#tai").on('click',function(){
  if(sort[38]){koujyun(38);$(this).addClass('koucol');sort[38]=0;}
  else{syojyun(38);$(this).addClass('syocol');sort[38]=1;}
  nowsort = 38;
  hyouji();
});

$("#hp").on('click',function(){
  if(sort[6]){koujyun(6);$(this).addClass('koucol');sort[6]=0;}
  else{syojyun(6);$(this).addClass('syocol');sort[6]=1;}
  nowsort = 6;
  hyouji();
});

$("#ranbu").on('click',function(){
  if(sort[32]){koujyun(32);$(this).addClass('koucol');sort[32]=0;}
  else{syojyun(32);$(this).addClass('syocol');sort[32]=1;}
  nowsort = 32;
  hyouji();
});

function sorthozon(nsort){
  var sk_swi=sort[nsort];
  var th_id={"1":"#tno","3":"#lv","4":"#lv","8":"#atk","11":"#def","14":"#mov","17":"#bac","20":"#loy","21":"#sco","24":"#hid","27":"#hiro","38":"#tai","6":"#hp","32":"#ranbu"};
  //console.log(nsort,sk_swi,soubion_frag,th_id[nsort]);
  if(sk_swi==1){
    switch(nsort){
      case 8: syojyun_s(8,3);break;
      case 11: syojyun_s(11,4);break;
      case 14: syojyun_s(14,5);break;
      case 17: syojyun_s(17,6);break;
      case 21: syojyun_s(21,7);break;
      case 24: syojyun_s(24,8);break;
      default:syojyun(nsort);break;
    }
    $(th_id[nsort]).addClass('syocol');
  }else{
    switch(nsort){
      case 8: koujyun_s(8,3);break;
      case 11: koujyun_s(11,4);break;
      case 14: koujyun_s(14,5);break;
      case 17: koujyun_s(17,6);break;
      case 21: koujyun_s(21,7);break;
      case 24: koujyun_s(24,8);break;
      default:koujyun(nsort);break;
    }
    $(th_id[nsort]).addClass('koucol');
  }
}

// 표시 -----------------------------------------------------------------------
function hyouji(hyoji_swi){
  if(hyoji_swi==1){nyusyu_td.classList.remove('hide');}else{nyusyu_td.classList.add('hide');}//입수일TH
  var buf="";
  var bu1p=[0,0,0,0,0,0,0,0,0,0,0,0,""];var bu2p=[0,0,0,0,0,0,0,0,0,0,0,0,""];var bu3p=[0,0,0,0,0,0,0,0,0,0,0,0,""];var bu4p=[0,0,0,0,0,0,0,0,0,0,0,0,""];
  var tokenobjln = tokenobj.length;
  for(var si=0;si<tokenobjln;si++){
    var butai=Math.floor(tokenobj[si][38]/10);
    //말파라미터追加
    var uma_p={"u8":"0", "u11":"0", "u14":"0", "u17":"0", "u21":"0", "u24":"0"};
    if(tokenobj[si][31] && soubion_frag==2){
      var umano = "def";
      if(equipname.hasOwnProperty(equipobj[tokenobj[si][31]])){umano = equipobj[tokenobj[si][31]];}
      uma_p.u8=equipname[umano][3];//타
      uma_p.u11=equipname[umano][4];//통
      uma_p.u14=equipname[umano][5];//기
      uma_p.u17=equipname[umano][6];//충
      uma_p.u21=equipname[umano][7];//정
      uma_p.u24=equipname[umano][8];//은폐
    }
    var sou_p=[0,0,0,0,0,0,0];
    if(soubion_frag>=1){
      sou_p[0]=parseInt(tokenobj[si][10]);//타
      sou_p[1]=parseInt(tokenobj[si][13]);//통
      sou_p[2]=parseInt(tokenobj[si][16]);//기
      sou_p[3]=parseInt(tokenobj[si][19]);//충
      sou_p[4]=parseInt(tokenobj[si][23]);//정
      sou_p[5]=parseInt(tokenobj[si][26]);//은폐
      sou_p[6]=parseInt(tokenobj[si][39]);//병
    }
    
    //部파라미터集합계 0Lv 1병 2생 3타 4통 5기 6충 7필 8정 9은폐 10피로
    if(butai==1){
      bu1p[0]+=parseInt(tokenobj[si][3]);bu1p[1]+=parseInt(sou_p[6]);bu1p[2]+=parseInt(tokenobj[si][5]);
      bu1p[3]+=parseInt(tokenobj[si][8])+parseInt(sou_p[0])+parseInt(uma_p.u8);
      bu1p[4]+=parseInt(tokenobj[si][11])+parseInt(sou_p[1])+parseInt(uma_p.u11);
      bu1p[5]+=parseInt(tokenobj[si][14])+parseInt(sou_p[2])+parseInt(uma_p.u14);
      bu1p[6]+=parseInt(tokenobj[si][17])+parseInt(sou_p[3])+parseInt(uma_p.u17);
      bu1p[7]+=parseInt(tokenobj[si][20]);
      bu1p[8]+=parseInt(tokenobj[si][21])+parseInt(sou_p[4])+parseInt(uma_p.u21);
      bu1p[9]+=parseInt(tokenobj[si][24])+parseInt(sou_p[5])+parseInt(uma_p.u24);
      bu1p[10]+=parseInt(tokenobj[si][27]);
      bu1p[11]++;
      if(swordname.hasOwnProperty(tokenobj[si][1])){bu1p[12]+=tosyuico(swordname[tokenobj[si][1]][1]);}
    }
    if(butai==2){
      bu2p[0]+=parseInt(tokenobj[si][3]);bu2p[1]+=parseInt(sou_p[6]);bu2p[2]+=parseInt(tokenobj[si][5]);
      bu2p[3]+=parseInt(tokenobj[si][8])+parseInt(sou_p[0])+parseInt(uma_p.u8);
      bu2p[4]+=parseInt(tokenobj[si][11])+parseInt(sou_p[1])+parseInt(uma_p.u11);
      bu2p[5]+=parseInt(tokenobj[si][14])+parseInt(sou_p[2])+parseInt(uma_p.u14);
      bu2p[6]+=parseInt(tokenobj[si][17])+parseInt(sou_p[3])+parseInt(uma_p.u17);
      bu2p[7]+=parseInt(tokenobj[si][20]);
      bu2p[8]+=parseInt(tokenobj[si][21])+parseInt(sou_p[4])+parseInt(uma_p.u21);
      bu2p[9]+=parseInt(tokenobj[si][24])+parseInt(sou_p[5])+parseInt(uma_p.u24);
      bu2p[10]+=parseInt(tokenobj[si][27]);
      bu2p[11]++;
      if(swordname.hasOwnProperty(tokenobj[si][1])){bu2p[12]+=tosyuico(swordname[tokenobj[si][1]][1]);}
    }
    if(butai==3){
      bu3p[0]+=parseInt(tokenobj[si][3]);bu3p[1]+=parseInt(sou_p[6]);bu3p[2]+=parseInt(tokenobj[si][5]);
      bu3p[3]+=parseInt(tokenobj[si][8])+parseInt(sou_p[0])+parseInt(uma_p.u8);
      bu3p[4]+=parseInt(tokenobj[si][11])+parseInt(sou_p[1])+parseInt(uma_p.u11);
      bu3p[5]+=parseInt(tokenobj[si][14])+parseInt(sou_p[2])+parseInt(uma_p.u14);
      bu3p[6]+=parseInt(tokenobj[si][17])+parseInt(sou_p[3])+parseInt(uma_p.u17);
      bu3p[7]+=parseInt(tokenobj[si][20]);
      bu3p[8]+=parseInt(tokenobj[si][21])+parseInt(sou_p[4])+parseInt(uma_p.u21);
      bu3p[9]+=parseInt(tokenobj[si][24])+parseInt(sou_p[5])+parseInt(uma_p.u24);
      bu3p[10]+=parseInt(tokenobj[si][27]);
      bu3p[11]++;
      if(swordname.hasOwnProperty(tokenobj[si][1])){bu3p[12]+=tosyuico(swordname[tokenobj[si][1]][1]);}
    }
    if(butai==4){
      bu4p[0]+=parseInt(tokenobj[si][3]);bu4p[1]+=parseInt(sou_p[6]);bu4p[2]+=parseInt(tokenobj[si][5]);
      bu4p[3]+=parseInt(tokenobj[si][8])+parseInt(sou_p[0])+parseInt(uma_p.u8);
      bu4p[4]+=parseInt(tokenobj[si][11])+parseInt(sou_p[1])+parseInt(uma_p.u11);
      bu4p[5]+=parseInt(tokenobj[si][14])+parseInt(sou_p[2])+parseInt(uma_p.u14);
      bu4p[6]+=parseInt(tokenobj[si][17])+parseInt(sou_p[3])+parseInt(uma_p.u17);
      bu4p[7]+=parseInt(tokenobj[si][20]);
      bu4p[8]+=parseInt(tokenobj[si][21])+parseInt(sou_p[4])+parseInt(uma_p.u21);
      bu4p[9]+=parseInt(tokenobj[si][24])+parseInt(sou_p[5])+parseInt(uma_p.u24);
      bu4p[10]+=parseInt(tokenobj[si][27]);
      bu4p[11]++;
      if(swordname.hasOwnProperty(tokenobj[si][1])){bu4p[12]+=tosyuico(swordname[tokenobj[si][1]][1]);}
    }
    
    //도검목록
    var tokenno = "def";
    if(swordname.hasOwnProperty(tokenobj[si][1])){tokenno = tokenobj[si][1];}
    var keydata = tokenobj[si][37]>0 ? "" : ' class="nokey"';//鍵없음 도검着色
    if(tokenobj[si][0]==secnum){keydata =' class="kinji"';}
    var knst = tokenobj[si][3]>=99 ? " knst" : "";//カンスト
    buf +='<tr id="'+tokenobj[si][0]+'" class="'+swordname[tokenno][1]+knst+'"><td class="tai'+butai+'">'+butai+'</td>';
    buf += "<td>"+tokenobj[si][1]+'</td><td'+keydata+'>';//No
    if(icoflg==1){buf += tosyuico(swordname[tokenno][1])+" ";}//アイコン
    buf += swordname[tokenno][0];//명 
    if(tokenobj[si][33] == 2){buf +=' <b class="mak">*</b>';}else if(tokenobj[si][33] == 1){buf +=' <b class="ma">*</b>';} //부적
    buf += '</td><td><span title="'+tokenobj[si][4]+'">'+tokenobj[si][3]+'</span></td>';//Lv
    var hpzan = "";
    if(tokenobj[si][6]-tokenobj[si][5]){hpzan = ' class="hpzan"';}//ダメージ有
    var kizu = "";//傷의 程度
    if(Math.floor((tokenobj[si][5]/tokenobj[si][6])*100) <= 30){kizu = ' class="jyusyo"';}
    else if(tokenobj[si][5]/tokenobj[si][6] < 0.65){kizu = ' class="cyusyo"';}
    else if(tokenobj[si][5]/tokenobj[si][6] < 0.9){kizu = ' class="keisyo"';}
    if(Object.keys(repairobj).length>0){
      for(var key in repairobj){
        if(tokenobj[si][0] == repairobj[key][0]){kizu = ' class="teirecyu"';break;}
      }
    }
    var kan="";var to_kan="";
    if(tokenobj[si][7]<=0){to_kan="";}//カンスト
    else{to_kan='<span class="tokan"> ('+tokenobj[si][7]+')</span>';}
    buf += "<td"+kizu+"><span"+hpzan+">"+tokenobj[si][5]+'</span>/'+tokenobj[si][6]+to_kan+'</td>'; //HP
    if(tokenobj[si][27]>49){buf += '<td class="sak"';} //피로度彩色
    else if(tokenobj[si][27]<9){buf += '<td class="akahirou"';}
    else if(tokenobj[si][27]<20){buf += '<td class="hirou"';}
    else{buf += '<td';}
    if(tokenobj[si][41]){buf += '><span class="rtime" data-rtime="'+tokenobj[si][41]+'">'+tokenobj[si][27]+'</span></td>';}
    else{buf += ">"+tokenobj[si][27]+'</td>'; }//피로度
    var hyojipara="";
    for(var j=8; j<=17; j+=3){
      hyojipara=parseInt(tokenobj[si][j])+parseInt(tokenobj[si][j+2])+parseInt(uma_p["u"+j]);
      if(tokenobj[si][j+1]<=0){kan=" kan";to_kan="";}//カンスト
      else{kan = ""; to_kan='<span class="tokan"> ('+tokenobj[si][j+1]+')</span>';}
      buf += '<td><span class="soubion">'+hyojipara+'</span><span class="defp'+kan+'">'+tokenobj[si][j]+'</span>'+to_kan+'</td>'; //타,통,기,충
    }
    buf += '<td class="hit">'+tokenobj[si][20]+'</td>'; //필
    for (j=21; j<=24; j+=3){
      hyojipara=parseInt(tokenobj[si][j])+parseInt(tokenobj[si][j+2])+parseInt(uma_p["u"+j]);
      if(tokenobj[si][j+1]<=0){kan=" kan";to_kan="";}//カンスト
      else{kan = ""; to_kan='<span class="tokan"> ('+tokenobj[si][j+1]+')</span>';}
      buf += '<td><span class="soubion">'+hyojipara+'</span><span class="defp'+kan+'">'+tokenobj[si][j]+'</span>'+to_kan+'</td>';
    }
    for (j=28; j<=31; j++){
      var tousouno = "def";
      if(equipname.hasOwnProperty(equipobj[tokenobj[si][j]])){tousouno = equipobj[tokenobj[si][j]];}
      if(tokenobj[si][j]){buf += '<td class="'+equipname[tousouno][1]+' tato">'+equipname[tousouno][0]+'</td>';}else{buf +='<td>-</td>';} //장비・말
    }
    var raubuc = tokenobj[si][32]>=7 ? ' class="kan"' : '';
		buf += '<td'+raubuc+'>'+tokenobj[si][32]+'</td>'; //난무
    if(hyoji_swi===1){buf += '<td>'+tokenobj[si][40]+'</td>'; }//입수일
    buf += '</tr>';
  }
  kentable.empty().html(buf);
  buf = null;

  //근시データ
  var kinjihyoji = '　　【근시】 ';
  if(swordname.hasOwnProperty(kinji[0])){
    kinjihyoji +=swordname[kinji[0]][0]+'　Lv'+kinji[1];
  }
  kinjihyoji +=helptip(0);

  //부대合합계
  var kei1="";var kei2="";var kei3="";var kei4="";
  if(enseitime[1]){kei1=' nowen';bu1p[12]="원정중 "+enseitime[1];}
  if(enseitime[2]){kei2=' nowen';bu2p[12]="원정중 "+enseitime[2];}
  if(enseitime[3]){kei3=' nowen';bu3p[12]="원정중 "+enseitime[3];}
  if(enseitime[4]){kei4=' nowen';bu4p[12]="원정중 "+enseitime[4];}
  var buf_bu="";
  buf_bu+='<div class="pkei'+kei1+'">【一】 Lv'+bu1p[0]+"，병"+bu1p[1]+"，생"+bu1p[2]+"，타"+bu1p[3]+"，통"+bu1p[4]+"，기"+bu1p[5]+
   "，충"+bu1p[6]+"，필"+bu1p[7]+"，정"+bu1p[8]+"，은"+bu1p[9]+"，피로"+bu1p[10]+'</div><div class="pkeir'+kei1+'">'+bu1p[12]+
   '</div><div class="pkei'+kei2+'">【二】 Lv'+bu2p[0]+"，병"+bu2p[1]+"，생"+bu2p[2]+"，타"+bu2p[3]+"，통"+bu2p[4]+"，기"+bu2p[5]+
   "，충"+bu2p[6]+"，필"+bu2p[7]+"，정"+bu2p[8]+"，은"+bu2p[9]+"，피로"+bu2p[10]+'</div><div class="pkeir'+kei2+'">'+bu2p[12]+
   '</div><div class="pkei'+kei3+'">【三】 Lv'+bu3p[0]+"，병"+bu3p[1]+"，생"+bu3p[2]+"，타"+bu3p[3]+"，통"+bu3p[4]+"，기"+bu3p[5]+
   "，충"+bu3p[6]+"，필"+bu3p[7]+"，정"+bu3p[8]+"，은"+bu3p[9]+"，피로"+bu3p[10]+'</div><div class="pkeir'+kei3+'">'+bu3p[12]+
   '</div><div class="pkei'+kei4+'">【四】 Lv'+bu4p[0]+"，병"+bu4p[1]+"，생"+bu4p[2]+"，타"+bu4p[3]+"，통"+bu4p[4]+"，기"+bu4p[5]+
   "，충"+bu4p[6]+"，필"+bu4p[7]+"，정"+bu4p[8]+"，은"+bu4p[9]+"，피로"+bu4p[10]+'</div><div class="pkeir'+kei4+'">'+bu4p[12]+'</div><p class="cl"></p>';
  $("#butaikei").html(buf_bu);   
  $("#lvhei").html("【평균Lv】 一："+Math.ceil(bu1p[0]/bu1p[11])+"　二："+Math.ceil(bu2p[0]/bu2p[11])+"　三："+Math.ceil(bu3p[0]/bu3p[11])+"　四："+Math.ceil(bu4p[0]/bu4p[11])+kinjihyoji);
  
  if(soubion_frag){
    if(soubion_frag==1){kentable.find('.soubion').removeClass('hide');}
    else if(soubion_frag==2){kentable.find('.soubion').addClass('souuma');}
    kentable.find('.defp').addClass('hide');
    kentable.find('.tokan').addClass('hidden');
  }else{
    kentable.find('.soubion').addClass('hide').removeClass('souuma');
    kentable.find('.defp').removeClass('hide');
    kentable.find('.tokan').removeClass('hidden');
  }
  
  var trtousyu = "";
  if(tousyu[6]<0){trtousyu += ".tan,.wa,.uti,.ruti,.ta,.oot,.ya,.nag,.tur,";}
  else{
    trtousyu += tousyu[0]<0 ? ".tan," : "" ;
    trtousyu += tousyu[1]<0 ? ".wa," : "" ;
    trtousyu += tousyu[2]<0 ? ".uti,.ruti," : "" ;
    trtousyu += tousyu[3]<0 ? ".ta," : "" ;
    trtousyu += tousyu[4]<0 ? ".oot," : "" ;  
    trtousyu += tousyu[5]<0 ? ".ya,.nag,.tur," : "" ;
  }
  if(tousyu[7]<0){trtousyu += ".tanK,.waK,.utiK,.rutiK,.taK,.yaK,.ootK,.nagK,";}//.turK,
  else{
    trtousyu += tousyu[0]<0 ? ".tanK," : "" ;
    trtousyu += tousyu[1]<0 ? ".waK," : "" ;
    trtousyu += tousyu[2]<0 ? ".utiK,.rutiK," : "" ;
    trtousyu += tousyu[3]<0 ? ".taK," : "" ;
    trtousyu += tousyu[4]<0 ? ".ootK," : "" ;
    trtousyu += tousyu[5]<0 ? ".yaK,.nagK,.turK," : "" ;
  }  
  trtousyu = trtousyu.slice(0,-1);//console.log(trtousyu);
  if(trtousyu.length>0){
    kentable.find(trtousyu).addClass('hide');  
  }
  if(tousyu[8]<0){kentable.find(".knst").addClass('hide');}
  if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
}

//장비品加算키리り替え
$("#soubi_swi").on('click',function(){
  if(soubion_frag==1){
    soubion_frag=2;
    hyouji();
    $("#parasetu").text('도검＋도장＋말').addClass('souuma');
    $("#bukeihead").text('부대합계（도검＋도장＋말）').addClass('souuma');
  }else if(soubion_frag==2){
    soubion_frag=0;
    hyouji();
    $("#parasetu").text('도검의 볼드체는 칸스토, ( )는 성장 상한까지의 수치').removeClass('souuma').addClass('nosoubi');
    $("#bukeihead").text('부대합계（도검）').removeClass('souuma').addClass('nosoubi');
  }else{
    soubion_frag=1;
    hyouji();
    $("#parasetu").text('도검＋도장').removeClass('nosoubi');
    $("#bukeihead").text('부대합계（도검＋도장）').removeClass('nosoubi');
  }
});

//간략み
$('#tanC').on('change',function(){
  if($('#tanC').prop('checked')){
    var trclass = tousyu[6]===0 ? ".tan" : "" ;
    if(tousyu[7]===0){trclass += trclass!=="" ? "," : ""; trclass += ".tanK";} 
    if(trclass!==""){kentable.find(trclass).removeClass('hide');}
    if(tousyu[8]<0){kentable.find('.tan,.tanK').filter('.knst').addClass('hide');}
    if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
    tousyu[0]=0;
  }else{kentable.find('.tan,.tanK').addClass('hide');tousyu[0]=-1;}
});
$('#wakiC').on('change',function(){
  if($('#wakiC').prop('checked')){
    var trclass = tousyu[6]===0 ? ".wa" : "" ;
    if(tousyu[7]===0){trclass += trclass!=="" ? "," : ""; trclass += ".waK";} 
    if(trclass!==""){kentable.find(trclass).removeClass('hide');}
    if(tousyu[8]<0){kentable.find('.wa,.waK').filter('.knst').addClass('hide');}
    if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
    tousyu[1]=0;
  }else{kentable.find('.wa,.waK').addClass('hide');tousyu[1]=-1;}
});
$('#uchiC').on('change',function(){
  if($('#uchiC').prop('checked')){
    var trclass = tousyu[6]===0 ? ".uti,.ruti" : "" ;
    if(tousyu[7]===0){trclass += trclass!=="" ? "," : ""; trclass += ".utiK,.rutiK";}  
    if(trclass!==""){kentable.find(trclass).removeClass('hide');}
    if(tousyu[8]<0){kentable.find('.uti,.ruti,.utiK,.rutiK').filter('.knst').addClass('hide');}
    if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
    tousyu[2]=0;
  }else{kentable.find('.uti,.ruti,.utiK,.rutiK').addClass('hide');tousyu[2]=-1;}
});
$('#tatiC').on('change',function(){
  if($('#tatiC').prop('checked')){
    var trclass = tousyu[6]===0 ? ".ta" : "" ;
    if(tousyu[7]===0){trclass += trclass!=="" ? "," : ""; trclass += ".taK";}
    if(trclass!==""){kentable.find(trclass).removeClass('hide');}
    if(tousyu[8]<0){kentable.find('.ta,.taK').filter('.knst').addClass('hide');}
    if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
    tousyu[3]=0;
  }else{kentable.find('.ta,.taK').addClass('hide');tousyu[3]=-1;}
});
$('#ootaC').on('change',function(){
  if($('#ootaC').prop('checked')){
    var trclass = tousyu[6]===0 ? ".oot" : "" ;
    if(tousyu[7]===0){trclass += trclass!=="" ? "," : ""; trclass += ".ootK";}
    if(trclass!==""){kentable.find(trclass).removeClass('hide');}
    if(tousyu[8]<0){kentable.find('.oot,.ootK').filter('.knst').addClass('hide');}
    if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
    tousyu[4]=0;
  }else{kentable.find('.oot,.ootK').addClass('hide');tousyu[4]=-1;}
});
$('#yanaC').on('change',function(){
  if($('#yanaC').prop('checked')){
    var trclass = tousyu[6]===0 ? ".ya,.nag,.tur" : "" ;
    if(tousyu[7]===0){trclass += trclass!=="" ? "," : ""; trclass += ".yaK,.nagK,.turK";}
    if(trclass!==""){kentable.find(trclass).removeClass('hide');}
    if(tousyu[8]<0){kentable.find('.ya,.yaK,.nag,.nagK,.tur').filter('.knst').addClass('hide');}//.turK
    if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
    tousyu[5]=0;
  }else{kentable.find('.ya,.yaK,.nag,.nagK,.tur').addClass('hide');tousyu[5]=-1;}//.turK
});
$('#kimaeC').on('change',function(){
  if($('#kimaeC').prop('checked')){
    tousyu[6]=0;
    var trclass = slctcls(6);
    if(trclass!==""){kentable.find(trclass).removeClass('hide');}
    if(tousyu[8]<0){kentable.find('.tan,.wa,.uti,.ruti,.ta,.oot,.ya,.nag,.tur').filter('.knst').addClass('hide');} 
    if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
  }else{kentable.find('.tan,.wa,.uti,.ruti,.ta,.oot,.ya,.nag,.tur').addClass('hide');tousyu[6]=-1;}
});
$('#kiwameC').on('change',function(){
  if($('#kiwameC').prop('checked')){
    tousyu[7]=0;
    var trclass = slctcls(7);
    if(trclass!==""){kentable.find(trclass).removeClass('hide');}
    if(tousyu[8]<0){kentable.find('.tanK,.waK,.utiK,.rutiK,.taK,.yaK,.ootK,.nagK').filter('.knst').addClass('hide');}//.turK
    if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
  }else{kentable.find('.tanK,.waK,.utiK,.rutiK,.taK,.yaK,.ootK,.nagK').addClass('hide');tousyu[7]=-1;}//.turK
});
$('#lvknstC').on('change',function(){
  if($('#lvknstC').prop('checked')){
    var trclass = slctcls(8);
    if(trclass!==""){kentable.find('.knst').filter(trclass).removeClass('hide');}
    if(tousyu[9]<0){kentable.find('.tai9').parent("tr").addClass('hide');}
    tousyu[8]=0;
  }else{kentable.find('.knst').addClass('hide');tousyu[8]=-1;}
});
$('#bugaiC').on('change',function(){
  if($('#bugaiC').prop('checked')){
    var trclass = slctcls(9);
    if(trclass!==""){kentable.find('.tai9').parent("tr").filter(trclass).removeClass('hide');} 
    tousyu[9]=0;
  }else{kentable.find('.tai9').parent("tr").addClass('hide');tousyu[9]=-1;}
});

function slctcls(propcheck){
  var trclass = "";
  if(tousyu[6]===0 && propcheck!=7){
    trclass += tousyu[0]===0 ? ".tan," : "";
    trclass += tousyu[1]===0 ? ".wa," : "";
    trclass += tousyu[2]===0 ? ".uti,.ruti," : "";
    trclass += tousyu[3]===0 ? ".ta," : "";
    trclass += tousyu[4]===0 ? ".oot," : "";
    trclass += tousyu[5]===0 ? ".ya,.nag,.tur," : "";
  }
  if(tousyu[7]===0 && propcheck!=6){
    trclass += tousyu[0]===0 ? ".tanK," : "";
    trclass += tousyu[1]===0 ? ".waK," : "";
    trclass += tousyu[2]===0 ? ".utiK,.rutiK," : "";
    trclass += tousyu[3]===0 ? ".taK," : "";
    trclass += tousyu[4]===0 ? ".ootK," : "";
    trclass += tousyu[5]===0 ? ".yaK,.nagK,.turK," : "";
  }
  trclass = trclass.slice(0,-1);
  console.log(trclass);
  return trclass;
}

$("#zensen").on('click',function(){
  $('#tanC,#wakiC,#uchiC,#tatiC,#ootaC,#yanaC,#kiwameC,#kimaeC,#lvknstC,#bugaiC').prop('checked', true);
  kentable.find("tr").removeClass('hide');
  tousyu = [0,0,0,0,0,0,0,0,0,0];
});
$("#zenkai").on('click',function(){
  $('#tanC,#wakiC,#uchiC,#tatiC,#ootaC,#yanaC').prop('checked', false);
  $('#kiwameC,#kimaeC,#lvknstC,#bugaiC').prop('checked', true);
  kentable.find("tr").addClass('hide');
  tousyu = [-1,-1,-1,-1,-1,-1,0,0,0,0];
});

//選択상태
document.getElementById('hyocopy').addEventListener('click',function(){
//$('#hyocopy').click(function(){
  var kentab = document.getElementById("kentb");
  document.getSelection().selectAllChildren(kentab);
  document.execCommand("Copy");
  kentab = null;
});

//피로値
$("#kentable").on('click','.rtime',function(){
  let hirou = parseInt(this.textContent);
  let rtime = parseInt(this.dataset.rtime);
  let ima = Math.floor(Date.now()/1000);
  let e_min = Math.floor((ima-rtime)/180)*3;
  let h_genzai=hirou+e_min<49 ? hirou+e_min : 49;
  let hirobuf='현재값： '+h_genzai+'　<span style="font-size:0.8em;color:#aaaaaa">※추정치 오차 있음</span>';
  if(h_genzai<49){
    let kanrep=Math.ceil((49-hirou)/3)*180;
    let kaurepdate =new Date((rtime+kanrep)*1000).toLocaleString('ja-JP');
    hirobuf+='<br>경단상한： '+kaurepdate;
  }
  if(h_genzai<20){
    let hirourep=Math.ceil((20-hirou)/3)*180;
    let hirourepdate =new Date((rtime+hirourep)*1000).toLocaleString('ja-JP');   
    hirobuf+='<br>피로경단： '+hirourepdate;
  }
  const hirotip = document.getElementById('hirotip');
  var rect = this.getBoundingClientRect();
  var elemleft = rect.left + window.pageXOffset-170;
  var elemtop = rect.top + window.pageYOffset-2;
  hirotip.style.left = elemleft+'px';
  hirotip.style.top = elemtop +'px';
  hirotip.style.display = 'block';
  hirotip.innerHTML = hirobuf;
});
$("#hirotip").mouseleave(function(){
  const hirotip = document.getElementById('hirotip');
  hirotip.style.display = 'none';
  hirotip.innerHTML = '';
});

//도검목록저장
document.getElementById('hyohozon').addEventListener("click",function(){
  let kentab = document.getElementById("kentable");
  let csvtxt = kentab.innerHTML.replace(/\s<b\sclass="ma">\*<\/b>/g, 'ma').replace(/\s<b\sclass="mak">\*<\/b>/g, 'mak').replace(/<\/td><\/tr>/g, '\n').replace(/^<tr\sid="[0-9]+"\sclass="[A-Za-z\s]+hide.+$\n/gm, '').replace(/<td\sclass="tai9">9/gm, '-').replace(/<span\sclass="[a-z\s]+(hide|hidden).+?<\/span>/gm, '').replace(/<\/td>|<\/th>/gm, '\t').replace(/<("[^"]*"|'[^']*'|[^'">])*>/mg, '').replace(/\n$/, '');
  csvtxt = csvtxt.split('\n').map(function(item){return item.split('\t');});
  const csxtxtleng = csvtxt.length;
  //console.log(csvtxt);
  if(csvtxt[0][0]==""){console.log("처리를 중지");return;}
  for(var i=0;i<csxtxtleng;i++){
    csvtxt[i].forEach((value, index, csvarr) => {if(value=='-')csvarr[index]='';});
    if(csvtxt[i][2].endsWith('ma')){csvtxt[i][2]=csvtxt[i][2].replace('ma', '');csvtxt[i].splice(3,0,"부적");}
    else if(csvtxt[i][2].endsWith('mak')){csvtxt[i][2]=csvtxt[i][2].replace('mak', '');csvtxt[i].splice(3,0,"부적극");}
    else{csvtxt[i].splice(3,0,"");}
  }
  const para = document.getElementById("parasetu").textContent.replace('　볼드체는  칸스토, ( )는 성장 상한까지의 수치','');
  const hozon_time = new Date().toLocaleString('ja-JP');
  const hozon_memo = document.getElementById("hozonmemo").value.replace(/[!-/:-@[-`{-~ｦ-ﾟ\s]/g,'');
  chrome.storage.local.set({tokendata:{time:hozon_time,para:para,memo:hozon_memo,tokenhyo:csvtxt}}, function(){
    const head='저장했습니다（'+hozon_time+'）　<a href="storagedata.html" target="blank"> 표시 ・CSV저장</a>';
    document.getElementById('hozonOK').innerHTML = head;
  });
  document.getElementById("hozonmemo").value="";
  kentab = null;
  /*chrome.storage.local.get(['tokendata'], function({tokendata}){
    if(!Object.keys(tokendata).length){return;}
    const para=tokendata.para;
    const time=tokendata.time;
    let memo =('memo' in tokendata)? tokendata.memo:"";
    const head='저장일시：'+time+'<a href="storagedata.html" target="_blank"> 표시 ・CSV저장</a><br>파라미터 표시 ：'+para+'<br>메모：'+memo;
    document.getElementById('hozonOK').innerHTML = head;
  });*/
});

$("#tousouhi").on('click','#nyusyulsw',function(){
  var nyusyutab = document.getElementById("nyusyul");
  document.getSelection().selectAllChildren(nyusyutab);
  nyusyutab = null;
});
$("#tousouhi").on('click','#nyusyursw',function(){
  var nyusyutab = document.getElementById("nyusyur");
  document.getSelection().selectAllChildren(nyusyutab);
  nyusyutab = null;
});
//원정대성공
$('#flontpanel').on('change','#daiseiko',function(){
  if($('#daiseiko').prop('checked')){
    $('#enseihyo').find('.dais').removeClass('hide').end().find('.seiko').addClass('hide');
  }else {
    $('#enseihyo').find('.seiko').removeClass('hide').end().find('.dais').addClass('hide');
  }
});
$('#tousouhi').on('change','#daiseikos',function(){
  if($('#daiseikos').prop('checked')){
    $('#tousouhi').find('.dais').removeClass('hide').end().find('.seiko').addClass('hide');
  }else {
    $('#tousouhi').find('.seiko').removeClass('hide').end().find('.dais').addClass('hide');
  }
});
$("#flontpanel").on('focus','#tousokekka',function(){$(this).select();});//도장결과
$("#flontpanel").on('focus','#tanto_set',function(){$(this).select();});//도검제작開始
$("#flontpanel").on('click','#rootjyoho',function(){$(this).val(maplog);});//ルート
$("#flontpanel").on('click','#recipe',function(){$(this).html("참고 레시피　[창・방패 50/50/50/250]、[중기 150/50/150/100]、[중보 250/150/50/50]<br>[정예 150/100/250/150]、[총 150/250/150/150]、[돌 50/100/50/100]、[궁・돌 50/150/50/50]");});


//소지도장
function syojitoso(){
  var tsi = 0;
  var tousou = [];
  if(Object.keys(equipobj).length){
   for(var key in equipobj){
     tousou[tsi]= [equipobj[key], key];
     tsi++;
   }
   tousou.sort(function (a,b){return(a[0]-b[0]);});
   var tousobuf="";
  if(hensei_frag>0){tousobuf += '<small class="cyui">장비가 변경되어있습니다. 현재의 정보를 표시하시려면 편성・도검제작화면에 들어가서 최신 정보를 로드해주세요</small>';}
   for(var ty=0;ty<tousou.length;ty++){
    var soubisya=" -";
    if(swordname.hasOwnProperty(tousousoubi[tousou[ty][1]])){soubisya=swordname[tousousoubi[tousou[ty][1]]][0];}
    var tousouno = "def";
    if(equipname.hasOwnProperty(tousou[ty][0])){tousouno = tousou[ty][0];}
    tousobuf += '<div class="tousoudata '+equipname[tousouno][1]+'"><div class="touname">'+equipname[tousouno][0]+
    '</div><div class="toupara">병：'+equipname[tousouno][2]+'　타：'+equipname[tousouno][3]+'　통：'+equipname[tousouno][4]+
    '　기：'+equipname[tousouno][5]+'　충：'+equipname[tousouno][6]+'　정：'+equipname[tousouno][7]+
    '　은：'+equipname[tousouno][8]+'</div><div class="toukyara">장비자：'+soubisya+'</div></div>';
   }
  return tousobuf;
  }else{return "도검정보가 로드되지 않았습니다";}
}

//입수일
function nyusyubi(){
   if(Object.keys(tokenobj).length){   
    tokenobj.sort(function (a,b){return(a[1]-b[1]);});
    var tobjlength=tokenobj.length;
    var hibuf = '<p>※타이틀 부분 클릭으로 목록이 선택 상태가 됩니다.</p><table border="1" class="ta flo" id="nyusyul"><tr><th colspan=3 id="nyusyulsw">도검번호순</th><th>실장일</th></tr>';
    for(var si=0;si<tobjlength;si++){
      var tokenno = "def";
      if(swordname.hasOwnProperty(tokenobj[si][1])){tokenno = tokenobj[si][1];}
      //hibuf +="<tr><td>"+tokenobj[si][1]+"</td><td>"+swordname[tokenno][0]+"</td><td>"+tokenobj[si][40]+"</td><td>"+jissobi[tokenno]+"</td></tr>";
      hibuf +="<tr><td>"+tokenobj[si][1]+"</td><td>"+swordname[tokenno][0]+"</td><td>"+tokenobj[si][40]+"</td><td>"+jisso(tokenno)+"</td></tr>";
    }
    hibuf += '</table>';
    tokenobj.sort(function (a,b){return(Date.parse(a[40]) - Date.parse(b[40]));});
    hibuf += '<table border="1" class="ta flo" id="nyusyur"><tr><th colspan=3 id="nyusyursw">입수일시순</th></tr>';
    for(si=0;si<tobjlength;si++){
      var tokennot = "def";
      if(swordname.hasOwnProperty(tokenobj[si][1])){tokennot = tokenobj[si][1];}
      hibuf +="<tr><td>"+tokenobj[si][1]+"</td><td>"+swordname[tokennot][0]+"</td><td>"+tokenobj[si][40]+"</td></tr>";
    }
    hibuf += '</table><br style="clear:both;">';
    return hibuf;
  }else{return "도검정보가 로드되지 않았습니다";}
}

//통상MAP드롭
function mapdrop(mapno){
var droptitle =[" 도검","도검제작","2-2","2-3","2-4","3-1","3-2","3-3","3-4","4-1","4-2","4-3","4-4","5-1","5-2","5-3","5-4","6-1","6-2","6-3","6-4","7-1","7-2","7-3","7-4","8-1","8-2","8-3"];
var mapdropdata=[
[3,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],
[5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,3,3,3],
[9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],
[11,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],
[13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
[15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
[17,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
[19,1,0,0,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[23,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3],
[25,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,2,2,2],
[27,1,0,0,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[29,1,0,0,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[31,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[33,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
[35,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
[37,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
[39,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[41,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[43,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
[45,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[47,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[49,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[51,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
[53,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
[55,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,2,2,2],
[57,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0],
[59,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,2,2,2],
[61,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[63,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
[65,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,3,3,3],
[67,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,1],
[69,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
[71,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,1,0,0,0],
[73,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3],
[75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[77,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],
[79,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,2,2,2],
[81,1,0,0,0,0,2,0,0,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[83,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[85,1,0,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[87,1,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[89,1,0,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[91,1,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,0,0,0,0,0,0,0],
[93,1,0,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[95,1,0,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[97,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3],
[99,1,0,0,0,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[101,1,0,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
[105,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0],
[107,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[112,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[116,1,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,3,3,3,3,2,2,2],
[118,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[120,1,0,0,0,2,3,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[122,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3],
[124,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
[128,1,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3],
[130,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,2,2,2],
[132,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,3,3,3],
[134,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,3,3,3],
[136,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
[138,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,3,3,3],
[140,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[142,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[144,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
[146,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[148,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0],
[152,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[154,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]
];

  var dropcount=mapdropdata.length;
  var fpanel ="";var i;
  if(mapno==1){
    fpanel = '<div id="tantoka_box"><div class="dtanto">통상 제작 가능한 도검　※캠페인 도중의 도검제작 가능한 도검은 포함되어있지 않습니다</div>';
    var taoto_tan="";var taoto_wa="";var taoto_uti="";var taoto_ruti="";var taoto_ta="";var taoto_oot="";var taoto_ya="";var taoto_nag="";
    for(i=0;i<dropcount;i++){
      if(mapdropdata[i][1]==1){
        if(swordname[mapdropdata[i][0]][1]=="tan"){taoto_tan += '<p>'+tosyuico('tan')+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
        if(swordname[mapdropdata[i][0]][1]=="wa"){taoto_wa += '<p>'+tosyuico('wa')+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
        if(swordname[mapdropdata[i][0]][1]=="uti"){taoto_uti += '<p>'+tosyuico('uti')+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
        if(swordname[mapdropdata[i][0]][1]=="ruti"){taoto_ruti += '<p>'+tosyuico('ruti')+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
        if(swordname[mapdropdata[i][0]][1]=="ta"){taoto_ta += '<p>'+tosyuico('ta')+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
        if(swordname[mapdropdata[i][0]][1]=="oot"){taoto_oot += '<p>'+tosyuico('oot')+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
        if(swordname[mapdropdata[i][0]][1]=="ya"){taoto_ya += '<p>'+tosyuico('ya')+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
        if(swordname[mapdropdata[i][0]][1]=="nag"){taoto_nag += '<p>'+tosyuico('nag')+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
      }
    }
    fpanel += taoto_tan+'<p class="tou_wrap">'+taoto_wa+'<p class="tou_wrap">'+taoto_uti+'<p class="tou_wrap">'+taoto_ruti+'<p class="tou_wrap">'+taoto_ta+'<p class="tou_wrap">'+taoto_oot+'<p class="tou_wrap">'+taoto_ya+'<p class="tou_wrap">'+taoto_nag+'</div>';
  }else if(mapno>1){
    fpanel = '<div id="tantoka_box">';
    var drop_n="";var drop_b="";var drop_nb="";
    for(i=0;i<dropcount;i++){
      if(mapdropdata[i][mapno]==1){drop_n += '<p>'+tosyuico(swordname[mapdropdata[i][0]][1])+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
      if(mapdropdata[i][mapno]==2){drop_b += '<p>'+tosyuico(swordname[mapdropdata[i][0]][1])+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
      if(mapdropdata[i][mapno]==3){drop_nb += '<p>'+tosyuico(swordname[mapdropdata[i][0]][1])+' '+swordname[mapdropdata[i][0]][0]+'</p>';}
    }
    if(drop_n !== ""){fpanel += '<div class="dnomal_d">'+droptitle[mapno]+' 통상마스드롭</div>'+drop_n;}
    if(drop_b !== ""){fpanel += '<div class="dboss_d">'+droptitle[mapno]+' 보스드롭</div>'+drop_b;}
    if(drop_nb !== ""){fpanel += '<div class="dnobo_d">'+droptitle[mapno]+' 통상마스・보스양방드롭</div>'+drop_nb;}
    fpanel += '</div>';
  }
  else{
    fpanel = '<span class="dtanto droptxt"> 도검명 배경색：통상 도검제작 가능</span>　<span class="dnomal droptxt">N：통상마스드롭</span>　<span class="dboss droptxt">B：보스드롭</span>　<span class="dnobo droptxt">NB：통상＆보스양방드롭</span><table class="ta" style="white-space:nowrap;font-size:100%"><colgroup span="4"></colgroup><colgroup span="4" class="maparea"></colgroup><colgroup span="4"></colgroup><colgroup span="4" class="maparea"></colgroup><colgroup span="4"></colgroup><colgroup span="4" class="maparea"></colgroup><tr><th>도검</th><th>2-2</th><th>2-3</th><th>2-4</th><th>3-1</th><th>3-2</th><th>3-3</th><th>3-4</th><th>4-1</th><th>4-2</th><th>4-3</th><th>4-4</th><th>5-1</th><th>5-2</th><th>5-3</th><th>5-4</th><th>6-1</th><th>6-2</th><th>6-3</th><th>6-4</th><th>7-1</th><th>7-2</th><th>7-3</th><th>7-4</th><th>8-1</th><th>8-2</th><th>8-3</th></tr>';
    for(i=0;i<dropcount;i++){
      var tantoka="";//도검제작가능
      if(mapdropdata[i][1]==1){tantoka=' class="dtanto"';}
      fpanel+= '<tr><td'+tantoka+'>'+swordname[mapdropdata[i][0]][0]+'</td>';
      for(var j=2;j<28;j++){
        if(mapdropdata[i][j]==3){fpanel+= '<td class="dnobo">NB</td>';}
        else if(mapdropdata[i][j]==2){fpanel+= '<td class="dboss">B</td>';}
        else if(mapdropdata[i][j]==1){fpanel+= '<td class="dnomal">N</td>';}
        else{fpanel+= '<td> </td>';}
      }
      fpanel+= '</tr>';
    }
    fpanel += '</table>';
  }
return fpanel;
}

function helptip(helpno){
  const helpcom=[
    '도검정보패널을 열은 상태에서 근시를 임명, 또는 부상 도검이 없는 상태에서 수리 화면을 열면 근시 데이터의 취득 및 갱신이 가능합니다.',
    '사니와LV은 전적화면으로 취득할 수 있습니다. 현재값과 다른 경우는 전적 화면에서 값을 갱신해주세요.'
  ];
  return '<span class="help">[?]<span class="tooltip">'+helpcom[helpno]+'</span></span>';
}

// 도검種 표시 
$('#hyo_set').on('change','#icoflg',function(){
  if($('#icoflg').prop('checked')){icoflg=1;
  }else{icoflg=0;}
});

//オプション 표시 制御
$('input[name="tou_hi_r"]').on('click',function(){
  if($('input[name="tou_hi_r"]:eq(0)').prop('checked')){$("#tousouhi").html(syojitoso());}
  else if($('input[name="tou_hi_r"]:eq(1)').prop('checked')){$("#tousouhi").html(nyusyubi()); hyouji(1);}
  else if($('input[name="tou_hi_r"]:eq(2)').prop('checked')){$("#tousouhi").html(enseihyo(0,0));}
  else if($('input[name="tou_hi_r"]:eq(3)').prop('checked')){$("#tousouhi").html(mapdrop(0));}
  else if($('input[name="tou_hi_r"]:eq(4)').prop('checked')){simmember=bassui(1);soubisim();}
  else{$("#tousouhi").empty().html('<div id="touhi_info">※위 탭을 클릭으로 입수일 기록을 표시합니다（도검데이터 취득 후）</div>');}
});


$("#flontpanel").on('click','#dropbtn2',function(){$('#sarry_drop').html(mapdrop(2));});
$("#flontpanel").on('click','#dropbtn3',function(){$('#sarry_drop').html(mapdrop(3));});
$("#flontpanel").on('click','#dropbtn4',function(){$('#sarry_drop').html(mapdrop(4));});
$("#flontpanel").on('click','#dropbtn5',function(){$('#sarry_drop').html(mapdrop(5));});
$("#flontpanel").on('click','#dropbtn6',function(){$('#sarry_drop').html(mapdrop(6));});
$("#flontpanel").on('click','#dropbtn7',function(){$('#sarry_drop').html(mapdrop(7));});
$("#flontpanel").on('click','#dropbtn8',function(){$('#sarry_drop').html(mapdrop(8));});
$("#flontpanel").on('click','#dropbtn9',function(){$('#sarry_drop').html(mapdrop(9));});
$("#flontpanel").on('click','#dropbtn10',function(){$('#sarry_drop').html(mapdrop(10));});
$("#flontpanel").on('click','#dropbtn11',function(){$('#sarry_drop').html(mapdrop(11));});
$("#flontpanel").on('click','#dropbtn12',function(){$('#sarry_drop').html(mapdrop(12));});
$("#flontpanel").on('click','#dropbtn13',function(){$('#sarry_drop').html(mapdrop(13));});
$("#flontpanel").on('click','#dropbtn14',function(){$('#sarry_drop').html(mapdrop(14));});
$("#flontpanel").on('click','#dropbtn15',function(){$('#sarry_drop').html(mapdrop(15));});
$("#flontpanel").on('click','#dropbtn16',function(){$('#sarry_drop').html(mapdrop(16));});
$("#flontpanel").on('click','#dropbtn17',function(){$('#sarry_drop').html(mapdrop(17));});
$("#flontpanel").on('click','#dropbtn18',function(){$('#sarry_drop').html(mapdrop(18));});
$("#flontpanel").on('click','#dropbtn19',function(){$('#sarry_drop').html(mapdrop(19));});
$("#flontpanel").on('click','#dropbtn20',function(){$('#sarry_drop').html(mapdrop(20));});
$("#flontpanel").on('click','#dropbtn21',function(){$('#sarry_drop').html(mapdrop(21));});
$("#flontpanel").on('click','#dropbtn22',function(){$('#sarry_drop').html(mapdrop(22));});
$("#flontpanel").on('click','#dropbtn23',function(){$('#sarry_drop').html(mapdrop(23));});
$("#flontpanel").on('click','#dropbtn24',function(){$('#sarry_drop').html(mapdrop(24));});
$("#flontpanel").on('click','#dropbtn25',function(){$('#sarry_drop').html(mapdrop(25));});
$("#flontpanel").on('click','#dropbtn26',function(){$('#sarry_drop').html(mapdrop(26));});
$("#flontpanel").on('click','#dropbtn27',function(){$('#sarry_drop').html(mapdrop(27));});

//TOPナビ
$('a[href^="#"]').on('click',(function(){
  var n = $(this).attr("href");
  var p;
  if(n=="#"){p = 0;}else{p = $(n).offset().top-5;}
  $('html,body').animate({scrollTop:p}, 'fast');
  return false;
}));

//初期 표시 설정
chrome.storage.sync.get(['levelone','keikenflug','tousoflug'], function(items){
  if(items.levelone){$('#levelflag').prop('checked', false);console.log("Lv1비표시");}else{console.log("Lv1 표시");}
  if(items.keikenflug){$('#lvexp').prop('checked', true);console.log("경험치정렬");}else{console.log("레벨순정렬");}
  if(items.tousoflug){tousocustom=true;console.log("도장커스텀ON");}else{console.log("도장커스텀OFF");}
  //if(items.keikoku){alertfrag =true;console.log("アラートON");}else{console.log("アラートOFF");}
});
chrome.storage.local.get(['saniwalv','secnum','sigenday','kobanday'], function(items){
  if(items.saniwalv){saniwalv=items.saniwalv;console.log("saniwalv:"+saniwalv);}
  if(items.secnum){secnum=items.secnum;console.log(secnum);}
  if(items.sigenday){s_hozonday=items.sigenday;console.log(s_hozonday);}
  if(items.kobanday){k_hozonday=items.kobanday;console.log(k_hozonday);}
});

//--シミュレータ始--
//부대抜粋
var simmember = [];
function bassui(bunum){ 
  var simmem = [];
  for(var si=0;si<tokenobj.length;si++){
    if(Math.floor(tokenobj[si][38]/10)==bunum){
      var umano = null;
      if(tokenobj[si][31]){
        umano = "def";
        if(equipname.hasOwnProperty(equipobj[tokenobj[si][31]])){umano = equipobj[tokenobj[si][31]];}
      }
      var tempno=[];
      for (var j=28; j<=31; j++){
        if(equipname.hasOwnProperty(equipobj[tokenobj[si][j]])){
          tempno[j-28]=equipobj[tokenobj[si][j]];
        }else{tempno[j-28] = null;}
      }

      simmem.push([parseInt(tokenobj[si][1]),parseInt(tokenobj[si][3]),parseInt(tokenobj[si][5]),parseInt(tokenobj[si][6]),
      parseInt(tokenobj[si][8]),parseInt(tokenobj[si][11]),parseInt(tokenobj[si][14]),parseInt(tokenobj[si][17]),parseInt(tokenobj[si][20]),
      parseInt(tokenobj[si][21]),parseInt(tokenobj[si][24]),parseInt(tokenobj[si][27]),
      tempno[0],tempno[1],tempno[2],umano,tokenobj[si][33],parseInt(tokenobj[si][38]),parseInt(tokenobj[si][35])]);
    }
  }
  return simmem;
}
function soubisim(){
   var head='<input id="soubisim1" type="button" value="一"><input id="soubisim2" type="button" value="二"><input id="soubisim3" type="button" value="三"><input id="soubisim4" type="button" value="四">';
  //0: 도검No 1:Lv 2-3:HP,4-10:타,통,기,충,필,정,은폐 11:피로 12-14:装 15:말 16:부적 17：부대 18:レア
  if(simmember.length===0){$("#tousouhi").empty().html(head+"<p>지정의 부대정보를 읽을 수 없습니다");return;}
  //console.log(simmember);    
  var buf=""; var tokenno = "def"; 
  var bup=[0,0,0,0,0,0,0,0,0,0,0,0];
  for(var si=0;si<simmember.length;si++){
    if(swordname.hasOwnProperty(simmember[si][0])){tokenno = simmember[si][0];}
    buf +='<tr><td>'+tosyuico(swordname[tokenno][1])+' '+swordname[tokenno][0]; //No
    if(simmember[si][16] == 2){buf +=' <b class="mak">*</b>';}else if(simmember[si][16] == 1){buf +=' <b class="ma">*</b>';} //부적
    buf += '</td><td>'+simmember[si][1]+'</td>'; //Lv
    buf += "<td>"+simmember[si][2]+'/'+simmember[si][3]+'</td>'; //HP
    //buf += '<td>'+simmember[si][11]+"<\/td>"; //피로
    
    var hyojipara=[0,0,0,0,0,0,0];//병타통기충정은폐
    for (var p=12; p<=15; p++){
      if(simmember[si][p]){
        for(var q=0;q<7;q++){
          hyojipara[q]+=parseInt(equipname[simmember[si][p]][q+2]);
        }
      }
    }
    var pluspara = "";
    buf += '<td><div class="splus">'+hyojipara[0]+'</div>-</td>';
    for(var i=4; i<=7; i++){
      if(hyojipara[i-3]>0){pluspara = ' <span class="tokan">+'+hyojipara[i-3]+'</span>';}else{pluspara = "";}
      buf += '<td><div class="splus">'+(hyojipara[i-3]+simmember[si][i])+'</div>'+simmember[si][i]+pluspara+'</td>'; //타,통,기,충
    }
    buf += '<td><div class="splus">'+simmember[si][8]+'</div>'+simmember[si][8]+'</td>'; //필
    for (i=9; i<=10; i++){
      if(hyojipara[i-4]>0){pluspara = ' <span class="tokan">+'+hyojipara[i-4]+'</span>';}else{pluspara = "";}
      buf += '<td><div class="splus">'+(hyojipara[i-4]+simmember[si][i])+'</div>'+simmember[si][i]+pluspara+'</td>';
    }
    buf += '<td>';
    for (i=12; i<=15; i++){
      if(simmember[si][i]){buf += '<div class="simbt '+equipname[simmember[si][i]][1]+'" id="s'+si+i+'">'+equipname[simmember[si][i]][0]+'</div>';}
      else if(i==13 && simmember[si][18]==1){buf +='<div class="simemp">-</div>';}
      else if(i==14 && simmember[si][18]<=3){buf +='<div class="simemp">-</div>';}
      else{buf +='<div class="simbt" id="s'+si+i+'">-</div>';} //장비・말
    }
    buf += '</td></tr>';
    //部파라미터集합계 0Lv 1병 2생 3타 4통 5기 6충 7필 8정 9은폐 10피로
    bup[0]+=simmember[si][1];
    bup[1]+=hyojipara[0];
    bup[2]+=simmember[si][2];
    bup[3]+=simmember[si][4]+hyojipara[1];
    bup[4]+=simmember[si][5]+hyojipara[2];
    bup[5]+=simmember[si][6]+hyojipara[3];
    bup[6]+=simmember[si][7]+hyojipara[4];
    bup[7]+=simmember[si][8];
    bup[8]+=simmember[si][9]+hyojipara[5];
    bup[9]+=simmember[si][10]+hyojipara[6];
    bup[10]+=simmember[si][11];
    bup[11]++;
  }
  //부대합계
  head+='<table class="ta"><tr><th>도검명 *부적</th><th>Lv</th><th>생존</th><!--th>피로</th--><th>병</th><th>타</th><th>통</th><th>기</th><th>충</th><th>필</th><th>정</th><th>은폐</th><th>※슬롯 클릭으로 장비품 선택</th></tr>';
  buf+='<tr><td class="tai'+Math.floor(simmember[0][17]/10)+'">부대합계</td><td>'+bup[0]+'</td><td>'+bup[2]+'</td><!--td>'+bup[10]+
  '</td--><td>'+bup[1]+'</td><td>'+bup[3]+'</td><td>'+bup[4]+'</td><td>'+bup[5]+'</td><td>'+bup[6]+'</td><td>'+bup[7]+'</td><td>'+bup[8]+'</td><td>'+bup[9]+
  '</td><td>（평균Lv：'+Math.ceil(bup[0]/bup[11])+'）　<input id="soubioff" type="button" value="전부 해제"><input id="umaoff" type="button" value="말해제"></td></tr>';
  
  var th = '<th>병</th><th>타</th><th>통</th><th>기</th><th>충</th><th>정</th><th>은폐</th>';
  var tousotab='<table class="tousotab" id="eqtab"><tr><th>도장</th>'+th+th+th+'</tr>';
  for(var ki=1;ki<=34;ki+=3){
    var tdn='</td><td class="eq'+ki+'">';var tdj='</td><td class="eq'+(ki+1)+'">';var tdt='</td><td class="eq'+(ki+2)+'">';
    tousotab +='<tr><td>'+equipname[ki][0].slice(0,-3)+tdn+equipname[ki][2]+tdn+equipname[ki][3]+tdn+equipname[ki][4]+tdn+equipname[ki][5]+tdn+equipname[ki][6]+tdn+equipname[ki][7]+tdn+equipname[ki][8]+
    tdj+equipname[ki+1][2]+tdj+equipname[ki+1][3]+tdj+equipname[ki+1][4]+tdj+equipname[ki+1][5]+tdj+equipname[ki+1][6]+tdj+equipname[ki+1][7]+tdj+equipname[ki+1][8]+
    tdt+equipname[ki+2][2]+tdt+equipname[ki+2][3]+tdt+equipname[ki+2][4]+tdt+equipname[ki+2][5]+tdt+equipname[ki+2][6]+tdt+equipname[ki+2][7]+tdt+equipname[ki+2][8]+'</td></tr>';
  }
  tousotab+='<table class="tousotab"><tr><th>말</th>'+th+'</tr>';
  for(var h in equipname){
    var ttd='</td><td class="ho'+h+'">';
    if(h.length==5){tousotab +='<tr><td>'+equipname[h][0]+ttd+equipname[h][2]+ttd+equipname[h][3]+ttd+equipname[h][4]+ttd+equipname[h][5]+ttd+equipname[h][6]+ttd+equipname[h][7]+ttd+equipname[h][8]+'</tr>';}
  }
  $("#tousouhi").empty().html(head+buf+'</table>'+tousotab+'</table><div class="clear"></div><div id="scange"></div>');
  buf = null;
}
//장비選択 표시 
$("#tousouhi").on('click','.simbt',function(){
  var btid=this.id;
  var soubi=btid.slice(2);
  var sradio="";
  if(soubi==="15"){
    for(var h in equipname){
      if(h.length==5){sradio +='<div><label><span class="wide">'+equipname[h][0]+'</span><input type="radio" value="'+btid+h+'" name="umar"></label></div>';}
    }
    sradio +='<div style="margin-top:7px"><span class="close">×閉</span><label>해제<input type="radio" value="'+btid+'0" name="umar"></label></div>';
  }else{
    var member = simmember[btid.slice(1,2)][0];
    var soubika=[1,4,7,10,13,16,19,22,25,28,31,34];
    var tousyu="zen";
    if(swordname.hasOwnProperty(member)){tousyu=swordname[member][1];}
    switch (tousyu){
      case "tan": case "tanK":
        soubika=[1,7,10,25,28,31,34];
        break;
      case "wa": case "waK":
        soubika=[1,7,10,13,25,31,34];
        break;
      case "uti": case "ruti": case "utiK": case "rutiK":
        soubika=[1,7,10,13,16,31,34];
        break;
      case "ta": case "taK":
        soubika=[7,10,13,16,19,31,34];
        break;
      case "oot": case "ootK":
        soubika=[7,10,13,16,19,22,31,34];
        break;
      case "ya": case "yaK": case "nag": case "nagK":
        soubika=[4,7,10,31,34];
        break;
      case "tur": case "turK":
        soubika=[7,10,13,22,25,28,31,34];
        break;
    }
    //console.log(tousyu,soubika);
    for(var i in soubika){
      sradio +='<div><span>'+equipname[soubika[i]][0].slice(0,-3)+'</span><label id="q'+soubika[i]+'">평<input type="radio" value="'+btid+soubika[i]+'" name="tousor"></label><label id="q'+(soubika[i]+1)+'">상<input type="radio" value="'+btid+(soubika[i]+1)+'" name="tousor"></label><label id="q'+(soubika[i]+2)+'">특<input type="radio" value="'+btid+(soubika[i]+2)+'" name="tousor"></label></div>';
    }
    sradio +='<div style="margin-top:7px"><span class="close">×閉</span><label>장비해제<input type="radio" value="'+btid+'0" name="tousor"></label></div>';
  }
  var offset =  $(this).offset();
  $("#scange").css({"top":offset.top-20+"px","left":offset.left-90+"px","display":"block"});
  $("#scange").html(sradio+'');
});
//장비付け
$('#tousouhi').on('change','input[name="tousor"]:radio',function(){
  var tousoa = $('input[name="tousor"]:checked').val();
  var member=parseInt(tousoa.slice(1,2));
  var slot=parseInt(tousoa.slice(2,4));
  var soubi=parseInt(tousoa.slice(4));
  if(soubi===0){simmember[member][slot]=null;}
  else{simmember[member][slot]=soubi;}
  soubisim();$("#tousouchip").hide(); 
});
$('#tousouhi').on('change','input[name="umar"]:radio',function(){
  var tousoa = $('input[name="umar"]:checked').val();
  //console.log(tousoa);
  var member=parseInt(tousoa.slice(1,2));
  var soubi=parseInt(tousoa.slice(4));
  if(soubi===0){simmember[member][15]=null;}
  else{simmember[member][15]=soubi;}
  soubisim();$("#tousouchip").hide(); 
});
//장비전부 해제
$('#tousouhi').on('click','#soubioff',function(){
  for(var i=0;i<simmember.length;i++){simmember[i][12]=null;simmember[i][13]=null;simmember[i][14]=null;simmember[i][15]=null;}
  soubisim();
});
$('#tousouhi').on('click','#umaoff',function(){
  for(var i=0;i<simmember.length;i++){simmember[i][15]=null;}
  soubisim();
});
//シミュレータ起動
//$("#soubisim_swi").on('click',function(){simmember=bassui(1);soubisim();});
$("#tousouhi").on('click','#soubisim1',function(){simmember=bassui(1);soubisim();});
$("#tousouhi").on('click','#soubisim2',function(){simmember=bassui(2);soubisim();});
$("#tousouhi").on('click','#soubisim3',function(){simmember=bassui(3);soubisim();});
$("#tousouhi").on('click','#soubisim4',function(){simmember=bassui(4);soubisim();});
$("#tousouhi").on('click','.close',function(){$("#scange").hide();});

//장비品파라미터
$("#tousouhi").on('mouseenter',"#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8,#q9,#q10,#q11,#q12,#q13,#q14,#q15,#q16,#q17,#q18,#q19,#q20,#q21,#q22,#q23,#q24,#q25,#q26,#q27,#q28,#q29,#q30,#q31,#q32,#q33,#q34,#q35,#q36",function(){
    var tc = $(this).attr('id');
    $("#eqtab").find(".e"+tc).addClass('eqfocus');
});
$("#tousouhi").on('mouseleave',"#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8,#q9,#q10,#q11,#q12,#q13,#q14,#q15,#q16,#q17,#q18,#q19,#q20,#q21,#q22,#q23,#q24,#q25,#q26,#q27,#q28,#q29,#q30,#q31,#q32,#q33,#q34,#q35,#q36",function(){
    var tc = $(this).attr('id');
    $("#eqtab").find(".e"+tc).removeClass('eqfocus');
});
//--シミュレーター終--
});