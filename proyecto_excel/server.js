const http = require("http");
const ExcelJS = require("exceljs");

const server = http.createServer(async (req, res) => {
    if (req.url === "/reporte") {
        try {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet("Ventas");

            worksheet.addRow(["Producto", "Cantidad", "Precio"]);

            for (let i = 1; i <= 20; i++) {
                worksheet.addRow([`Producto ${i}`, i * 2, i * 5]);
            }

            res.writeHead(200, {
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "Content-Disposition": "attachment; filename=reporte.xlsx"
            });

            await workbook.xlsx.write(res);

            res.end();
        } catch (error) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Error al generar el reporte: " + error.message);
        }
    } else {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Visita /reporte para descargar el Excel");
    }
});

server.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
