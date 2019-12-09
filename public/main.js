var numOfLinks;
var urls = [];


function getUrls() {
  urls = document.getElementsByClassName('url_link');
}

document.getElementById('open_all').onclick = function () {
  getUrls();
  for (let i = 0; i < urls.length; i++) {
    url = urls[i];
    window.open(url, '_blank');
  }
};