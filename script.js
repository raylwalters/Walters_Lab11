$(function(){

	$.get("http://www.reddit.com/r/aww.json",function(data){
		for(var i = 0; i <=1; i++){
			var $author = data.data.children[i].data.author;//get author store in variable
			var $title = data.data.children[i].data.title;//get title store in variable
			var $comments = data.data.children[i].data.num_comments;//get comments store in variable
			var $thumbnail = data.data.children[i].data.thumbnail;//get thumbnail store in variable
			// console.log(author + title + comments + thumbnail);
			// switch(i){
			// 	case 0:
			// 		$("body").append('<div id="first"></div>');
			// 		$("div#first").append('<img>');
			// 		$("img").append(src= + $thumbnail);
			// 		$("img").after('<h3>' +$title + '</h3>');
			// 		$("h3").after('<p>' +$author + '</p>');
			// 		$("p").after('<p>' +$comments + " comments" + '</p>');
			// 		break;
			// 	case 1:
			// 		$("div#first").after('<div id="second"></div>');
			// 		$("div#second").append('<img>');
			// 		$("img").append(src= + $thumbnail);
			// 		$("img").after('<h3>' +$title + '</h3>');
			// 		$("h3").after('<p>' +$author + '</p>');
			// 		$("p").after('<p>' +$comments + " comments" + '</p>');
			// 		break;
					$("div").append('<div></div>');
					$("div:last").append('<img>');
					$("img:last").attr('src', $thumbnail);
					$("img:last").after('<h3>' +$title + '</h3>');
					$("h3:last").after('<p>' +$author + '</p>');
					$("p:last").after('<p>' +$comments + " comments" + '</p>');

			// }
		

		}
		// console.log(author);
	});
	// var author = info.children[0];
	// // .data.author;
	// console.log(author);







});