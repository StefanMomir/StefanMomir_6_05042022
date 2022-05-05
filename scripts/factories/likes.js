/* ** Return Photographer Data Likes after Fetch ** */
getData()
    .then(function(data){
        const urlId = getId();

        document.querySelector(".photograph-container");
        const phMedias = data.media.filter(media => media.photographerId == urlId);

        let likes = phMedias.map(({likes}) => likes);

        /* Sum Total Likes */
        const initialValue = 0;
        const likeSum = likes.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue);
        document.getElementById("like").innerHTML = likeSum;
    })

/* ** Likes Event Listener / Updater  ** */    
const buttons = document.querySelectorAll('#photos');
for (const button of buttons) {
    button.addEventListener('click', (e) => {

        const tagType = e.target.tagName;
        const heartId = e.target.dataset.id;

        /* Prevent Other Tags Than "I" To Add Likes */
        if(tagType == "I"){
            let likeValue = document.getElementById(heartId).dataset.like;
            document.getElementById(heartId).innerText = parseInt(likeValue)+1;
            let liked = document.getElementById(heartId).getAttribute("data-liked");

            /** Prevent Multiple Likes Update **/
            if(liked != 1){
                document.getElementById(heartId).setAttribute("data-liked","1");

                /** Update Total Likes **/
                let totalLikes =  document.getElementById("like").innerText
                document.getElementById("like").innerHTML = parseInt(totalLikes)+1;
            }  
        }
    })
}