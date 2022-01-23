let fairy,
    emitter,
    config = {
        type: Phaser.AUTO,
        width: window.innerWidth/1.2,
        height: 400,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    },
    game = new Phaser.Game(config);

function preload() {
    this.load.image('light', 'assets/light.png');
}

function create() {
    const particles = this.add.particles('light');

    emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    fairy = this.physics.add.image(200, 100, 'light');
    fairy.setVelocity(100, 200);
    fairy.setBounce(1, 1);
    fairy.setCollideWorldBounds(true);

    emitter.startFollow(fairy);

    window.webxdc.setUpdateListener((update) => {
        setColor(update.payload);
    });
    const updates = window.webxdc.getAllUpdates();
    if (updates.length > 0) {
        setColor(updates[updates.length - 1].payload);
    }
}

function setColor(color) {
    fairy.setTint(color);
    emitter.setTint(color);
};

function sendColor(color) {
    window.webxdc.sendUpdate({payload: color});
};
