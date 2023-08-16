import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const ModelViewer = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/uXYZOyWocYfl63Va/scene.splinecode');    // Make the 3D model smaller by scaling the root object (optional)
    if (app.scene) {
      app.scene.scale.set(0.5, 0.5, 0.5); // You can adjust the scale values as needed
    }
  }, []);

  return (
    <canvas id="canvas3d" style={{ width: '100%', height: '100%' }}>
      Your browser does not support the HTML5 canvas element.
    </canvas>
  );
};

export default ModelViewer;