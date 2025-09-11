import Link from "next/link"

export const metadata = {
    title: "Refund Policy | Veda Structure",
}

function page() {
    return (
        <>
            <div className="bg-gradient-to-b from-orange-50 to-yellow-100 min-h-screen flex items-center justify-center py-12 px-6">
                <div className="bg-white max-w-4xl w-full rounded-2xl shadow-xl p-8 md:p-12">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
                        Refund Policy
                    </h1>
                    <p className="text-gray-600 text-center mb-10">
                        At <span className="font-semibold text-yellow-500">VedaStructure</span>, we value our customers
                        and their trust. Please read our refund policy carefully before making
                        any bookings or purchases.
                    </p>

                    {/* Policy Sections */}
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
                                1. Eligibility for Refund
                            </h2>
                            <p>
                                Refunds will be considered only in cases of incorrect payments,
                                double transactions, or technical errors. Please note that
                                consultation fees for astrologers, puja services, and rituals are
                                <span className="font-medium"> non-refundable</span> once the
                                service has been delivered or initiated.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
                                2. Time Frame
                            </h2>
                            <p>
                                Any refund requests must be raised within{" "}
                                <span className="font-medium">7 working days</span> from the date
                                of payment. Requests received after this time will not be
                                considered.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
                                3. Mode of Refund
                            </h2>
                            <p>
                                Approved refunds will be processed back to the{" "}
                                <span className="font-medium">original payment method</span> used
                                during the transaction. Please allow{" "}
                                <span className="font-medium">7-10 business days</span> for the
                                amount to reflect in your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
                                4. Non-Refundable Cases
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Change of mind after booking a service.</li>
                                <li>
                                    Services already delivered (consultation, puja, or ritual).
                                </li>
                                <li>Failure to attend a scheduled consultation or puja.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
                                5. Contact for Refunds
                            </h2>
                            <p>
                                For refund-related queries, please contact us at: <br />
                                <span className="block mt-2 font-medium">
                                    📧 care@vedastructure.com
                                </span>
                                <span className="block font-medium">📞 +91-9634876239</span>
                            </p>
                        </section>
                    </div>

                    {/* Footer note */}
                    <p className="mt-10 text-center text-gray-500 text-sm">
                        This Refund Policy is subject to change without prior notice. Please
                        review it periodically for updates.
                    </p>

                    {/* Any Query Section */}
                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Any Query?
                        </h2>
                        <Link
                            href="/contact"
                            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
