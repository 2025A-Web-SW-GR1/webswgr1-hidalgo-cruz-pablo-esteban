# NestJS Servicio Casa

Este proyecto es una API REST sencilla construida con NestJS, que permite obtener una lista de casas o una casa específica mediante una petición GET.

## Requisitos

- Node.js (v16 o superior recomendado)
- npm (v8 o superior)

## Instalación

1. Clona o descomprime el proyecto.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta:

```bash
npm install
```

## Ejecución

Para iniciar el servidor:

```bash
npm run start
```

El servidor escuchará en:  
http://localhost:3000

## Endpoints

### Obtener todas las casas

GET /casa

Respuesta 200:
```json
[
  { "id": 1, "nombre": "Casa 1" },
  { "id": 2, "nombre": "Casa 2" }
]
```

### Obtener una casa por ID

GET /casa?idCasa=1

Respuesta 200:
```json
[
  { "id": 1, "nombre": "Casa 1" }
]
```

GET /casa?idCasa=2

Respuesta 200:
```json
[
  { "id": 2, "nombre": "Casa 2" }
]
```

### Casa no encontrada

GET /casa?idCasa=3

Respuesta 404:
```
No se encuentra
```

## Prueba rápida

Abre tu navegador o Postman y accede a:

- http://localhost:3000/casa
- http://localhost:3000/casa?idCasa=1
- http://localhost:3000/casa?idCasa=2
- http://localhost:3000/casa?idCasa=3

## Estructura del Proyecto

```
nest-servicio-casa/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Mejora opcional

Si deseas agregar una ruta raíz (/) que devuelva un mensaje de bienvenida, añade esto en app.controller.ts:

```ts
@Get('/')
getRoot(): string {
  return 'API de casas funcionando';
}
```

## Recursos

- Documentación Oficial NestJS: https://docs.nestjs.com/
