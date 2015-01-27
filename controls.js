/* Javascript/jquery controls for  etch a sketch project */
$container = $('<div id="container"></div>');
$(document).ready(function(){
    $("body").prepend($container)
    
    $gridRow ='<div class="gridRow"></div>'; 	
	for(  i = 0; i < 4; i++){
        $("#container").prepend($gridRow);       
    
}
$box = '<div class="box"></div>';
for( i = 0; i < 4; i++){
        $(".gridRow").prepend($box);
        
    
}
	
	
		
		
	   
    
    
});
	
