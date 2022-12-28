import React from 'react';
import Navbar from "../NavBar/Navbar";
import MainBanner from '../Main/MainBanner';
import Partner from '../Partner/Partner';
import WhatWeOffer from '../Common/WhatWeOffer';
import AboutUsContent from '../About/AboutUsContent';
import FunFactsArea from '../Common/FunFactsArea';
import PricingStyleFour from '../PricingPlans/PricingStyleFour';
import FeedbackStyleFour from '../Common/FeedbackStyleFour';
import BlogCard from '../Common/BlogCard';
import Newsletter from '../Common/Newsletter';
import Footer from "../Footer/Footer";
import OurFeatures from "../Features/OurFeatures";
import Cta from "../Common/Cta";
///USE
const Index = () => {
        return (
            <>
                    <Navbar />

                    <MainBanner />

                    <Partner />

                    <WhatWeOffer />

                    <OurFeatures/>

                    <AboutUsContent />

                    <Cta/>

                    <FunFactsArea />


                    <PricingStyleFour />

                    <FeedbackStyleFour />

                    <BlogCard />

                    <Newsletter />

                    <Footer />
            </>
        )
}

export default Index;