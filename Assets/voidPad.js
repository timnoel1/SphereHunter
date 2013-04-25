#pragma strict

var controller : GameObject;
var voidPad : GameObject;
var flag : boolean = false;


function Start () {
	controller = GameObject.Find("First Person Controller");
	voidPad = GameObject.Find("voidPad");
}

function Update () {
	if (Input.GetKeyDown("t"))
		flag = true;
    if (Input.GetKeyUp("t") && flag){
		controller.transform.position = Vector3(voidPad.transform.position.x, voidPad.transform.position.y + 2, voidPad.transform.position.z);
		flag = false;
	}
}