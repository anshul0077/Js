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
async function  fetchMovie(){
      let result = await fetch(`http://www.omdbapi.com/?avenger=tt3896198&apikey=a2452760&s="${input.value}"&page=`)

          let mainResult=await result.json()
        //   console.log(mainResult);
          
      console.log(mainResult);
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