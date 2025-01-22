//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', 
function(){
	var blockId = document.getElementById('block_id').value;
	var color = document.getElementById('color_id').value;

	var blocks = document.getElementsByClassName('grid-item');
	for(var i = 0; i<blocks.length; i++){
		blocks[i].style.backgroundColor = 'transparent';
	}
	document.getElementById(blockId).style.backgroundColor = color;
});

document.getElementById('Reset').addEventListener('click', funtion(){
	var blocks = document.getElementByClassName('grid-item');
	for(let i = 0; i < blocks.length; i++){
		blocks[i].style.backgroundColor = 'transparent';
	}
});