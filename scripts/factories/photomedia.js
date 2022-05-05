/* ** Create Photographer Header Profile ** */
function photographerProfile(data) {
        /* Returned Data for List Photo Profile */
        const {name, portrait, city, country, tagline, price, id  } = data;
        profilePhoto = "assets/photographers/"+portrait;
        const location = city+' ,'+country;
        $name = name;

        /* Create Header Elements */
        function getUserProfileDOM() {
            
            /* ** Photographer Header  ** */
            document.getElementById("info").innerHTML = "<h2>"+name+"</h2><p class='location'>"+location+"</p><p class='tagline'>"+tagline+"</p>";
            document.getElementById("photo").innerHTML = "<img alt='"+name+"' src='"+profilePhoto+"'>";

            /* ** Photographer Contact Header  ** */
            document.getElementById("profile-name").innerText = name;
            
            /* ** Photographer Footer  ** */
            document.getElementById("charge").innerHTML = price+"&euro;/jour</p>";
        }
        return {getUserProfileDOM }
}

/* ** Create Photographer Media Cards ** */
function photographerMedia(data) {

    /* Returned Data for Listing Medias */
    const {title, id, phId, image, video, likes, date, price} = data;
    let name = $name;

    /* Split Name */
    let splitName = name.split(' ');
    let firstName = splitName.shift();

    function getUserCardDOM() {
    /* Create Photo Cards Elements */
        const img = "assets/images/"+firstName+"/"+image;
        /* */
        const figure = document.createElement( 'figure' );
        /* */
        const images = document.createElement( 'img' );
              images.setAttribute("src", img);
              images.setAttribute("class","card");
              images.setAttribute("data-photoid",id);
              images.setAttribute("data-id","l"+id);
              images.setAttribute("id",id);
              images.setAttribute("pointer-events", "none");
        /* */
        const figcaption = document.createElement( 'figcaption' );
              figcaption.setAttribute("id","photo-text");
        /* */
        const p = document.createElement( 'p' );
              p.setAttribute("class","photo-text");
              p.textContent = title;
        /* */     
        const span = document.createElement( 'span' );
              span.textContent = likes;
              for (const [key, value] of Object.entries({
                  id: "l"+id,
                  class: "liked",
                  'data-liked': "0",
                  'data-id': "l"+id,
                  'data-like': likes,  
                  value: likes,
                  }))
               span.setAttribute(key, value); 
        /* */
        const button = document.createElement( 'button' );
              button.setAttribute("type", "button");
        /* */
        const i = document.createElement( 'i' );
              for (const [key, value] of Object.entries({
                id: 'like-new',
                'data-id': "l"+id,
                value: likes,
                class:"fa fa-heart"
                }))
             i.setAttribute(key, value); 
        /* */     
        figure.appendChild(images);
        
        /* Check/Replace Media Type */
        if(video){
            const vid = "assets/images/"+firstName+"/"+video;
            const videos = document.createElement( 'video' );
            videos.setAttribute("controls","");
            videos.setAttribute("class","card");
            videos.setAttribute("data-photoid",id);
            videos.setAttribute("data-id","l"+id);
            const source = document.createElement( 'source' );
            source.setAttribute("src", vid);
            videos.appendChild(source);
            figure.replaceChild(videos, images);
        }
        
        /* Create Order */
        figure.appendChild(figcaption);
        figcaption.appendChild(p);
        figcaption.appendChild(span);
        figcaption.appendChild(button);
        button.appendChild(i);
        /* */
        return (figure);
    }
    return { getUserCardDOM }
}