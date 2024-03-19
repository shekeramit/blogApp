import { Link, } from "react-router-dom";
import Bannar from "./Bannar";
import Blogcatogery from "./Blogcategory";

const callouts = [
    {
      name: 'React',
      description: 'Benefits of building wbsite using react',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'readblog',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'readblog',    
    },
    {
      name: 'ChatGPT uses',
      description: 'ChatGPT (Chat Generative Pre-trained Transformer)',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'readblog',
    },
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'readblog',
    },
    {
      name: 'Tailwind CSS',
      description: 'Journals and note-taking',
      imageSrc: 'https://en.wikipedia.org/wiki/Tailwind_CSS#/media/File:Tailwind_CSS_logo.svg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'readblog',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'readblog',
    },
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'readblog',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'readblog',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'readblog',
    },
  ]
  
  export function Blogmain() {
    return (
      <div className="bg-gray-100">
      <Bannar/>
      <Blogcatogery/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-5 lg:max-w-none lg:py-10">
            <div className="mt-2 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-2 font-bold text-lg text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base text-gray-900">{callout.description}</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 mb-4 rounded-md" ><Link to={`/${callout.href}`}></Link> read more</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }