chrome.devtools.inspectedWindow.eval('document.baseURI', function(torabupage) {
  if (!/^https?:\/\/pc-play\.games\.dmm\.com\/play\/tohken\/?$/.test(torabupage)) return;
  chrome.devtools.panels.create("도검정보", 'torabutool.png', 'torabutool.html');
});
