Protobject.setProduction(false);

Protobject.initialize([
  { 
    name: "Camara_Aruco",      // AHORA el index es la CÁMARA
    page: "index.html",
    main: true,                // El botón + aparece AQUÍ
    debug: "master",
  },
  { 
    name: "Luz_VanGogh",       // La LUZ ahora está en camara.html
    page: "camara.html",
    debug: "local",
  }
]);
