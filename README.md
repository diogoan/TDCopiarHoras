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

Por exemplo, se sua planilha de horas estiver assim no Time Doctor:

| Time Started | Time End | Task          |
| ------------ | ---------| ------------- |
| 9:00 AM      | 10:30 AM | Task 1        |
| 10:30 AM     | 12:30 PM | Task 2        |
| 12:30 PM     | 1:30 PM  | -Not Working- |
| 1:30 PM      | 4:15 PM  | Task 3        |
| 4:15 PM      | 6:00 PM  | Task 4        |

As únicas horas que serão copiadas estarão nesse formato:

| 9:00 AM | 12:30 PM | 1:30 PM | 6:00 PM |
| - | - | - | - |

Observação: para desocupar espaço para os botões novos, alguns elementos pouco ou nunca usados são removidos da página (ver imagem abaixo).

* Time Zone (fuso horário)
* User (usuário atual)

Caso haja necessidade de usá-los, basta desabilitar a extensão no Google Chrome (ou usar a opção This can read and change site data > When you click the extension).

![image](https://github.com/diogoan/TDCopiarHoras/assets/3026040/54790ce5-4cf2-4c95-a9ab-1bd357e995fa)

## Como Instalar

1. Baixe os arquivos da extensão ou faça um clone do repositório;
2. No Google Chrome, vá em Extensions (Extensões);
3. No canto superior direito da tela, ative o Developer mode (Modo do desenvolvedor);
4. Clique na opção Load unpacked (Carregar sem compactação) e selecione a pasta extension.

Para mais informações, veja esse link: https://canaltech.com.br/navegadores/como-instalar-extensao-no-google-chrome-manualmente/

## Funções

### Copiar Horas Hoje

Copia apenas as horas correspondentes ao dia selecionado na tela atual, no formato explicado acima.

### Iniciar Armazenamento de Horas

Inicia o modo Armazenamento de Horas, que permite armazenar e copiar as horas de múltiplos dias. Para armazenar as horas de um dia, é necessário mudar o dia. As horas do dia atual não são armazenadas nem copiadas automaticamente, é necessário passar o dia. Isso permite que alterações sejam feitas antes de copiar.

Dias sem nenhuma hora trabalhada irão aparecer como uma linha vazia.

É recomendável ir para o primeiro dia (a data mais antiga) antes de habilitar esse modo, e só depois ir passando os dias para copiar na sequência correta (da data mais antiga para a mais recente).

### Copiar Horas Armazenadas

Copia as horas de todas as datas armazenadas na memória para a Área de Transferência. As horas da data selecionada atualmente não são copiadas.

### Copiar Totais de Horas

Copia os totais de horas trabalhadas de todas as datas armazenadas para a Área de Transferência. Isso é útil para comparar os totais de horas na planilha onde for copiado as horas.

### Parar Armazenamento

Termina o modo Armazenamento de Horas e limpa as horas armazenadas.
