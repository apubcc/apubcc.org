import ContactUsForm from "./ContactUsForm";

export default function ContactUsPage() {
  return (
    <div className="h-[80svh] bg-black px-4 py-32 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <main className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form Section */}
          <section className="flex flex-col">
            <h1 className="mb-8 text-4xl font-bold text-[#f7730e]">Contact Us</h1>
            <p className="mb-8 text-lg text-white">
              To request a quote, contact us directly or fill out the form and we will get back with you promptly
            </p>

            <ContactUsForm />
          </section>

          {/* Illustration Section */}
          <section className="hidden lg:block">
            <img src="/contact-us-illustration.png" alt="Contact Us Illustration" className="w-full h-full object-cover" width={450} height={450}/>
          </section>
        </main>
      </div>
    </div>
  )
}

