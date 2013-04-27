#pragma strict

static var score : int = 0;
static var time : int = 0;
static var flag : boolean = true;

var style : GUIStyle;
var style2 : GUIStyle;
var style3 : GUIStyle;

function Start(){
    //style.normal.textColor = Color.black;
    //style.fontSize = 48;
	//style.font = 
	Time.timeScale = .000001;
}

function Update () {
	if(score > 7 && flag){
		Time.timeScale = .00001; 
		time = Time.timeSinceLevelLoad; 
		flag = false;
	}
	if(score > 7 && Input.GetKeyDown("escape")){
		Application.Quit();
	}
}

function OnGUI(){
	GUI.Label(Rect(10, 10, 50, 100), score + " / 8", style);
	if(score > 7){ 
		GUI.Label(Rect(Screen.width / 2 - 100, 70, 50, 100), "Level Complete!", style2);
		GUI.Label(Rect(Screen.width / 2 - 100, 100, 50, 100), "Time: " + time + " seconds", style2);
		GUI.Label(Rect(Screen.width / 2 - 100, 130, 50, 100), "Press [esc] to quit game", style2);
	}
	if(Time.timeSinceLevelLoad < .1 && Time.timeScale < 1){
		GUI.Label(Rect(Screen.width / 2, 100, 50, 100), "Welcome to SHPERE HUNT", style3);
		
		GUI.Label(Rect(Screen.width / 2 - 250, 150, 50, 100), "Objective:", style3);
		GUI.Label(Rect(Screen.width / 2, 180, 50, 100), "Collect 8 SPHERES", style3);
		GUI.Label(Rect(Screen.width / 2, 210, 50, 100), "Each SPHERE gives the player a unique ability", style3);
		GUI.Label(Rect(Screen.width / 2, 240, 50, 100), "Try for your best time!", style3);
		
		GUI.Label(Rect(Screen.width / 2 - 250, 290, 50, 100), "Controls:", style3);
		GUI.Label(Rect(Screen.width / 2, 320, 50, 100), "Use WASD or the ARROW KEYS to move", style3);
		GUI.Label(Rect(Screen.width / 2, 350, 50, 100), "Move the MOUSE to look around", style3);
		GUI.Label(Rect(Screen.width / 2, 380, 50, 100), "Use the [SPACE BAR] to jump", style3);
		GUI.Label(Rect(Screen.width / 2, 410, 50, 100), "Press [ESC] to pause the game / view progress", style3);
		
		GUI.Label(Rect(Screen.width / 2, 460, 50, 100), "Press [ESC] to continue", style3);
	}
}