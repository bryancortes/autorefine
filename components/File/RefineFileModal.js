import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { app } from "../../Config/FirebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ShowToastContext } from "../../context/ShowToastContext";
import { ParentFolderIdContext } from "../../context/ParentFolderIdContext";

function RefineFileModal() {
    const [fileName,setFileName]=useState();
    const [idTest,setIdTest]=useState();
    const [url,setUrl]=useState();
    const {showToastMsg,setShowToastMsg}=useContext(ShowToastContext)
    // const {data:session}=useSession();

    const onCreate=async()=>{
        console.log(fileName)
        console.log(idTest)
        console.log(url)
        // ¿Usar para mandar datos hacia API?
        /*await setDoc(doc(db,"Folders",docId),{
            name:folderName,
            id:docId,
            createBy:session.user.email,
            parentFolderId:parentFolderId
        })*/
        setShowToastMsg('Refining...')
    }

  return (
    <div>
      <form method="dialog" className="modal-box p-10 items-center bg-white">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className="w-full items-center 
        flex flex-col justify-center gap-3">
          <Image src="/refine.png" alt="refine" width={100} height={100} />
          <input
            type="text"
            placeholder="File Name"
            className="p-2 border-[1px] outline-none bg-slate-200 rounded-md"
            onChange={(e)=>setFileName(e.target.value)}
          />
          <input
            type="text"
            placeholder="ID"
            className="p-2 border-[1px] outline-none bg-slate-200 rounded-md"
            onChange={(e)=>setIdTest(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL"
            className="p-2 border-[1px] outline-none bg-slate-200 rounded-md"
            onChange={(e)=>setUrl(e.target.value)}
          />
          <button className="bg-blue-500
          text-white rounded-md p-2 px-3 w-full"
          onClick={()=>onCreate()}
          >Refine</button>
        </div>
      </form>
    </div>
  )
}

export default RefineFileModal