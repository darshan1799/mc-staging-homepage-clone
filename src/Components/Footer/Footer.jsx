function Footer() {
  return (
    <>
      <section className="page-footer lg:h-[514px] bg-[#162741] mt-24">
        <div className="page-footer-style   h-full ">
          <div className="footer-top grid x-580:grid-cols-2 x-990:grid-cols-4 xl:grid-cols-[342px_342px_228px_auto] lg:h-[433px] border-b-2 border-gray-700 xl:px-12 px-5 pb-10 lg:pb-0">
            <div className="ft-content flex items-start pt-8 lg:pt-28">
              <img
                src="asset 16.png"
                alt=""
                className="x-990:w-4/5 lg:w-5/6 xl:w-auto"
              />
            </div>

            <div className="ft-content pt-8 lg:pt-28">
              <h1 className="text-[21px] font-d text-white font-semibold">
                Information
              </h1>
              <p className="mt-3 text-[#B8B8B9]">
                16775 Addison Road <br /> Suite 450 <br /> Addison, TX 75001
              </p>
              <p className="mt-4 text-[#B8B8B9]">Email: info@uscamerapro.com</p>

              <a
                href=""
                className="text-[#A63A3B] text-[25.6px] font-semibold inline-block mt-4"
              >
                (469) 836-3180
              </a>
            </div>

            <div className="ft-content pt-8 lg:pt-28">
              <h1 className="text-[21px] font-d text-white font-semibold">
                Let Us Help You
              </h1>
              <a className="mt-3 block text-[#B8B8B9]">FAQs</a>
              <a className="mt-3 block text-[#B8B8B9]">Shipping And Returns</a>
              <a className="mt-3 block text-[#B8B8B9]">Warranty</a>
              <a className="mt-3 block text-[#B8B8B9]">Terms And Conditions</a>
              <a className="mt-3 block text-[#B8B8B9]">Privacy Policy</a>
            </div>

            <div className="ft-content pt-8 lg:pt-28 xl:border-gray-700 xl:border-l-2  xl:ml-20 xl:pl-16">
              <h1 className="text-[23px] font-d text-white font-semibold">
                Join Our Mailing List
              </h1>
              <p className="mt-3 text-white">
                Join our mailing list to stay up to date on latest news, special
                offers, and important information & content.
              </p>
              <input
                type="email"
                className="rounded-sm px-2 py-2 shadow-sm shadow-gray-400 mt-3 w-full text-base"
                placeholder="Enter your email address"
              />
              <button className="w-full py-2 mt-3 rounded-sm bg-red-800 text-white text-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className="footer-bottom h-20 xl:px-12 px-5 flex flex-wrap justify-between items-center">
            <div className="footer-copyrigth">
              <p className="text-base block text-[#B8B8B9]">
                US Camera Pro © 2023. All Rights Reserved.
              </p>
            </div>
            <div className="footer-payment">
              <img src="asset 17.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
