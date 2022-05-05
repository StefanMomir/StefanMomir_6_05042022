/* ** Photographer Filter  ** *
function filter(){
    let filters = document.getElementById("filter-modal") 
    const filter = document.createElement( 'ul' );
        filter.setAttribute("id","filter");
    /* *
    const liPopular = document.createElement( 'li' );
    const bPopular = document.createElement( 'button' );
        liPopular.setAttribute("class","popular");
        bPopular.textContent = "Popularité";
    //const hr1 = document.createElement( 'hr' );
    const liDate = document.createElement( 'li' );
    const bDate = document.createElement( 'button' );
        liDate.setAttribute("class","date");
        bDate.textContent = "Date";
    //const hr2 = document.createElement( 'hr' );
    const liTitle = document.createElement( 'li' );
    const bTitle = document.createElement( 'button' );
        liTitle.setAttribute("class","title");
        bTitle.textContent = "Titre";
    
        /* *
        filters.appendChild(filter);
    
        filter.appendChild(liPopular);
        liPopular.appendChild(bPopular);
    
        filter.appendChild(liDate);
        liDate.appendChild(bDate);
    
        filter.appendChild(liTitle);
        liTitle.appendChild(bTitle);
    
        return filters
    }
    