/* *** Photographers Page *** */
function photographerFactory(data) {
    
    /* Get Data for Listing Photographers */
    const { name, portrait, city, country, tagline, price, id  } = data;

    const picture = `assets/photographers/${portrait}`;

    /* Create Boxes Cards */
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
        const alink = document.createElement( 'a' );
        alink.setAttribute('href', "photographer.html?name="+name+"&loc="+city+", "+country+"&photo="+portrait+"&tagline="+tagline+"&price="+price+"#"+id);
        alink.setAttribute("id","alink");
        alink.setAttribute("class","alink");

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement( 'h3' );
        h3.textContent = city+", "+country;
        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;
        const h5 = document.createElement( 'h5' );
        h5.textContent = price+"/jour";
        
        article.appendChild(alink);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
        return (article);
    }
    return { getUserCardDOM }
}


/* *** Photographer Photos Page *** */
function photographerMedia(data) {
    
    /* Get Photographers Info from URL */
    let phData = window.location.search
    let params = new URLSearchParams(phData);
    let phName = params.get("name");
    let location = params.get("loc");
    let tagline = params.get("tagline");
    let phPhoto = params.get("photo");
    let chPrice = params.get("price");
    
    /* Split Name */
    let splitName = phName.split(' ');
    let firstName = splitName.shift();
    //let lastName = arr.pop(); //or arr[0];

    /* Get Data for Listing Photos */
    const {title, id, phId, image, video, likes, date, price} = data;
    const img = "assets/images/"+firstName+"/"+image;
    phPhoto = "assets/photographers/"+phPhoto;

console.log(likes);


    /* Create Boxes Cards */
    function getUserCardDOM() {
       
        /* Create Header Elements */
        document.getElementById("info").innerHTML = "<h2>"+phName+"</h2><p class='h3'>"+location+"</p><p class='h4'>"+tagline+"</p>";
        document.getElementById("photo").innerHTML = "<img alt='"+phName+"' src='"+phPhoto+"'>";
        document.getElementById("charge").innerHTML = chPrice+" / jour";
        document.getElementById("ph_name").innerHTML = phName;

        /* Create Photo Elements */
        const figure = document.createElement( 'figure' );
        const images = document.createElement( 'img' );
        images.setAttribute("src", img);
        const figcaption = document.createElement( 'figcaption' );
        const h2 = document.createElement( 'h2' );
              h2.textContent = title;
        const span = document.createElement( 'span' );
              span.setAttribute("id","liked");
              span.setAttribute("title",likes);
              span.setAttribute("data-l",likes);
              span.textContent = likes;
        const i = document.createElement( 'i' );
              i.setAttribute("class","fa fa-heart");

        /* Order Of Creation  */
        figure.appendChild(images);
        if(video){
            const vid = "assets/images/"+firstName+"/"+video;
            const videos = document.createElement( 'video' );
            videos.setAttribute("controls","");
            const source = document.createElement( 'source' );
            source.setAttribute("src", vid);
            videos.appendChild(source);
            figure.replaceChild(videos, images);
        }
        figure.appendChild(figcaption);
        figcaption.appendChild(h2);
        figcaption.appendChild(span);
        figcaption.appendChild(i);

        return (figure);
    }
    return {getUserCardDOM }
}
