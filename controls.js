/* Javascript/jquery controls for  etch a sketch project */
$container = $('<div id="container"></div>');
x =16;


$(document).ready(function(){
    $("body").prepend($container)
    clearButton ='<button id="clearBut" type="button">Clear Grid!</button>';
    $("#container").prepend(clearButton)
    
    
    //Grid creation function
     function makeGrid(){
			square = '<div class="square"></div>';
			gridRow ='<div class="gridRow"></div>';
		 
			for(  i = 0; i < x; i++){
			$("#container").append(gridRow);    
			}
			// created a row then added divs to row then repeated row
			for( j = 0; j < x; j++){
			$(".gridRow").append(square);
			var squareSize = ($container.width() / x) - 6; // minus 6 due to margin of 2px and 1px border.  
			$(".square").width(squareSize).height(squareSize);
			}
			$( ".square" ).hover(function() {
			var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$( this ).css({ "background-color": col });
  
			});
			
			
		 
	}
	
	
	//function passes once to prevent empty page load
	makeGrid(x)	 	
	
     
   
//removes grid and prompts for new size

	$("#clearBut").click(function(){
		$( ".gridRow" ).remove();
		x = prompt('Enter a new grid size');
		makeGrid(x);
	});
        
});
	

