import React from "react";

function DownloadModal({ reportPath }) {
    const handleDownload = async () => {
        const fileUrl = 'http://3.22.233.90:5000/ttc-api/download_excel'; // Asegúrate de que esta es la URL correcta

        try {
            const response = await fetch(fileUrl, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob(); // Convertir la respuesta en un Blob

            // Crear un URL para el Blob
            const blobUrl = window.URL.createObjectURL(blob);

            // Crear un enlace temporario y hacer clic en él para descargar el archivo
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = 'prueba.xlsx'; // Asignar nombre al archivo descargado
            document.body.appendChild(link);
            link.click();

            // Limpiar y remover el enlace
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);

            console.log("Excel file downloaded successfully.");
        } catch (error) {
            console.error('Error during the file download:', error);
        }
    };
    
    return (
        <div>
            <form method="dialog" className="modal-box p-10 items-center bg-white">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => window.download_modal.close()}>
                    ✕
                </button>
                <div className="w-full items-center flex flex-col justify-center gap-3">
                    <h2 className="text-xl font-bold">Download Excel File</h2>
                    <button
                        className="bg-blue-500 text-white rounded-md p-2 px-3 w-full"
                        onClick={handleDownload}
                    >
                        Download Excel File
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DownloadModal;
