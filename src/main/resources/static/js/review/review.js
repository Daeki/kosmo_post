

const review_list = document.getElementById("review_list");
const review_contents = document.getElementById("review_contents")
const review_add = document.getElementById("review_add")

const product_num = review_list.getAttribute("data-product-num");
getList(product_num);

//삭제
review_list.addEventListener("click", (e)=>{
    if(e.target.classList.contains("review_delete")){
        let n = e.target.parentElement.getAttribute("data-review-num");
        let p = new URLSearchParams();
        p.append("reviewNum", n)

        fetch("/review/delete", {
            method:"POST",
            body:p
        })
        .then(r=>r.text())
        .then(r=>{
            r=r.trim();
            if(r>0){
                alert('삭제 성공')
                getList(product_num)
            }else {
                alert('삭제 실패')
            }
        })
    }
})


//추가
review_add.addEventListener("click", ()=>{
    let p = new FormData();
    p.append("reviewContents", review_contents.value)
    p.append("productNum", product_num);
    p.append("reviewStar", 4);

    fetch("../review/create", {
        method:"POST",
        body:p
    })
    .then(r=>r.text())
    .then(r=>{
        r=r.trim();
        if(r>0){
            alert("등록 성공")
            getList(product_num);
        }else {
            alert("등록 실패")
        }

        review_contents.value=""
        review_contents.innerText=""
    })
})

function getList(num){
    
    fetch(`/review/list?productNum=${num}`)
    .then(r=>r.text())
    .then(r=>{
        r=r.trim();
        review_list.innerHTML=r;
    })

}