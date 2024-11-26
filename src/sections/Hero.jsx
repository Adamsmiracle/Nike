import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)



    return (
        <section
            id="home"
            className="w-full flex lg:flex-row gap-10 max-container flex-col justify-center min-h-screen"
        >
            <div className="relative flex-col justify-center xl:w-2/5 items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-red-400">
                    Our Summer Collection
                </p>
                <h1 className=" mt-10  text-8xl max-sm:text-[52px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-red-400 inline-block mt-3">
                        Nike
                    </span>{" "}
                    Shoes
                </h1>
                <p className="font-montserrat text-gray-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort and
                    innovation for your active life.
                </p>
                <Button label="Shop now" iconURL={arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((item, index) => (
                        <div key={item.label}>
                            <p className="text-3xl font-palanquin font-bold">
                                {item.value}
                            </p>
                            <p className="leading-7 font-montserrat text-slate-gray">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="shoe collection"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />
                <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe, index) => (
                        <div key={shoe}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShoeImage={(shoe) => {setbigShoeImg(shoe)}}
                                bigShoeImage={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;