let apiKey="a2452760"
let input=document.querySelector("#Search-Movie")
let Searchbtn=document.querySelector("#inputBtn")
let movieDiv=document.querySelector("#movies")
let errorDiv=document.querySelector(".error-div")
let body=document.querySelector("body")
let pageno=document.querySelector(".pages")
let loader=document.querySelector(".loader")
let namevari=""
let cutting=""
let api=` http://www.omdbapi.com/?i=tt3896198&apikey=a2452760` 
function mappingBtn(){
    pageno.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON"){
    const buttons =pageno.querySelectorAll("button")
    buttons.forEach(btn=>btn.style.backgroundColor="")
        e.target.style.backgroundColor="red"
      let pgno= (e.target.dataset.id)
        fetchMovie(pgno)
    }
    
    })
    }
     mappingBtn()
async function  fetchMovie(pgno){
    pgno == pgno || 1
    
      let result = await fetch(`http://www.omdbapi.com/?avenger=tt3896198&apikey=a2452760&s="${input.value}"&page=${pgno}`)

          let mainResult=await result.json()
        //   console.log(mainResult);
          
      console.log(mainResult);
      pagining(mainResult,Number(pgno))
    display(mainResult)  
}
function showloader(){
    loader.style.display="flex"
}
input.addEventListener("keydown",function (e){
if(e.key==='Enter'){
showloader()
    fetchMovie()

}
})
Searchbtn.addEventListener("click",()=>{
showloader()
    fetchMovie()
})
// console.log("hey");

function display(vari){
    
    let clutter2=""

let result= vari.Search

if(vari.Response=="True"){
loader.style.display="none"
    for (const values in result) {
        console.log(values);
    

            
    
    
    
    
    clutter2+=`<div class="m1">
                <div class="mp">
                    <img id="mp1" src="${vari.Search[values].Poster}" alt="">
                    <p id ="nameT">Name: ${vari.Search[values].Title}</p>
                    <p>Type:${vari.Search[values].Type}  </p>
                    <p>Year: ${vari.Search[values].Year}</p>
                </div>
                
            </div>`
    
    }
}
if(vari.Response=="False"){
loader.style.display="none"
    clutter2=`<div class="error-div">
      <h3>Write the proper Name of the Movie</h3>
      <img src="https://www.clasificacionde.org/wp-content/uploads/2018/05/tipos-de-error-2.png" alt="">
    </div>`
    console.log("wrong input");
}



movieDiv.innerHTML=clutter2


}
function pagining(vari,activePage){
let length=(Math.ceil(vari.totalResults / 10))
console.log(length);
let pagecount=""

for (let i=1;i<=length;i++){
 if(i===activePage){

    pagecount += `<button data-id="${i}" style="background-color: red;">${i}</button>`;
            }
 else{
    pagecount+=`<button  data-id=${i}> ${i} </button>`
 
 }
    
}
pageno.innerHTML=pagecount


}
