
var h =function(){


$(".lunch").click(function(){
			
			var l = document.getElementById("element").childElementCount;
			console.log(l);
			for(var i=0;i<l;i++){
				var p = document.getElementById(i);
			while (p.firstChild) {
    			p.removeChild(p.firstChild);
}	}

	$.ajax({url:'https://acadstaging.com/py/udaan/project?meal=lunch&project_name=restaurant',type:'GET',success:function(result){
		var g = (result["lunch"]);
		console.log(g);
		for (var i=0;i<g.length;i++){
			 var name = document.createElement('h2');
			var node3 = document.createTextNode(g[i]["name"]+"......"+g[i]["price"]+"Rs");
			name.appendChild(node3);


			
			
			
			
			
			var des = document.createElement('p');
			var node1 = document.createTextNode("("+g[i]["description"]+")");
			des.appendChild(node1);
			document.getElementById(i).appendChild(name);
			
			
			document.getElementById(i).appendChild(des);			
		};}});
});





$(".breakfast").click(function(){
			
			var l = document.getElementById("element").childElementCount;
			console.log(l);
			for(var i=0;i<l;i++){
				var p = document.getElementById(i);
			while (p.firstChild) {
    			p.removeChild(p.firstChild);
}	}

	$.ajax({url:'https://acadstaging.com/py/udaan/project?meal=breakfast&project_name=restaurant',type:'GET',success:function(result){
		var g = (result["breakfast"]);
		console.log(g);
		for (var i=0;i<g.length;i++){
			 var name = document.createElement('h2');
			var node3 = document.createTextNode(g[i]["name"]+"......"+g[i]["price"]+"Rs");
			name.appendChild(node3);


			
			
			
			
			
			var des = document.createElement('p');
			var node1 = document.createTextNode("("+g[i]["description"]+")");
			des.appendChild(node1);
			
			
			
		

			document.getElementById(i).appendChild(name);
			
			
			document.getElementById(i).appendChild(des);			
		};}});
});





	$("#submit").click(function(){
		var a = $('#name').val();
 		var b = $('#email').val();
 		var c = $('#phone').val();
 		var d = $('#guest').val();
 		var e = $('#date').val();
 		var f = $('#time').val();
 		var g = $('#message').val();

 		console.log(a);
 		console.log(b);
 		console.log(c);
 		console.log(d);
 		console.log(e);
 		console.log(f);
 		console.log(g);
		
		$.ajax({
			url:"https://acadstaging.com/py/udaan/project",
	        type: "POST",
	        data: {"name":a,"email_id":b,"contact_number":c,"message":g,"date":e,"guests":d} ,
	        success:function(result){ 
	        	console.log(result); 
	        } 
		});
	});
}



