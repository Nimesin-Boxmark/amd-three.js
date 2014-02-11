define( ["three", "shader", "texture"], function( THREE, shader, texture ) {
  return {
    bump: new THREE.MeshPhongMaterial( { bumpMap: texture.grass } ),
    grass: new THREE.MeshBasicMaterial( { map: texture.grass } ),
    shader: new THREE.ShaderMaterial( {
      uniforms: {
        uColor: { type: "c", value: new THREE.Color( "#ff0000" ) }
      },
      // Note, to generate the shader files, it is necessary to run js/shaders/compile.py
      vertexShader: shader.vertex.simple,
      fragmentShader: shader.fragment.simple
    }),
    solid: new THREE.MeshLambertMaterial( {
      color: 0x00dcdc,
      shading: THREE.FlatShading
    }),
    wire: new THREE.MeshBasicMaterial( { wireframe: true } )
  };
} );
