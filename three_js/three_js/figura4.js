const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa98307);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 3, 4, 5 );
const material = new THREE.MeshBasicMaterial( { color: 0x980002 } );
const sphere = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
scene.add( sphere );

scene.fog = new THREE.Fog (0x000000, 8, 10 )



camera.position.x = 0;
camera.position.y = 1.5;
camera.position.z = 10;

function animate (){
	requestAnimationFrame( animate );
	sphere.rotation.y += 0.01
	/* cone.rotation.x += 0.04 */
	sphere.rotation.z += 0.01
    line.rotation.z += 0.05
    line.rotation.y += 0.05
	renderer.render( scene, camera )
}

animate()