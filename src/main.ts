import Ffmpeg from "fluent-ffmpeg";
import { getUrl } from "./lib/geturl";

const DEFAULT_FPS: number = 18;
const DEFAULT_DURATION: number = 3;
const DEFAULT_WIDTH: number = 320;
const DEFAULT_START: number = 0; // Default start of GIF to beginning of video

export const generateGif = async (
  url: string,
  outputFile: string,
  options?: {
    startInSeconds?: number;
    duration?: number;
    fps?: number;
    width?: number;
  }
): Promise<string> => {
  const videoUrl: string = await getUrl(url);

  return new Promise(async (resolve, reject) => {
    return Ffmpeg()
      .input(videoUrl)
      .inputOptions([`-ss ${options?.startInSeconds || DEFAULT_START}`])
      .outputOptions([
        `-t ${options?.duration || DEFAULT_DURATION}`,
        `-vf fps=${options?.fps || DEFAULT_FPS},scale=${
          options?.width || DEFAULT_WIDTH
        }:-1:flags=lanczos`,
      ])
      .noAudio()
      .output(outputFile)
      .on("end", () => {
        resolve(outputFile);
      })
      .on("error", reject)
      .run();
  });
};
