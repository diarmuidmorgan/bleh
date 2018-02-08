var data = [{img:"images/chess.jpg", date:"178214", heading:"jsanfkjan", text:"", content:""},{img:"images/go.jpg", date:"2174681", heading:"good morning", text:"this is a heading", content:"somecontent"}
];



function indexPage(){
	col1='';
	col2='';
	var col = 0;
	
	for i in range(0, data.length, ++){

		if (col==01){
			col1+=""<div class=\"blogbox\"><img src =\"" + data[i].img+"\ width=\"100%\"><br><h1>"+data[i].heading+"</h1><p>"+data[i].text+"</p><br></div>";;
		
			col++;}
		else{
			col2+="<div class=\"blogbox\"><img src =\"" + data[i].img+"\ width=\"100%\"><br><h1>"+data[i].heading+"</h1><p>"+data[i].text+"</p><br></div>";
			col=0; }
        console.log(col1, col2)
	}
	document.getElementById('col1').innerHtml=col1;
    console.log('done')
	document.getElementById('col2').innerHtml=col2; console.log('done')
}




indexPage()

