fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=scary&api-key=XHsykWMFyo70kbW0cZKAMHAzJX7Ax4ls')
.then(response => {
  return repsonse.json()
})
.then( data => {
  console.log(data.response.docs[1].headline)
  console.log(data.response.docs[1].short_summary)
})
.catch(err => {

})
