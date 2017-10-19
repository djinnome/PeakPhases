if(typeof olInfo=="undefined"||typeof olInfo.meets=="undefined"||!olInfo.meets(4.14)){
alert("overLIB 4.14 or later is required for the Follow Scroll Plugin.");
}else{
registerCommands("positioncap,scrollbars,src,data,noborder");
if(typeof ol_positioncap=="undefined"){
var ol_positioncap="top";
}
if(typeof ol_scrollbars=="undefined"){
var ol_scrollbars=0;
}
if(typeof ol_src=="undefined"){
var ol_src="";
}
if(typeof ol_data=="undefined"){
var ol_data="";
}
if(typeof ol_noborder=="undefined"){
var ol_noborder=0;
}
var o3_positioncap="top";
var o3_scrollbars=0;
var o3_src=o3_data="";
var o3_noborder=0;
function setPositionCapVariables(){
o3_positioncap=ol_positioncap;
o3_scrollbars=ol_scrollbars;
o3_src=ol_src;
o3_data=ol_data;
o3_noborder=ol_noborder;
};
function parsePositionCapExtras(pf,i,ar){
var k=i,v;
if(k<ar.length){
if(ar[k]==POSITIONCAP){
eval(pf+"positioncap=\""+ar[++k]+"\"");
return k;
}
if(ar[k]==SCROLLBARS){
eval(pf+"scrollbars=("+pf+"scrollbars==0 ? 1 : 0)");
return k;
}
if(ar[k]==SRC){
eval(pf+"src=\""+ar[++k]+"\"");
return k;
}
if(ar[k]==DATA){
eval(pf+"data=\""+ar[++k]+"\"");
return k;
}
if(ar[k]==NOBORDER){
eval(pf+"noborder=("+pf+"noborder==0 ? 1 : 0)");
return k;
}
}
return -1;
};
function ol_content_simple_psncap(_6){
var _7,_8=getMinimumHeight(),_9=/,/.test(o3_cellpad);
if(o3_scrollbars){
_6=addWrapTags(_6,_8);
}
_7="<table width=\"100%\" border=\"0\" "+((olNs4||!_9)?"cellpadding=\""+o3_cellpad+"\" ":"")+"cellspacing=\"0\" "+(o3_fgclass?"class=\""+o3_fgclass+"\"":o3_fgcolor+" "+o3_fgbackground+" "+o3_height)+"><tr><td valign=\"TOP\""+(o3_textfontclass?" class=\""+o3_textfontclass+"\">":((!olNs4&&_9)?" style=\""+setCellPadStr(o3_cellpad)+"\">":">"))+(o3_textfontclass?"":wrapStr(0,o3_textsize,"text"))+_6+(o3_textfontclass?"":wrapStr(1,o3_textsize))+"</td></tr></table>";
if(o3_scrollbars){
_7=setScrollbarFormatting(_7,_8);
}
txt="<table width=\""+o3_width+"\" border=\"0\" cellpadding=\""+o3_border+"\" cellspacing=\"0\" "+(o3_bgclass?"class=\""+o3_bgclass+"\"":o3_bgcolor+" "+o3_height)+"><tr><td>"+_7+"</td></tr></table>";
set_background("");
return txt;
};
function ol_content_caption_psncap(_a,_b,_c){
var _d,_e=getMinimumHeight(),_f,_10,_11,_12=o3_positioncap.toUpperCase(),_13=/,/.test(o3_cellpad);
_11=(/^L/.test(_12)?"L":(/^R/.test(_12)?"R":""));
if(_11=="L"){
_12=(/LEFT/.test(_12)?_12.substring(4):_12.substring(1));
}else{
if(_11=="R"){
_12=(/RIGHT/.test(_12)?_12.substring(5):_12.substring(1));
}
}
if(/^T/.test(_12)){
_10="TOP";
}else{
if(/^B/.test(_12)){
_10="BOTTOM";
}else{
if(/^M/.test(_12)){
_10="MIDDLE";
}
}
}
closing="";
closeevent="onmouseover";
if(o3_closeclick==1){
closeevent=(o3_closetitle?"title='"+o3_closetitle+"'":"")+" onclick";
}
if(o3_capicon!=""){
_d=" hspace=\"5\""+" align=\"middle\" alt=\"\"";
if(typeof o3_dragimg!="undefined"&&o3_dragimg){
_d=" hspace=\"5\""+" name=\""+o3_dragimg+"\" id=\""+o3_dragimg+"\" align=\"middle\" alt=\"Drag Enabled\" title=\"Drag Enabled\"";
}
o3_capicon="<img src=\""+o3_capicon+"\""+_d+" />";
}
if(_c!=""){
closing="<td "+(o3_closefontclass?"class=\""+o3_closefontclass:"align=\"RIGHT")+"\"><a href=\"javascript:return "+fnRef+"cClick();\" "+closeevent+"=\"return "+fnRef+"cClick();\">"+(o3_closefontclass?"":wrapStr(0,o3_closesize,"close"))+_c+(o3_closefontclass?"":wrapStr(1,o3_closesize,"close"))+"</a></td>";
}
_f="<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td"+(o3_captionfontclass?" class=\""+o3_captionfontclass+"\">":">")+(o3_captionfontclass?"":"<b>"+wrapStr(0,o3_captionsize,"caption"))+o3_capicon+_b+(o3_captionfontclass?"":wrapStr(1,o3_captionsize)+"</b>")+"</td>"+closing+"</tr></table>";
if(!_11){
if(o3_scrollbars){
_a=addWrapTags(_a,_e);
}
bodyTxt="<table width=\"100%\" border=\"0\" "+((olNs4||!_13)?"cellpadding=\""+o3_cellpad+"\" ":"")+"cellspacing=\"0\" "+(o3_fgclass?"class=\""+o3_fgclass+"\"":o3_fgcolor+" "+o3_fgbackground+" "+o3_height)+"><tr><td valign=\"TOP\""+(o3_textfontclass?" class=\""+o3_textfontclass+"\">":((!olNs4&&_13)?" style=\""+setCellPadStr(o3_cellpad)+"\">":">"))+(o3_textfontclass?"":wrapStr(0,o3_textsize,"text"))+_a+(o3_textfontclass?"":wrapStr(1,o3_textsize))+"</td></tr></table>";
if(o3_scrollbars){
bodyTxt=setScrollbarFormatting(bodyTxt,_e);
}
txt="<table width=\""+o3_width+"\" border=\"0\" cellpadding=\""+o3_border+"\" cellspacing=\"0\" "+(o3_bgclass?"class=\""+o3_bgclass+"\"":o3_bgcolor+" "+o3_bgbackground+" "+o3_height)+"><tr><td>"+(_10=="TOP"?_f:"")+bodyTxt+(_10!="TOP"?_f:"")+"</td></tr></table>";
}else{
_f="<table width=\""+o3_width+"\" border=\"0\" cellpadding=\""+o3_border+"\" cellspacing=\"0\" "+(o3_bgclass?"class=\""+o3_bgclass+"\"":o3_bgcolor+" "+o3_bgbackground+" "+o3_height)+"><tr><td>"+_f+"</td></tr></table>";
bodyTxt=runHook("ol_content_simple",FALTERNATE,o3_css,_a);
txt="<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr>"+(_11=="L"?"<td valign=\""+_10+"\" width=\""+o3_width+"\">"+_f+"</td><td width=\""+o3_width+"\">":"<td width=\""+o3_width+"\">")+bodyTxt+(_11!="L"?"</td><td valign=\""+_10+"\" width=\""+o3_width+"\">"+_f:"</td>")+"</tr></table>";
}
set_background("");
return txt;
};
function setScrollbarFormatting(_14,hgt){
return /\.s?html?/.test(_14)?_14:"<div style=\"position: relative; width: "+o3_width+"px; height: "+hgt+"px; overflow: auto;\">"+_14+"</div>";
};
function checkScrollbars(){
if(olNs4&&o3_scrollbars){
o3_scrollbars=0;
}
if(!olNs4&&(o3_data||o3_src)){
o3_scrollbars=1;
}
if(o3_scrollbars){
if(o3_wrap){
o3_wrap=0;
o3_width=ol_width;
}
if(!o3_sticky||(o3_sticky&&!o3_close)){
o3_sticky=1;
o3_mouseoff=1;
opt_NOCLOSE(" ");
}
}
return true;
};
function getMinimumHeight(){
return (o3_height)?parseInt(o3_height.match(/(\d+)/)[0]):100;
};
function addWrapTags(txt,hgt){
return !(o3_data||o3_src)?txt:(o3_data)?"<object data=\""+o3_data+"\" width=\""+o3_width+"\" height=\""+hgt+"\" type=\"text/html\"></object>":"<iframe src=\""+o3_src+"\" width=\""+o3_width+"\" height=\""+hgt+"\" scrolling=\"auto\""+(o3_noborder?" frameborder=\"0\" border=\"0\"":"")+"></iframe>";
};
registerRunTimeFunction(setPositionCapVariables);
registerCmdLineFunction(parsePositionCapExtras);
registerPostParseFunction(checkScrollbars);
registerHook("ol_content_caption",ol_content_caption_psncap,FREPLACE);
registerHook("ol_content_simple",ol_content_simple_psncap,FREPLACE);
if(olInfo.meets(4.14)){
registerNoParameterCommands("scrollbars");
}
}

