#pragma strict

var style : GUIStyle;

function Start () {

}

function Update () {
	if(Input.GetKeyDown("space"))
		Application.LoadLevel("peach beach");
	if(Input.GetKeyDown("escape"))
		Application.Quit();
	Screen.lockCursor = true;
}

function OnGUI(){
	GUI.Label(Rect(Screen.width / 2, 0, 50, 100), "SHPERE HUNTER", style);
	GUI.Label(Rect(Screen.width / 2, 40, 50, 100), "Created by: Tim Noel", style);
	GUI.Label(Rect(Screen.width / 2, Screen.height - 80, 50, 100), "Press [SPACE BAR] to begin", style);
	GUI.Label(Rect(Screen.width / 2, Screen.height - 40, 50, 100), "Press [ESC] to quit", style);
}