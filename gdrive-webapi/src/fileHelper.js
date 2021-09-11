import fs from "fs";

export default class FileHelper {
  static async getFilesStatus(downloadsFolder) {
    const currentFiles = await fs.promises.readdir(downloadsFolder);
    const statuses = await Promise.all(
      currentFiles.map((file) => fs.promises.stat(`${downloadsFolder}/${file}`))
    );

    for (const fileIndex in currentFiles) {
      if (Object.hasOwnProperty.call(currentFiles, fileIndex)) {
        const element = currentFiles[fileIndex];
        
      }
    }
  }
}