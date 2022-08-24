const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2d572c);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.ConeGeometry( 3, 5, 15 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

scene.fog = new THREE.Fog (0xffffff, 20, 22 )

camera.position.x = 0;
camera.position.y = 1.5;
camera.position.z = 20;

function animate (){
	requestAnimationFrame( animate );
	cone.rotation.y += 0.05
	/* cone.rotation.x += 0.04 */
	cone.rotation.z += 0.05
	renderer.render( scene, camera )
}

animate()
