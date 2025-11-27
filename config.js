Protobject.setProduction(false);

Protobject.initialize([
  { 
    name: "Luz_VanGogh",      // AHORA el index es la CÁMARA
    page: "index.html",
    main: true,                // El botón + aparece AQUÍ
    debug: "master",
  },
  { 
    name: "Camara",       // La LUZ ahora está en camara.html
    page: "camara.html",
    debug: "local",
  }
]);
