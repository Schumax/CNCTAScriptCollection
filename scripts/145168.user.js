// ==UserScript==
// @name        Maelstrom ADDON Basescanner
// @namespace   http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @description Maelstrom ADDON Basescanner
// @include     http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version     0.9
// @author      BlinDManX
// @grant       none
// ==/UserScript==
(function(){var b=function(){var f=["__msbs_version","Maelstrom_Basescanner "," loaded","log","debug","Maelstrom_Basescanner initalisiert","FileManager","File","getInstance","Language","MaelstromTools","Cache","Base","getLocale","Manager","locale","indexOf","Languages","Point","Data","Position","BaseScanner Overview","Basescanner \xdcbersicht","Vis\xe3o geral do scanner de base","Aper\xe7u du scanner de base","Scan","Scannen","Esquadrinhar","Balayer","Location","Lage","localiza\xe7\xe3o","Emplacement","Player","Spieler","Jogador","Joueur","Bases","Basen","Camp,Outpost","Lager,Vorposten","Camp,posto avan\xe7ado","Camp,avant-poste","BaseScanner Layout","Layout da Base de Dados de Scanner","Mise scanner de base","Show Layouts","Layouts anzeigen","Mostrar Layouts","Voir Layouts","Building state","Geb\xe4udezustand","constru\xe7\xe3o do Estado","construction de l'\xc9tat","Defense state","Verteidigungszustand","de Defesa do Estado","d\xe9fense de l'Etat","CP","KP","CP Limit","KP begrenzen","CP limitar","CP limiter","BaseScanner","ui/icons/icon_item.png","createNewImage","Emptypixels","ui/menues/main_menu/misc_empty_pixel.png","L","createNewWindow","BaseScannerLayout","gt","desktopPosition","createDesktopButton","execute","openWindow","BaseScannerGUI","HuffyTools","addListener","addToMainMenu","HuffyTools.BaseScannerGUI","singleton","DefaultObject","ZE","setPadding","Window","set","removeAll","add","close","HuffyTools.BaseScannerGUI.FC: ","ZL","model","table","ui","ID","LoadState","City","Level","Statics","Crystalfields","Tiberiumfields","Def.HP/Off.HP","Sum Tib+Cry+Cre","(Tib+Cry+Cre)/CP","setColumns","ZN","setColumnVisibilityButtonVisible","setColumnWidth","getTableColumnModel","getColumnCount","MS_Basescanner_Column_","get","LocalStorage","setColumnVisible","Crystal","images","headerrenderer","setHeaderCellRenderer","Tiberium","FA","setDataCellRenderer","cellDblclick","HuffyTools.BaseScannerGUI.FI: ","getRow","length",":","split","VisMain","Vis","getApplication","Init","core","closeCityInfo","getBackgroundArea","modes","PlayArea","gui","setView","getPlayArea","HuffyTools.BaseScannerGUI FB error: ","ZH","formatNumbersCompact","Util","HuffyTools.BaseScannerGUI.updateCache: ","setData","HuffyTools.BaseScannerGUI.setWidgetLabels: ","layout","container","ZC","form","setHeight","setMargin","updateCityCache","Cities","MS_Basescanner_LastCityID","get_Id","Object","setSelection","white","basic","ZQ","setWidth","MS_Basescanner_Cplimiter","","ZK","setTextColor","MS_Basescanner_Show0","setValue","MS_Basescanner_Show1","MS_Basescanner_Show2","ZG","ZJ","7 "," 5 ","6 "," 6 ","5 "," 7 ","ZD","Get Layouts","setEnabled","ZB","setLayout","ZR","getColumnName","isColumnVisible","index","changeValue","klick","getData","ZO","+","ZI","addAfter","-","setLabel","remove","right","setAlignX","ZF","HuffyTools.BaseScannerGUI.createOptions: ","get_Cities","MainData","get_CurrentOwnCity",'<iframe src="http://qicki2.bplaced.de/insidebasescanner.php?i=',"get_PlayerId","&n=","get_PlayerName","&v=",'" border="0" frameborder="0" scrolling="no" width="100%" height="80" name=""></iframe>',"ZP","getModel","getSelection","get_PosX","get_PosY","set_CurrentCityId","window.HuffyTools.BaseScannerGUI.getInstance().FJ()","setTimeout","prototype","WorldObjectCity","WorldSector","$ctor","ClientLib.Data.WorldSector.WorldObjectCity","getLevel","Error - ClientLib.Data.WorldSector.WorldObjectCity.Level undefined","error","getID","Error - ClientLib.Data.WorldSector.WorldObjectCity.ID undefined","WorldObjectNPCBase","ClientLib.Data.WorldSector.WorldObjectNPCBase","Error - ClientLib.Data.WorldSector.WorldObjectNPCBase.Level undefined","Error - ClientLib.Data.WorldSector.WorldObjectNPCBase.ID undefined","WorldObjectNPCCamp","ClientLib.Data.WorldSector.WorldObjectNPCCamp","Error - ClientLib.Data.WorldSector.WorldObjectNPCCamp.Level undefined","Error - ClientLib.Data.WorldSector.WorldObjectNPCCamp.ID undefined","getValue","Select","get_World","Scanning from: ","get_Name","get_MaxAttackDistance","get_Server","floor","abs","sqrt","Type","push","ZM","sortByColumn","window.HuffyTools.BaseScannerGUI.getInstance().FG()","Maelstrom_Basescanner FJ error: ","data null: ","data[i] null: ","openVisModeInMainWindow","UtilView","Wrapper","get_IsGhostMode","get_CityBuildingsData","get_CityUnitsData","getResourcesPart","EResourceType","Gold","ResearchPoints","ZA","l","get_OffenseUnits","get_Health","get_DefenseUnits","HPRecord"," finish"," on "," removed (GetBuildingsConditionInPercent == 0)","splice"," removed (IsGhostMode)","lastid","countlastidchecked"," removed (found no data)","isVisible","MaelstromTools_Basescanner getResources","define","Class","HuffyTools.BaseScannerLayout","BaseScannerLayout.FC: ","ZW","ZZ","ZY","HuffyTools.BaseScannerLayout.FC: ","HuffyTools.BaseScannerLayout.updateCache: ","HuffyTools.BaseScannerLayout.setWidgetLabels: ","ZX","ZE null: ",'<table border="2" cellspacing="0" cellpadding="0">'," - ",'<tr><td colspan="9"><font color="#FFF">',"</font></td></tr>","<tr>",'<img width="14" height="14" src="','">',"<td>","</td>","</tr>","</table>","#303030","cid","click","clickid ","setReturnValue","function","replace","match","Error - ","not found","warn","undefined","MaelstromTools_Basescanner_checkIfLoaded: ","domain","test"];window[f[0]]=0.9;console[f[3]](f[1]+window[f[0]]+f[2]);function h(){qx[f[4]]=true;console[f[3]](f[5]);var p=null;var o=null;var n=null;var l=null;var k=0;var j=0;l=ClientLib[f[7]][f[6]].GetInstance();p=window[f[10]][f[9]][f[8]]();o=window[f[10]][f[11]][f[8]]();n=window[f[10]][f[12]][f[8]]();var i=p[f[17]][f[16]](qx[f[15]][f[14]][f[8]]()[f[13]]());if(i>=0){p[f[19]][f[18]]=[f[20],f[20],f[20]][i];p[f[19]][f[21]]=[f[22],f[23],f[24]][i];p[f[19]][f[25]]=[f[26],f[27],f[28]][i];p[f[19]][f[29]]=[f[30],f[31],f[32]][i];p[f[19]][f[33]]=[f[34],f[35],f[36]][i];p[f[19]][f[37]]=[f[38],f[37],f[37]][i];p[f[19]][f[39]]=[f[40],f[41],f[42]][i];p[f[19]][f[43]]=[f[43],f[44],f[45]][i];p[f[19]][f[46]]=[f[47],f[48],f[49]][i];p[f[19]][f[50]]=[f[51],f[52],f[53]][i];p[f[19]][f[54]]=[f[55],f[56],f[57]][i];p[f[19]][f[58]]=[f[59],f[58],f[58]][i];p[f[19]][f[60]]=[f[61],f[62],f[63]][i]}n[f[66]](f[64],f[65],l);n[f[66]](f[67],f[68],l);n[f[70]](f[64],f[69],120,60,820,400);n[f[70]](f[71],f[69],120,460,820,350);var m=n[f[74]](p[f[72]](f[21]),f[64],false,n[f[73]](2));m[f[79]](f[75],function(){window[f[78]][f[77]][f[8]]()[f[76]](f[64],p[f[72]](f[21]))},this);n[f[80]](f[64],m);qx[f[283]][f[282]](f[81],{type:f[82],extend:MaelstromTools[f[83]],members:{ZA:0,ZB:null,ZC:null,ZD:null,ZE:null,ZF:null,ZG:null,ZH:null,ZI:true,ZJ:null,ZK:null,ZL:null,ZM:null,ZN:null,ZO:null,ZP:null,ZQ:null,ZR:[],FC:function(){try{this.FI();this.FH();this.FD();if(this[f[84]]==null){this[f[84]]=[]}this[f[86]][f[85]](0);this[f[86]][f[87]]({resizable:true});this[f[86]][f[88]]();this[f[86]][f[89]](this.ZF);this[f[86]][f[89]](this.ZN);this[f[86]][f[89]](this.ZP);this[f[86]][f[79]](f[90],window[f[78]][f[77]][f[8]]().FN)}catch(q){console[f[3]](f[91],q)}},FI:function(){try{this[f[92]]=new qx[f[95]][f[94]][f[93]].Simple();this[f[92]][f[106]]([f[96],f[97],p[f[72]](f[98]),p[f[72]](f[29]),p[f[72]](f[99]),p[f[72]](MaelstromTools[f[100]].Tiberium),p[f[72]](MaelstromTools[f[100]].Crystal),p[f[72]](MaelstromTools[f[100]].Dollar),p[f[72]](MaelstromTools[f[100]].Research),f[101],f[102],p[f[72]](f[50]),p[f[72]](f[54]),p[f[72]](f[58]),f[103],f[104],f[105]]);this[f[107]]=new qx[f[95]][f[94]].Table(this.ZL);this[f[107]][f[108]](false);this[f[107]][f[109]](0,0);this[f[107]][f[109]](1,0);this[f[107]][f[109]](2,120);this[f[107]][f[109]](3,60);this[f[107]][f[109]](4,50);this[f[107]][f[109]](5,60);this[f[107]][f[109]](6,60);this[f[107]][f[109]](7,60);this[f[107]][f[109]](8,60);this[f[107]][f[109]](9,30);this[f[107]][f[109]](10,30);this[f[107]][f[109]](11,50);this[f[107]][f[109]](12,50);this[f[107]][f[109]](13,30);this[f[107]][f[109]](14,60);this[f[107]][f[109]](15,60);this[f[107]][f[109]](16,60);var r=0;var q=this[f[107]][f[110]]();for(r=0;r<this[f[92]][f[111]]();r++){if(r==0||r==1||r==11||r==12){q[f[115]](r,MaelstromTools[f[114]][f[113]](f[112]+r,false))}else{q[f[115]](r,MaelstromTools[f[114]][f[113]](f[112]+r,true))}}q[f[115]](1,false);q[f[119]](9,new qx[f[95]][f[94]][f[118]].Icon(n[f[117]][MaelstromTools[f[100]][f[116]]]),f[101]);q[f[119]](10,new qx[f[95]][f[94]][f[118]].Icon(n[f[117]][MaelstromTools[f[100]][f[120]]],f[102]));q[f[122]](5,new HuffyTools.ReplaceRender()[f[87]]({ReplaceFunction:this[f[121]]}));q[f[122]](6,new HuffyTools.ReplaceRender()[f[87]]({ReplaceFunction:this[f[121]]}));q[f[122]](7,new HuffyTools.ReplaceRender()[f[87]]({ReplaceFunction:this[f[121]]}));q[f[122]](8,new HuffyTools.ReplaceRender()[f[87]]({ReplaceFunction:this[f[121]]}));q[f[122]](15,new HuffyTools.ReplaceRender()[f[87]]({ReplaceFunction:this[f[121]]}));q[f[122]](16,new HuffyTools.ReplaceRender()[f[87]]({ReplaceFunction:this[f[121]]}));this[f[107]][f[79]](f[123],function(t){window[f[78]][f[77]][f[8]]().FB(t)},this)}catch(s){console[f[3]](f[124],s)}},FB:function(q){try{var w=this[f[84]][q[f[125]]()][0];var v=this[f[84]][q[f[125]]()][3];if(v!=null&&v[f[128]](f[127])[f[126]]==2){var u=parseInt(v[f[128]](f[127])[0]);var t=parseInt(v[f[128]](f[127])[1]);ClientLib[f[130]][f[129]].GetInstance().CenterGridPosition(u,t)}if(w){var s=qx[f[133]][f[132]][f[131]]();s[f[135]]()[f[134]]();s[f[140]]()[f[139]](webfrontend[f[138]][f[137]][f[137]][f[136]].EMode_CombatSetupDefense,w,0,0)}}catch(r){console[f[3]](f[141],r)}},FN:function(q){this[f[142]]=false},CBChanged:function(q){this[f[142]]=false},FA:function(q){return webfrontend[f[138]][f[144]][f[143]](q)},updateCache:function(){try{}catch(q){console[f[3]](f[145],q)}},setWidgetLabels:function(){try{if(!this[f[92]]){this.FC()}this[f[92]][f[146]](this.ZE)}catch(q){console[f[3]](f[147],q)}},FH:function(){try{var v=new qx[f[95]][f[148]].Flow();var t=new qx[f[95]][f[149]].Composite(v);this[f[150]]=new qx[f[95]][f[151]].SelectBox();this[f[150]][f[152]](25);this[f[150]][f[153]](5);o[f[154]]();o=window[f[10]][f[11]][f[8]]();var s;for(s in o[f[155]]){var z=new qx[f[95]][f[151]].ListItem(s,null,o[f[155]][s].Object);this[f[150]][f[89]](z);if(MaelstromTools[f[114]][f[113]](f[156])==o[f[155]][s][f[158]][f[157]]()){this[f[150]][f[159]]([z])}}t[f[89]](this.ZC);var y=new qx[f[95]][f[161]].Label()[f[87]]({value:p[f[72]](f[60]),textColor:f[160],margin:5});t[f[89]](y);this[f[162]]=new qx[f[95]][f[151]].SelectBox();this[f[162]][f[163]](50);this[f[162]][f[152]](25);this[f[162]][f[153]](5);var x=MaelstromTools[f[114]][f[113]](f[164],25);for(y=10;y<46;y+=5){z=new qx[f[95]][f[151]].ListItem(f[165]+y,null,y);this[f[162]][f[89]](z);if(x==y){this[f[162]][f[159]]([z])}}t[f[89]](this.ZQ);this[f[166]]=[];this[f[166]][0]=new qx[f[95]][f[151]].CheckBox(p[f[72]](f[33]));this[f[166]][0][f[153]](5);this[f[166]][0][f[167]](f[160]);this[f[166]][0][f[169]](MaelstromTools[f[114]][f[113]](f[168],false));t[f[89]](this[f[166]][0]);this[f[166]][1]=new qx[f[95]][f[151]].CheckBox(p[f[72]](f[37]));this[f[166]][1][f[153]](5);this[f[166]][1][f[167]](f[160]);this[f[166]][1][f[169]](MaelstromTools[f[114]][f[113]](f[170],false));t[f[89]](this[f[166]][1]);this[f[166]][2]=new qx[f[95]][f[151]].CheckBox(p[f[72]](f[39]));this[f[166]][2][f[153]](5);this[f[166]][2][f[167]](f[160]);this[f[166]][2][f[169]](MaelstromTools[f[114]][f[113]](f[171],true));t[f[89]](this[f[166]][2]);this[f[172]]=new qx[f[95]][f[151]].Button(p[f[72]](f[25]))[f[87]]({width:100,minWidth:100,maxWidth:100,height:25,margin:5});this[f[172]][f[79]](f[75],function(){this.FE()},this);t[f[89]](this.ZG,{lineBreak:true});this[f[173]]=new qx[f[95]][f[151]].SelectBox();this[f[173]][f[163]](150);this[f[173]][f[152]](25);this[f[173]][f[153]](5);var z=new qx[f[95]][f[151]].ListItem(f[174]+p[f[72]](MaelstromTools[f[100]].Tiberium)+f[175]+p[f[72]](MaelstromTools[f[100]].Crystal),null,7);this[f[173]][f[89]](z);z=new qx[f[95]][f[151]].ListItem(f[176]+p[f[72]](MaelstromTools[f[100]].Tiberium)+f[177]+p[f[72]](MaelstromTools[f[100]].Crystal),null,6);this[f[173]][f[89]](z);z=new qx[f[95]][f[151]].ListItem(f[178]+p[f[72]](MaelstromTools[f[100]].Tiberium)+f[179]+p[f[72]](MaelstromTools[f[100]].Crystal),null,5);this[f[173]][f[89]](z);t[f[89]](this.ZJ);this[f[180]]=new qx[f[95]][f[151]].Button(p[f[72]](f[181]))[f[87]]({width:120,minWidth:120,maxWidth:120,height:25,margin:5});this[f[180]][f[79]](f[75],function(){var q=window[f[78]][f[71]][f[8]]();if(q[f[86]]!=null){q[f[86]][f[90]]();q.FO()}q[f[76]](f[71],p[f[72]](f[43]))},this);this[f[180]][f[182]](false);t[f[89]](this.ZD);this[f[183]]=new qx[f[95]][f[149]].Composite();this[f[183]][f[184]](new qx[f[95]][f[148]].Flow());this[f[183]][f[163]](750);var w=2;for(w=2;w<this[f[92]][f[111]]();w++){var u=w-2;this[f[185]][u]=new qx[f[95]][f[151]].CheckBox(this[f[92]][f[186]](w));this[f[185]][u][f[169]](this[f[107]][f[110]]()[f[187]](w));this[f[185]][u][f[167]](f[160]);this[f[185]][u][f[188]]=w;this[f[185]][u][f[94]]=this[f[107]];this[f[185]][u][f[79]](f[189],function(A){console[f[3]](f[190],A,A[f[191]](),this[f[188]]);var q=this[f[94]][f[110]]();q[f[115]](this[f[188]],A[f[191]]());MaelstromTools[f[114]][f[87]](f[112]+this[f[188]],A[f[191]]())});this[f[183]][f[89]](this[f[185]][u])}this[f[192]]=new qx[f[95]][f[151]].Button(f[193])[f[87]]({margin:5});this[f[192]][f[79]](f[75],function(){if(this[f[194]]){t[f[195]](this.ZB,this.ZO);this[f[192]][f[197]](f[196])}else{t[f[198]](this.ZB);this[f[192]][f[197]](f[193])}this[f[194]]=!this[f[194]]},this);this[f[192]][f[200]](f[199]);t[f[89]](this.ZO,{lineBreak:true});this[f[201]]=t}catch(r){console[f[3]](f[202],r)}},FD:function(){var t=ClientLib[f[19]][f[204]].GetInstance()[f[203]]();var s=t[f[205]]();var r=f[206]+s[f[207]]()+f[208]+s[f[209]]()+f[210]+window[f[0]]+f[211];var q=new qx[f[95]][f[161]].Label()[f[87]]({value:r,rich:true,width:800});this[f[212]]=q},FE:function(){this[f[172]][f[182]](false);this[f[180]][f[182]](false);var t=this[f[150]][f[214]]()[0][f[213]]();ClientLib[f[130]][f[129]].GetInstance().CenterGridPosition(t[f[215]](),t[f[216]]());ClientLib[f[130]][f[129]].GetInstance().Update();ClientLib[f[130]][f[129]].GetInstance().ViewUpdate();ClientLib[f[19]][f[204]].GetInstance()[f[203]]()[f[217]](t[f[157]]());window[f[219]](f[218],1000);var s=ClientLib[f[19]][f[222]][f[221]][f[220]];var r=e(s[f[223]],/\=0\){0,1};this\.(.{6})=\({0,2}g>>7\){0,1}\&.*d\+=f;this\.(.{6})=\(/,f[224],2);if(r!=null&&r[1][f[126]]==6){s[f[225]]=function(){return this[r[1]]}}else{console[f[227]](f[226])}if(r!=null&&r[2][f[126]]==6){s[f[228]]=function(){return this[r[2]]}}else{console[f[227]](f[229])}s=ClientLib[f[19]][f[222]][f[230]][f[220]];var q=e(s[f[223]],/100\){0,1};this\.(.{6})=Math.floor.*d\+=f;this\.(.{6})=\(/,f[231],2);if(q!=null&&q[1][f[126]]==6){s[f[225]]=function(){return this[q[1]]}}else{console[f[227]](f[232])}if(q!=null&&q[2][f[126]]==6){s[f[228]]=function(){return this[q[2]]}}else{console[f[227]](f[233])}s=ClientLib[f[19]][f[222]][f[234]][f[220]];var u=e(s[f[223]],/100\){0,1};this\.(.{6})=Math.floor.*=-1;\}this\.(.{6})=\(/,f[235],2);if(u!=null&&u[1][f[126]]==6){s[f[225]]=function(){return this[u[1]]}}else{console[f[227]](f[236])}if(u!=null&&u[2][f[126]]==6){s[f[228]]=function(){return this[u[2]]}}else{console[f[227]](f[237])}},FJ:function(){try{this[f[84]]=[];var w=this[f[150]][f[214]]()[0][f[213]]();MaelstromTools[f[114]][f[87]](f[156],w[f[157]]());var t=this[f[162]][f[214]]()[0][f[213]]();MaelstromTools[f[114]][f[87]](f[164],t);var s=this[f[166]][0][f[238]]();var r=this[f[166]][1][f[238]]();var q=this[f[166]][2][f[238]]();console[f[3]](f[239],s,r,q);MaelstromTools[f[114]][f[87]](f[168],s);MaelstromTools[f[114]][f[87]](f[170],r);MaelstromTools[f[114]][f[87]](f[171],q);var I=w[f[215]]();var H=w[f[216]]();var F=0;var D=0;var C=ClientLib[f[19]][f[204]].GetInstance()[f[240]]();console[f[3]](f[241]+w[f[242]]());var B=ClientLib[f[19]][f[204]].GetInstance()[f[244]]()[f[243]]();for(D=H-Math[f[245]](B+1);D<=H+Math[f[245]](B+1);D++){for(F=I-Math[f[245]](B+1);F<=I+Math[f[245]](B+1);F++){var A=Math[f[246]](I-F);var z=Math[f[246]](H-D);var y=Math[f[247]]((A*A)+(z*z));if(y<=B){var x=C.GetObjectFromPosition(F,D);var G={};if(x){var E=w.CalculateAttackCommandPointCostToCoord(F,D);if(E<=t){if(x[f[248]]==1&&s){this[f[84]][f[249]]([x[f[228]](),-1,p[f[72]](f[33]),F+f[127]+D,x[f[225]](),0,0,0,0,0,0,0,0,E,0,0,0])}if(x[f[248]]==2&&r){this[f[84]][f[249]]([x[f[228]](),-1,p[f[72]](f[37]),F+f[127]+D,x[f[225]](),0,0,0,0,0,0,0,0,E,0,0,0])}if(x[f[248]]==3&&q){this[f[84]][f[249]]([x[f[228]](),-1,p[f[72]](f[39]),F+f[127]+D,x[f[225]](),0,0,0,0,0,0,0,0,E,0,0,0])}}}}}}this[f[142]]=true;this[f[250]]={};this[f[92]][f[251]](4,false);window[f[219]](f[252],50)}catch(u){console[f[3]](f[253],u)}},FG:function(){try{var R=false;var Q=0;var P=10;var O=0;var G=150;while(!R){var F=null;var D=0;var A=0;if(this[f[84]]==null){console[f[3]](f[254]);this[f[142]]=false;break}for(O=0;O<this[f[84]][f[126]];O++){if(this[f[84]][O][1]==-1){break}}if(O==this[f[84]][f[126]]){this[f[142]]=false}if(this[f[84]][O]==null){console[f[3]](f[255]);this[f[142]]=false;this[f[172]][f[182]](true);this[f[180]][f[182]](true);break}posData=this[f[84]][O][3];if(posData!=null&&posData[f[128]](f[127])[f[126]]==2){posX=parseInt(posData[f[128]](f[127])[0]);posY=parseInt(posData[f[128]](f[127])[1]);A=this[f[84]][O][0];webfrontend[f[138]][f[257]][f[256]](1,A,false);F=window[f[10]][f[258]].GetCity(A);if(F!=null){if(!F[f[259]]()){var y=F[f[260]]();var x=F[f[261]]();if(y!=null){var v=window[f[10]][f[258]].GetBuildings(y);var t=window[f[10]][f[258]].GetDefenseUnits(x);if(v!=null){var r=window[f[10]][f[144]][f[262]](v);var q=window[f[10]][f[144]][f[262]](t);this[f[84]][O][2]=F[f[242]]();this[f[84]][O][5]=r[ClientLib[f[12]][f[263]][f[120]]]+q[ClientLib[f[12]][f[263]][f[120]]];this[f[84]][O][6]=r[ClientLib[f[12]][f[263]][f[116]]]+q[ClientLib[f[12]][f[263]][f[116]]];this[f[84]][O][7]=r[ClientLib[f[12]][f[263]][f[264]]]+q[ClientLib[f[12]][f[263]][f[264]]];this[f[84]][O][8]=r[ClientLib[f[12]][f[263]][f[265]]]+q[ClientLib[f[12]][f[263]][f[265]]];if(F.GetBuildingsConditionInPercent()!=0){this[f[266]]=0;if(this[f[84]][O][5]!=0){var E=0;var B=0;var z=0;var w=0;var u=0;this[f[250]][A]=new Array(9);for(z=0;z<9;z++){this[f[250]][A][z]=new Array(8)}for(w=0;w<9;w++){for(u=0;u<8;u++){switch(F.GetResourceType(w,u)){case 1:this[f[250]][A][w][u]=1;E++;break;case 2:this[f[250]][A][w][u]=2;B++;break;default:break}}}this[f[84]][O][9]=E;this[f[84]][O][10]=B;this[f[84]][O][11]=F.GetBuildingsConditionInPercent();this[f[84]][O][12]=F.GetDefenseConditionInPercent();try{var s=this[f[150]][f[214]]()[0][f[213]]();var M=s[f[261]]()[f[268]]()[f[267]];var K=0;var J=0;var I=0;for(I=0;I<M[f[126]];I++){K+=M[I][f[269]]()}M=F[f[261]]()[f[270]]()[f[267]];for(I=0;I<M[f[126]];I++){J+=M[I][f[269]]()}}catch(L){console[f[3]](f[271],L)}this[f[84]][O][14]=(J/K);this[f[84]][O][15]=this[f[84]][O][5]+this[f[84]][O][6]+this[f[84]][O][7];this[f[84]][O][16]=this[f[84]][O][15]/this[f[84]][O][13];this[f[84]][O][1]=0;R=true;console[f[3]](F[f[242]](),f[272])}}else{if(this[f[266]]>150){console[f[3]](this[f[84]][O][2],f[273],posX,posY,f[274]);this[f[84]][f[275]](O,1);break}this[f[266]]++}}}}else{console[f[3]](this[f[84]][O][2],f[273],posX,posY,f[276]);this[f[84]][f[275]](O,1);break}}}Q++;if(Q>=P){R=true;break}}if(this[f[277]]!=O){this[f[277]]=O;this[f[278]]=0}else{if(this[f[278]]>16){console[f[3]](this[f[84]][O][2],f[273],posX,posY,f[279]);this[f[84]][f[275]](O,1);this[f[278]]=0}else{if(this[f[278]]>10){G=500}else{if(this[f[278]]>4){G=250}}}this[f[278]]++}if(this[f[142]]&&window[f[78]][f[77]][f[8]]()[f[86]][f[280]]()){window[f[219]](f[252],G)}else{this[f[172]][f[182]](true);this[f[142]]=false}}catch(H){console[f[3]](f[281],H)}}}});qx[f[283]][f[282]](f[284],{type:f[82],extend:MaelstromTools[f[83]],members:{ZW:null,ZZ:null,ZY:null,ZX:null,FC:function(){try{console[f[3]](f[285]);this[f[286]]=[];this[f[86]][f[85]](0);this[f[86]][f[87]]({resizable:false});this[f[86]][f[88]]();this[f[86]][f[184]](new qx[f[95]][f[148]].Flow()[f[87]]({spacingX:3,spacingY:3}));this[f[287]]=new qx[f[95]][f[149]].Scroll()[f[87]]({width:800,height:350});this[f[288]]=new qx[f[95]][f[149]].Composite();this[f[288]][f[184]](new qx[f[95]][f[148]].Flow()[f[87]]({spacingX:3,spacingY:3}));this[f[86]][f[89]](this.ZZ);this[f[287]][f[89]](this.ZY);this.FO()}catch(q){console[f[3]](f[289],q)}},updateCache:function(){try{}catch(q){console[f[3]](f[290],q)}},setWidgetLabels:function(){try{if(this[f[286]]==null){this.FC()}}catch(q){console[f[3]](f[291],q)}},FO:function(){var B=window[f[78]][f[77]][f[8]]()[f[250]];var A=window[f[78]][f[77]][f[8]]()[f[84]];this[f[292]]=[];var y=window[f[78]][f[77]][f[8]]()[f[173]][f[214]]()[0][f[213]]();var w=null;if(A==null){console[f[3]](f[293]);return}this[f[286]]=[];var u;var r;var D;var C;var z;for(u in B){for(r=0;r<A[f[126]];r++){if(A[r][0]==u){w=A[r]}}if(w==null){continue}if(y>4&&y<8){if(y!=w[10]){continue}}else{continue}posData=w[3];if(posData!=null&&posData[f[128]](f[127])[f[126]]==2){posX=parseInt(posData[f[128]](f[127])[0]);posY=parseInt(posData[f[128]](f[127])[1])}var x=f[294];var v=w[2]+f[295]+w[3];x=x+f[296]+v+f[297];for(C=0;C<8;C++){x=x+f[298];for(D=0;D<9;D++){var t=f[165];var s=B[u][D][C];switch(s==undefined?0:s){case 2:t=f[299]+n[f[117]][MaelstromTools[f[100]][f[120]]]+f[300];break;case 1:t=f[299]+n[f[117]][MaelstromTools[f[100]][f[116]]]+f[300];break;default:t=f[299]+n[f[117]][f[67]]+f[300];break}x=x+f[301]+t+f[302]}x=x+f[303]}x=x+f[304];var q=new qx[f[95]][f[161]].Label()[f[87]]({backgroundColor:f[305],value:x,rich:true});q[f[306]]=u;this[f[292]][f[249]](u);q[f[79]](f[307],function(F){console[f[3]](f[308],this[f[306]]);var E=qx[f[133]][f[132]][f[131]]();E[f[135]]()[f[134]]();E[f[140]]()[f[139]](webfrontend[f[138]][f[137]][f[137]][f[136]].EMode_CombatSetupBase,this[f[306]],0,0)});q[f[309]]=u;this[f[286]][f[249]](q);this[f[288]][f[88]]();for(z=0;z<this[f[286]][f[126]];z++){this[f[288]][f[89]](this[f[286]][z])}}}}})}function d(k){var j;for(j in k){if(typeof(k[j])==f[310]){var i=k[j].toString();console[f[3]](j,i)}}}function e(n,l,j,p){var o=[];var m=n.toString();var k=m[f[311]](/\s/gim,f[165]);o=k[f[312]](l);var i;for(i=1;i<(p+1);i++){if(o!=null&&o[i][f[126]]==6){console[f[3]](j,i,o[i])}else{console[f[227]](f[313],j,i,f[314]);console[f[315]](j,k)}}return o}function g(){try{if(typeof qx!=f[316]&&typeof MaelstromTools!=f[316]){h()}else{window[f[219]](g,1000)}}catch(i){console[f[3]](f[317],i)}}if(/commandandconquer\.com/i[f[319]](document[f[318]])){window[f[219]](g,10000)}};try{var c=document.createElement("script");c.innerHTML="("+b.toString()+")();";c.type="text/javascript";if(/commandandconquer\.com/i.test(document.domain)){document.getElementsByTagName("head")[0].appendChild(c)}}catch(a){console.log("MaelstromTools_Basescanner: init error: ",a)}})();
