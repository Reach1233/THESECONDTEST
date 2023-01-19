//Side Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
var x = 0;
function toggleNav(){
	if (x == 0){
		openNav();
		x++;
	}else{
		closeNav();
		x--;
	}
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//Calnder
/*$("[.fc-daygrid-event][.fc-daygrid-block-event][.fc-h-event][.fc-event][.fc-event-start][.fc-event-end][.fc-event-past]").sortable({
	connectWith: "[.fc-daygrid-day] [.fc-day] [.fc-day-wed] [.fc-day-past]"
});*/
//Chess
