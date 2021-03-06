// Initial Setup
$(function() {
    const canvas = document.getElementById('home-canvas');
    const c = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    // Variables
    const mouse = {
        x: innerWidth / 2,
        y: innerHeight / 2,
    };

    // const colors = ['#0a0e30', '#123f48', '#1b785c', '#060921', '#FFFFFF'];
    // const colors = ['#4f0404', '#270000', '#380404', '#161616', '#FFFFFF'];
    const colors = ['#eaeaea','#cccccc', '#FFFFFF'];

    // Event Listeners
    addEventListener('mousemove', event => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    })

    addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;

        init()
    })

    // Utility Functions
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function distance(x1, y1, x2, y2) {
        const xDist = x2 - x1;
        const yDist = y2 - y1;

        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    // Objects
    function Particle(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.001;
        this.distanceFrmCenter = randomIntFromRange(10, 1000);
        this.lastMouse = { x: x, y: y };

        this.update = () => {
            const lastPoint = { x: this.x, y: this.y };
            //Move points over time
            this.radians += this.velocity;
            //Drag effect
            this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.0015;
            this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.0015;
            //Circular Motion
            this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFrmCenter;
            this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFrmCenter;
            this.draw(lastPoint);
        }

        this.draw = lastPoint => {
            c.beginPath();
            c.strokeStyle = this.color;
            c.lineWidth = this.radius;
            c.moveTo(lastPoint.x, lastPoint.y);
            c.lineTo(this.x, this.y);
            c.stroke();
            c.closePath();
        }
    }

    // Implementation
    let particles;
    function init() {
        particles = [];

        for (let i = 0; i < 1500; i++) {
            // const radius =  (Math.random() * 4) + 1;
            const radius =  1;
            particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
        }
    }

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
        });
    }

    init();
    animate();
});