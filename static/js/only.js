
var mystr="我似乎坠入了深渊，却怎么也出不来，其实是不愿出来，这个爱你的深渊。";
var num=0;
var timer=setInterval(function(){

	
	if(num<=mystr.length){
		$('.only_p').html(mystr.substr(0,num));
		num++;
	}else{
		clearInterval(timer);
	}
	
},150)