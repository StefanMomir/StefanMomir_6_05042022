/* *** Photographer Cards *** */
function photographerCards(data) {

    const {name, portrait, city, country, tagline, price, id  } = data;
    const picture = `assets/photographers/${portrait}`;

    /* Create Photographer Cards */
    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );
        
        const alink = document.createElement( 'a' );
              alink.setAttribute('href', "photographer.html?id="+id);
              alink.setAttribute("id","alink");
              alink.setAttribute("class","alink");

        const img = document.createElement( 'img' );
              img.setAttribute("class","portrait");
              img.setAttribute("src", picture);
              img.setAttribute("alt",name);
        
        const cardname = document.createElement( 'div' );
              cardname.setAttribute("class","name");
        
        const h2 = document.createElement( 'h2' );
              h2.textContent = name;

        const cardlocation = document.createElement( 'div' );
              cardlocation.setAttribute("class","location");
              cardlocation.textContent = city+", "+country;

        const cardtagline = document.createElement( 'div' );
              cardtagline.setAttribute("class","tagline");
              cardtagline.textContent = tagline;
        
        const cardprice = document.createElement( 'div' );
              cardprice.setAttribute("class","price");
              cardprice.textContent = price+"/jour";
        
        article.appendChild(alink);
        article.appendChild(img);
        article.appendChild(cardname);
        cardname.appendChild(h2);
        article.appendChild(cardlocation);
        article.appendChild(cardtagline);
        article.appendChild(cardprice);

        return (article);
    }
    return { getUserCardDOM }
}