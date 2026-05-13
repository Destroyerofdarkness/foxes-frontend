//Browseren venter på en click på siden
document.addEventListener("click", async(e)=>{
    //Hvis det er en klikket er på en element med klasse vote skal koden videre kjøre
    if(e.target.classList.contains("vote")){
        e.preventDefault();// Stopper reload av pagen

        //ID som brukes for å identifisere reven
        const id = e.target.dataset.id

        //Sender førespørsel til Frontend serveren 
        const res = await fetch("/stem",{
            method: "PUT",
            body:JSON.stringify({id}),
            headers: {"Content-Type": "application/json"}
        })

        //Venter på svar fra serveren
        const data = await res.json();

        if(data.success){
            window.alert("Takk for at du stemte på reven"); //Tilbakemelding til brukeren
            window.location.href = "/statistikk" //Brukeren sendes til siden hvor statistikk står
        }else{
            window.alert("Ikke mulig å stemme på reven") // Hvis det er en error skal det komme tilbakemelding
        }
    }
})