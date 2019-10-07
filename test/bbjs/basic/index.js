var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: false, stencil: true });

var createScene = async function() {
  var scene = new BABYLON.Scene(engine);
  var sphere = BABYLON.Mesh.CreateIcoSphere("sphere", {radius:0.2, flat:true, subdivisions: 1}, this.scene);
  sphere.position.y = 1;
  sphere.material = new BABYLON.StandardMaterial("sphere material",scene)
  var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0, -0.5, 1.0), scene);
  light.position = new BABYLON.Vector3(0, 5, -2);
  var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 3, new BABYLON.Vector3(0, 1, 0), scene);
  camera.attachControl(canvas, true);
  scene.activeCamera.beta += 0.8;
  var environment = scene.createDefaultEnvironment({ enableGroundShadow: true });
  environment.setMainColor(BABYLON.Color3.FromHexString("#74b9ff"))
  environment.ground.parent.position.y = 0;
  environment.ground.position.y = 0
  var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
  shadowGenerator.useBlurExponentialShadowMap = true;
  shadowGenerator.blurKernel = 32;
  shadowGenerator.addShadowCaster(sphere, true);

  var xr = await scene.createDefaultXRExperienceAsync({floorMeshes: [environment.ground]})

  xr.baseExperience.onStateChangedObservable.add((state)=>{
    if(state === BABYLON.WebXRState.IN_XR){
      // When entering webXR, position the user's feet at 0,0,-1
      xr.baseExperience.setPositionOfCameraUsingContainer(new BABYLON.Vector3(0,xr.baseExperience.camera.position.y,-1))
    }        
  })

  // Runs every frame to rotate the sphere
  scene.onBeforeRenderObservable.add(()=>{
    sphere.rotation.y += 0.0001*scene.getEngine().getDeltaTime();
    sphere.rotation.x += 0.0001*scene.getEngine().getDeltaTime();
  })

  // GUI
  var plane = BABYLON.Mesh.CreatePlane("plane", 1);
  plane.position = new BABYLON.Vector3(0.4, 1.5, 0.4)
  var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
  var panel = new BABYLON.GUI.StackPanel();    
  advancedTexture.addControl(panel);  
  var header = new BABYLON.GUI.TextBlock();
  header.text = "Color GUI";
  header.height = "100px";
  header.color = "white";
  header.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
  header.fontSize = "120"
  panel.addControl(header); 
  var picker = new BABYLON.GUI.ColorPicker();
  picker.value = sphere.material.diffuseColor;
  picker.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
  picker.height = "350px";
  picker.width = "350px";
  picker.onValueChangedObservable.add(function(value) {
    sphere.material.diffuseColor.copyFrom(value);
  });
  panel.addControl(picker);

  return scene;
};

createScene().then(scene => {
  engine.runRenderLoop(() => scene.render());
  window.addEventListener("resize", function () {
    engine.resize();
  });
});

