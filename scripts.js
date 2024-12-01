$("#btn").click(function(){

   $.getJSON("https://dog.ceo/api/breeds/image/random")
    .done(function(data){        
     $("#image").attr("src", data.message)         
    })
   // .fail(function(){
   //     alert("error");
});
//});
