import Image from "next/image";
import React, { useContext, useState } from "react";
import { ShowToastContext } from "../../context/ShowToastContext";

function RefineFileModal() {
    const [fileName, setFileName] = useState(null);
    const [idTest, setIdTest] = useState('');
    const [url, setUrl] = useState('');
    const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext);

    const onCreate = async () => {
        console.log(fileName);
        console.log(idTest);
        console.log(url);

        if (!fileName) {
          setShowToastMsg('Please select a file.');
          return;
        }

        const formData = new FormData();
        formData.append('file', fileName);
        formData.append('original_url', url);
        formData.append('id_pruebas', idTest);
        setShowToastMsg('Refining...');

        try {
          const response = await fetch('http://127.0.0.1:5000/ttc-api/upload', { //url api
              method: 'POST',
              body: formData,
          });
  
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const result = await response.json();
          setShowToastMsg('Refinement complete. Check console for details.');
          console.log(result);
          // Cerrar el modal actual y abrir el nuevo modal
          window.refine_file.close();
          window.download_modal.showModal();
        } catch (error) {
            console.error('Error during the fetch operation:', error);
            setShowToastMsg('Error refining the file.');
        }
    };

    const handleFileChange = (e) => {
        setFileName(e.target.files[0]);
    };

    return (
        <div>
            <form method="dialog" className="modal-box p-10 items-center bg-white">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => window.refine_file.close()}>
                    ✕
                </button>
                <div className="w-full items-center flex flex-col justify-center gap-3">
                    <Image src="/refine.png" alt="refine" width={100} height={100} />
                    <input
                        type="file"
                        className="p-2 border-[1px] outline-none bg-slate-200 rounded-md w-full"
                        onChange={handleFileChange}
                    />
                    <input
                        type="text"
                        placeholder="ID"
                        className="p-2 border-[1px] outline-none bg-slate-200 rounded-md"
                        onChange={(e) => setIdTest(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="URL"
                        className="p-2 border-[1px] outline-none bg-slate-200 rounded-md"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white rounded-md p-2 px-3 w-full"
                        onClick={(e) => {
                            e.preventDefault();
                            onCreate();
                        }}
                    >
                        Refine
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RefineFileModal;
