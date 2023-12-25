var face_colors = "e6ccb2-ddb892-b08968-7f5539-8e5e3f-9c6644".split("-").map(a=>"#"+a)
var eye_colors= "3f454c-343a40-2b3035-262b2f-24282c-212529".split("-").map(a=>"#"+a)
var pos_x=[]
var pos_y=[]
var sizes=[]
var colors=[]
var v_y=[] //移動速度
var v_x=[]
var sound1 
function preload(){
  sound1 = loadSound("412731043.mp3")
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  background("#f1faee");
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
 //文字框設定
 inputElement = createInput ("412731043 蔡涵霈") //產生一個文字方塊，""內的文字為預設顯示的文字
 inputElement.position(10,10)  //文字方塊放到(10,10)
 inputElement.size(170,20)  //文字框的寬與高
 //以下的style,可以gogle搜尋html imput css找到相關資料
 inputElement.style("font-size","20px")  //文字框內的文字大小
 inputElement.style("color","#212529")  //文字框內的文字顏色
 inputElement.style("background","#f5ebe0")  //文字框內的背景顏色
 inputElement.style("border","none")   //設定文字框沒有框線

 //按鈕的設定
 btnMoveElement = createButton("移動")
 btnMoveElement.position(200,10) //按鈕的位置
 btnMoveElement.size(80,40)//按鈕的寬與高
 btnMoveElement.style("font-size","20px") //按鈕內的文字大小
 btnMoveElement.style("color","#212529") //按鈕內的文字顏色
 btnMoveElement.style("background","#f5ebe0")
 inputElement.style("border","none")

 btnstopElement = createButton("暫停")
 btnstopElement.position(270,10)//按鈕的位置
 btnstopElement.size(80,40)//按鈕的寬與高
 btnstopElement.style("font-size","20px") //按鈕內的文字大小
 btnstopElement.style("color","#212529") //按鈕內的文字顏色
 btnstopElement.style("background","#f5ebe0")//按鈕背景顏色
 //btnstopElement.mousePressed(face_stop)//按鈕被按下後會執行face_stop函數
// radio選鈕的設定，多個選項，只能選一個(單選題)
 radioElement=createRadio()
 radioElement.option("暫停")
 radioElement.option("移動")
 radioElement.position(360,10)//按鈕的位置
 radioElement.size(80,50)//按鈕的寬與高
 radioElement.style("font-size","20px")//按鈕內的文字大小
 radioElement.style("color","#212529") //按鈕內的文字顏色
 radioElement.style("background","#f5ebe0")
 
}

function draw() {
  //background(windowWidth,windowHeight);
  background("#f1faee");

  for(var i=0;i<pos_x.length;i=i+1){
    push()
      translate(pos_x[i],pos_y[i])
      drawface(colors[i],0,sizes[i])
    pop()
    pos_y[i] = pos_y[i]+v_y[i]
  }
}
function drawface(face_clr=255,eye_clr=0,size=1){
  push()
      scale(size)
      fill(face_clr);
       stroke(eye_clr);
       ellipse(0,0,100,100);
       ellipse(300,0,100,100);
       fill(eye_clr);
       ellipse(10,10,65,65);
       ellipse(290,10,65,65);
       fill(face_clr);
       ellipse(150,160,400,400);
       fill(eye_clr)
       ellipse(90,150,20,30);
       ellipse(200,150,20,30);
       noStroke();
       fill("#eddea4")
       ellipse(146,200,90,110);
       fill(eye_clr);
       ellipse(140,190,40,20);
      fill("#c1121f")
      ellipse(140,240,20,20)
 pop()
}
function mousePressed(){
  pos_x.push(mouseX)
  pos_y.push(mouseY)
  sizes.push(random(0.5,1.2))
  colors.push(face_colors[int(random(face_colors.length))])
  v_y.push(random(-1,1))
  if( sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
 }

 