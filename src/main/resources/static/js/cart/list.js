const all = document.getElementById("all");
const ch = document.querySelectorAll(".ch")//document.getElementsByClassName("ch");
const del = document.getElementsByClassName("del");

for(d of del){
    d.addEventListener("click", ()=>{
        console.log("click")
    })
}

all.addEventListener("click", ()=>{
    ch.forEach((c)=>{
        c.checked=all.checked;
    });
})

ch.forEach(c=>{
    c.addEventListener("click", ()=>{
        let r=true;
        ch.forEach((e)=>{
            if(!e.checked){
                r=false;
            }
        })

        all.checked=r;

    })
})