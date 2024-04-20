

const printphoto = (picname) =>{
    document.getElementById("mypick").src=document.getElementById(picname).src; 

}

const fixphoto = (picname) =>{
    document.getElementById("mypick").src=document.getElementById(picname).src; 
}



const calculate= () =>{
  let temp = 19999 - 12999;
    let val =  temp/ 19999;
     val = val * 100;
     document.getElementById("discount").innerText = Math.floor( val ) + " % Off";
}

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

  let size = "";
  let Color = "";
  const save = () =>{
     let sizes =   document.querySelectorAll('input[name="size"]');
     for( let i = 0; i<sizes.length; i++)
     {
      
        if(sizes[i].checked)
         {
            size = sizes[i].value;
            break;
         }
     }

     let clrs = document.querySelectorAll('input[name="color"]');
     for( let i = 0; i<clrs.length; i++)
     {
       if( clrs[i].checked )
       {
       
         Color = clrs[i].value;
         break;
       }
     }

   document.getElementById("cart").innerText =   "Embrace Sideboard With Color " + Color + " And Size " + size + " Added to Cart ";
  }


 