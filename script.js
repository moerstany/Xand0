let pole = document.querySelector(".pole");
let hod=0;
let mas=[];


for (let i=0;i<9;i++){
    let cell=document.createElement('div');
    cell.classList="cell";
    pole.appendChild(cell);
    mas.push(cell);
   
    cell.addEventListener("click",()=>{ 
        hod++;
        if(hod % 2 === 0){
            cell.innerHTML='0'}
        else {cell.innerHTML='X'}
    win();
    })
         


function win(){
if(mas[0].innerHTML===cell.innerHTML && mas[1].innerHTML===cell.innerHTML && mas[2].innerHTML===cell.innerHTML) {alert("Победили "+cell.innerHTML)};
if(mas[3].innerHTML===cell.innerHTML && mas[4].innerHTML===cell.innerHTML && mas[5].innerHTML===cell.innerHTML)  {alert("Победили "+cell.innerHTML)};
if(mas[6].innerHTML===cell.innerHTML && mas[7].innerHTML===cell.innerHTML && mas[8].innerHTML===cell.innerHTML)  {alert("Победили "+cell.innerHTML)};

if(mas[0].innerHTML===cell.innerHTML && mas[3].innerHTML===cell.innerHTML && mas[6].innerHTML===cell.innerHTML)  {alert("Победили "+cell.innerHTML)};
if(mas[1].innerHTML===cell.innerHTML && mas[4].innerHTML===cell.innerHTML && mas[7].innerHTML===cell.innerHTML)  {alert("Победили "+cell.innerHTML)};
if(mas[2].innerHTML===cell.innerHTML && mas[5].innerHTML===cell.innerHTML && mas[8].innerHTML===cell.innerHTML)  {alert("Победили "+cell.innerHTML)};

if(mas[0].innerHTML===cell.innerHTML && mas[4].innerHTML===cell.innerHTML && mas[8].innerHTML===cell.innerHTML)  {alert("Победили "+cell.innerHTML)};
if(mas[2].innerHTML===cell.innerHTML && mas[4].innerHTML===cell.innerHTML && mas[6].innerHTML===cell.innerHTML)  {alert("Победили "+cell.innerHTML)};
}
}