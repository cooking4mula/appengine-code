function loadPanel(obj,option)
{
var xmlhttp, list; 
var item, carousel_str="";
var str="";
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      list = xmlhttp.responseText.split("\n");
      for(var i=0;i<list.length && list[i];i++){
           item = list[i].split(',');
           var res=item[0].replace(/ /g,'-');
	   if(obj.id=="btype" && item[1]==option){
               str += "<li><a href=\"#\"><img src=\"static_files/Content/" + res+ ".jpg\" height=\"30\" width=\"30\">"+ item[0] + "</a></li>";
	       carousel_str += '<div class="item"><img src="static_files/Content/' + res+'.jpg" alt=""> <div class="carousel-caption"><h4>'+item[0]+"</h4></div></div>";
           }
        }
      document.getElementById('pan').innerHTML=str;
      document.getElementById('carousel-inner-id').innerHTML=carousel_str;
  }
  }
xmlhttp.open("GET","static_files/Content/list.doc",true);
xmlhttp.send();
}

