var imagesArray=["0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg"];
var i=0;

function header()
{
    if(i>=7)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../asset/images/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../asset/images/${imagesArray[i]})`
    }
    i++;
    var time=setTimeout(header,20000)
}
function right()
{
    i++;
    if(i>imagesArray.length-1)
    {
        i=0;
    document.getElementById("header").style.backgroundImage=`url(../asset/images/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../asset/images/${imagesArray[i]})`
    }

}
function left()
{
    i--;
    if(i<0)
    {
        i=imagesArray.length-1
    document.getElementById("header").style.backgroundImage=`url(../asset/images/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../asset/images/${imagesArray[i]})`
    }
}
//this is gallery code
var img=document.getElementsByClassName("images");
console.log(img)
for(i=0;i<img.length;i++)
{
   img[i].src=`../asset/images/${i}.jpeg`

}
function closeTheImage()
{
    document.getElementById("bigImage").setAttribute("style","display:none")
}
function openTheImage(img)
{
    console.log(img)
    document.getElementById("bigimg").setAttribute("src",`../asset/images/${img}.jpeg`)
    document.getElementById("bigImage").removeAttribute("style");
}