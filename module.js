const slider = new Vue ({
    el: '#conteinerVue',
    data:{

        srcImg:'img/slider-img-0.jpg',
        altImg:'Forest under the start',
        TitleImg:'Forest under the start',
        descrImg:'lorem lipsu 1',

        imgs: [
            {
                scr: 'img/slider-img-0.jpg',
                text: 'Forest under the start',
                descr:'lorem lipsu 0',
            },
            {
                scr: 'img/slider-img-1.jpg',
                text: 'Lake in the montain',
                descr:'lorem lipsu 1',
            },
            {
                scr: 'img/slider-img-2.jpg',
                text: 'Montain from sky',
                descr:'lorem lipsu 2',
            },
            {
                scr: 'img/slider-img-3.jpg',
                text: 'Forest in one day',
                descr:'lorem lipsu 3',
            },
            {
                scr: 'img/slider-img-4.jpg',
                text: 'Lakes of ice',
                descr:'lorem lipsu 4',
            },
            {
                scr: 'img/slider-img-5.jpg',
                text: 'Landscap',
                descr:'lorem lipsu 5',
            },
            {
                scr: 'img/slider-img-6.jpg',
                text: 'river in the montain',
                descr:'lorem lipsu 6',
            },
            {
                scr: 'img/slider-img-7.jpg',
                text: 'small lake in the montain',
                descr:'lorem lipsu 7',
            },
        ],
        
        counter: 0
    },
    methods: {
        
        prev:function (){
            this.counter--;
            
            if(this.counter < 0){
                this.counter = this.imgs.length-1;
            }

           this.changeImage();
        },

        next: function (){
            this.counter++;
            
            if(this.counter > this.imgs.length -1){
                this.counter = 0;
            }

            this.changeImage();
        },

        clickChangeImageCircle: function(index){
            this.counter = index;
            this.changeImage();
        },

        changeImage: function () {

            let dataInfo = this.imgs[this.counter];
            
            this.srcImg = dataInfo.scr;
            this.altImg = dataInfo.text;
            this.TitleImg = dataInfo.text;
            this.descrImg = dataInfo.descr;

        }
    },
})
