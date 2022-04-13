const container = document.querySelector('.container');

const square = document.createElement('div');
square.classList.add('square');
square.style.borderStyle = 'solid';
square.style.gap = '5px';



square.style.maxHeight = '63px';
square.style.maxWidth = '63px';
square.style.display = 'flex';
square.style.justifyContent = 'center';
square.style.alignItems = 'center';


let y = 1;
let x = 1;

for(let i = 1; i < 257; i++)
{

square.setAttribute('id', i + '')
square.style.gridArea = y + ' / ' + x + ' / span 1';
container.appendChild(square.cloneNode(true))
x++;

if(i % 16 == 0 && i !=0)
{
    x = 1;
    y++;
}

}

const etchSketch = document.querySelectorAll('.square');
etchSketch.forEach(function(etch){

    etch.addEventListener('mouseenter', () =>{
        document.getElementById(etch.id + '').style.backgroundColor = 'red';
    });
});