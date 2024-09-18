let cardcontainer=document.getElementById("cardcontainer")
let cardskod=''
let favoritesdiv=document.getElementById("favoritesdiv")
let favoritekod=''
let favoritesarr=[]
data.forEach(item=>{
    cardskod+=`
    <div   class="w-72 border-4 border-amber-200 bg-white cursor-pointer hover:scale-105 transition-all">
            <div class="relative">
                <img class="h-48 w-full object-cover" src="${item.img}" alt="">
                <i id="heartplus${item.id}" onclick="heart(${item.id})" class="fa-solid fa-heart-circle-plus  text-3xl absolute top-0 right-0 text-white "></i>
                <i id="heartcheck${item.id}" onclick="heart(${item.id})" class="fa-solid fa-heart-circle-check text-3xl absolute top-0 right-0 text-red-600 hidden"></i>
            </div>
            <h6 class="p-3 font-mono text-xl"><b>${item.name}</b></h6>
            <p class="px-2 pb-3">${item.desc}</p>
    </div>
    `
})
cardcontainer.innerHTML+=cardskod

function openfavlist(){
    favoritesdiv.classList.toggle("hidden")
    
}

function heart(index){
    favoritekod=''
    favoritesdiv.innerHTML=`<div class="flex justify-between my-2"><h6>Your favorite animals</h6><button onclick="openfavlist()" class="border-2 px-3"><i class="fa-solid fa-xmark"></i></button></div>`
    let heartplus=document.getElementById(`heartplus${index}`)
    let heartcheck=document.getElementById(`heartcheck${index}`)
    heartplus.classList.toggle('hidden')
    heartcheck.classList.toggle('hidden')
    const isnothidden = !heartcheck.classList.contains('hidden')
    data.forEach(item=>{
        if(item.id==index){
            if(isnothidden){
                if(!favoritesarr.includes(item)){
                    favoritesarr.push(item)
                }
            }
            else{
                favoritesarr= favoritesarr.filter(favorite=>favorite.id != item.id)
            }            
        }
    })
    favoritesarr.forEach(item=>{
        favoritekod+=`
            <div class="flex justify-between w-11/12 my-1 mx-auto h-20 " >
                <img class="h-18 w-20 object-cover"  src="${item.img}" alt="">
                <p class="px-5 text-left">${item.name}</p>
            </div>
            `
    })
    favoritesdiv.innerHTML+=favoritekod
    console.log(favoritesarr)
}


