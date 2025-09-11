'use server';

import { PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { r2Client } from './r2Client';
import { config } from '../config';

const MAX_SIZE_MB = 10; // 5MB limit
const ALLOWED_FILE_TYPE = 'application/pdf';

//upload file
export async function uploadFile(fileData) {
  const { originalFileName, fileType, fileSize, arrayBufferData, fileName } =
    fileData;

  try {
    if (!arrayBufferData || !originalFileName) {
      throw new Error('No file provided');
    }

    //validate file size
    if (fileSize > MAX_SIZE_MB * 1024 * 1024) {
      throw new Error(`File size must not exceed ${MAX_SIZE_MB}MB`);
    }

    // Validate file type
    if (ALLOWED_FILE_TYPE !== fileType) {
      throw new Error('Invalid file type.');
    }

    // Convert arrayBufferData to Buffer
    const buffer = Buffer.from(arrayBufferData);

    const command = new PutObjectCommand({
      Bucket: config.r2.bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: fileType,
      Metadata: {
        originalName: originalFileName,
        uploadedAt: new Date().toISOString(),
      },
    });

    const response = await r2Client.send(command);

    const fileUrl = `${config.r2.publicUrl}/${fileName}`;

    // revalidatePath('/');
    if (response.$metadata.httpStatusCode === 200 && response.ETag) {
      return {
        success: true,
        url: fileUrl,
        message: 'File uploaded successfully',
      };
    }
  } catch (error) {
    console.error('Upload error:', error);
    return {
      success: false,
      message: 'Failed to upload file',
    };
  }
}

//delete file
export async function deleteFile(key) {
  try {
    const command = new DeleteObjectCommand({
      Bucket: config.r2.bucketName,
      Key: key,
    });

    await r2Client.send(command);

    // revalidatePath('/');

    return {
      success: true,
      message: 'File deleted successfully',
    };
  } catch (error) {
    console.error('Delete error:', error);
    return {
      success: false,
      message: 'Failed to delete file',
    };
  }
}
