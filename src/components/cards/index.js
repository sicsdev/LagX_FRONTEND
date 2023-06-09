import React, { useState } from "react";
import "./cards.css";

const Cards = () => {
  const [payPal, setPayPal] = useState(false);
  const [bit, setBit] = useState(false);
  const [credit, setCredit] = useState(false);
  const [others, setOthers] = useState(false);

  const Payypal = () => {
    setPayPal(!payPal);
  };

  const BittCoin = () => {
    setBit(!bit);
  };
  const Credd = () => {
    setCredit(!credit);
  };
  const Otherr = () => {
    setOthers(!others);
  };
  return (
    <div className="cards">
      <div className="main-container">
        <div className="row cards_inner">
          <div className="text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card_basic shadow-md rounded-lg p-6">
                <div className="basic-card">
                  <div className="basic-image">
                    <img className="diamonds_img" src="/images/diamond.png" />
                  </div>
                  <div className="basic-card_inner">
                    <div className="basic-heading">
                      <p>Basic</p>
                      <p className="trail_text text-xs">Free 7 days trial</p>
                    </div>
                    <div className="basic-free text-lg">
                      <b>Free</b>
                    </div>
                  </div>
                </div>
                <div className="border_card"></div>
                <div className="card-body">
                  <div className="content p-4">
                    <p className="p-2  card_list">
                      <span>
                        <img
                          className="tick"
                          src="./images/PricingCheck (1).png"
                        />
                      </span>{" "}
                      You can Use only 4 games
                    </p>
                    <p className="p-2 card_list">
                      <span>
                        <img
                          className="tick"
                          src="./images/PricingCheck (1).png"
                        />
                      </span>{" "}
                      Chat support
                    </p>
                    <p className="p-2  card_list">
                      <span>
                        <img
                          className="tick"
                          src="./images/PricingCheck (1).png"
                        />
                      </span>{" "}
                      Only 7 days trial
                    </p>
                    <p className="p-2 text_gray card_list">
                      {" "}
                      <span>
                        <img className="tick" src="./images/close.png" />
                      </span>
                      All games access
                    </p>
                    <p className="p-2 text_gray card_list">
                      <span>
                        <img className="tick" src="./images/close.png" />
                      </span>{" "}
                      New benefits for game connection
                    </p>
                    <p className="p-2 text_gray card_list">
                      <span>
                        <img className="tick" src="./images/close.png" />
                      </span>{" "}
                      Stable connection
                    </p>
                  </div>
                </div>
                <div className="card-footer pl-6 py-6">
                  <button className=" text-sm mt-3 bg-grey-600 text-white py-2 sub-grey-btn ">
                    Get started free
                  </button>
                </div>
              </div>

              <div className="enterprice card_basic shadow-md rounded-lg p-6">
                <div className="special_btn">
                  <button className=" text-sm mt-3 bg-blue-600 text-white py-2 px-4 rounded">
                    <b>Special</b>
                  </button>
                </div>
                <div className="basic-card">
                  <div className="basic-image">
                    <img
                      className="diamond_img"
                      src="/images/diamond_blue.png"
                    />
                  </div>
                  <div className="basic-card_inner">
                    <div className="basic-heading">
                      <p>Enterprise</p>
                      <p className="trail_text text-xs">Unilimited features</p>
                    </div>
                    <div className="basic-free text-lg">
                      <b>$63,99</b>
                    </div>
                  </div>
                </div>
                <div className="border_card"></div>
                <div className="card-body">
                  <div className="content p-4">
                    <p className="p-2  card_list">
                      <span>
                        <img className="tick" src="./images/PricingCheck.png" />
                      </span>{" "}
                      You can Use only 4 games
                    </p>
                    <p className="p-2 card_list">
                      <span>
                        <img className="tick" src="./images/PricingCheck.png" />
                      </span>{" "}
                      Chat support
                    </p>
                    <p className="p-2  card_list">
                      <span>
                        <img className="tick" src="./images/PricingCheck.png" />
                      </span>{" "}
                      Only 7 days trial
                    </p>
                    <p className="p-2  card_list">
                      {" "}
                      <span>
                        <img className="tick" src="./images/PricingCheck.png" />
                      </span>
                      All games access
                    </p>
                    <p className="p-2  card_list">
                      <span>
                        <img className="tick" src="./images/PricingCheck.png" />
                      </span>{" "}
                      New benefits for game connection
                    </p>
                    <p className="p-2  card_list">
                      <span>
                        <img className="tick" src="./images/PricingCheck.png" />
                      </span>{" "}
                      Stable connection
                    </p>
                  </div>
                </div>
                <div className="card-footer pl-6 py-6">
                  <button className=" text-sm mt-3 bg-blue-600 text-white py-2 sub-btn ">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-side">
            <div className="email-section ">
              <span className="number bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded :bg-blue-900 dark:text-blue-300 lg:text-left ">
                2
              </span>
              Enter your email address
            </div>
            <p className="font-medium mr-2 mt-3 text_gray text-sm ">
              Privacy guarantee: We do not share your information and will
              contact you only as needed to provide our service.
            </p>
            <input
              type="email"
              className="appearance-none border border-gray-300 rounded py-2 px-4 mt-3 email-input leading-tight focus:outline-none focus:border-blue-500 email"
              placeholder="Email"
            />

            <div className="payment-method mt-4">
              <span className="number bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded :bg-blue-900 dark:text-blue-300 lg:text-left">
                3
              </span>
              Select payment method:
            </div>
            <p className="font-medium mr-2 mt-3 text_gray text-sm">
              Privacy guarantee: We do not share your information and will
              contact you only as needed to provide our service.
            </p>
            {/* <input
              type="text"
              className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email"
              value="Credit Card" 
              onClick={()=>Credd()}
            /> */}
            <p
              className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email"
              onClick={() => Credd()}
            >
              <span className="ww">
                <img
                  className=""
                  src="./images/direction-down 01.png"
                  alt="Image 3"
                />
                Credit Card
              </span>{" "}
              <span className="pay-opt">Option - 1</span>{" "}
            </p>

            {credit ? (
              <>
                {" "}
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <input
                    type="text"
                    className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                    placeholder="Last Name"
                  />
                </div>
                <input
                  type="text"
                  className="appearance-none border border-gray-300 mt-2 rounded py-2 px-4 leading-tight email-input focus:outline-none focus:border-blue-500 email"
                  placeholder="Card Number"
                />
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <input
                    type="text"
                    className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                    placeholder="Zip/ Postal Code"
                  />
                  <p className="total-order">
                    Order Total: &nbsp; <b className="price">$63,99</b>
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded paybutton">
                    Pay
                  </button>
                  <p className="text_gray text-sm">
                    By submitting this form, you agree to our{" "}
                    <b className="price"> Terms of Service.</b>
                  </p>
                </div>
              </>
            ) : (
              ""
            )}

            {/* <input
              type="text"
              className="appearance-none border border-gray-300 rounded mt-3 py-2 px-4 leading-tight email-input focus:outline-none focus:border-blue-500 email"
              value="Pay Pal"
              onClick={()=>Payypal()}
            /> */}
            <p
              className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none  focus:border-blue-500 email"
              onClick={() => Payypal()}
            >
              <span className="ww">
                <img
                  className=""
                  src="./images/direction-down 01.png"
                  alt="Image 3"
                />
                Pay Pal{" "}
              </span>{" "}
              <span className="pay-opt">Option - 2</span>
            </p>
            {payPal ? (
              <>
                {" "}
                <p className="text_gray text-sm mt-3">
                  CONTINUE BELOW TO BUY A VPN SUBSCRIPTION WITH PAYPAL.
                </p>
                <p className="text_gray text-sm mt-3">
                  LAGX VPN 12-month plan, billed every 12 months ($8.32/month
                  average) You’re 100% covered by our 30-day money-back
                  guarantee.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded paybutton">
                    Pay with PayPal
                  </button>
                  <p className="total-order">
                    Order Total: &nbsp;<b className="price">$63,99</b>
                  </p>
                </div>
                <p className="text_gray text-sm mt-3">
                  By continuing to PayPal, you agree to our Terms of Service.
                </p>
              </>
            ) : (
              ""
            )}

            {/* <input
              type="text"
              className="appearance-none border border-gray-300 mt-3 rounded py-2 px-4 leading-tight email-input focus:outline-none focus:border-blue-500 email"
              value="Bit Coin" 
              onClick={()=>BittCoin()}     
            /> */}
            <p
              className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email"
              onClick={() => BittCoin()}
            >
              <span className="ww">
                <img
                  className=""
                  src="./images/direction-down 01.png"
                  alt="Image 3"
                />
                Bitcoin{" "}
              </span>
              <span className="pay-opt">Option - 3</span>
            </p>
            {bit ? (
              <>
                {" "}
                <p className="mt-3 text_gray text-sm mt-3">
                  CONTINUE BELOW TO BUY A VPN SUBSCRIPTION WITH BITPAY.
                </p>
                <p className="text_gray text-sm mt-3">
                  LAGX VPN 12-month plan, billed every 12 months ($8.32/month
                  average) You’re 100% covered by our 30-day money-back
                  guarantee.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded paybutton">
                    Pay with BitPay
                  </button>
                  <p className="total-order">
                    Order Total: &nbsp;<b className="price">$63,99</b>
                  </p>
                </div>
                <p className="text_gray text-sm mt-3">
                  By continuing to BitPay, you agree to our Terms of Service.
                </p>
              </>
            ) : (
              ""
            )}

            {/* <input
              type="text"
              className="appearance-none border border-gray-300 mt-3 rounded py-2 px-4 leading-tight email-input focus:outline-none focus:border-blue-500 email"
              value="Other"
              onClick={()=>Otherr()}
            /> */}
            <p
              className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email"
              onClick={() => Otherr()}
            >
              <span className="ww">
                <img
                  className=""
                  src="./images/direction-down 01.png"
                  alt="Image 3"
                />
                Other{" "}
              </span>
              <span className="pay-opt">Option - 4</span>
            </p>
            {others ? (
              <>
                {" "}
                <p className="text_gray text-sm mt-3">
                  CONTINUE BELOW TO BUY A VPN SUBSCRIPTION WITH PAYMENTWALL.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  <img
                    className="payment_icon"
                    src="./images/unionpay.png"
                    alt="Image 1"
                  />
                  <img
                    className="payment_icon"
                    src="./images/bitcoin.png"
                    alt="Image 2"
                  />
                  <img
                    className="payment_icon"
                    src="./images/payment-methods_light_ripple.png"
                    alt="Image 3"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded paybutton">
                    Pay with BitPay
                  </button>
                  <p className="total-order">
                    Order Total: &nbsp; <b className="price">$63,99</b>
                  </p>
                </div>
                <p className="term-service mt-3">
                  By continuing to PayPal, you agree to our{" "}
                  <a
                    href="#"
                    class="underline underline-offset-1 ... text-blue-400"
                  >
                    Terms of Service.
                  </a>
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
