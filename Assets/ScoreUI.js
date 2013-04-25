#pragma strict

static var score : int = 0;
static var time : int = 0;
static var flag : boolean = true;

var style : GUIStyle;
var style2 : GUIStyle;

function Start(){
    //style.normal.textColor = Color.black;
    //style.fontSize = 48;
	//style.font = 
}

function Update () {
	if(score > 7 && flag){ Time.timeScale = .00001; time = Time.timeSinceLevelLoad; flag = false;}
}

function OnGUI(){
	GUI.Label(Rect(10, 10, 50, 100), score + " / 8", style);
	if(score > 7){ 
		GUI.Label(Rect(Screen.width / 2 - 100, 70, 50, 100), "Level Complete!", style2);
		GUI.Label(Rect(Screen.width / 2 - 100, 100, 50, 100), "Time: " + time + " seconds", style2);
		GUI.Label(Rect(Screen.width / 2 - 100, 130, 50, 100), "Press [esc] to continue", style2);
	}
}