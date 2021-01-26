const slider = new Vue ({
    el: '#conteinerVue',
    data:{

        srcImg:'img/slider-img-0.jpg',
        altImg:'Forest under the start',
        TitleImg:'Forest under the start',

        imgs: [
            {
                scr: 'img/slider-img-0.jpg',
                text: 'Forest under the start',
            },
            {
                scr: 'img/slider-img-1.jpg',
                text: 'Lake in the montain',
            },
            {
                scr: 'img/slider-img-2.jpg',
                text: 'Montain from sky',
            },
            {
                scr: 'img/slider-img-3.jpg',
                text: 'Forest in one day',
            },
            {
                scr: 'img/slider-img-4.jpg',
                text: 'Lakes of ice',
            },
            {
                scr: 'img/slider-img-5.jpg',
                text: 'Landscape montain with river',
            },
            {
                scr: 'img/slider-img-6.jpg',
                text: 'river in the montain',
            },
            {
                scr: 'img/slider-img-7.jpg',
                text: 'small lake in the montain',
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

            let dataInfo = this.imgs[this.counter];
            this.srcImg = dataInfo.scr;
            this.altImg = dataInfo.text;
            this.TitleImg = dataInfo.text;
            
            console.log(dataInfo.text);
        },

        next: function (){
            this.counter++;
            
            if(this.counter > this.imgs.length -1){
                this.counter = 0;
            }

            let dataInfo = this.imgs[this.counter];
            this.srcImg = dataInfo.scr;
            this.altImg = dataInfo.text;
            this.TitleImg = dataInfo.text;

            console.log(this.counter);
        }
    },
})
