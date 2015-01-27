/* Javascript/jquery controls for  etch a sketch project */
$container = $('<div id="container"></div>');
$(document).ready(function(){
    $("body").prepend($container)   
        
});
	
$(document).ready(function(){   
 $gridRow ='<div class="gridRow"></div>'; 	
	for(  i = 0; i < 16; i++){
        $("#container").prepend($gridRow);       
    
}
$box = '<div class="box"></div>';
for( i = 0; i < 16; i++){
        $(".gridRow").prepend($box);        
    
}	   
});
