window.onload = function(){
  var searchBtn = document.querySelector("#lookup");
  var cityLook= document.querySelector('#lookupC');
  var httpRequest;
  var printer = document.getElementById('result');

  searchBtn.addEventListener('click', function(element){
    element.preventDefault();

    var input = document.querySelector("#country");
    var val = document.querySelector("#country").value;
    var nope = document.getElementById('country').value;
    var neg= document.getElementsByTagName('h5');

    httpRequest= new XMLHttpRequest();

    var url = "world.php?country=" + nope;
    //var url = "superheroes.php="+input.value;
    //var thin = fetch(url);
    //var som= thin.text();
    //console.log(url);
    //<!-- <ul>
    //<?php #foreach ($results as $row): ?>
      //<li><?= #$row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
    //<?php #endforeach; ?>
    //</ul> -->
    httpRequest.onreadystatechange = findIt;
    httpRequest.open('GET', url);
    httpRequest.send();
    console.log(val);
    console.log(input);
    console.log(nope);
  });



  function findIt(){
    if(httpRequest.readyState === XMLHttpRequest.DONE){
      if(httpRequest.status === 200){
        var response = httpRequest.responseText;
        //var val= JSON.parse(httpRequest.responseText);
        console.log(response);
        //alert(response); //Used to for Exercise 2
        result.innerHTML=response;
      } else{
        alert('There was a problem with the request');
      }
    }
  }
  cityLook.addEventListener('click', function(element){
    element.preventDefault();

    var input = document.querySelector("#country");
    var val = document.querySelector("#country").value;
    var nope = document.getElementById('country').value;
    var neg= document.getElementsByTagName('h5');

    httpRequest= new XMLHttpRequest();

    var url = "world.php?country=" + nope +"&context=cities";
    //var url = "superheroes.php="+input.value;
    //var thin = fetch(url);
    //var som= thin.text();
    //console.log(url);
    //<!-- <ul>
    //<?php #foreach ($results as $row): ?>
      //<li><?= #$row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
    //<?php #endforeach; ?>
    //</ul> -->
    httpRequest.onreadystatechange = findIt;
    httpRequest.open('GET', url);
    httpRequest.send();
    console.log(val);
    console.log(input);
    console.log(nope);
  });

}
