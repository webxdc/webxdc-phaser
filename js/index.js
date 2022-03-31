let fairy,
    emitter,
    config = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.RESIZE,
            width: 600,
            height: 800,
        },
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
        tint: {min: 0, max: 16777214},
        blendMode: 'ADD'
    });

    fairy = this.physics.add.image(200, 100, 'light');
    fairy.setVelocity(100, 200);
    fairy.setBounce(1, 1);
    fairy.setCollideWorldBounds(true);

    emitter.startFollow(fairy);

    window.webxdc.setUpdateListener((update) => {
        if (update.serial == update.max_serial) {
            fairy.setTint(update.payload);
            emitter.setTint(update.payload);
        }
    }, 0);
}

function sendColor(color) {
    window.webxdc.sendUpdate({payload: color});
};
