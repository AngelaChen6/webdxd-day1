//console.log (document.getElementById('deadpool'));
// var deadpoolObj = document.getElementById('deadpool');
// var deadpoolTicketNum = document.getElementById('deadpool').innerText;

// function buyTicket(){
// 	deadpoolTicketNum--;
// 	deadpoolObj.innerText = deadpoolTicketNum;
// } 
//以上2-8行可以用11-13行简写


//下面的要在moive.html里的button里加onClick
// function buyTicket(e){
// 	console.log(e);
// 	// debugger;

// 	// var ticketNum = document.getElementById('deadpool').innerText;
// 	var ticketNum = e.children[1].innerText;
// 	if (ticketNum > 0) {
// 	e.children[1].innerText --;
// 	} else {
// 		alert ("Ticket Sold Out");
// 	}
// }

var movieDataRef = new Firebase('https://kpgr5sm5jeb.firebaseio-demo.com/');

// var name = "deadpool";
// var director = "Tim Miller";
// var date = "Feb. 15,2016";
// var ticket = 100;

// movieDataRef.push( {
// name: name, director: director, release_date: date,ticket: ticket});




//下面是介绍用js让每个button运行clickfunction
$('.ticket-btn').click(function (){
	var ticketNum = $($(this).find('span')).html();
//get number of ticket form button span
if (ticketNum > 1) {
	$($(this).find('span')).html(ticketNum - 1);
//set number of ticket left
	} else {
	$(this).addClass('alert-btn').html('Sold Out');

	}
});
//change text to sold out and add alert button class when ticket number equals zero


$('#add-moive').click(function(){
	console.log("Add movie button is clicked");
	var name = $('#movie-name').val();
	var director = $('#director').val();
	var date = $('#release-date').val();
	var ticket = $('#ticket').val();
	console.log("name: "+ name + " dirctor: " + director + "release-date:" + date  + "ticket: " + ticket);
	
	if (name !== "" && director !=="" && date !=="" && ticket !== "") {
		movieDataRef.push({
		name: name, director: director, release_date: date,ticket: ticket});
	} else {
		alert('Please complete this form!');
	}
});



