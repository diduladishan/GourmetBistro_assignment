"use client";

const Marquee = () => {
  return (
    <div className="fixed bottom-0 w-full bg-yellow-500 text-black py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-lg font-semibold">
        Get 10% Off Your First Order – Call to Reserve! &nbsp; • &nbsp; Special
        Weekend Offers! &nbsp; • &nbsp; Book Your Table Now!
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
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
