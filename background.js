chrome.browserAction.onClicked.addListener(function(tab) {
    // Obtiene las palabras de la base de datos local
    chrome.storage.local.get("words", function(data) {
      var words = data.words || [];
  
      // Envía las palabras al script de contenido
      chrome.tabs.sendMessage(tab.id, { action: "highlightWords", words: words });
    });
  });
  