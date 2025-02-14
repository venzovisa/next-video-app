import VideosList from '@/app/components/VideosList';
import { Video } from "@/app/models";
import Navbar from '@/app/components/NavBar';

const Home = async ({ searchParams }: { searchParams: { search: string } }) => {
  const fetchData = async () => {
    const params = new URLSearchParams(await searchParams || '').toString();
    const response = await fetch(`http://localhost:3000/api/videos?${params}`, {
      headers: {
        Accept: 'application/json',
        method: 'GET'
      }
    });
    return await response.json();
  }

  const videos: Video[] = await fetchData();

  return (
    <>
      <Navbar />

      <VideosList videos={videos} />
    </>
  );
}

export default Home;
