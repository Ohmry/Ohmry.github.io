class App {
    constructor() {
        this.canvas = document.getElementById('ly_separator');
        this.context = this.canvas.getContext('2d');

        window.addEventListener('resize', this.reisze.bind(this), false);
        this.reisze();
    }

    reisze() {
        this.canvas.height = this.canvas.parentElement.offsetHeight;
        this.canvas.width = 10;
        
        this.context.beginPath();
        this.context.moveTo(10, 20);
        this.context.lineTo(10, this.canvas.height - 20);
        this.context.lineCap = 'round';
        this.context.setLineDash([10, 10]);
        this.context.lineWidth = 2;
        this.context.stroke();

        console.log(this.context.lineWidth);
    }
}

window.onload = () => {
    new App();
}