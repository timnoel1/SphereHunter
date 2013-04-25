#pragma strict
var style : GUIStyle;
function Start () {

}

function Update () {
	if(Input.GetKeyDown("escape"))
	{
		if(Time.timeScale == 1) {
		  print("Paused");
		  Time.timeScale = 0.000001;

		}
		else {
		  print("Unpaused");
		  Time.timeScale = 1.0;
		} 
	}
}

function OnGUI(){
	if(Time.timeScale == .000001){
		GUI.Label(Rect(Screen.width/2 - 30, 50, 50, 100), "Pause", style);
	}
}