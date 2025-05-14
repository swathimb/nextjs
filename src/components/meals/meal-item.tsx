import Link from 'next/link';
import Image from 'next/image';


export default function MealItem({ title, slug, image, summary, creator }: 
  { title: string, slug: string, image: string, summary: string, creator: string }) {
  return (
    <article className="flex flex-col h-full gap-2 rounded shadow-md bg-white">
      <header>
        <div className="relative w-full h-50 rounded overflow-hidden">
          {/* Ensures image fills this 192px height box without escaping */}
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="mt-2 px-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-700">by {creator}</p>
        </div>
      </header>
      <div className="px-2 text-sm flex-">
        <p className="line-clamp-3">{summary}</p>
      </div>
      <footer className="mt-auto p-2">
        <Link href={`/meals/${slug}`} className="hover:text-blue-600">
          View Details
        </Link>
      </footer>
    </article>
  );
}