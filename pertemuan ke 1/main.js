function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
  
    // seperti .c file
    var vertexShaderSource = `
      void main() {
        gl_PointSize = 25.0;
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
      }
    `;
    var fragmentShaderSource = `
      void main() {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
    `;
  
    // seperti .o File
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  
    // Ibarat mengetikkan teks source code ke dalam penampung .c
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
  
    // Ibarat mengompilasi .c menjadi .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
  
    //  membuatkan penampung .exe
    var shaderProgram = gl.createProgram();
  
    //  memasukkan .o ke dalam penampung .exe
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
  
    // menggabung-gabungkan yang ada di dalam penampung .exe
    gl.linkProgram(shaderProgram);
  
    // menggunakan "cat" .exe ke dalam konteks grafika (penggambaran)
    gl.useProgram(shaderProgram);
  
    gl.clearColor(0.0, 0.22, 0.5, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    gl.drawArrays(gl.POINTS, 0, 1);
  }

