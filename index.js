// let count = 0;
let query = document.getElementById('number');
let count = 0;
function increase(){
   count+=1;
   query.innerText = count
}
function decrease(){
    count-=1
   query.innerText = count
}
