import React from "react";
import {Hero, PopularProducts, CustomerReviews, Footer, Services, SpecialOffer, Subscribe, SuperQuality} from './sections'
import Nav from "./components/Nav";


const App = () => {
    return (
        <main className="relative">
            <Nav/>
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding"><PopularProducts /></section>
            <section className="padding"><SuperQuality /></section>
            <section className="padding-x py-10"><Services /></section>
            <section className="padding"><SpecialOffer /></section>
            <section className="bg-blue-100 padding"><CustomerReviews /></section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8 text-white"><Footer /></section>
        </main>
    );
};
[]
export default App;