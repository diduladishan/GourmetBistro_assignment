// import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="flexCenter mb-24">
//       <div className="padding-container max-container flex w-full flex-col gap-14">
//         <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
//           <Link href="/" className="mb-10">
//             <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
//           </Link>

//           <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
//             {FOOTER_LINKS.map((columns) => (
//               <FooterColumn title={columns.title}>
//                 <ul className="regular-14 flex flex-col gap-4 text-gray-30">
//                   {columns.links.map((link) => (
//                     <Link href="/" key={link}>
//                       {link}
//                     </Link>
//                   ))}
//                 </ul>
//               </FooterColumn>
//             ))}

//             <div className="flex flex-col gap-5">
//               <FooterColumn title={FOOTER_CONTACT_INFO.title}>
//                 {FOOTER_CONTACT_INFO.links.map((link) => (
//                   <Link
//                     href="/"
//                     key={link.label}
//                     className="flex gap-4 md:flex-col lg:flex-row"
//                   >
//                     <p className="whitespace-nowrap">{link.label}</p>

//                     <p className="medium-14 whitespace-nowrap text-blue-70">
//                       {link.value}
//                     </p>
//                   </Link>
//                 ))}
//               </FooterColumn>
//             </div>

//             <div className="flex flex-col gap-5">
//               <FooterColumn title={SOCIALS.title}>
//                 <ul className="regular-14 flex gap-4 text-gray-30">
//                   {SOCIALS.links.map((link) => (
//                     <Link href="/" key={link}>
//                       <Image src={link} alt="logo" width={24} height={24} />
//                     </Link>
//                   ))}
//                 </ul>
//               </FooterColumn>
//             </div>
//           </div>
//         </div>

//         <div className="border bg-gray-20" />
//         <p className="regular-14 w-full text-center text-gray-30">
//           2023 Hilink | All rights reserved
//         </p>
//       </div>
//     </footer>
//   );
// };

// type FooterColumnProps = {
//   title: string;
//   children: React.ReactNode;
// };

// const FooterColumn = ({ title, children }: FooterColumnProps) => {
//   return (
//     <div className="flex flex-col gap-5">
//       <h4 className="bold-18 whitespace-nowrap">{title}</h4>
//       {children}
//     </div>
//   );
// };
// export default Footer;

{
  /* Footer Section */
}
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="w-full bg-black text-white py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              {" "}
              <Image
                src="/restaurant_logo.png"
                alt="restaurant_logo"
                width={70}
                height={70}
              />
              <h3 className="text-2xl font-bold">Gourmet Bistro</h3>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/location_icon.png"
                alt="restaurant_logo"
                width={20}
                height={20}
              />
              <p className="mt-2">
                175b Stephen Street, Yarraville VIC 3013, Australia
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/phone_icon.png"
                alt="phone_icon"
                width={20}
                height={20}
              />
              <p className="mt-2">+61 3 9039 6304</p>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6 text-sm">
          Copyright © 2025 All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
