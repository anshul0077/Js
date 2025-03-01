let searchBtn = document.querySelector("#ss")
let input=document.querySelector("#user-name").value
async function fetchData(){
    let result = await fetch("https://api.github.com/users/ayushsnha")
    let mainResult=await result.json()
console.log(mainResult);

    
    console.log(mainResult.name);
    console.log(mainResult.bio);
    console.log(mainResult.followers);
    console.log(mainResult.following);
    console.log(mainResult.public_repos);




}
fetchData()
// searchBtn.addEventListener('click', ()=>{
//     fetchData()
// })
