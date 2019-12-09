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

document.addEventListener('DOMContentLoaded', function () {
  var elem = document.querySelectorAll('.modal');
  var instance = M.Modal.init(elem);
});


const db = firebase.firestore();

function addWebsite(_name, _url) {
  db.collection("websites").add({
    name: _name,
    url: _url
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

document.getElementById('add').onclick = function () {
  var websiteName = document.forms.add_website.website_name.value;
  var websiteUrl = document.forms.add_website.website_url.value;
  addWebsite(websiteName, websiteUrl);
};