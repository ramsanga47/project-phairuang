import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <>
    <Header />
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="lg:max-w-3xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">About us</h2>

            <div class="mt-20">
                <blockquote>
                    <p class="text-2xl leading-relaxed text-black md:leading-relaxed md:text-3xl">“Welcome to Phairuang, your trusted destination for seamless real estate transactions. At Phairuang, we empower users to effortlessly buy or sell real estate through our innovative web applications. Our journey is fueled by a passion for revolutionizing the real estate industry, making transactions simpler, faster, and more transparent for all. With a commitment to user satisfaction and cutting-edge technology, we strive to redefine the real estate experience for buyers and sellers alike. Join us at Phairuang and embark on a journey where convenience meets excellence in real estate transactions.”</p>
                </blockquote>
                <div class="flex items-center mt-16">
                    <p class="text-lg font-semibold text-black">Our App founders</p>
                    <p class="ml-3 text-lg text-gray-600"></p>
                </div>
            </div>

            <div class="flex items-center mt-12 space-x-4">
                <div class="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-fuchsia-600">
                    <img class="object-cover w-20 h-20 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-1.jpg" alt="" />
                </div>

                <div class="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-transparent">
                    <img class="object-cover w-20 h-20 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-2.jpg" alt="" />
                </div>

                <div class="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-transparent">
                    <img class="object-cover w-20 h-20 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-3.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default About