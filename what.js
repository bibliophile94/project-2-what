var textarea = document.getElementById('what');
var replyarea = document.getElementById('result');
var form = document.getElementsByTagName('form')[0];
textarea.addEventListener('change', function() {
    form.submit();
}, false);
var what = location.search;
what = what.replace('?what=', '');
what = what.replace(/\+/g, ' ');
what = decodeURIComponent(what);
textarea.value = what;
what = what.toLowerCase();
what = what.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~'" ?|()]/g,"")

if (what == "willimeettheone")
replyarea.value = "You will die emotionally alone";
else if (what == "willipassdansclass")
replyarea.value = "With a project like this? Unlikely.";
else if (what == "willigetrich")
replyarea.value = "Your money managment skills leave much to be desired.";
else if (what == "willmyfathereverloveme")
replyarea.value = "You were a last ditch effort to save a failing marriage. He will continue to resent you for the lasting tie you created between him and your mother.";
else if (what == "willilivealonglife")
replyarea.value = "With your eating habits and lifestyle?";
else if (what == "")
	replyarea.value = "";
else if (what == "willtrumpwintheelection")
	replyarea.value = "With our luck? Probably.";

else
	replyarea.value = "Probably not";
	
