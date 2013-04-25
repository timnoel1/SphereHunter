#pragma strict
@script RequireComponent(AudioSource) 
 
var controller : GameObject;
var style : GUIStyle;
var time : int = 0;
var color : GameObject; 
var voidPad : GameObject;
var flag : boolean = false;
var ability : boolean = false;

function Start () {
	controller = GameObject.Find("First Person Controller");
	color = GameObject.Find("black");
}

function Update () {

}

function OnTriggerEnter () {
	ability = true;
	ScoreUI.score++;
	time = Time.timeSinceLevelLoad;
	yield WaitForSeconds(.25);
	color.transform.Translate(0, -1000, 0);
}

function OnGUI(){
	if(time!=0 && Time.timeSinceLevelLoad < time + 5 && Time.timeScale == 1){ 
		GUI.Label(Rect(10, 100, 50, 100), "Void Sphere Collected", style);
		GUI.Label(Rect(10, 120, 50, 100), "Press [t] To Teleport To The Void Pad", style);
	}
	if(Time.timeScale < 1 && time !=0){
		GUI.Label(Rect(10, 260, 50, 100), "Void Sphere Collected - Press [t] To Teleport To The Void Pad", style);
	}
}