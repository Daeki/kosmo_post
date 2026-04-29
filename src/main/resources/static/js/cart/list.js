const all = document.getElementById("all");
const ch = document.querySelectorAll(".ch")//document.getElementsByClassName("ch");
const del = document.getElementsByClassName("del");

for(let d of del){
    
    d.addEventListener("click", ()=>{
        let pn = d.previousElementSibling.getAttribute("data-pn")
        let p = new URLSearchParams();
        p.append("productNum", pn);

        fetch("./delete", {
            method:"POST",
            body:p
        })
        .then(r=>r.text())
        .then(r=>console.log(r))
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