var p ;
var dii;
var inp=document.getElementById('inpt')
var pop =document.getElementById('pop').innerHTML

function add(){
    dii = document.createElement('div')
    var checkbox =document.createElement('input')
    dii.appendChild(checkbox)
    checkbox.setAttribute("type",'checkbox')

    p = document.createElement('p')
    var yy = inp.value
    var yyy = document.createTextNode(yy)
   
    p.appendChild(yyy)
    dii.appendChild(p)
    document.querySelector('#pop').appendChild(dii)

    
    checkbox.style.height="15px"
    checkbox.style.marginLeft='-45%'
    checkbox.style.marginTop="4px"

    checkbox.onclick = function(){
         p.style.textDecoration='line-through'
        console.log('123');
    }
    
    
   
    dii.style.width='55vw'
    dii.style.height='5vh'
    dii.style.marginTop='2%'
    dii.style.background='maroon'
    dii.style.marginLeft='4%'
    dii.style.borderRadius='20%'
    p.style.color='white'
    p.style.textAlign='center'
    p.style.marginTop='-2px'
    p.style.marginLeft='-150px'
    dii.style.display='flex'
    dii.style.justifyContent='space-around'



    var del=document.createElement('button')
    var delContent=document.createTextNode('delete')
    del.appendChild(delContent)
    dii.appendChild(del)
    del.style.borderRadius='30px'
    // del.style.marginTop='-60%'
    // del.style.textAlign='end'
    
    

    del.onclick= function(){
        dii.remove()
    }


//  localStorage.setItem.innerHTML('item',JSON.stringify(pop));
//  pop.innerHTML=JSON.parse(localStorage.getItem('item'))
}
// pop.innerHTML=JSON.parse(localStorage.getItem('item'))


// function wealth(){
//     localStorage.setItem.innerHTML('data',pop.innerHTML);
// }
// wealth()

// function honeyn(){
//     pop.innerHTML=localStorage.getItem('data')
// }
// honeyn()