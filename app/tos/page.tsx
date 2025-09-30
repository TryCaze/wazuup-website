import Link from 'next/link';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 my-5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Link 
                        href="/"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold mb-4">Terms of Service for Wazuup</h1>
                    <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                {/* Content */}
                <div className="bg-gray-800 rounded-lg p-8 space-y-8">
                    <section>
                        <p className="text-gray-300 mb-4">
                            By using Wazuup, you agree to these Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>You must be at least 13 years old (or older depending on Discord&apos;s rules which vary by countries).</li>
                            <li>You must comply with Discord&apos;s Terms of Service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Usage Rules</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Do not abuse the bot, spam commands, or use it for illegal purposes.</li>
                            <li>Do not copy the bot.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>All code, assets, and content of Wazuup are open source.</li>
                            <li>Users may not claim ownership of Wazuup.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Disclaimers</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Wazuup is provided &quot;as-is&quot;. We are not liable for any damages, server issues, or data loss.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>We reserve the right to block or remove users who violate these terms.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Changes</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Terms may be updated. Continued use constitutes acceptance.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
                        <p className="text-gray-300">
                            Questions or concerns: <Link href="mailto:trycaze@proton.me" className="text-blue-500 underline">trycaze@proton.me</Link>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
