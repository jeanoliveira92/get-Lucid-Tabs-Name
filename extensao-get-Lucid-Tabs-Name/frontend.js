/**
 * @author Jean Carlos de Oliveira
 * @see {@link https://github.com/jeanoliveira92/get-lucid-Tabs-Name} 
*/

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.command == 'complete') {
        /*
        {"command":"complete","data":["Guia de navegação","1. HSM","1.1. Interação do usuário","2. Informações","3. LGPD","4. Confirmação de dados","5. Else padrão","6. Else de formato","7. Else Nome"]}
        */

        const plainText = msg.data.join("\n")

        navigator.clipboard.writeText(plainText).then(() => {
            
            document.querySelector('.exportarSucesso').innerHTML = "Nome das abas copiados para a área de transferência";

        }).catch((e) => {

            document.querySelector('.exportarSucesso').innerHTML = totalFormatado;
            alert("Erro ao copiar os nomes das abas para a área de transferência: " + e.message);
        });;
    }
});

document.querySelector('.container .btnClickExt').addEventListener('click', function (e) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];

        if (activeTab.url.includes('lucid.app/lucidchart')) {
            chrome.tabs.sendMessage(activeTab.id, { command: "getLucidTabsName", data: [""] });
        }
    });
});