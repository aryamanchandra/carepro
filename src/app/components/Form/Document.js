import React, { useState } from 'react';
import { Grid, Paper, Typography, LinearProgress } from '@mui/material';
import { useDropzone } from 'react-dropzone';

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
        <Paper
          sx={{
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            border: '2px dashed #aaa',
            backgroundColor: isDragActive ? '#f0f0f0' : '#ffffff',
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Typography variant="h5" color="textSecondary">
            {isDragActive ? 'Drop your files here' : 'Drag and drop files here or click to browse'}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Upload Progress
          </Typography>
          <LinearProgress variant="determinate" value={uploadProgress} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DocumentUploadPage;
