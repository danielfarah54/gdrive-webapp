import fs from "fs";
import prettyBytes from "pretty-bytes";

export default class FileHelper {
  static async getFilesStatus(downloadsFolder) {
    const currentFiles = await fs.promises.readdir(downloadsFolder);
    const statuses = await Promise.all(
      currentFiles.map((file) => fs.promises.stat(`${downloadsFolder}/${file}`))
    );

    const fileStatuses = [];
    for (const fileIndex in currentFiles) {
      const { birthtime, size } = statuses[fileIndex];
      fileStatuses.push({
        file: currentFiles[fileIndex],
        lastModified: birthtime,
        owner: process.env.USER,
        size: prettyBytes(size),
      });
    }

    return fileStatuses;
  }
}
