import React from 'react';

function ModuleForm() {
  return (
    <div className="bg-gray-200 border-violet-500 border-2 shadow-md rounded-md p-4 w-full">
      <div className="space-y-4">
        <div className="flex gap-5">
          <label htmlFor="module-title" className="text-gray-700 w-40">Title of the module:</label>
          <input type="text" id="module-title" placeholder="What is Laravel?" className="border-none border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="flex gap-5">
          <label htmlFor="module-cost" className="text-gray-700 w-40">Cost of the module:</label>
          <input type="text" id="module-cost" placeholder="$15" className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="flex gap-5">
          <label htmlFor="module-description" className="text-gray-700 w-40">Description for Module:</label>
          <textarea id="module-description" placeholder="In this lesson we will discussion about Laravel" className="border border-gray-300 rounded-md p-2 h-24 w-full" />
        </div>
        <div className="flex gap-5">
          <label className="text-gray-700 w-40">Upload your video here:</label>
          <div className="flex  items-center border-2 border-violet-500 border-dashed rounded-md p-2 w-full">
            <label htmlFor="video-upload" className="flex-1 cursor-pointer">
              <div className='flex justify-center items-center'>
            <input type="file" id="video-upload" className="hidden" />
            <img src="/galleryimg.png" alt="img" className="max-h-32 md:max-h-48" />
              </div>
            Click to upload your videos</label>

          </div>
        </div>
        <div className='flex gap-5'>
        <label className="text-gray-700 w-40">Upload your Quizzes here:</label>

          <div className="flex  items-center border-2 border-violet-500 border-dashed rounded-md p-2 w-full">
              <label htmlFor="video-upload" className="flex-1 cursor-pointer">
                <div className='flex justify-center items-center'>
              <input type="file" id="video-upload" className="hidden" />
              <img src="/galleryimg.png" alt="img" className="max-h-32 md:max-h-48" />
                </div>
              Click to upload your videos</label>

            </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleForm;