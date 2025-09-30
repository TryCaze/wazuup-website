// app/privacy/page.tsx
import Link from 'next/link';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';

export default function PrivacyPolicy() {
  return (
    <>
    <Header />
    <div className="min-h-screen text-white py-12 my-5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-gray-900/80 border-gray-800 rounded-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Wazuup respects your privacy. <br />This Privacy Policy explains what information we collect, how we use it, and your rights regarding your information.</h2>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
                We do not collect any information from users automatically.
                <br/>
                The only information we may receive is information you voluntarily provide, such as suggestions or feedback about the bot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
                Any information you provide is used solely to improve the bot or respond to your suggestions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="text-gray-300">
                We do not share your information with third parties under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data retention</h2>
            <p className="text-gray-300">
                We retain voluntary information only as long as necessary to address suggestions and improve the bot.
                <br />
                You can request deletion of any information you provide at any time by contacting us at trycaze@proton.me.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
            <p className="text-gray-300 mb-4">
                We implement reasonable measures to protect any voluntary information you provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
                We may update this Privacy Policy from time to time. The latest version will always be posted here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-gray-300">
                For any questions or requests regarding your information, please contact us at <Link href="mailto:trycaze@proton.me" className="text-blue-500 underline">trycaze@proton.me</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}