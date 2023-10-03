function updateClock() {
  var now = new Date();
  var options = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
  var timeString = now.toLocaleTimeString('en-US', options).split(':');
  
  document.getElementById("h").firstChild.nodeValue = timeString[0];
  document.getElementById("m").firstChild.nodeValue = timeString[1];
  document.getElementById("s").firstChild.nodeValue = timeString[2].split(' ')[0];
  document.getElementById("ampm").firstChild.nodeValue = timeString[2].split(' ')[1];
  
  var mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var tags = ["mon", "d", "y"],
    corr = [months[mo], dy, yr];
  
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}
