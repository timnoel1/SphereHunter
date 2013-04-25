#pragma strict
 
var controller : GameObject;

function Start () {
	controller = GameObject.Find("First Person Controller");
}

function Update () {

}

function OnTriggerEnter () {
	ScoreUI.score++;
	//controller.GetComponent(CharacterMotor).movement.maxForwardSpeed += 5;
}