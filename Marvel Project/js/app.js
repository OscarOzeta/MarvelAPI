$(document).ready(function() {
  $("#submit_button").click(function() {
    var input = document.getElementById('character_name2').value
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://gateway.marvel.com/v1/public/characters?name=" + input + "&ts=1501784106&apikey=cb64da7063206f3c34504b6ccf1ce667&hash=40170f9aa447e957f7d40556fc37cd81",
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "3f5c2773-0572-4044-40f7-fd6a3b72d8a2"
      }
    }

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  })

  // !!!!!!!BELOW IS A WORKING GET CALL !!!!!!

  //https: //gateway.marvel.com/v1/public/characters?name=Thor&apikey=cb64da7063206f3c34504b6ccf1ce667

})
