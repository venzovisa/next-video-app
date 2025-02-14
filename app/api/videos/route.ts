import { Video } from "@/app/models";
import { readdir, readFile } from "fs/promises";
import { NextRequest } from "next/server";
import path from "path";
const __dirname = path.resolve();

const loadFiles = async (): Promise<Video[]> => {
  const serializedData: Video[] = [];
  const folders = await readdir(`${__dirname}/public/videos/`);
  if (!folders) return [];

  try {
    for await (const item of folders) {
      const files = await readdir(`${__dirname}/public/videos/${item}`);
      const videos = files.filter((item) => item.endsWith(".mp4"));
      const images = files.filter(
        (item) => item.endsWith(".jpg") || item.endsWith(".png")
      );

      if (images.length === 0 || videos.length === 0) continue;

      const json = files.filter((item) => item.endsWith(".json"));
      const { title, filename, date, liked } = JSON.parse(
        await readFile(`${__dirname}/public/videos/${item}/nfo.json`),
        { encode: "utf-8" }
      );

      serializedData.push({
        title: title || filename,
        filename,
        date,
        liked,
        url: `${item}/${videos[0]}`,
        path: item,
      });
    }
  } catch (err) {
    console.log("Error while read files from the disk", err);
  }

  return serializedData;
};

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.get("search") || "";

  const serializedData = await loadFiles();

  const filtered = serializedData.filter((video) =>
    video.title.toLocaleLowerCase().includes(params.toLocaleLowerCase())
  );

  return new Response(JSON.stringify(params ? filtered : serializedData), {
    status: 200,
  });
}
