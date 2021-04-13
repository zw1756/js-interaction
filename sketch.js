let theWords ="";
let inputField;
let button;
let img;

let textfortune="";

let str = [];

function preload() {
   img = loadImage("1.jpg");
}


function setup() {
     
	createCanvas(windowWidth, windowHeight);
	background(255);
	imageMode(CENTER);
	rectMode(CENTER);

	inputField = createInput('');
	inputField.input(whenIType);
	inputField.style('font-size','20px')
	//inputField.style('font-family','Times','serif');
	inputField.size(200,40);
	inputField.position(width/2,height/2);

	button = createButton('Start');
	button.size(160,30);
	button.position(width/2 + 20, height/2+100);
	button.mousePressed(btnClick); 
	//使用push方法添加预定义的运势
	str.push("You will win 1 car");
	str.push("You will win 2 car");
	str.push("You will win 3 car");
	str.push("You will win 4 car");
	str.push("You will win 5 car");
}


function draw() {
	translate(width/2,height/2);
	
	image(img,0,0);
	translate(-width/2,-height/2);
	textSize(80);
	fill(0);
	text("Welcome to the Fortune Teller!",400,100);
	textSize(50);
	fill(100);
	text("Tell me your name and you will be",500,300);
	text("given a fortune...",500,400);
	
	fill(0,0,255);
	text(textfortune,100,800);
}

//按钮点击
function btnClick() {
	textfortune = theWords +","+random(str);
}

//获取输入的内容
function whenIType(){
  theWords = inputField.value();//
  print(theWords);
 
}






