function toggleDetails(zoneID){

    let zone = document.getElementById(zoneID);

    if(zone.style.display === "block"){
        zone.style.display = "none";
    }else{
        zone.style.display = "block";
    }

}



function deleteTag(zoneID){

    let tag = document.getElementById("tag-" + zoneID);
    tag.innerText = "No Tag Available";
    tag.style.background = "gray";

}



function updateTag(zoneID, value){

    let tag = document.getElementById("tag-" + zoneID);

    if(value !== ""){
        tag.innerText = value;

        if(value === "Busy"){
            tag.style.background = "red";
        }
        else if(value === "Steady"){
            tag.style.background = "orange";
        }
        else{
            tag.style.background = "green";
        }
    }

}



document.querySelectorAll("select").forEach(select => {

    select.addEventListener("change", function(){

        let zoneID = this.id.split("-")[1];
        updateTag(zoneID, this.value);

    });

});