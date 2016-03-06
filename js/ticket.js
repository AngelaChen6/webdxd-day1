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






