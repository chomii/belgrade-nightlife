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
var galleryImages = [
    "http://2k535u2tu3vk210yd2dy5v58.wpengine.netdna-cdn.com/wp-content/uploads/2016/05/Insomnia_PressPhotos_CLUB_11.jpg",
    "https://www.badruttspalace.com/media/289552/badrutts-palace-hotel_kings-club-6.jpg",
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
var galerija = new gallerySlider(gallery, galleryImages);