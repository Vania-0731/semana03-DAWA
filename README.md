# Laboratorio 3 – Streams en Node.js

Este repositorio contiene la solución del laboratorio sobre **Streams en Node.js**, donde se practicó:

- Lectura de archivos con streams (`fs.createReadStream`).
- Escritura de archivos con streams (`fs.createWriteStream`).
- Compresión de archivos con `zlib` y `pipe()`.
- Manejo de errores y **backpressure**.
- Creación de un **Transform Stream** para convertir texto a mayúsculas.
- Uso de un módulo externo (`exceljs`) para generar y descargar archivos Excel desde un servidor HTTP.

---

## Tarea Final: Transformar un archivo de texto a mayúsculas y generar un Excel con `exceljs`

### Transformación de texto
Se creó un **Transform Stream** que convierte el contenido de un archivo `texto.txt` a mayúsculas y lo guarda en `texto_mayusculas.txt`.

### Generación de Excel con `exceljs`
Se implementó un servidor con el módulo **HTTP** en el puerto `3000`.
- Ruta `/reporte`: genera un archivo Excel en memoria con una hoja llamada **Ventas**, que contiene 20 filas de datos de ejemplo. El archivo se envía al cliente en **streaming** y fuerza la descarga en formato `.xlsx`.
- Cualquier otra ruta muestra el mensaje:
```
Visita /reporte para descargar el Excel
```

---

## Cómo clonar e instalar dependencias

### Requisitos previos
- Tener **Node.js** instalado en el sistema (versión recomendada: 14+).
- Tener **Git** instalado si vas a clonar desde GitHub.

### Pasos para clonar el repositorio
1. Abre una terminal.
2. Ejecuta el comando de clonación (reemplaza la URL por la del repositorio real):
```bash
git clone https://github.com/<usuario>/<nombre-del-repo>.git
cd <nombre-del-repo>
```

### Instalar dependencias
Si en el repositorio se subió el `package.json`:
```bash
npm install
```
Esto instalará `exceljs` u otras dependencias listadas en `package.json`.

Si el `package.json` **no** está en el repositorio (por ejemplo, si se añadió a `.gitignore`), instala la dependencia necesaria manualmente:
```bash
npm install exceljs
```

### Ejecutar el servidor
```bash
node server.js
```

### Probar la aplicación
- Visita en el navegador: `http://localhost:3000/` → debe mostrar el mensaje de ruta raíz.
- Visita: `http://localhost:3000/reporte` → debe iniciar la descarga del archivo Excel.

---

## Archivos importantes
- `server.js`: Código del servidor HTTP con la generación del Excel.

---

## Capturas de la salida

### Servidor escuchando  
![Servidor escuchando]
<img width="1007" height="118" alt="Captura de pantalla 2025-09-06 100819" src="https://github.com/user-attachments/assets/dcc27ce4-4a6d-4193-85f1-d81a82395b6b" />


### Mensaje en ruta raíz (`/`)  
![Ruta raiz]
<img width="644" height="162" alt="Captura de pantalla 2025-09-06 100848" src="https://github.com/user-attachments/assets/35773ff5-4566-4f91-94f8-260ba108f560" />


### Descarga del archivo Excel (`/reporte`)  
![Reporte Excel]
<img width="438" height="152" alt="Captura de pantalla 2025-09-06 100924" src="https://github.com/user-attachments/assets/56962a05-d5c5-44e1-865c-7473ccacc1dd" />


### Archivo Excel generado  
![Archivo Excel]
<img width="746" height="834" alt="Captura de pantalla 2025-09-06 100954" src="https://github.com/user-attachments/assets/1e52d058-1314-4592-a8f6-17a6e90ebde5" />


---

## Tecnologías usadas
- **Node.js** (módulos `fs`, `http`, `zlib`, `stream`).
- **exceljs** (para generación de reportes Excel).

---

