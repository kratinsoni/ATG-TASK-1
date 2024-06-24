import React, { useState } from "react";
import Box from "./Box";

function Home() {
  const [popUp, setPopUp] = useState(false);

  const handlePopUp = (e) => {
    e.preventDefault();
    setPopUp(!popUp);
  };

  return (
    <>
      <div className="w-screen mb-24 sm:mb-10">
        <div className="w-screen">
          <div className="absolute w-full justify-between z-40 top-3 px-4 hidden md:flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon/navigation/arrow_back_24px">
                <path
                  id="icon/navigation/arrow_back_24px_2"
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="white"
                />
              </g>
            </svg>
            <button
              onClick={handlePopUp}
              className="text-white font-ibm font-semibold text-[12px] border-white border-2 py-1 rounded-md w-[76px] text-center"
            >
              Join Group
            </button>
          </div>
          <img
            src="https://i.ibb.co/cT7vmdc/Rectangle-2.png"
            className="w-full h-[440px] sm:h-[236px]"
            alt=""
          />
          <div className="bg-black w-full h-[440px] top-24 md:top-0 absolute opacity-50 sm:h-[236px]"></div>
          <span className="font-ibm text-3xl font-bold absolute top-[358px] left-[200px] text-white z-40 md:left-10 sm:top-[150px] xs:text-2xl">
            Computer Engineering
          </span>
          <span className="font-ibm text-lg absolute top-[400px] left-[200px] text-white z-40 md:left-10 sm:top-[190px] xs:text-base">
            142,765 Computer Engineers follow this
          </span>
        </div>
        <div className="w-full px-[200px] xl:px-4 ">
          <div className="my-8 w-full flex justify-between md:justify-center xs:hidden border-b-2">
            <ul className="flex gap-10">
              <li className="font-ibm text-black">All Posts(32)</li>
              <li className="font-ibm text-gry">Article</li>
              <li className="font-ibm text-gry">Event</li>
              <li className="font-ibm text-gry">Education</li>
              <li className="font-ibm text-gry">Job</li>
            </ul>
            <div className="flex gap-4 mb-2 md:hidden">
              <button className="font-ibm font-semibold text-[15px] rounded-sm bg-gray-200 px-4 py-2 flex">
                Write a Post
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_839)">
                    <path
                      d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_839">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="font-ibm font-semibold text-white text-[15px] rounded-sm bg-blue-400 px-4 py-2 flex gap-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_859)">
                    <path
                      d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_859">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Join Group
              </button>
            </div>
          </div>
          <div className="w-full my-4 justify-between hidden xs:flex">
            <span className="font-ibm font-bold text-xl">Posts(368)</span>
            <button className="bg-gry2 w-[106px] text-center py-2 font-ibm font-semibold flex gap-2 items-center">
              Filter: All
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83325 8.33337L9.99992 12.5L14.1666 8.33337H5.83325Z"
                  fill="#212529"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between px-[200px] 1.5xl:px-1 1.5xl:justify-around">
          <div>
            <Box
              imgurl="https://i.ibb.co/TPc72Vw/Rectangle-5.png"
              Category="✍️ Article"
              title="What if famous brands had regular fonts? Meet RegulaBrands!"
              // description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
              owner="Sarthak Kamra"
              ownerImg="https://i.ibb.co/dkNqFfh/Rectangle-3.png"
            />
            <Box
              imgurl="https://i.ibb.co/y4Tgs03/Rectangle-5-1.png"
              Category="🔬️ Education"
              title="Tax Benefits for Investment under National Pension Scheme launched by Government"
              // description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
              owner="Sarah West"
              ownerImg="https://i.ibb.co/bzZGqHq/Rectangle-3-1.png"
            />
            <Box
              imgurl="https://i.ibb.co/qYL3zmw/Rectangle-5-2.png"
              Category="🗓️ Meetup"
              title="Finance & Investment Elite Social Mixer @Lujiazui"
              url={true}
              owner="Ronal Jones"
              ownerImg="https://i.ibb.co/bzZGqHq/Rectangle-3-2.png"
            />
            <div className="w-[692px] md:w-screen py-4 border px-5 flex flex-col gap-5">
              <span className="font-ibm text-[18px]">💼️ Job</span>
              <div className="flex justify-between">
                <span className="font-ibm text-[22px] font-semibold w-[600px]">
                  Software Developer
                </span>
                <span>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6667 14.0001C18.6667 15.2834 19.7167 16.3334 21 16.3334C22.2834 16.3334 23.3334 15.2834 23.3334 14.0001C23.3334 12.7167 22.2834 11.6667 21 11.6667C19.7167 11.6667 18.6667 12.7167 18.6667 14.0001ZM16.3334 14.0001C16.3334 12.7167 15.2834 11.6667 14 11.6667C12.7167 11.6667 11.6667 12.7167 11.6667 14.0001C11.6667 15.2834 12.7167 16.3334 14 16.3334C15.2834 16.3334 16.3334 15.2834 16.3334 14.0001ZM9.33337 14.0001C9.33337 12.7167 8.28337 11.6667 7.00004 11.6667C5.71671 11.6667 4.66671 12.7167 4.66671 14.0001C4.66671 15.2834 5.71671 16.3334 7.00004 16.3334C8.28337 16.3334 9.33337 15.2834 9.33337 14.0001Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[400px] sm:w-full flex gap-8">
                <span className="flex text-[15px] font-ibm font-semibold">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_941)">
                      <path
                        d="M11.6667 5.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341 6.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667 5.00008C17.5917 5.00008 18.3334 5.74175 18.3334 6.66675V15.8334C18.3334 16.7584 17.5917 17.5001 16.6667 17.5001H3.33341C2.40841 17.5001 1.66675 16.7584 1.66675 15.8334L1.67508 6.66675C1.67508 5.74175 2.40841 5.00008 3.33341 5.00008H6.66675V3.33341C6.66675 2.40841 7.40841 1.66675 8.33342 1.66675H11.6667C12.5917 1.66675 13.3334 2.40841 13.3334 3.33341V5.00008H16.6667Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_941">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Innovaccer Analytics Private Ltd.
                </span>
                <span className="font-ibm font-semibold text-[15px] flex">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_932)">
                      <path
                        d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z"
                        fill="black"
                      />
                      <path
                        d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_932">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Noida, India
                </span>
              </div>
              <div>
                <button className="w-[650px] md:w-full rounded-[10px] border text-green-500 font-ibm text-center font-semibold py-2">
                  Apply on Timesjobs
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <img src="src\assets\Rectangle 3.png" alt="" />
                  </div>
                  <div className="font-ibm text-[18px] font-bold">
                    Sarthak Kamra
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="icon/action/visibility_24px">
                          <path
                            id="icon/action/visibility_24px_2"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                            fill="#525252"
                          />
                        </g>
                      </svg>
                    </span>
                    <span>1.4k views</span>
                    <span className="ml-8">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_968)">
                          <path
                            d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                            fill="#2D2D2D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_968">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="w-[243px] border-b-2 flex justify-between items-center pb-2">
              <div className="flex">
                <div className="w-[18px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_842)">
                      <path
                        d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
                        fill="black"
                      />
                      <path
                        d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_842">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="font-ibm text-[14px] font-semibold">
                  Noida, India
                </span>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_848)">
                    <path
                      d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_848">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex mt-8">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5" clip-path="url(#clip0_1_853)">
                    <path
                      d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_853">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="text-[12px] font-ibm w-[220px]">
                Your location will help us serve better and extend a
                personalised experience.
              </div>
            </div>
          </div>
        </div>
      </div>
      {popUp && (
        <div className="absolute w-screen h-screen top-[178px] rounded-t-xl bg-white drop-shadow-2xl z-50 px-4 py-8">
          <div className="flex justify-between">
            <span className="font-ibm text-3xl font-semibold">
              Create Account
            </span>
            <span onClick={handlePopUp}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_597)">
                  <path
                    d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"
                    fill="#212529"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_597">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="w-full border-2 mt-8 h-[257px]">
            <div className="w-full h-1/4">
              <input
                type="text"
                className="w-1/2 h-full border-2 font-ibm text-xl px-3"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-1/2 h-full border-2 font-ibm text-xl px-3"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              className="w-full h-1/4 border-2 font-ibm text-xl px-3"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full h-1/4 border-2 font-ibm text-xl px-3"
              placeholder="Password"
            />
            <input
              type="text"
              className="w-full h-1/4 border-2 font-ibm text-xl px-3"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex justify-between">
            <button className="w-[150px] bg-blue-600 text-white font-ibm font-semibold text-center py-3 rounded-3xl my-6 text-[16px] ">
              Create Account
            </button>
            <button className="underline text-[23px] font-ibm ">
              or, Sign In
            </button>
          </div>
          <div>
            <button className="w-full text-center font-ibm text-2xl py-4 border border-gray-300 my-2 flex justify-center items-center gap-2">
              <img
                src="https://i.ibb.co/GtcK1D5/f-logo-RGB-Blue-1024.png"
                alt=""
                className="w-6"
              />
              Sign up with Facebook
            </button>
            <button className="w-full text-center font-ibm text-2xl py-4 border border-gray-300 my-2 flex justify-center items-center gap-2">
              <img src="https://i.ibb.co/7vp5561/search.png" className="w-6" alt="" />
              Sign up with Google
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
