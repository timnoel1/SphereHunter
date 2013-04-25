#pragma strict
@script RequireComponent(AudioSource) 
 
var controller : GameObject;
var style : GUIStyle;
var time : int = 0;
var color : GameObject; 

function Start () {
	controller = GameObject.Find("First Person Controller");
	color = GameObject.Find("yellow");
}

function Update () {

}

function OnTriggerEnter () {
	ScoreUI.score++;
	time = Time.timeSinceLevelLoad;
	controller.GetComponent(CharacterMotor).jumping.baseHeight += 2;
	yield WaitForSeconds(.25);
	color.transform.Translate(0, -1000, 0);
}

function OnGUI(){
	if(time!=0 && Time.timeSinceLevelLoad < time + 5 && Time.timeScale == 1){ 
		GUI.Label(Rect(10, 100, 50, 100), "Solar Sphere Collected", style);
		GUI.Label(Rect(10, 120, 50, 100), "Jump Height Increased!", style);
	}
	if(Time.timeScale < 1 && time !=0){
		GUI.Label(Rect(10, 140, 50, 100), "Solar Sphere Collected", style);
	}
}