//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2b3c);
var loader = new THREE.TextureLoader();
loader.load('./imagenes/galaxia.jpg', function(texture){
	scene.background = texture;
});

//camera
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//animation

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( {color: 0x288BBA8} );
const cube = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
scene.add( cube );

camera.position.x = 0;
camera.position.y = 1.5;
camera.position.z = 8;


function animate (){
	requestAnimationFrame( animate );
	cube.rotation.y += 0.04
	cube.rotation.x += 0.04
	cube.rotation.z += 0.04
	line.rotation.z += 0.05
	line.rotation.x += 0.05
    line.rotation.y += 0.05
	renderer.render( scene, camera )
}

animate()
