class App {
    constructor() {
        this.skillStats = document.getElementById("skillStats");
        
        this.drawSkillStats(this.skillStats);
    }

    drawSkillStats(cvs) {
        this.ctx = cvs.getContext('2d');
        cvs = new Chart(this.ctx, {
            type : 'radar',
            data : {
                labels : ['Java', 'JavaScript', 'SQL', 'C#', 'VB'],
                datasets : [{
                    label : 'Skills',
                    data : [8, 5, 8, 7, 5],
                    backgroundColor : 'rgba(157, 194, 161, 0.7)'
                }]
            },
            options : {
                scale : {
                    ticks : {
                        suggestedMin : 1,
                        suggestedMax : 10,
                        showLabelBackdrop : false
                    }
                }
            }
        });
    }

}

window.onload = () => {
    new App();
}