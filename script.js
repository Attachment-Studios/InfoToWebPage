
function generate_css() {
	let c1 = document.getElementById("bgcolor").value;
	let c2 = document.getElementById("textcolor").value;
	let h1 = document.getElementById("fontsizeh1").value;
	let h2 = document.getElementById("fontsizeh2").value;
	let h3 = document.getElementById("fontsizeh3").value;
	let h4 = document.getElementById("fontsizeh4").value;
	let h5 = document.getElementById("fontsizeh5").value;
	let h6 = document.getElementById("fontsizeh6").value;
	let hp = document.getElementById("fontsizep").value;
	let fl = document.getElementById("fontfamlink").value;
	let ff = document.getElementById("fontfam").value;

	// console.log(c1);
	// console.log(c2);
	// console.log(h1);
	// console.log(h2);
	// console.log(h3);
	// console.log(h4);
	// console.log(h5);
	// console.log(h6);
	// console.log(hp);
	// console.log(fl);
	// console.log(ff);

	let css_value = `@import url('${fl}');\n\n:root {\n	--c1: ${c1};\n	--c2: ${c2};\n	--h1: ${h1};\n	--h2: ${h2};\n	--h3: ${h3};\n	--h4: ${h4};\n	--h5: ${h5};\n	--h6: ${h6};\n	--hp: ${hp};\n	--ff: '${ff}';\n}\n\n* {\n	background: var(--c1);\n	color: var(--c2);\n	font-family: var(--ff);\n}\n\np {\n	margin: 0;\n	padding: 0;\n	font-size: var(--hp);\n}\n\nb {\n	margin: 0;\n	padding: 0;\n	font-size: var(--hp);\n}\n\ni {\n	margin: 0;\n	padding: 0;\n	font-size: var(--hp);\n}\n\nstrong {\n	margin: 0;\n	padding: 0;\n	font-size: var(--hp);\n}\n\nh1 {\n	margin: 0;\n	padding: 0;\n	font-size: var(--h1);\n}\n\nh2 {\n	margin: 0;\n	padding: 0;\n	font-size: var(--h2);\n}\n\nh3 {\n	margin: 0;\n	padding: 0;\n	font-size: var(--h3);\n}\n\nh4 {\n	margin: 0;\n	padding: 0;\n	font-size: var(--h4);\n}\n\nh5 {\n	margin: 0;\n	padding: 0;\n	font-size: var(--h5);\n}\n\nh6 {\n	margin: 0;\n	padding: 0;\n	font-size: var(--h6);\n}\n\nbutton {\n	border: 3px solid var(--c2);\n	padding: 10px;\n	background: var(--c1);\n	color: var(--c2);\n	font-size: var(--hp);\n	cursor: pointer;\n}\n\nbutton:hover {\n	color: var(--c1);\n	background: var(--c2);\n}\n`;

	document.getElementById("result_css").innerHTML = `<br><textarea id="css_code" rows="20" placeholder="${css_value}">${css_value}</textarea>`
	document.getElementById("css_code").style = `outline: none; border: 3px solid black; padding: 10px; width: 100%;`
	console.log(css_value);
	return css_value;
}

function generate_html() {
	title = document.getElementById('name').value;
	about = document.getElementById('about').value;
	get = document.getElementById('get').value;
	credits = document.getElementById('cred').value;
	lcr = document.getElementById('lcr').value;

	console.log(title);
	console.log(about);
	console.log(get);
	console.log(credits);
	console.log(lcr);

	html_value = `<html>\n	<head>\n		<title>${title}</title>\n	</head>\n	<body>\n		<div class="title">\n			<h1>${title}</h1>\n		</div>\n		<div class="about">\n			<h3>About</h3>\n			<p>${about}</p>\n		</div>\n		<div class="Get">\n			<h3>Get</h3>\n			<p>${get}</p>\n		</div>\n		<div class="about">\n			<h3>Credits</h3>\n			<p>${credits}</p>\n		</div>\n		<div class="Get">\n			<h3>Licenses, Copyrights and ReadMEs</h3>\n			<p>${lcr}</p>\n		</div>\n	</body>\n</html>\n	`;

	document.getElementById("result_html").innerHTML = `<br><textarea id="html_code" rows="20">${html_value}</textarea>`
	document.getElementById("html_code").style = `outline: none; border: 3px solid black; padding: 10px; width: 100%;`
	console.log(html_value);
	return html_value;
}
