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
    case "Saga Paradiso":
    galleryImages = [
        "../images/accommodation/saga-paradiso/paradiso1.jpg",
        "../images/accommodation/saga-paradiso/paradiso2.jpg",
        "../images/accommodation/saga-paradiso/paradiso3.jpg",
        "../images/accommodation/saga-paradiso/paradiso4.jpg",
        "../images/accommodation/saga-paradiso/paradiso5.jpg",
        "../images/accommodation/saga-paradiso/paradiso6.jpg",
        "../images/accommodation/saga-paradiso/paradiso7.jpg",
        "../images/accommodation/saga-paradiso/paradiso8.jpg",
        "../images/accommodation/saga-paradiso/paradiso9.jpg",
        "../images/accommodation/saga-paradiso/paradiso10.jpg",
        "../images/accommodation/saga-paradiso/paradiso11.jpg",
    ];
    break;
    case "Shake 'n' Shake":
    galleryImages = [
        "../images/clubs/shake/shake1.jpg",
        "../images/clubs/shake/shake2.jpg",
        "../images/clubs/shake/shake3.jpg",
        "../images/clubs/shake/shake4.jpg",
        "../images/clubs/shake/shake5.jpg",
        "../images/clubs/shake/shake6.jpg",
        "../images/clubs/shake/shake7.jpg",
        "../images/clubs/shake/shake8.jpg",
        "../images/clubs/shake/shake9.jpg",
        "../images/clubs/shake/shake10.jpg",
        "../images/clubs/shake/shake11.jpg",
    ];
    break;

    case "Lasta":
    galleryImages = [
        "../images/clubs/lasta/lasta1.jpg",
        "../images/clubs/lasta/lasta2.jpg",
        "../images/clubs/lasta/lasta3.jpg",
        "../images/clubs/lasta/lasta4.jpg",
        "../images/clubs/lasta/lasta5.jpg",
        "../images/clubs/lasta/lasta6.jpg",
        "../images/clubs/lasta/lasta7.jpg",
        "../images/clubs/lasta/lasta8.jpg",
        "../images/clubs/lasta/lasta9.jpg",
        "../images/clubs/lasta/lasta10.jpg",
        "../images/clubs/lasta/lasta11.jpg",
        "../images/clubs/lasta/lasta12.jpg",
        "../images/clubs/lasta/lasta13.jpg",
        "../images/clubs/lasta/lasta14.jpg",
        "../images/clubs/lasta/lasta15.jpg",
        "../images/clubs/lasta/lasta16.jpg",
        "../images/clubs/lasta/lasta17.jpg",
        "../images/clubs/lasta/lasta18.jpg",
        "../images/clubs/lasta/lasta19.jpg",
        "../images/clubs/lasta/lasta20.jpg"
    ];
    break;
    case "Freestyler":
    galleryImages = [
        "../images/clubs/free/free1.jpg",
        "../images/clubs/free/free2.jpg",
        "../images/clubs/free/free3.jpg",
        "../images/clubs/free/free4.jpg",
        "../images/clubs/free/free5.jpg",
        "../images/clubs/free/free6.jpg",
        "../images/clubs/free/free7.jpg",
        "../images/clubs/free/free8.jpg",
        "../images/clubs/free/free9.jpg",
        "../images/clubs/free/free10.jpg",
        "../images/clubs/free/free11.jpg",
        "../images/clubs/free/free12.jpg",
        "../images/clubs/free/free13.jpg"
    ];
    break;
    case "Leto":
    galleryImages = [
        "../images/clubs/leto/leto1.jpg",
        "../images/clubs/leto/leto2.jpg",
        "../images/clubs/leto/leto3.jpg",
        "../images/clubs/leto/leto4.jpg",
        "../images/clubs/leto/leto5.jpg",
        "../images/clubs/leto/leto6.jpg",
        "../images/clubs/leto/leto7.jpg",
        "../images/clubs/leto/leto8.jpg",
        "../images/clubs/leto/leto9.jpg"
    ];
    break;
    case "Hot Mess":
    galleryImages = [
        "../images/clubs/hot_mess/hot_mess1.jpg",
        "../images/clubs/hot_mess/hot_mess2.jpg",
        "../images/clubs/hot_mess/hot_mess3.jpg",
        "../images/clubs/hot_mess/hot_mess4.jpg",
        "../images/clubs/hot_mess/hot_mess5.jpg"
    ];
    break;
    case "Port":
    galleryImages = [
        "../images/clubs/port/port1.jpg",
        "../images/clubs/port/port2.jpg",
        "../images/clubs/port/port3.jpg",
        "../images/clubs/port/port4.jpg",
        "../images/clubs/port/port5.jpg",
        "../images/clubs/port/port6.jpg",
        "../images/clubs/port/port7.jpg",
        "../images/clubs/port/port8.jpg",
        "../images/clubs/port/port9.jpg",
        "../images/clubs/port/port10.jpg"
    ];
    break;
    case "River":
    galleryImages = [
        "../images/clubs/river/river1.jpg",
        "../images/clubs/river/river2.jpg",
        "../images/clubs/river/river3.jpg",
        "../images/clubs/river/river4.jpg",
        "../images/clubs/river/river5.jpg",
        "../images/clubs/river/river6.jpg",
        "../images/clubs/river/river7.jpg",
        "../images/clubs/river/river8.jpg"
    ];
    break;
    case "Sindikat":
    galleryImages = [
        "../images/clubs/sindikat/sindikat1.jpg",
        "../images/clubs/sindikat/sindikat2.jpg",
        "../images/clubs/sindikat/sindikat3.jpg",
        "../images/clubs/sindikat/sindikat4.jpg",
        "../images/clubs/sindikat/sindikat5.jpg",
        "../images/clubs/sindikat/sindikat6.jpg",
        "../images/clubs/sindikat/sindikat7.jpg"
    ];
    break;
    case "The Money":
    galleryImages = [
        "../images/clubs/the_money/the_money1.jpg",
        "../images/clubs/the_money/the_money2.jpg",
        "../images/clubs/the_money/the_money3.jpeg",
        "../images/clubs/the_money/the_money4.jpg"
    ];
    break;
}


var galerija = new gallerySlider(gallery, galleryImages);