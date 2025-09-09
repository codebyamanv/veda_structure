import RudraBanner from '@/components/Rudraksha/RudraBanner'
import RudraCategory from '@/components/Rudraksha/RudraCategory'
import RudraProducts from '@/components/Rudraksha/RudraProducts'
import RudraSlider from '@/components/Rudraksha/RudraSlider'

export default function page() {
    return (
        <>
            <RudraBanner />
            <RudraProducts />
            <RudraCategory />
            <RudraSlider />
        </>
    )
}
