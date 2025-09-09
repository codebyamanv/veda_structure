import BookSection from '@/components/Bracelet/BookSection'
import BraceletCard from '@/components/Bracelet/BraceletCard'
import BraceletGenstone from '@/components/Bracelet/BraceletGenstone'
import BraceletHero from '@/components/Bracelet/BraceletHero'
import Download from '@/components/Download'

export default function Bracelet() {
    return (
        <>
            <BraceletHero />
            <BraceletCard />
            <BraceletGenstone />
            <BookSection />
            <Download />
        </>
    )
}
