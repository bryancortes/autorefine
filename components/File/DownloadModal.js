import React from "react";

function DownloadModal() {
    const handleDownload = () => {
        // Aquí puedes agregar la lógica para descargar el archivo Excel
        console.log("Downloading Excel file...");
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
