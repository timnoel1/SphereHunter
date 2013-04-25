#pragma strict
@script RequireComponent(AudioSource) 
 
var controller : GameObject;
var style : GUIStyle;
var time : int = 0;
var color : GameObject; 

function Start () {
	controller = GameObject.Find("First Person Controller");
	color = GameObject.Find("green");
}

function Update () {

}

function OnTriggerEnter () {
	ScoreUI.score++;
	time = Time.timeSinceLevelLoad;
	yield WaitForSeconds(.25);
	color.transform.Translate(0, -1000, 0);
}

function OnGUI(){
	if(time!=0 && Time.timeSinceLevelLoad < time + 5  && Time.timeScale == 1){ 
		GUI.Label(Rect(10, 100, 50, 100), "Nature Sphere Collected", style);
		GUI.Label(Rect(10, 120, 50, 100), "Emerald Rock Appeared", style);
	}
	if(Time.timeScale < 1 && time !=0){
		GUI.Label(Rect(10, 220, 50, 100), "Nature Sphere Collected", style);
	}
}