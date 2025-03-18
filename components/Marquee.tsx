"use client";

const Marquee = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#fff7f1] text-black py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-lg">
        Get 10% Off Your First Order – Call to Reserve! &nbsp; • &nbsp; Special
        Weekend Offers – Limited Time Only! &nbsp; • &nbsp; Book Your Table Now
        and Enjoy Exclusive Discounts! &nbsp; • &nbsp; Don't Miss Out – Call Now
        to Secure Your Spot!
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 50s linear infinite; /* Increased time for slower movement */
        }
      `}</style>
    </div>
  );
};

export default Marquee;
