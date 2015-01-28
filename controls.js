/* Javascript/jquery controls for  etch a sketch project */
$container = $('<div id="container"></div>');
$(document).ready(function(){
    $("body").prepend($container)
    $square = '<div class="square"></div>';
    $gridRow ='<div class="gridRow"></div>'; 	
	for(  i = 0; i < 16; i++){
        $("#container").prepend($gridRow);       
    
	}
    
    for( i = 0; i < 16; i++){
        $(".gridRow").prepend($square);
        var squareSize = ($container.width() / 16) - 6;
        $(".square").width(squareSize).height(squareSize);
     }
     
   $( ".square" ).hover(function() {
  $( this ).css({ "background-color": "blue" });
  
});
        
});
	

