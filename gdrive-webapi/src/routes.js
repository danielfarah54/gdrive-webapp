import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import { logger } from "./logger.js";
import FileHelper from "./fileHelper.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const defaultDownloadsFolder = resolve(__dirname, "..", "downloads");

export default class Routes {
  io;
  constructor(downloadsFolder = defaultDownloadsFolder) {
    this.fileHelper = FileHelper;
    this.downloadsFolder = downloadsFolder;
  }

  setSocketInstance(io) {
    this.io = io;
  }

  async defaultRoute(request, response) {
    response.end("hello world");
  }

  async options(request, response) {
    response.writeHead(204);
    response.end();
  }

  async post(request, response) {
    logger.info("post");
    response.end();
  }

  async get(request, response) {
    const files = await this.fileHelper.getFilesStatus(this.downloadsFolder);
    response.writeHead(200);
    logger.info("get");
    response.end(JSON.stringify(files));
  }

  handler(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const choosen = this[request.method.toLowerCase()] || this.defaultRoute;

    return choosen.apply(this, [request, response]);
  }
}
