/* Javascript/jquery controls for  etch a sketch project */
$container = $('<div id="container"></div>');
$(document).ready(function(){
    $("body").prepend($container)
    $square = '<div class="square"></div>';
    $gridRow ='<div class="gridRow"></div>'; 	
	for(  i = 0; i < 16; i++){
        $("#container").prepend($gridRow);    
	}
    // created a row then added divs to row then repeated row
    for( j = 0; j < 16; j++){
        $(".gridRow").prepend($square);
        var squareSize = ($container.width() / 16) - 6; // minus 6 due to margin of 2px and 1px border.  
        $(".square").width(squareSize).height(squareSize);
     }
     
   $( ".square" ).hover(function() {
	 var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	 $( this ).css({ "background-color": col });
  
});
        
});
	

