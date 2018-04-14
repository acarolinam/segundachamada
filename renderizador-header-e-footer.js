var header = '<header class="header text-center"><div class="jumbotron"><div class="container"><h1 class="display-3 text-center">Sistema de Solicitação de Segunda Chamada</h1></div></div></header>';
var footer = '<footer class="navbar navbar-inverse"><p class="text-center">Sistema de Solicitação de Segunda Chamada</p></footer>';

renderizar(header, footer);


function renderizar(header, footer) {
	//para renderizar o header;
	var pagina = document.body.innerHTML;
	document.body.innerHTML = header + pagina;
	//para renderizar o footer;
	document.body.innerHTML += footer;
	console.log(__dirname);
}
