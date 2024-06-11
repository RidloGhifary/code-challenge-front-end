"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import carsModel from "@/data/carsModel.json";

export default function CarsModel() {
  const [carIndex, setCarIndex] = useState(1);

  return (
    <section className="p-4 py-14">
      <SectionTitle
        subTitle="Vehicle model"
        title="Our rental fleet"
        description="Explore our diverse range of high-quality vehicles available for rent. From luxury sedans to compact cars, we offer a variety of models to suit your needs and ensure a comfortable and enjoyable driving experience."
      />

      <div className="mt-16 grid grid-cols-1 justify-center gap-2 lg:grid-cols-4">
        <div className="border-t border-mainColor">
          {carsModel?.map((car) => (
            <p
              onClick={() => setCarIndex(car.id)}
              key={car.id}
              className={`${
                car.id === carIndex && "bg-mainColor text-white"
              } cursor-pointer border-x border-b border-mainColor p-4 text-center transition-all hover:bg-mainColor hover:text-white`}>
              {car.name}
            </p>
          ))}
        </div>
        <div className="col-span-2">
          <Image
            src={carsModel[carIndex - 1].image}
            alt="car"
            width={400}
            height={400}
            loading="lazy"
            className="aspect-auto object-contain w-full"
            onLoad={() => {
              <p>Loading...</p>;
            }}
          />
        </div>
        <table className="w-full border-collapse border border-mainColor">
          <caption className="w-full caption-top bg-mainColor p-4 text-xl font-semibold text-white">
            ${carsModel[carIndex - 1].price} / day
          </caption>
          <tbody>
            <tr>
              <td>Seats</td>
              <td>{carsModel[carIndex - 1].seats}</td>
            </tr>
            <tr>
              <td>Transmition</td>
              <td>{carsModel[carIndex - 1].transmission}</td>
            </tr>
            <tr>
              <td>Fuel</td>
              <td>{carsModel[carIndex - 1].fuel}</td>
            </tr>
            <tr>
              <td>Bagage</td>
              <td>{carsModel[carIndex - 1].baggage}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{carsModel[carIndex - 1].year}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
