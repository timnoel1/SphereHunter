#pragma strict

var flag : boolean = false;
var style : GUIStyle;

function Start () {

}

function Update () {

}

function OnTriggerEnter () {
	flag = true;
}

function OnTriggerExit () {
	flag = false;
}

function OnGUI(){
	if(flag){ 
		GUI.Label(Rect(10, 100, 50, 100), "Collect Nature Sphere", style);
		GUI.Label(Rect(10, 120, 50, 100), "To Summon The Emerald Rock", style);
	}
}