class LightBox {
    constructor (listElement) {
        this.currentElement = null;
        this.listElement = listElement;
        this.manageEvent();
    }

    /* *** Display Lightbox *** */
    show(id){
    //console.log(id)
        this.currentElement = this.getElementById(id);
        this.display();
    }    

    /* *** Previous Photo *** */
    previous(){
        let index = this.listElement.findIndex(element => element.id == this.currentElement.id);
        if(index == 0){
            this.currentElement = this.listElement[this.listElement.length - 1];
        } else this.currentElement = this.listElement[index-1];
        this.display();
    }

    /* *** Next Photo *** */
    next(){
        let index = this.listElement.findIndex(element => element.id == this.currentElement.id);
        if(index == this.listElement.length - 1){
            this.currentElement = this.listElement[0];
        } else this.currentElement = this.listElement[index+1];
        this.display();
    }

    /* *** Event listener *** */
    manageEvent(){
        document.querySelector("#lightbox .next").addEventListener("click", () => {
            this.next();
        });

        document.querySelector("#lightbox .previous").addEventListener("click", () => {
            this.previous();
        });

        document.querySelector("#lightbox .close").addEventListener("click", () => {
            this.close();
        });

        document.querySelector("#lightbox").addEventListener("click", (e) => {
            if(e.target == e.currentTarget) this.close();
        });

    document.querySelector("#lightbox").addEventListener("keyup", (e) => {
        switch (e.key) {
            case "Escape" :this.close();
            break;
        }
//        console.log(e.key);
    });
    }

    /* *** Get Photo ID *** */
    getElementById(id){
        return this.listElement.find(element => element.id == id);
    }

    /* *** Display Lightbox Modal *** */
    display(){
        /* Split Name */
        let name = $name;
        let splitName = name.split(' ');
        name = splitName.shift();

        const imageLightbox = this.currentElement.image;
        const videoLightbox = this.currentElement.video;

        /* Media Type Check/Create */
        if(imageLightbox == undefined && videoLightbox){
            const vid = "./assets/images/"+name+"/"+this.currentElement.video;
            let div = document.getElementById("picture")
            if(div != null) { document.getElementById("picture").remove(); }
            document.getElementById("media").innerHTML ="<video controls id='video' class='video'><source class='video' src='"+vid+"'></video>";
        }
        else {
            const img = "./assets/images/"+name+"/"+this.currentElement.image;
            let div = document.getElementById("video")
            if(div != null) { document.getElementById("video").remove(); }
            document.getElementById("media").innerHTML ="<img id='picture' class='picture' src='"+img+"'></img>";
        }
        document.querySelector("#lightbox .content .title").innerText = this.currentElement.title;
        document.querySelector("#lightbox").classList.add("show");
    }
    
    /* *** Close Ligthbox Modal *** */
    close(){
        document.querySelector("#lightbox").classList.remove("show");
    }
}