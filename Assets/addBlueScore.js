#pragma strict
@script RequireComponent(AudioSource) 
 
var controller : GameObject;
var style : GUIStyle;
var time : int = 0;
var color : GameObject; 

function Start () {
	controller = GameObject.Find("First Person Controller");
	color = GameObject.Find("blue");
}

function Update () {

}

function OnTriggerEnter () {
	ScoreUI.score++;
	time = Time.timeSinceLevelLoad;
	//controller.GetComponent(CharacterMotor).movement.maxForwardSpeed += 5;
	yield WaitForSeconds(.25);
	color.transform.Translate(0, -1000, 0);
}

function OnGUI(){
	if(time!=0 && Time.timeSinceLevelLoad < time + 5 && Time.timeScale == 1){ 
		GUI.Label(Rect(10, 100, 50, 100), "Aqua Sphere Collected", style);
		GUI.Label(Rect(10, 120, 50, 100), "Water Walking Enabled!", style);
	}
	if(Time.timeScale < 1 && time !=0){
		GUI.Label(Rect(10, 160, 50, 100), "Aqua Sphere Collected", style);
	}
}