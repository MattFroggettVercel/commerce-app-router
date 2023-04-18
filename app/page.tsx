import Image from "next/image";
import { Suspense, useState } from "react";
import Price from "@/components/Price";
import Description from "@/components/Description";
import Reviews from "@/components/Reviews";
import ProductTitle from "@/components/ProductTitle";
import Images from "@/components/Images";

export const runtime = "experimental-edge";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                {/* @ts-expect-error Server Component */}
                <ProductTitle />
                <div className="text-xl font-medium text-gray-900">
                  {/* @ts-expect-error Server Component */}
                  <Price />
                </div>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                {/* @ts-expect-error Server Component */}
                <Reviews />
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              {/* @ts-expect-error Server Component */}
              <Images />
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>
                {/* @ts-expect-error Server Component */}
                <Description />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
