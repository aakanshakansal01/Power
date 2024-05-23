import * as THREE from 'three';
// import * as dat from 'dat.gui';
// import * as TWEEN from '@tweenjs/tween.js';

class ModelPawn extends PawnBehavior {
    setup() {
        let trm = this.service("ThreeRenderManager");
        let group = this.shape || new THREE.Group();  // Ensure this.shape is initialized

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
        
        const loadModelPromise = new Promise((resolve, reject) => {
            gltfLoader.load('./assets/GENRETOR06glb.glb', (gltf) => {
                const model = gltf.scene;

                model.position.set(0, 5, 0);
                const scaleFactor = 0.8;
                model.scale.set(scaleFactor, scaleFactor, scaleFactor);

                group.add(model);
                console.log(model.children[2]);

                resolve(model);
            }, null, (error) => {
                console.error('Error loading GLTF model:', error);
                reject(error);
            });
        });

        loadModelPromise.then((model) => {
            console.log('Model loaded:', model);
        }).catch((error) => {
            console.error('Error loading GLTF model:', error);
        });

        this.listen("updateShape", "updateShape");
    }

    teardown() {
        let scene = this.service("ThreeRenderManager").scene;
        if (scene.background) scene.background.dispose();
        if (scene.environment) scene.environment.dispose();
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
        name: "Model",
        pawnBehaviors: [ModelPawn]
    }]
};
