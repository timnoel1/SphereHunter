#pragma strict

var myLight : GameObject;
var controller : GameObject;
var flag : boolean = false;
var here : boolean = false;

function Start () {
	controller = GameObject.Find("First Person Controller");
	myLight = GameObject.Find("Light");
}

function Update () {
	if (Input.GetKeyDown("l"))
		flag = true;
    if (Input.GetKeyUp("l") && flag){
    	here = !here;
		flag = false;
	}
	if(here){
		myLight.transform.position = controller.transform.position;
	}
	if(!here){
		myLight.transform.position = Vector3(0, -1000000, 0);
	}
}