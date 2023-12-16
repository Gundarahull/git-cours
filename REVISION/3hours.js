let li=document.getElementById("items")
let su=document.getElementById("addForm")
su.addEventListener("submit",suu)
function suu(e){
    e.preventDefault()
    var ne=document.getElementById("item1").value;
    var de=document.getElementById("item2").value;
    var dee=document.getElementById("item3").value;
    let inobj={
        amount: document.getElementById("item1").value,
        descr: document.getElementById("item2").value,
        cate: document.getElementById("item3").value,
    };
    let newi=JSON.stringify(inobj);
    localStorage.setItem(de,newi)


    let i1=document.getElementById("item1")
    let i2=document.getElementById("item2")
    let i3=document.getElementById("item3")
    let c=document.createElement("li")
    c.className="list-group-item"
    li.appendChild(c)
    c.appendChild(document.createTextNode(i1.value))
    c.appendChild(document.createTextNode(i2.value))
    c.appendChild(document.createTextNode(i3.value))
    li.appendChild(c)
    let d=document.createElement("button")
    d.className="btn btn-danger btn-sm float-right delete"
    c.appendChild(d)
    d.appendChild(document.createTextNode("delete"))
    let f=document.createElement("button")
    f.className="btn btn-danger btn-sm float-right edit"
    c.appendChild(f)
    f.appendChild(document.createTextNode("edit"))

    li.addEventListener("click",rem)
    //rmoving by using removechild and using target method
    function rem(e){
    if(e.target.classList.contains("delete")){
        localStorage.removeItem(de)
        let ru=e.target.parentElement
        li.removeChild(ru)
        
        
        
    }

    li.addEventListener("click",edi)
    function edi(e){
        if(e.target.classList.contains("edit")){
            document.getElementById("item1").value=inobj.amount
            document.getElementById("item2").value=inobj.descr
            document.getElementById("item3").value=inobj.cate
    }


}
}
}
