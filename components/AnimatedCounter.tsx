"use client";

import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        formattingFn={(amount) => formatAmount(amount)}
        prefix="$"
        end={amount}
        duration={3}
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
