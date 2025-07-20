let turn='O';
let total_turn=0;
let winner=[[0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]];
let arr=new Array(9).fill('E');

function check_winner()
{
    for(let [i,j,k] of winner)
    {
        if(arr[i]!='E'&&arr[i]===arr[j]&&arr[j]===arr[k])
            return 1;
    }
    return 0;
}
const printer = (event)=>{
    const action=(event.target);
    if(arr[action.id]==='E')
    {
        total_turn++;
        if(turn==='O')
        {
            action.innerHTML='O';
            arr[action.id]='O';
            if(check_winner())
            {
                document.getElementById('winningmessage').innerHTML='Winner is O';
                cells.removeEventListener('click',printer);
            
            }
            turn='X';
        }
        else
        {
            action.innerHTML='X';
            arr[action.id]='X';
            if(check_winner())
            {
                document.getElementById('winningmessage').innerHTML='Winner is X';
                cells.removeEventListener('click',printer);
                return;
            }
            turn='O';
        }
        if(total_turn==9)
        {
            document.getElementById('winningmessage').innerHTML='Match is Draw';
            cells.removeEventListener('click',printer);
            return;
        }
}
}
const cells=document.querySelector('.box');
cells.addEventListener('click',printer);

const restart=document.getElementById("rstart");
restart.addEventListener("click",(event)=>{
    const cell=document.getElementsByClassName("boxes");
    Array.from(cell).forEach((values)=>{
        values.innerHTML="";
        turn='O';
        total_turn=0;
        arr=Array(9).fill("E");
        document.getElementById('winningmessage').innerHTML='';
        cells.addEventListener('click',printer);
    })
})