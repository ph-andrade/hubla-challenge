import api from '@/services/api';
import { CenterContainer } from '@/styles/components/CenterContainer';
import React, { useState } from 'react'

import { FileForm } from '../styles/components/ExportFile'

const ExportFile: React.FC<{loadSellers: Function}> = ({
  loadSellers, 
}) => {
  const [file, setFile] = useState<any>();
  
  function setSelectedFile(selectedFile?: File){
    setFile(selectedFile);

    console.log(file);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", "file");
    formData.append("file", file);

    const response = await api.post('transaction/import', formData);

    if(response.status === 200) {
      loadSellers();
    }
  };


  return (
    <FileForm onSubmit={handleSubmit}>
      <CenterContainer>
        <input 
          type="file" 
          onChange={(e) => setSelectedFile(e.target?.files?.[0])} 
        />
        <button disabled={!file}>Upload a file</button>
      </CenterContainer>
    </FileForm>
  )
}

export default ExportFile