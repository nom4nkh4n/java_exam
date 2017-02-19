$(document).ready(function() {
    

 $("#pass").keyup(function(){
  var pass=$("#pass").val();
  if(pass.length<6){$("#result").text("your pass weak");
  $("#result").addClass(".red");

}
else{
  $("#pass").removeClass(".red");
  $("#result").text("Your password is strong");
}
 });
 $(".btn-warning").click(function(){
   $("#pass").val("");
  $("#name").val("");

 });
 $('.btn').click(function () {
            var pass = $("#pass").val();
            var name = $("#name").val();
            if (pass.length ==0 && name.length ==0){
                alert("please fillup the form");
                
            }
            
            else{
                window.location.href = 'subpage.html';
            }
        });

 $("#txtarea").keyup(function(){
        var totalLength = $("#txtarea").val();
        var remain = 160-totalLength.length;
        $(".result").text("You are typing "+totalLength.length+" letters");
        $(".remain").text("You have remained " + remain + " letters");
        
        if(remain<0){
            $(".remain").text("You have crossed " + remain + " letters");
            $(".remain").addClass("lal");
        }
        
        else{
            
            $(".remain").removeClass("lal");
        }
    });
    
    
    
  $("#txtarea").keyup(function(){
    var count= $("#txtarea").val();
    $("#counter").text(count.length);

  });
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
  $( function() {
    $( "#tabs" ).tabs();
  } );

      $('.work-ul li').click(function(){
        $(".work-ul li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".portfolio-items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1000,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});




