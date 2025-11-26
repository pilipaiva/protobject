Protobject.setProduction(false);
Protobject.initialize([
  { 
    name: "Luz_VanGogh",           // AHORA ES EL MASTER
    page: "index.html",
    main: true,                    // <--- Importante
    debug: "master",
  },
  { 
    name: "Camara_Aruco",          // AHORA ES EL ESCLAVO/CLIENTE
    page: "camara.html",  
    debug: "local",
  }
]);
