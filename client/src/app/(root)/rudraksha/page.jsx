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
            <section className='max-w-4xl mx-auto mt-20 px-4'>
                <h4 className='text-3xl font-semibold text-[#b9924e] mb-4 text-center'>Frequently Asked Questions</h4>
                <div className='space-y-4'>
                    <div className="collapse collapse-arrow bg-base-100 border border-yellow-200 rounded-xl">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">How do I create an account?</div>
                        <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-yellow-200 rounded-xl">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                        <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-yellow-200 rounded-xl">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                </div>
            </section>
        </>
    )
}
