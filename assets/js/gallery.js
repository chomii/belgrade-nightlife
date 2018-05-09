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
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_1.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_2.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_3.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_4.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_5.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_6.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_7.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_8.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_9.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_10.jpg",
        "../images/accommodation/saga-paradiso/villa_saga_paradiso_11.jpg",
    ];
    break;
    case "Shake 'n' Shake":
    galleryImages = [
        "../images/clubs/shake/shake_night_club_1.jpg",
        "../images/clubs/shake/shake_night_club_2.jpg",
        "../images/clubs/shake/shake_night_club_3.jpg",
        "../images/clubs/shake/shake_night_club_4.jpg",
        "../images/clubs/shake/shake_night_club_5.jpg",
        "../images/clubs/shake/shake_night_club_6.jpg",
        "../images/clubs/shake/shake_night_club_7.jpg",
        "../images/clubs/shake/shake_night_club_8.jpg",
        "../images/clubs/shake/shake_night_club_9.jpg",
        "../images/clubs/shake/shake_night_club_10.jpg",
        "../images/clubs/shake/shake_night_club_11.jpg",
    ];
    break;

    case "Lasta":
    galleryImages = [
        "../images/clubs/lasta/lasta_night_club_1.jpg",
        "../images/clubs/lasta/lasta_night_club_2.jpg",
        "../images/clubs/lasta/lasta_night_club_3.jpg",
        "../images/clubs/lasta/lasta_night_club_4.jpg",
        "../images/clubs/lasta/lasta_night_club_5.jpg",
        "../images/clubs/lasta/lasta_night_club_6.jpg",
        "../images/clubs/lasta/lasta_night_club_7.jpg",
        "../images/clubs/lasta/lasta_night_club_8.jpg",
        "../images/clubs/lasta/lasta_night_club_9.jpg",
        "../images/clubs/lasta/lasta_night_club_10.jpg",
        "../images/clubs/lasta/lasta_night_club_11.jpg",
        "../images/clubs/lasta/lasta_night_club_12.jpg",
        "../images/clubs/lasta/lasta_night_club_13.jpg",
        "../images/clubs/lasta/lasta_night_club_14.jpg",
        "../images/clubs/lasta/lasta_night_club_15.jpg",
        "../images/clubs/lasta/lasta_night_club_16.jpg",
        "../images/clubs/lasta/lasta_night_club_17.jpg",
        "../images/clubs/lasta/lasta_night_club_18.jpg",
        "../images/clubs/lasta/lasta_night_club_19.jpg",
        "../images/clubs/lasta/lasta_night_club_20.jpg"
    ];
    break;
    case "Freestyler":
    galleryImages = [
        "../images/clubs/free/free_night_club_1.jpg",
        "../images/clubs/free/free_night_club_2.jpg",
        "../images/clubs/free/free_night_club_3.jpg",
        "../images/clubs/free/free_night_club_4.jpg",
        "../images/clubs/free/free_night_club_5.jpg",
        "../images/clubs/free/free_night_club_6.jpg",
        "../images/clubs/free/free_night_club_7.jpg",
        "../images/clubs/free/free_night_club_8.jpg",
        "../images/clubs/free/free_night_club_9.jpg",
        "../images/clubs/free/free_night_club_10.jpg",
        "../images/clubs/free/free_night_club_11.jpg",
        "../images/clubs/free/free_night_club_12.jpg",
        "../images/clubs/free/free_night_club_13.jpg"
    ];
    break;
    case "Leto":
    galleryImages = [
        "../images/clubs/leto/leto_night_club_1.jpg",
        "../images/clubs/leto/leto_night_club_2.jpg",
        "../images/clubs/leto/leto_night_club_3.jpg",
        "../images/clubs/leto/leto_night_club_4.jpg",
        "../images/clubs/leto/leto_night_club_5.jpg",
        "../images/clubs/leto/leto_night_club_6.jpg",
        "../images/clubs/leto/leto_night_club_7.jpg",
        "../images/clubs/leto/leto_night_club_8.jpg",
        "../images/clubs/leto/leto_night_club_9.jpg"
    ];
    break;
    case "Hot Mess":
    galleryImages = [
        "../images/clubs/hot_mess/hot_mess_night_club_1.jpg",
        "../images/clubs/hot_mess/hot_mess_night_club_2.jpg",
        "../images/clubs/hot_mess/hot_mess_night_club_3.jpg",
        "../images/clubs/hot_mess/hot_mess_night_club_4.jpg",
        "../images/clubs/hot_mess/hot_mess_night_club_5.jpg"
    ];
    break;
    case "Port":
    galleryImages = [
        "../images/clubs/port/port_night_club_1.jpg",
        "../images/clubs/port/port_night_club_2.jpg",
        "../images/clubs/port/port_night_club_3.jpg",
        "../images/clubs/port/port_night_club_4.jpg",
        "../images/clubs/port/port_night_club_5.jpg",
        "../images/clubs/port/port_night_club_6.jpg",
        "../images/clubs/port/port_night_club_7.jpg",
        "../images/clubs/port/port_night_club_8.jpg",
        "../images/clubs/port/port_night_club_9.jpg",
        "../images/clubs/port/port_night_club_10.jpg"
    ];
    break;
    case "River":
    galleryImages = [
        "../images/clubs/river/river_night_club_1.jpg",
        "../images/clubs/river/river_night_club_2.jpg",
        "../images/clubs/river/river_night_club_3.jpg",
        "../images/clubs/river/river_night_club_4.jpg",
        "../images/clubs/river/river_night_club_5.jpg",
        "../images/clubs/river/river_night_club_6.jpg",
        "../images/clubs/river/river_night_club_7.jpg",
        "../images/clubs/river/river_night_club_8.jpg"
    ];
    break;
    case "Sindikat":
    galleryImages = [
        "../images/clubs/sindikat/sindikat_night_club_1.jpg",
        "../images/clubs/sindikat/sindikat_night_club_2.jpg",
        "../images/clubs/sindikat/sindikat_night_club_3.jpg",
        "../images/clubs/sindikat/sindikat_night_club_4.jpg",
        "../images/clubs/sindikat/sindikat_night_club_5.jpg",
        "../images/clubs/sindikat/sindikat_night_club_6.jpg",
        "../images/clubs/sindikat/sindikat_night_club_7.jpg"
    ];
    break;
    case "The Money":
    galleryImages = [
        "../images/clubs/the_money/the_money_night_club_1.jpg",
        "../images/clubs/the_money/the_money_night_club_2.jpg",
        "../images/clubs/the_money/the_money_night_club_3.jpeg",
        "../images/clubs/the_money/the_money_night_club_4.jpg"
    ];
    break;
    case "Bridge":
    galleryImages = [
        "../images/clubs/bridge/bridge_night_club_1.jpeg",
        "../images/clubs/bridge/bridge_night_club_2.jpg",
        "../images/clubs/bridge/bridge_night_club_3.jpg",
        "../images/clubs/bridge/bridge_night_club_4.jpg",
        "../images/clubs/bridge/bridge_night_club_5.jpg",
        "../images/clubs/bridge/bridge_night_club_6.jpg",
        "../images/clubs/bridge/bridge_night_club_7.jpg",
        "../images/clubs/bridge/bridge_night_club_8.jpeg"
    ];
    break;
    case "Tag":
    galleryImages = [
        "../images/clubs/tag/tag_night_club_1.jpeg",
        "../images/clubs/tag/tag_night_club_2.jpeg",
        "../images/clubs/tag/tag_night_club_3.jpeg",
        "../images/clubs/tag/tag_night_club_4.jpg",
        "../images/clubs/tag/tag_night_club_5.jpeg",
        "../images/clubs/tag/tag_night_club_6.jpeg",
        "../images/clubs/tag/tag_night_club_7.jpg",
        "../images/clubs/tag/tag_night_club_8.jpeg",
        "../images/clubs/tag/tag_night_club_9.jpg",
        "../images/clubs/tag/tag_night_club_10.jpg"
    ];
    break;
}


var galerija = new gallerySlider(gallery, galleryImages);