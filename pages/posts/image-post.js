import Image from 'next/image';

const ImagePost = () => (
  <Image
    src="/images/profile.jpeg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="My First NextJS App / Images"
  />
);

export default ImagePost;
