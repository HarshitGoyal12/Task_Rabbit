import React from 'react'

function imageUpload(){
    //adding files
    window.addEventListener('load', function() {
        document.querySelector('input[type="file"]').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img = document.querySelector('img');
                img.onload = () => {
                    URL.revokeObjectURL(img.src);  // no longer needed, free memory
                }
      
                img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            }
        });
      });
  //validating file
      function validateFileType() {
        var selectedFile = document.getElementById('fileInput').files[0];
        var allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

        if (!allowedTypes.includes(selectedFile.type)) {
           alert('Invalid file type. Please upload a JPEG, PNG, or PDF file.');
           document.getElementById('fileInput').value = '';
        }
     }

    return (
        <div> 
          <input type='file' />
          <img id="myImg" src="#" onChange={validateInput}/>
        </div>
    )
}
export default imageUpload