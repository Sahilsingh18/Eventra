import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">GET YOUR WEDDING PACKAGE NOW</h2>
          <p className="regular-16 text-gray-10">Customizable According to your Preference</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
          <Link href="/pricing_page" target="_blank" rel="noopener noreferrer"> {/* Replace '/desired-page' with your target route */}
              <Button 
                type="button"
                title="Wedding Package"
                variant="btn_white"
                full
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
}

export default GetApp;
