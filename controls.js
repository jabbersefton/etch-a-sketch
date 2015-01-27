/* Javascript/jquery controls for  etch a sketch project */
$container = $('<div id="container"></div>');
$(document).ready(function(){
    $("body").prepend($container);
    $box = '<div class="box"></div>';
    $("#container").prepend($box);
});
	
