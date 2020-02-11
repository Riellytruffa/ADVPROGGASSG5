var apikey='XHsykWMFyo70kbW0cZKAMHAzJX7Ax4ls'
var urlbase='https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=scary&api-key=XHsykWMFyo70kbW0cZKAMHAzJX7Ax4ls'
var keyword = 'Value from textbox that the user inputs in here'
var query = '?q='
var apikeyidentity = 'api-keys='

//var url = urlbase + query + keyword + apikeyidentity + apikey; 

var url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=scary&api-key=XHsykWMFyo70kbW0cZKAMHAzJX7Ax4ls'



function setup() {
  noCanvas();
  loadJSON(url, getData);
}

function getData(data) {
  var critics = data.response.docs;
for (var i = 0; i < critics.length; i++) {
  createElement('h1', critics[i].headline.main);
  createP(critics[i].snippet);
  createP(critics[i].lead_paragraph);
  createP(critics[i].web_url);
  }
}
