function loadImages(){
    const images = [
        {
            "src": "./img/dred1.jpg"
        },
        {
            "src": "./img/dred2.jpg"
        },
        {
            "src": "./img/dred3.jpg"
        },
        {
            "src": "./img/dred4.jpg"
        },
        {
            "src": "./img/dred5.jpg"
        },
        {
            "src": "./img/dred6.jpg"
        },
    ];

    const element = document.querySelector('.block-img');

    for (let i = 0; i < images.length; i++){
        let block_wrapper = document.createElement('div');
        let image = document.createElement('img');

        block_wrapper.classList.add('block-img-wrapper');
        image.classList.add('block-img1-item');
        
        image.setAttribute('src', `${images[i]['src']}`);

        block_wrapper.append(image);
        element.append(block_wrapper);
    }
};

loadImages();