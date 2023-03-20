//  const images = [
//     'images/pic-1.jpg',
//     'images/pic-2.jpg',
//     'images/pic-3.jpg',
//     'images/pic-4.jpg',
//     'images/pic-5.jpg',
//     'images/pic-6.jpg',
//     'images/pic-7.jpg',
//     'images/pic-8.jpg',
//     'images/pic-9.jpg'
// ]
 
 
//  let imgIndex = 0;
//  const imgEle = document.getElementById('slider-img');
// setInterval (() =>{
//     if(imgIndex === images.length){
//         imgIndex = 0;
//     }
//     const imgUrl = images[imgIndex]
//     console.log(imgIndex, imgUrl);
//     imgEle.setAttribute('src', imgUrl);
//     imgIndex++;
// },1000)


const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg'
]

let imgIndex = 0;
const imgElm = document.getElementById('slider-img');
setInterval(() => {
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]
    // console.log(imgIndex, imgUrl)
    imgElm.setAttribute('src', imgUrl);
    imgIndex++;
},1000)