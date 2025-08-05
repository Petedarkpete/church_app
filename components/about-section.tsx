import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-12 bg-gradient-to-b from-red-100 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/about.jpg"
              alt="Pastor and congregation"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Church of God, Githurai 45</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For over 50 years, Church of God, Githurai 45 has been a beacon of hope and love in our community. We believe
              in the transformative power of God&apos;s grace and are committed to helping people discover their purpose and
              grow in their relationship with Jesus Christ.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is simple: to love God, love people, and serve our community. We welcome everyone, regardless
              of where they are in their faith journey.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">500+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">50+</div>
                <div className="text-gray-600">Years Serving</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
