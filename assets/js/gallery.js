function gallerySlider(dom, images) {
    var currentImage = 0
    var previewImg;
    var domImages = [];
    init()
    function setPreviewImage(index) {
        currentImage = index
        previewImg.src = images[index]
        let dimg = domImages[index];
        for(var i = 0; i < images.length; i++) {
            domImages[i].classList.remove("selected");
        }
        dimg.classList.add("selected");
    }

    function init() {
        dom.classList.add("gallery");

        var preview = document.createElement("div");
        preview.classList.add("preview");

        previewImg = document.createElement("img");
        previewImg.src = images[0]

        var prev = document.createElement("i");
        prev.classList.add("prev");

        var next = document.createElement("i");
        next.classList.add("next");

        var slider = document.createElement("div");
        slider.classList.add("slider");

        dom.appendChild(preview)
        preview.appendChild(previewImg)
        preview.appendChild(next)
        preview.appendChild(prev)
        dom.appendChild(slider)

        next.addEventListener('click', nextImage)
        prev.addEventListener('click', prevImage)
        for(var i = 0; i < images.length; i++) {
            var img = document.createElement("img");
            if(i == 0) {
                img.classList.add("selected");
            }
            img.src = images[i];
            img.index = i;
            slider.appendChild(img)
            domImages.push(img)
            img.addEventListener('click', function(event) {
                var index = event.target.index
                currentImage = index
                setPreviewImage(index)
            });
        }
    }
    function nextImage() {
        var imgIndex = currentImage + 1;
        if(currentImage == images.length - 1) {
            imgIndex = 0
        }
        setPreviewImage(imgIndex)
    }

    function prevImage() {
        var imgIndex = currentImage - 1;
        if(currentImage == 0) {
            imgIndex = images.length - 1
        }
        setPreviewImage(imgIndex)
    }
}

var gallery = document.getElementById('gallery');
var galleryName = document.getElementById('title').textContent;
var galleryImages = [];
console.log(galleryName);
switch(galleryName) {
    case "Shake 'n' Shake":
    galleryImages = [
        "images/clubs/shake/shake1.jpg",
        "images/clubs/shake/shake2.jpg",
        "images/clubs/shake/shake3.jpg",
        "images/clubs/shake/shake4.jpg",
        "images/clubs/shake/shake5.jpg",
        "images/clubs/shake/shake6.jpg",
        "images/clubs/shake/shake7.jpg",
        "images/clubs/shake/shake8.jpg",
        "images/clubs/shake/shake9.jpg",
        "images/clubs/shake/shake10.jpg",
        "images/clubs/shake/shake11.jpg",
    ];
    break;

    case "Lasta":
    galleryImages = [
        "images/clubs/lasta/lasta1.jpg",
        "images/clubs/lasta/lasta2.jpg",
        "images/clubs/lasta/lasta3.jpg",
        "images/clubs/lasta/lasta4.jpg",
        "images/clubs/lasta/lasta5.jpg",
        "images/clubs/lasta/lasta6.jpg",
        "images/clubs/lasta/lasta7.jpg",
        "images/clubs/lasta/lasta8.jpg",
        "images/clubs/lasta/lasta9.jpg",
        "images/clubs/lasta/lasta10.jpg",
        "images/clubs/lasta/lasta11.jpg",
        "images/clubs/lasta/lasta12.jpg",
        "images/clubs/lasta/lasta13.jpg",
        "images/clubs/lasta/lasta14.jpg",
        "images/clubs/lasta/lasta15.jpg",
        "images/clubs/lasta/lasta16.jpg",
        "images/clubs/lasta/lasta17.jpg",
        "images/clubs/lasta/lasta18.jpg",
        "images/clubs/lasta/lasta19.jpg",
        "images/clubs/lasta/lasta20.jpg"
    ];
    break;
    case "Freestyler":
    galleryImages = [
        "images/clubs/free/free1.jpg",
        "images/clubs/free/free2.jpg",
        "images/clubs/free/free3.jpg",
        "images/clubs/free/free4.jpg",
        "images/clubs/free/free5.jpg",
        "images/clubs/free/free6.jpg",
        "images/clubs/free/free7.jpg",
        "images/clubs/free/free8.jpg",
        "images/clubs/free/free9.jpg",
        "images/clubs/free/free10.jpg",
        "images/clubs/free/free11.jpg",
        "images/clubs/free/free12.jpg",
        "images/clubs/free/free13.jpg"
    ];
    break;
}


var galerija = new gallerySlider(gallery, galleryImages);