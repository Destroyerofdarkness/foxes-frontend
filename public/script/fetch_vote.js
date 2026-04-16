
document.addEventListener("click", async(e)=>{
    if(e.target.classList.contains("vote")){
        e.preventDefault();
        const id = e.target.dataset.id
        const res = await fetch("/stem",{
            method: "PUT",
            body:JSON.stringify({id}),
            headers: {"Content-Type": "application/json"}
        })

        const data = await res.json();

        if(data.success){
            window.alert("Takk for at du stemte på reven");
            window.location.href = "/statistikk"
        }else{
            window.alert("Ikke mulig å stemme på reven")
        }
    }
})