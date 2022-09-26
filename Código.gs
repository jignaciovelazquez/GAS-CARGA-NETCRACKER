function doGet() {
  var html = HtmlService.createTemplateFromFile('Index.html').evaluate()
  .setTitle("Carga NetCracker")
  .setFaviconUrl("https://cdn.iconscout.com/icon/free/png-256/n-characters-character-alphabet-letter-36030.png");
  return html

}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename)
  .getContent()

}