const containerEl= document.querySelector('.container');

for(i=0;i<30;i++)
{
   let colorContainer=document.createElement('div');

   colorContainer.classList.add("div");

   containerEl.appendChild(colorContainer)
}

generateColors();

function generateColors(){
    document.querySelectorAll('.container div').forEach((e)=>{
        const newColor=randomColor();
        e.style.backgroundColor="#"+newColor;
        e.innerHTML="#"+newColor;
    })
}

randomColor();

function randomColor(){
    const chars="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode="";

    for(let i=0;i<colorCodeLength;i++)
    {
        const randomNum=Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(randomNum,randomNum+1);
    }
    return colorCode;

}