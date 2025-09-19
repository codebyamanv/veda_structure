import BookSection from '@/components/Bracelet/BookSection'
import BraceletCard from '@/components/Bracelet/BraceletCard'
import BraceletGenstone from '@/components/Bracelet/BraceletGenstone'
import BraceletHero from '@/components/Bracelet/BraceletHero'
import Download from '@/components/Download'

export default function Bracelet() {
    return (
        <>
            {/* <BraceletHero /> */}
            <div>
                <img src="/images/Artboard-1.jpg" className='max-h-[560px] w-full overflow-hidden object-cover object-center' alt="" />
            </div>
            <BraceletCard />
            <BraceletGenstone />
            <BookSection />
            <Download />
        </>
    )
}
