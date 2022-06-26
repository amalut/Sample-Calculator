function clik(val)
{
    document.getElementById("screen").value+=val;
    var audio=new Audio("sound1.mp3")
    document.onclick=function()
    {
        audio.play()
    }
}
function clearScreen()
{
    document.getElementById("screen").value="";
}
function equalClick()
{
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}