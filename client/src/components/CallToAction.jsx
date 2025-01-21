import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div
      className="flex flex-col sm:flex-row p-3 border border-teal-500 
      justify-center items-center rounded-tl-3xl rounded-bl-3xl text-center"
    >
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Whant to know more about sport? Just Simple:
        </h2>
        <p className="text-gray-500 my-2">
          checkout these resources whith Latest news
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Latest News
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://dlabs.ai/wp-content/uploads/2021/01/JS-w-Machine-Learning.png" />
      </div>
    </div>
  );
}
