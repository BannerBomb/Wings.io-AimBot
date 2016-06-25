// ==UserScript==
// @name         Wings AimBot
// @match        http://wings.io/
// @grant        GM_xmlhttpRequest
// ==/UserScript==
var script = '<script src = "http://localhost:3000/client.js"></script>';

function inject(page) {
   // page = page.replace('</body>', script + '</body>');
    return page;
}
window.stop();
document.documentElement.innerHTML = null;
GM_xmlhttpRequest({
	method : "GET",
	url : "http://pastebin.com/raw/KzEMeJFN",
	onload : function(e) {
		var doc = inject(e.responseText);
        document.documentElement.innerHTML = null;
		document.open();
		document.write(doc);
		document.close();
	}
});