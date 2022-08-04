const element1 = document.getElementById("btn-1");
function fun1(){

    document.getElementById("txtbox1").style.display = "block";
    document.getElementById("txtbox2").style.display = "none"; 
    document.getElementById("txtbox3").style.display = "none";
    document.getElementById("btn-1").className = "aqua active";
    console.log("txt1");
    document.getElementById("btn-2").className = "btn";
    document.getElementById("btn-3").className = "btn";
 
}
function fun2(){
    console.log("txt2");
    document.getElementById("txtbox1").style.display = "none";
    document.getElementById("txtbox2").style.display = "block"; 
    document.getElementById("txtbox3").style.display = "none";
    document.getElementById("btn-2").className="orange active";
    document.getElementById("btn-1").className = "btn";
    document.getElementById("btn-3").className = "btn";
}
function fun3(){
    console.log("txt3");
    document.getElementById("txtbox1").style.display = "none";
    document.getElementById("txtbox2").style.display = "none"; 
    document.getElementById("txtbox3").style.display = "block ";
    document.getElementById("btn-3").className="greenyellow active";
    document.getElementById("btn-1").className = "btn";
    document.getElementById("btn-2").className = "btn";
}