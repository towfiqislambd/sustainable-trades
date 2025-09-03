"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react'
import TradeLayout from '../../TradeLayout';

const page = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab") as "Pending"
  return (
    <div>
      <TradeLayout initialTab={tabParam ?? "Pending"}>
        <div className="">
          
        </div>
        <div className="">

        </div>
        <div className="">

        </div>
        <div className="">

        </div>
      </TradeLayout>
    </div>
  );
}

export default page