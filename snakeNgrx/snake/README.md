Note this is a learning exercise for 'NGRX' (A library for angular state mgmt) so please use the framework as it is intended.
See ngrxDiagram.png in this folder for a high level at the control flow.

Try to meet the game requirements listed below. 
TIP: Search for the word 'todo' in the project and write the missing bits of typescript.

* Make snake move around the map. Start simple - get snakes head to move right accross the screen, then get his/her body to follow.
	- Snake can not go back on itself e.g if moving right the snake cannot go immediately left.
* If snake crashes into wall then game over
* If snake crashes into his/her own body then game over.
* Generate one apple that is randomly displayed on the map
* If snake moves into apple:- 
	-a new apple is generated.
	-the score is incremented
	-snakes body increases in length by one 'cell' length.
* If you have time try to do implemennt a highest score feature.
	


