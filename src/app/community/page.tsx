import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function Community() {
    return(
        <>
            <header className="text-center">
                <h1 className='p-4 text-4xl font-semibold'>
                    One shared passion: <span className="">Food</span>
                </h1>
                <p className='p-2 text-3xl'>Join our community and share your favorite recipes!</p>
            </header>
            <main className="text-center">
                <h2 className='text-2xl p-2'>Community Perks</h2>

                <ul className="flex flex-col">
                    <li className="flex flex-col items-center">
                        <Image className="w-50 h-50 rounded-lg" src={mealIcon} alt="A delicious meal" />
                        <p className='text-xl'>Share & discover recipes</p>
                    </li>
                    <li className="flex flex-col items-center">
                        <Image className="w-50 h-50 rounded-lg" src={communityIcon} alt="A crowd of people, cooking" />
                        <p className='text-xl'>Find new friends & like-minded people</p>
                    </li>
                    <li className="flex flex-col items-center">
                        <Image className="w-50 h-50 rounded-lg"
                        src={eventsIcon}
                        alt="A crowd of people at a cooking event"
                        />
                        <p className='text-xl'>Participate in exclusive events</p>
                    </li>
                </ul>
            </main>
        </>
    )
}