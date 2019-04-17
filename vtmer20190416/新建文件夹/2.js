var pics=document.getElementsByClassName("banner_inner");
var button=document.getElementById("button").getElementsByTagName('a');	
var banner=document.getElementById("banner");
function ShowPic(index){
	for(var i=0;i<pics.length;i++)
	{
	    pics[i].style.display="none";
	    button[i].style.background="#4d4947";	
	}
	pics[index].style.display="block";
	button[index].style.background="#d9d2cf";	
    }
ShowPic(0);
var count=1;
function auto(){
	if(count==pics.length){
		count=0;
	}
	ShowPic(count);
	count++;
}
var scollMove=setInterval(auto,1200);
banner.onmouseover=function(){
	clearInterval(scollMove);
}
banner.onmouseleave=function(){
	scollMove=setInterval(auto,1200);
}
for(var j=0;j<button.length;j++)
{(function(j){
        button[j].onclick = function(){
            clearInterval(scollMove);
			ShowPic(j);  
        }
   })(j);  
}