import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { app } from "../../Config/FirebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ShowToastContext } from "../../context/ShowToastContext";
import { ParentFolderIdContext } from "../../context/ParentFolderIdContext";

function RefineFileModal() {

  // ¿Usar para mandar datos hacia API?
  // const db=getFirestore(app)
    /*await setDoc(doc(db,"Folders",docId),{
        name:folderName,
        id:docId,
        createBy:session.user.email,
        parentFolderId:parentFolderId
    })*/

  const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext)
  const onRefineFile = async (file) => {
    if (file) {
      if (file?.size > 1000000) {
        setShowToastMsg("File is too large")
        return;
      }
      console.log("Uploaded a blob or file!");
      setShowToastMsg('Refining...')}};

  return (
    <div>
      <form method="dialog" className="modal-box p-9 items-center w-[360px] bg-white">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <div
          className="w-full items-center 
        flex flex-col justify-center gap-3">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400" bg>
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => onRefineFile(e.target.files[0])}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RefineFileModal