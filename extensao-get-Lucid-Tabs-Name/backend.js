/**
 * @author Jean Carlos de Oliveira
 * @see {@link https://github.com/jeanoliveira92/get-lucid-Tabs-Name} 
*/

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.command == "getLucidTabsName") {

        var time = [...document.getElementsByClassName("page-tab")].map(e=> { return e.getElementsByClassName("title-container")[0].getElementsByClassName("lucid-input-click-edit")[0].getElementsByClassName("width-specifier")[0].innerHTML })

        window.ScraperExt = time;
        chrome.runtime.sendMessage({ command: "complete", data: window.ScraperExt });
    } else {
        chrome.runtime.sendMessage({ command: "uncomplete", data: undefined });
    }
})