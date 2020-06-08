new Vue({
    el: "#app",
    data: {
        x: 0,
        moveX: 0
    },
    methods: {
        move: function (e) {				
            if(e.buttons === 1) {
                if(e.offsetX >= 5 ) {
                    if(e.offsetX < 205) {
                        this.x = (e.offsetX - 5);
                    }
                }
            }
        },
        moveto: function (e) {
            if(e.offsetX >= 5 ) {
                if(e.offsetX < 205) {
                    this.x = (e.offsetX - 5);
                }
            }
        }
    },
    computed: {
        position: function () {
            return {
                left: this.x + "px"
            }
        },
        image: function () {
            if(this.x > 160) { return "image image-5" }
            if(this.x > 120) { return "image image-4" }
            if(this.x > 80) { return "image image-3" }
            if(this.x > 40) { return "image image-2" }
            if(this.x <= 40) { return "image image-1" }
        }
    }
})