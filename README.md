# test-pricetag
Hola, esto es un proyecto hecho en Ionic con Electron

La funcion de esta aplicacion es de manejar el catalogo de productos que un establecimiento pueda manejar y hacer el cambio de precios en tiempo real de forma remota a un dispositivo el cual estara conectado al a misma red de wifi local.

El proceso de como se hace el cambio de precio en una etiqueta digital es el siguiente:
1.-Atraves de un HTTP request.
2.-Cuando la API recibe el request, busca en la base de datos el nuevo precio y genera una imagen utilizando la libreria GD que ya viene incluida en PHP.
3.-Una vez creada la imagen, se guarda con un nombre en especifico en un Blob de Azure.
4.-Se reinicia la "etiqueta digital" y al hacer esto descarga la nueva imagen con el precio actualizado.

Proyecto realizado por:
Beltran Lopez Diego
Valentin Arzola Angel
Roman Castro Christopher Alexander


