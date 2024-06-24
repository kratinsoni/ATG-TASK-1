import React from 'react'

function Box({imgurl, url, Category, ownerImg, title, description, owner}) {
  return (
    <div className="my-4">
      <div>
        <img
          src={imgurl}
          className="w-[692px] md:w-screen h-[220px] xs:h-[120px] border"
          alt=""
        />
      </div>
      <div>
        <div className="px-6 py-3 rounded-sm border w-[692px] md:w-screen flex flex-col gap-3">
          <div className="font-ibm text-lg xs:text-[14px]">{Category}</div>
          <div className="flex">
            <div className="font-ibm text-[22px] xs:text-[16px] w-[600px] font-bold flex justify-between">
              {title}
            </div>
            <div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          {description ? (
            <div className="font-ibm text-[19px] text-gry w-[652px] md:w-full overflow-auto">
              {description}
            </div>
          ) : (
            <div className="flex w-[358px] sm:w-full justify-between">
              <div className="flex font-ibm text-[15px] xs:text-[14px] font-semibold">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_895)">
                    <path
                      d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_895">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Fri, 12 Oct, 2018
              </div>
              <div className="flex font-ibm text-[15px] xs:text-[13px] font-semibold">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_886)">
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
                    <clipPath id="clip0_1_886">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Ahmedabad, India
              </div>
            </div>
          )}

          {url && (
            <button className="w-[652px] md:w-full text-orange-600 font-ibm font-semibold text-[13px] text-center border rounded-lg py-2">
              Visit Website
            </button>
          )}

          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img src={ownerImg} alt="" />
              </div>
              <div className="font-ibm text-[18px] font-bold">
                {owner}
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
    </div>
  );
}

export default Box
