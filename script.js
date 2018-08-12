/*function f(n,m){
    
    if(m==0){
        return 1;
    } else{
        
        return n*f(n,m-1);
    }
    
}
console.log(f(3,3));*/


/*function f(n,m){
    
    var k = 1;
    for(var i=1;i<=m;i++){
        
        k = k*n
        
    }
    return k;
    
}
console.log(f(6,5));*/

   var arr = [250,1, 100, 10 , 56 , 26, 8];
for (j=0; j<arr.length; j++){
   for (i=0; i<=arr.length-1; i++){
       
        if (arr[i]>arr[i+1]){
            
            var x = arr[i+1];
            arr[i+1]=arr[i];
            arr[i]= x;
        } 
   
   }  
}   
           document.write(arr);


/*

function create(){
    
   var row = document.getElementById('row').value,
    colums =  document.getElementById('colums').value,
    tabWidth =  document.getElementById('tabWidth').value,
    tabHeight =  document.getElementById('tabHeight').value,
    border =  document.getElementById('border'),
    newTable =  document.getElementById('newTable');
    
    var table = document.createElement('table');
    
    if(border.checked){
        table.setAttribute('border','1');
    }
       
    if(isNaN(row) || isNaN(colums) || isNaN(tabWidth) || isNaN(tabHeight)){
        
        alert('Stop');
    } else{
        
        for(var i = 1;i<=row;i++){
            
            var tr = document.createElement('tr');
            
            for(var j = 1;j<=colums;j++){
                
                var td = document.createElement('td');
                
                td.style.width = tabWidth+'px';
                td.style.height = tabHeight+'px';
                td.addEventListener('mouseover',function(){
                    this.style.backgroundColor = randomColor();
                })
                
                 tr.appendChild(td);
            }
           
            table.appendChild(tr);
        }
        newTable.innerHTML = ' ';
        newTable.appendChild(table);
        
    }
       
}

function randomColor(){
    
    var R = Math.round(Math.random()*255);
    var G = Math.round(Math.random()*255);
    var B = Math.round(Math.random()*255);
    return 'rgb('+R+','+G+','+B+')';
}

console.log(randomColor());
*/


//console.log(n);

var div = document.createElement('div');
div.setAttribute('style','Width:400px;height:300px;border:1px solid');
document.body.appendChild(div);
setInterval(function(){
    var n = new Date();
    div.innerHTML = n;
    
},1000)


var img = new Image(250,150);
img.src = 'https://www.w3schools.com/w3css/img_lights.jpg';
console.log(img);
document.body.appendChild(img);
 function jan(a,b){
      	if(b<0){
      		return 1/a * 1/jan(a,-b-1)
      	}else if(b==0){
       	return 1;
       }else{
       	return a*jan(a,b-1);
       }
      }
      console.log(jan(5,-1));

