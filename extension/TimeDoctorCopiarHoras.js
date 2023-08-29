var timesheet = "";
var hoursWorkedPerDay = "";
var lastReadDay = $(".dcal").find('.date-val').text();
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
    var entrada1 = "";
    var saida1 = "";
    var entrada2 = "";
    var saida2 = "";
    var entrada3 = "";
    var saida3 = "";

    var tabela = $(".td-table");
    var linhas = tabela.find("tr");

    linhas.each(function(index) {
        var coluna5 = $(this).find("td:eq(4)").text();

        if (coluna5 !== "-Not Working-" && coluna5 !== "") {
            var start = $(this).find("td:eq(0)").text();
            var end = $(this).find("td:eq(1)").text();

            if (!entrada1) {
                entrada1 = start;
                saida1 = end;
            } else if (saida1 == start) {
                saida1 = end;
            } else if (!entrada2) {
                entrada2 = start;
                saida2 = end;
            } else if (saida2 == start) {
                saida2 = end;
            } else if (!entrada3) {
                entrada3 = start;
                saida3 = end;
            } else if (saida3 == start) {
                saida3 = end;
            }
        }
    });

    if (entrada3) {
        return entrada1 + "	" + saida1 + "	" + entrada2 + "	" + saida2 + "	" + entrada3 + "	" + saida3 + "\n";
    } else {
        return entrada1 + "	" + saida1 + "	" + entrada2 + "	" + saida2 + "\n";
    }
}

function lerTotalHoras() {
    var timeWorked = $('.total-time-worked-list-view').find('b').text();
    return timeWorked + "\n";
}

function copiarHorasHoje() {
    copiarTexto(lerTabela());
    alert("Horas copiadas para a Área de Transferência.");
}

function armazenarDatasHoje() {
    var currentReadDay = $(".dcal").find('.date-val').text();

    if (lastReadDay !== currentReadDay) {
        lastReadDay = currentReadDay;
        timesheet = timesheet + lerTabela();
        hoursWorkedPerDay = hoursWorkedPerDay + lerTotalHoras();
        console.log(timesheet);
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
    debugger;
}

$("users-selection").remove();
$(".td-timezone-btn-dashboard").remove();

var upperMenu = $('.td-filters-right-side');
upperMenu.append("<button class='td-button pull-right' id='copiarHorasHoje'>Copiar Horas Hoje</button>");
upperMenu.append("<button class='td-button pull-right' id='iniciarArmazenamento'>Iniciar Armazenamento de Horas</button>");
upperMenu.append("<button class='td-button pull-right' id='copiarHorasVariasDatas' style='display:none'>Copiar Horas Armazenadas</button>");
upperMenu.append("<button class='td-button pull-right' id='copiarTotaisHoras' style='display:none'>Copiar Totais de Horas</button>");
upperMenu.append("<button class='td-button pull-right' id='pararArmazenamento' style='display:none'>Parar Armazenamento</button>");

$("#copiarHorasHoje").click(copiarHorasHoje);
$("#copiarHorasVariasDatas").click(copiarHorasVariasDatas);
$("#copiarTotaisHoras").click(copiarTotaisHoras);
$("#iniciarArmazenamento").click(iniciarArmazenamento);
$("#pararArmazenamento").click(pararArmazenamento);
