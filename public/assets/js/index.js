$(document).ready(function(){
  $(".devour-form").on("submit", function(event) {
    
    event.preventDefault();
    var id = $(this).children(".burger_id").val();
    console.log(id);
    $.ajax({
        method: "PUT",
        url: "/api/burger/" + id
    }).then(()=> {
        location.reload()
    })
  });
});
