import Image from "next/image";
import React, { useState } from "react";
import menu from "../data/menu";
import CreateFolderModal from "./Folder/CreateFolderModal";
import UploadFileModal from "./File/UploadFileModal";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import RefineFileModal from "./File/RefineFileModal";
import DownloadModal from "./File/DownloadModal";  // Importa el nuevo modal

function SideNavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();
  const onMenuClick = (item, index) => {
    setActiveIndex(index);
    router.push('/')
  }
  return session && (
    <div
      className="w-[200px]
    bg-white h-screen sticky top-0
    z-10 shadow-blue-200 shadow-md
    p-5"
    >
      <div className="flex justify-center">
        <Image src="/logo.png" alt="logo"
          className="cursor-pointer"
          width={150} height={60}
          onClick={() => router.push('/')} />
      </div>
      <button
        onClick={() => window.upload_file.showModal()}
        className="flex gap-2 items-center text-[13px]
        bg-blue-600 p-2 text-white rounded-md px-3
        hover:scale-105 transition-all mt-5 w-full justify-center"
      >
        Add New File
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button
        className="flex gap-2 items-center text-[13px]
        bg-blue-400 p-2 text-white rounded-md px-3
        hover:scale-105 transition-all mt-1 w-full justify-center"
        onClick={() => window.create_folder.showModal()}
      >
        Create Folder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>
      </button>
      <button
        className="flex gap-2 items-center text-[13px]
        bg-green-500 p-2 text-white rounded-md px-3
        hover:scale-105 transition-all mt-1 w-full justify-center"
      // Reemplazar onClick() con la funcion para mandar API hacia Selenium
        onClick={() => window.refine_file.showModal()}
      >
        Refine File
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="size-6">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
      </button>

      <div className="mt-7">
        {menu.list.map((item, index) => (

          <h2
            key={index}
            onClick={() => onMenuClick(item, index)}
            className={`flex gap-2 items-center
            p-2 mt-3 text-gray-500 rounded-md cursor-pointer
            hover:bg-blue-500 hover:text-white
            ${activeIndex == index ? 'bg-blue-500 text-white'
                : null}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.logo}
              />
            </svg>
            {item.name}</h2>

        ))}
      </div>

      <dialog id="refine_file" className="modal">
        <RefineFileModal />
      </dialog>
      <dialog id="create_folder" className="modal">
        <CreateFolderModal />
      </dialog>
      <dialog id="upload_file" className="modal">
        <UploadFileModal
          closeModal={() => window.upload_file.close()} />
      </dialog>
      <dialog id="download_modal" className="modal">  {/* Nuevo modal */}
        <DownloadModal />
      </dialog>
    </div>
  );
}

export default SideNavBar;
