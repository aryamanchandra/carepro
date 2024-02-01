import React, { useState } from 'react';
import { Grid, Paper, Typography, LinearProgress, Stack, Box } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const DocumentUploadPage = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [files, setFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    // Simulate file upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
      }
      setUploadProgress(progress);
    }, 1000);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            border: '1px dashed #E5E7EB',
            backgroundColor: isDragActive ? '#f0f0f0' : '#ffffff',
            marginTop:"20px"
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Stack direction="column" textAlign="center">
          <Typography variant="h6" color="textSecondary">
            {isDragActive ? 'Drop your files here' : 'Drop files here or browse'}
          </Typography>
          <Typography variant='subtitle2'>Maximum size: 50MB</Typography>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ padding: '20px' }}>
          <Stack direction="row" alignItems="center" sx={{marginBottom:"10px"}}>
            <FileUploadOutlinedIcon sx={{border:"1px solid #E5E7EB", padding:"8px", borderRadius:"5px", marginRight:"5px"}}  />
            <Stack direction="column">
            <Typography variant="subtitle2">patient-insurance.png</Typography>
            <Typography variant="body2">7KB</Typography>
            </Stack>
            <PauseIcon sx={{marginLeft:"auto"}} />
            <DeleteIcon />
          </Stack>
          <LinearProgress variant="determinate" value={uploadProgress} />

          <Stack direction="row" alignItems="center" sx={{marginBottom:"10px", marginTop:"20px"}}>
            <InsertDriveFileIcon sx={{border:"1px solid #E5E7EB",color:"#3497F9", padding:"8px", borderRadius:"5px", marginRight:"5px"}}  />
            <Stack direction="column">
            <Typography variant="subtitle2">patient-insurance.png</Typography>
            <Typography variant="body2">7KB</Typography>
            </Stack>
            <PauseIcon sx={{marginLeft:"auto"}} />
            <DeleteIcon />
          </Stack>
          <Stack direction="row" alignItems="center" sx={{marginBottom:"10px", marginTop:"20px"}}>
            <InsertDriveFileIcon sx={{border:"1px solid #E5E7EB",color:"#3497F9", padding:"8px", borderRadius:"5px", marginRight:"5px"}}  />
            <Stack direction="column">
            <Typography variant="subtitle2">patient-insurance.png</Typography>
            <Typography variant="body2">7KB</Typography>
            </Stack>
            <PauseIcon sx={{marginLeft:"auto"}} />
            <DeleteIcon />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DocumentUploadPage;
