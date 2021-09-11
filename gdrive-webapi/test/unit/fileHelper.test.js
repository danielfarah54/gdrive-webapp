import { describe, test, expect, jest } from "@jest/globals";
import fs from "fs";
import FileHelper from "../../src/fileHelper.js";

import Routes from "../../src/routes.js";

describe("#FileHelper test suite", () => {
  describe("#getFilesStatus", () => {
    test("it should return files statuses in correct format", async () => {
      const statMock = {
        dev: 2055,
        mode: 33204,
        nlink: 1,
        uid: 1000,
        gid: 1000,
        rdev: 0,
        blksize: 4096,
        ino: 3437788,
        size: 1195211,
        blocks: 2336,
        atimeMs: 1631397462828.1807,
        mtimeMs: 1631397462544.1785,
        ctimeMs: 1631397462544.1785,
        birthtimeMs: 1631397462544.1785,
        atime: "2021-09-11T21:57:42.828Z",
        mtime: "2021-09-11T21:57:42.544Z",
        ctime: "2021-09-11T21:57:42.544Z",
        birthtime: "2021-09-11T21:57:42.544Z",
      };

      const mockUser = "danielfarah54";
      process.env.USER = mockUser;

      const filename = "file.png";

      jest
        .spyOn(fs.promises, fs.promises.readdir.name)
        .mockResolvedValue([filename]);

      jest
        .spyOn(fs.promises, fs.promises.stat.name)
        .mockResolvedValue(statMock);

      const result = await FileHelper.getFilesStatus("/tmp");
      const expectedResult = [
        {
          file: filename,
          lastModified: statMock.birthtime,
          owner: mockUser,
          size: "1.2 MB",
        },
      ];

      expect(fs.promises.stat).toHaveBeenCalledWith(`/tmp/${filename}`);
      expect(result).toMatchObject(expectedResult);
    });
  });
});
