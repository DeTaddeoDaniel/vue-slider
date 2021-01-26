const slider = new Vue ({
    el: '#conteinerVue',
    data:{

        test:'texting',

        imgs: [
            {
                scr: 'img/slider-img-0',
                text: 'Forest under the start',
            },
            {
                scr: 'img/slider-img-1',
                text: 'Lake in the montain',
            },
            {
                scr: 'img/slider-img-2',
                text: 'Montain from aky',
            },
            {
                scr: 'img/slider-img-3',
                text: 'Forest in one day',
            },
            {
                scr: 'img/slider-img-4',
                text: 'Lakes of ice',
            },
            {
                scr: 'img/slider-img-5',
                text: 'Landscape montain with river',
            },
            {
                scr: 'img/slider-img-6',
                text: 'river in the montain',
            },
            {
                scr: 'img/slider-img-7',
                text: 'small lake in the montain',
            },
        ],
        
        counter: 0
    }
})
