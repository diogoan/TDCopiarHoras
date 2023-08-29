# TDCopiarHoras
Extensão do Google Chrome para copiar horas do Time Doctor.

## Como Funciona
Essa extensão do Google Chrome cria alguns botões no site do Time Doctor, mais especificamente na página Edit Time, para copiar as horas de entrada e saída da data atual e de múltiplas datas para preencher a planilha de horas (timesheet).

![image](https://github.com/diogoan/TDCopiarHoras/assets/3026040/0f0e0dee-b5d3-4332-90c8-1c05db369532)

O código é capaz de identificar e ignorar tarefas diferentes em um mesmo dia, desde que elas sejam sequencias e não haja nenhum intervalo entre elas.

As horas já são copiadas no formato compatível com Excel/Google Docs. Isso significa que cada hora vai ocupar uma célula.

As seguintes horas são copiadas para a área de transferência:
* Hora de entrada (início do trabalho)
* Hora de saída (saída para o almoço/intervalo)
* Hora de entrada (volta do almoço/intervalo)
* Hora de saída (fim do trabalho ou segundo intervalo)
* Hora de entrada (volta do segundo intervalo, se houver)
* Hora de saída (fim do trabalho)

Observação: para desocupar espaço para os botões novos, alguns elementos pouco ou nunca usados são removidos da página. Caso haja necessidade de usá-los, basta desabilitar a extensão no Google Chrome (ou usar a opção This can read and change site data > When you click the extension).
* Time Zone (fuso horário)
* User (usuário atual)

![image](https://github.com/diogoan/TDCopiarHoras/assets/3026040/54790ce5-4cf2-4c95-a9ab-1bd357e995fa)
