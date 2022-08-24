const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2b3c);
var loader = new THREE.TextureLoader();
loader.load('./imagenes/capsula.jpg', function(texture){
	scene.background = texture;
});

const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0x779ecb} );
const capsule = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
scene.add( capsule );

scene.fog = new THREE.Fog (0xffffff, 9, 10 )

camera.position.x = 0;
camera.position.y = 1;
camera.position.z = 10;

function animate (){
	requestAnimationFrame( animate );
	capsule.rotation.y += 0.1
	capsule.rotation.x += 0.04
	capsule.rotation.z += 0.1
	line.rotation.z += 0.05
    line.rotation.y += 0.05
	renderer.render( scene, camera )
}

animate()