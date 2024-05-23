import * as THREE from 'three'
import * as dat from 'dat.gui';
import * as TWEEN from '@tweenjs/tween.js';


class ModelPawn extends PawnBehavior {
    setup() {
        let trm = this.service("ThreeRenderManager");
        let group = this.shape;

        if (this.actor._cardData.toneMappingExposure !== undefined) {
            trm.renderer.toneMappingExposure = this.actor._cardData.toneMappingExposure;
        }

        // Initialize DRACOLoader
        const dracoLoader = new THREE.DRACOLoader();
        dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/libs/draco/');

        // Set DRACOLoader as an extension to GLTFLoader
        const gltfLoader = new THREE.GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        this.lights = [];
        // let particles = [];
        // let cfd=[];
        // let temp=[];
        
        const loadModelPromise = new Promise((resolve, reject) => {
            gltfLoader.load('./assets/Power_room.glb', (gltf) => {
                const model = gltf.scene;

                model.position.set(0, -1.6, 0);
                const scaleFactor = 8;
                model.scale.set(scaleFactor, scaleFactor, scaleFactor);

                group.add(model);
                console.log(model);


                resolve(model);
            }, null, reject);
        });

        loadModelPromise.then((model) => {
            const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, Green, Blue, Yellow

            // Shuffle the colors array to randomize the order
            for (let i = colors.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [colors[i], colors[j]] = [colors[j], colors[i]];
            }

            let colorIndex = 0;

            const originalMaterials = new Map();

        }).catch((error) => {
            console.error('Error loading GLTF model:', error);
        });

        this.listen("updateShape", "updateShape");
    }

    teardown() {
        let scene = this.service("ThreeRenderManager").scene;
        scene.background?.dispose();
        scene.environment?.dispose();
        scene.background = null;
        scene.environment = null;
    }

    updateShape(options) {
        this.constructBackground(options);
    }

    update(_time) {
        if (this.csm) this.csm.update();
    }
}

export default {
    modules: [{
        name: "Model2",
        pawnBehaviors: [ModelPawn]
    }]
};
