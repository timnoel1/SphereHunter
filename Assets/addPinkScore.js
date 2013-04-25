#pragma strict
@script RequireComponent(AudioSource) 
 
var controller : GameObject;
var style : GUIStyle;
var time : int = 0;
var color : GameObject; 

function Start () {
	controller = GameObject.Find("First Person Controller");
	color = GameObject.Find("pink");
}

function Update () {
	if(time!=0 && Input.GetKeyUp("q"))controller.GetComponent(CharacterMotor).movement.gravity = 20;
	if(time!=0 && Input.GetKeyUp("e"))controller.GetComponent(CharacterMotor).movement.gravity = 20;
	if(time!=0 && Input.GetKeyDown("q")) controller.GetComponent(CharacterMotor).movement.gravity = 10;
	if(time!=0 && Input.GetKeyDown("e")) controller.GetComponent(CharacterMotor).movement.gravity = 40;
	
}

function OnTriggerEnter () {
	ScoreUI.score++;
	time = Time.timeSinceLevelLoad;
	yield WaitForSeconds(.25);
	color.transform.Translate(0, -1000, 0);
}

function OnGUI(){
	if(time!=0 && Time.timeSinceLevelLoad < time + 5 && Time.timeScale == 1){ 
		GUI.Label(Rect(10, 100, 50, 100), "Force Sphere Collected", style);
		GUI.Label(Rect(10, 120, 50, 100), "Hold [q] To Decrease Gravity", style);
		GUI.Label(Rect(10, 140, 50, 100), "Hold [e] To Increase Gravity", style);
	}
	if(Time.timeScale < 1 && time !=0){
		GUI.Label(Rect(10, 280, 50, 100), "Force Sphere Collected - hold [q]/[e] To Decrease/Increase Gravity", style);
	}
}