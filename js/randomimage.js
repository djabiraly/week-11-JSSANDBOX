const pics = [
    'url("imgg1.gpg")',
    'url("imgg2.gpg")',
    'url("imgg3.gpg")',
    'url("imgg4.gpg")',
]

const pic = document.querySelector('section');

function showImage(){
    var a = math.floor(math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
}
