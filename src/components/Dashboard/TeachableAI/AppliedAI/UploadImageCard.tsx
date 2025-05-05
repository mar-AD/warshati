"use client";

import { useTranslations } from "next-intl";

const UploadImageCard = ({
  onImageUpload,
  isDragging,
  dragProps
}: {
  onImageUpload: () => void,
  isDragging: boolean,
  dragProps: any
}) => {
  const t = useTranslations("appliedAI.upload_image_card");
  return (
    <div className="flex items-center justify-center min-w-full md:min-w-[40%] lg:md:min-w-[25%] " onClick={onImageUpload}
      {...dragProps}>
      <label htmlFor="dropzone-file"
        className={
          `flex flex-col items-center justify-center w-full h-max border-2\
                        border-gray-300 border-dashed rounded-lg cursor-pointer  ${!isDragging ? 'dark:bg-gray-700 bg-gray-50' : 'dark:bg-purple-800 bg-purple-200'} hover:bg-gray-100\
                        dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`
        }>
        <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{t("click")} </span>{t("drag")}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF</p>
        </div>
      </label>
    </div>
  )
}

export default UploadImageCard;