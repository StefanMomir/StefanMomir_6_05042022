/* **  Get ID From URL  ** */
function getId(){
    const parsedUrl = new URL(window.location.href);
    const urlId = parsedUrl.searchParams.get("id");
    return urlId;
}

/* ** Get DATA From JSON File ** */
async function getData(){
    let fechResult = await fetch("data/photographers.json");
    return await fechResult.json();
}