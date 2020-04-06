function bookSearch() {
  // console.log('this function runs')
  var search = document.getElementById("search").value
     document.getElementById("results").innerIHTML = "" 
  
  if(search == '')   {
   alert("please enter something in the field first");
  }else
  {
 
  //console.log(search)
  
  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType:  "json",
    success: function(data) {
      //console.log(data)
      
      for(i=0; i<data.items.length; i++) {
        results.innerHTML = `
        <h5 class="center-align black-text">BOOK TITLE: <i>${data.items[i].volumeInfo.title}</i> </h5> 
        <h5 class="center-align black-text">BOOK AUTHOR: <i> ${data.items[i].volumeInfo.authors}</i> </h5> <br>
        <img  id="dynamic" src = "${data.items[i].volumeInfo.imageLinks.thumbnail}"/><br>
        <div class="row">
        <button type="button" id="left" class=" col s6 waves-effect waves-light btn" onClick="window.location.href=window.location.href" id="refresh">Refresh</button> <a href = "${data.items[i].volumeInfo.infoLink}" target="_blank">
        
        <button type="button" id="right" class=" col s6 waves-effect waves-light btn">Read More </button></a>
     </div>
     `
     }
 
    },
    type: 'GET'
  });
 } 
 }
 document.getElementById('button').addEventListener("click", bookSearch, false )