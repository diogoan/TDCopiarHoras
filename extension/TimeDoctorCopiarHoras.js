var timesheet = "";
var hoursWorkedPerDay = "";
var lastReadDay = new Date($(".dcal").find('.date-val').text());
var setIntervalId;

function copiarTexto(textoParaCopiar){
    var textarea = document.createElement("textarea");
    textarea.value = textoParaCopiar;
    document.body.appendChild(textarea);
    textarea.select();

    try {
        var copiado = document.execCommand("copy");
        var mensagem = copiado ? "Texto copiado com sucesso!" : "Não foi possível copiar o texto.";
        console.log(mensagem);
    } catch (err) {
        console.error("Erro ao copiar o texto:", err);
    }

    document.body.removeChild(textarea);
}

function lerTabela() {
    var hours = '';
	var isNotWorkingRow = true;
	for (const e of document.querySelectorAll('.td-table tbody tr.ng-scope:not(.ng-hide)')) {
		if (isNotWorkingRow && !e.classList.contains('td-row-grayed')) {
            // Se não tiver a classe td-row-grayed, é linha de hora trabalhada, adicione a primeira hora da linha.
			isNotWorkingRow = false;
			hours += e.firstElementChild.textContent + '\t';
		} else if (!isNotWorkingRow && e.classList.contains('td-row-grayed')) {
            // Se tiver a classe td-row-grayed, é linha Not Working, pegue a segunda hora da linha anterior.
			isNotWorkingRow = true;
			hours += e.previousElementSibling.firstElementChild.nextElementSibling.textContent + '\t';
		}
	}
    // Remove tab final e insere new line.
	hours = hours.slice(0, hours.length - 1) + '\n';
	return hours;
}

function lerTotalHoras() {
    var timeWorked = $('.total-time-worked-list-view').find('b').text();
    return timeWorked + "\n";
}

function copiarHoras() {
    copiarTexto(lerTabela());
    alert("Horas copiadas para a Área de Transferência.");
}

function armazenarDatasHoje() {
    let currentReadDay = new Date($(".dcal").find('.date-val').text());

    let dateDiff = currentReadDay - lastReadDay;
    let isNotSameDay = dateDiff !== 0;
    let isFarDay = dateDiff > 86400000 || dateDiff < -86400000;
    let isFuture = dateDiff > 0;
    let isPast = dateDiff < 0;

    if (isNotSameDay) {
        if (isFarDay) {
            alert("Você mudou para uma data fora da sequência em relação ao dia atual. Isso fará com que as horas armazenadas na próxima linha não sejam as do dia seguinte, e nem as horas armazenadas na linha anterior sejam do dia anterior.");
        }

        if (isFuture) {
            timesheet = timesheet + lerTabela();
            hoursWorkedPerDay = hoursWorkedPerDay + lerTotalHoras();
        }

        if (isPast) {
            timesheet = lerTabela() + timesheet;
            hoursWorkedPerDay = lerTotalHoras() + hoursWorkedPerDay;
        }

        lastReadDay = currentReadDay;
        //console.log(timesheet);
    }
}

function copiarHorasVariasDatas() {
    if (timesheet) {
        copiarTexto(timesheet);
        alert("Horas copiadas para a Área de Transferência.");
    } else {
        alert("Nenhuma dia armazenado para copiar. Mude a data para começar a armazenar.")
    }
}

function copiarTotaisHoras() {
    if (hoursWorkedPerDay) {
        copiarTexto(hoursWorkedPerDay);
        alert("Totais de horas copiadas para a Área de Transferência.");
    } else {
        alert("Nenhum dia armazenado para copiar. Mude a data para começar a armazenar.")
    }
}

function pararArmazenamento() {
    timesheet = "";
    hoursWorkedPerDay = "";
    clearInterval(setIntervalId);
    $("#copiarHorasVariasDatas").hide();
    $("#copiarTotaisHoras").hide();
    $("#iniciarArmazenamento").show();
    $("#pararArmazenamento").hide();
    alert("Armazenamento de horas parado.");
}

function iniciarArmazenamento() {
    setIntervalId = setInterval(armazenarDatasHoje, 100);
    lastReadDay = $(".dcal").find('.date-val').text();
    $("#copiarHorasVariasDatas").show();
    $("#copiarTotaisHoras").show();
    $("#iniciarArmazenamento").hide();
    $("#pararArmazenamento").show();
    alert("Armazenamento de horas iniciado. Mude a data para começar a armazenar na memória e depois copiar.");
}

$("users-selection").remove();
$(".td-timezone-btn-dashboard").remove();

var upperMenu = $('.td-filters-right-side');
upperMenu.append("<button class='td-button pull-right' id='iniciarArmazenamento'>Iniciar Armazenamento de Horas</button>");
upperMenu.append("<button class='td-button pull-right' id='pararArmazenamento' style='display:none'>Parar Armazenamento</button>");
upperMenu.append("<button class='td-button pull-right' id='copiarTotaisHoras' style='display:none'>Copiar Totais de Horas</button>");
upperMenu.append("<button class='td-button pull-right' id='copiarHorasVariasDatas' style='display:none'>Copiar Horas Armazenadas</button>");
upperMenu.append("<button class='td-button pull-right' id='copiarHoras'>Copiar Horas</button>");

$("#iniciarArmazenamento").click(iniciarArmazenamento);
$("#pararArmazenamento").click(pararArmazenamento);
$("#copiarTotaisHoras").click(copiarTotaisHoras);
$("#copiarHorasVariasDatas").click(copiarHorasVariasDatas);
$("#copiarHoras").click(copiarHoras);
