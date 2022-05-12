/* ** Return Photographer Media Data after Fetch ** */
getData()
.then(data => {
    const urlId = getId();

    /* ** Return Photographer Profile Data after Fetch ** */
    const photographersData = data.photographers.filter(photographers => photographers.id == urlId);
    photographersData.forEach(photographerData => {
        const photographerProfiler = photographerProfile(photographerData);
        photographerProfiler.getUserProfileDOM();
    })

    /* ** Return Photographer Media Data after Fetch ** */
    const photographersMedia = document.querySelector(".photograph-container");
    let mediasData = data.media.filter(media => media.photographerId == urlId);

    /* Return Media Result */
    mediaCards();

    /* Filter Buttons Listener */
    document.querySelectorAll('.sort-item').forEach(item => {
        item.addEventListener('click', function(){
        const currentSelected = this.closest('.filter-media').children[0].innerText = this.innerText;

        /* Switch DropDown Filter Name */
            switch (currentSelected){
                case "Popularité": this.closest('.filter-media').children[0].id = "sortby-pop";
                    break;
                case "Titre": this.closest('.filter-media').children[0].id = "sortby-tit";
                    break;
                case "Date": this.closest('.filter-media').children[0].id = "sortby-dat";
                    break;
                default :  mediaCards();
            }

            const sortBy = document.querySelector(".sortby").id;

            /* Sorting By Title */  
            if( sortBy == "sortby-tit"){ 
                mediasData = mediasData.sort((a, b)=> {
                    return a.title > b.title ? 1 : -1;
                }); 
                closeFilter();
                mediaCards();
            }

            /* Sorting By Popularity */  
            else if(sortBy == "sortby-pop"){
                mediasData = mediasData.sort((a, b)=> {
                    return a.likes > b.likes ? 1 : -1;
                });
                closeFilter();
                mediaCards();
            }
            
            /* Sorting By Date */  
            else if (sortBy == "sortby-dat"){
                mediasData = mediasData.sort((a, b)=> {
                    let dateA = new Date(a.date);
                    let dateB = new Date(b.date);
                    return dateB - dateA;
                });
                closeFilter();
                mediaCards();
            }
        })
    })

    document.querySelector(".filter-modal").classList.add('hide');
    
    /* Return Filtered Result */
    function mediaCards(){
           
        /* ** Return Data To Media Cards ** */
        document.getElementById("photos").innerHTML = ""
        mediasData.forEach(mediaData => {
        const photographerModel = photographerMedia(mediaData);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersMedia.appendChild(userCardDOM);
        }); 

        /* ** Create Lightbox ** */
        let lightBox = new LightBox(mediasData);
        document.querySelectorAll("#photos .card").forEach(categoryDom => {
            categoryDom.addEventListener("click", (e) => {
                lightBox.show(e.currentTarget.dataset.photoid);
            })
        })
    }
})

/* Listener For Open Filter Modal */
    document.getElementById('sortby-').addEventListener('click', openFilter);

/* Close Filter Modal */
function closeFilter(){
    document.getElementById("closefilter").classList.add('hide');
}

/* Open Filter Modal */
function openFilter(){
    document.querySelector(".filter-modal").classList.remove('hide');
}