import CallToAction from '../components/CallToAction';

export default function News() {
  return (
    <div
      className="min-h-screen max-w-2xl mx-auto flex items-center 
    justify-center flex-col gap-6 p-3"
    >
      <h1 className="text-3xl text-semibold text-center my-7">News</h1>
      <p className="text-md text-gray-500">
        Read our latest news, articles and blog posts
      </p>
      <CallToAction />
    </div>
  );
}
