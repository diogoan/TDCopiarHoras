# TDCopiarHoras
Extensão do Google Chrome para copiar horas do Time Doctor.

## Como Funciona
Essa extensão do Google Chrome adiciona alguns botões na página Edit Time no site do Time Doctor, possibilitando copiar as horas de entrada e saída da data atual e de múltiplas datas para preencher a planilha de horas (timesheet).

![chrome_fWmdbAFYEq](https://github.com/diogoan/TDCopiarHoras/assets/3026040/6215d4ef-2f98-4a2a-aa91-edf7008215da)

O código é capaz de identificar diferentes tarefas sequenciais no mesmo dia (desde que não haja nenhum intervalo entre elas) para copiar apenas a primeira e a última hora de uma sequência de tarefas.

As horas já são copiadas no formato compatível com Excel/Google Docs. Isso significa que cada hora vai preencher uma célula.

O script pode copiar todos os intervalos de horas que estiverem no mesmo dia.

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

Observação: para desocupar espaço para os botões novos, os seguintes elementos (que são pouco ou nunca usados) tiveram que ser removidos da página (ver imagem abaixo).

* Time Zone (fuso horário)
* User (usuário atual)

Caso haja necessidade de usá-los, basta desabilitar a extensão no Google Chrome (ou usar a opção This can read and change site data > When you click the extension).

![chrome_1eaAhQMPQu](https://github.com/diogoan/TDCopiarHoras/assets/3026040/91f9caca-7c6d-4da5-b243-80aab2e6a164)

## Como Instalar

1. Baixe os arquivos da extensão ou faça um clone do repositório;
2. No Google Chrome, vá em Extensions (Extensões);
3. No canto superior direito da tela, ative o Developer mode (Modo do desenvolvedor);
4. Clique na opção Load unpacked (Carregar sem compactação) e selecione a pasta extension.

Para mais informações, veja esse link: https://canaltech.com.br/navegadores/como-instalar-extensao-no-google-chrome-manualmente/

## Funções

### Copiar Horas

Copia apenas as horas correspondentes ao dia selecionado na tela atual, no formato explicado acima.

### Iniciar Armazenamento de Horas

Inicia o modo Armazenamento de Horas, que permite armazenar e copiar as horas de múltiplos dias. Para armazenar as horas de um dia, é necessário mudar o dia. As horas do dia atual não são armazenadas nem copiadas automaticamente, é necessário passar o dia. Isso permite que alterações sejam feitas antes de copiar.

Dias sem nenhuma hora trabalhada irão aparecer como uma linha vazia.

Caso o dia passado for o próximo dia em relação à data atual, as horas serão adicionadas à linha seguinte. Se for o dia anterior, as horas serão adicionados ao dia anterior.

Se um dia distante for selecionado no seletor de data, uma mensagem será mostrada avisando que horas de dias não sequenciais serão armazenados, mas não corresponderão nem ao dia anterior, nem ao dia seguinte.

### Copiar Horas Armazenadas

Copia as horas de todas as datas armazenadas na memória para a Área de Transferência. As horas da data selecionada atualmente não são copiadas.

### Copiar Totais de Horas

Copia os totais de horas trabalhadas de todas as datas armazenadas para a Área de Transferência. Isso é útil para comparar os totais de horas na planilha onde for copiado as horas.

### Parar Armazenamento

Termina o modo Armazenamento de Horas e limpa todas as horas armazenadas na memória.
