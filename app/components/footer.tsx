"use client";

import Image from "next/image";
import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import Link from "next/link";

export default function footer() {
  return (
    <footer className="flex flex-col justify-center bg-cust-pinkTua py-8 lg:py-16 text-white">
      <div className="flex flex-col gap-16 md:gap-0 md:flex-row md:justify-center pb-4 md:pb-8 lg:pb-16">
        <div className="flex flex-col w-4/12 md:flex-row gap-8 md:gap-16">
          <div className="hidden md:flex flex-col gap-4 md:gap-0 md:justify-evenly border-y-2 border-white py-16 mx-4 md:border-0 md:py-0 md:mx-auto">
            <h1 className="text-xl font-bold text-center">Mari Terkoneksi</h1>
            <div className="flex flex-row gap-8 md:gap-16 mx-auto">
              <Link
                href="mailto:home.infusion99@gmail.com"
                target="_blank"
                className="cursor-pointer"
              >
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.02594 17.5298H5.73173V8.53006L0.437744 4.55957V15.9416C0.437744 16.8204 1.14978 17.5298 2.02594 17.5298Z"
                    fill="white"
                  />
                  <path
                    d="M18.4373 17.5298H22.143C23.0218 17.5298 23.7312 16.8178 23.7312 15.9416V4.55957L18.4373 8.53006"
                    fill="white"
                  />
                  <path
                    d="M18.4373 1.64788V8.53005L23.7312 4.55957V2.44197C23.7312 0.477906 21.4892 -0.641771 19.9196 0.53614"
                    fill="white"
                  />
                  <path
                    d="M5.73169 8.53013V1.64795L12.0845 6.41253L18.4372 1.64795V8.53013L12.0845 13.2947"
                    fill="white"
                  />
                  <path
                    d="M0.437744 2.44197V4.55957L5.73173 8.53005V1.64788L4.24941 0.53614C2.6771 -0.641771 0.437744 0.477906 0.437744 2.44197Z"
                    fill="white"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/home.infusion.care/"
                target="_blank"
                className="cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.6712 10.6676C6.6712 8.82506 8.16401 7.33102 10.006 7.33102C11.848 7.33102 13.3416 8.82506 13.3416 10.6676C13.3416 12.5101 11.848 14.0041 10.006 14.0041C8.16401 14.0041 6.6712 12.5101 6.6712 10.6676ZM4.86804 10.6676C4.86804 13.5061 7.1683 15.807 10.006 15.807C12.8437 15.807 15.144 13.5061 15.144 10.6676C15.144 7.82906 12.8437 5.52814 10.006 5.52814C7.1683 5.52814 4.86804 7.82906 4.86804 10.6676ZM14.1466 5.32436C14.1465 5.5619 14.2169 5.79415 14.3487 5.99171C14.4806 6.18928 14.6681 6.3433 14.8874 6.43429C15.1068 6.52529 15.3482 6.54917 15.5811 6.50292C15.8141 6.45667 16.0281 6.34236 16.1961 6.17446C16.364 6.00655 16.4785 5.79259 16.5249 5.55962C16.5713 5.32666 16.5477 5.08515 16.4569 4.86565C16.3661 4.64615 16.2122 4.45851 16.0148 4.32645C15.8174 4.1944 15.5853 4.12386 15.3478 4.12377H15.3474C15.029 4.12392 14.7238 4.25044 14.4987 4.47555C14.2735 4.70066 14.1469 5.00594 14.1466 5.32436V5.32436ZM5.96357 18.8146C4.98803 18.7701 4.45779 18.6076 4.10542 18.4703C3.63826 18.2883 3.30494 18.0717 2.95449 17.7216C2.60404 17.3715 2.38711 17.0384 2.20604 16.5711C2.06868 16.2188 1.90618 15.6883 1.86184 14.7125C1.81333 13.6574 1.80364 13.3405 1.80364 10.6677C1.80364 7.99481 1.81413 7.67877 1.86184 6.62287C1.90626 5.64704 2.06996 5.11753 2.20604 4.76418C2.38791 4.29688 2.60452 3.96347 2.95449 3.61292C3.30446 3.26236 3.63746 3.04537 4.10542 2.86425C4.45763 2.72685 4.98803 2.5643 5.96357 2.51994C7.01829 2.47142 7.33512 2.46173 10.006 2.46173C12.6769 2.46173 12.994 2.47222 14.0496 2.51994C15.0252 2.56438 15.5545 2.72813 15.9078 2.86425C16.3749 3.04537 16.7083 3.26284 17.0587 3.61292C17.4092 3.96299 17.6253 4.29688 17.8072 4.76418C17.9445 5.11649 18.107 5.64704 18.1514 6.62287C18.1999 7.67877 18.2096 7.99481 18.2096 10.6677C18.2096 13.3405 18.1999 13.6566 18.1514 14.7125C18.1069 15.6883 17.9436 16.2187 17.8072 16.5711C17.6253 17.0384 17.4087 17.3719 17.0587 17.7216C16.7087 18.0714 16.3749 18.2883 15.9078 18.4703C15.5556 18.6077 15.0252 18.7702 14.0496 18.8146C12.9949 18.8631 12.6781 18.8728 10.006 18.8728C7.33392 18.8728 7.01797 18.8631 5.96357 18.8146V18.8146ZM5.88073 0.719305C4.81553 0.767828 4.08765 0.936778 3.45199 1.1842C2.79367 1.43971 2.23638 1.78249 1.67949 2.33866C1.12259 2.89484 0.780788 3.45317 0.525355 4.11168C0.278007 4.74792 0.109105 5.47561 0.0605963 6.54112C0.0112868 7.6083 0 7.94949 0 10.6676C0 13.3857 0.0112868 13.7269 0.0605963 14.794C0.109105 15.8596 0.278007 16.5872 0.525355 17.2235C0.780788 17.8816 1.12267 18.4406 1.67949 18.9965C2.2363 19.5524 2.79367 19.8947 3.45199 20.151C4.08885 20.3984 4.81553 20.5673 5.88073 20.6159C6.94817 20.6644 7.28869 20.6765 10.006 20.6765C12.7233 20.6765 13.0644 20.6652 14.1313 20.6159C15.1965 20.5673 15.9239 20.3984 16.56 20.151C17.2179 19.8947 17.7756 19.5527 18.3325 18.9965C18.8894 18.4403 19.2305 17.8816 19.4866 17.2235C19.734 16.5872 19.9037 15.8596 19.9514 14.794C19.9999 13.7261 20.0112 13.3857 20.0112 10.6676C20.0112 7.94949 19.9999 7.6083 19.9514 6.54112C19.9029 5.47553 19.734 4.74752 19.4866 4.11168C19.2305 3.45357 18.8885 2.89572 18.3325 2.33866C17.7765 1.78161 17.2179 1.43971 16.5608 1.1842C15.9239 0.936778 15.1965 0.767028 14.1321 0.719305C13.0652 0.670782 12.7241 0.658691 10.0068 0.658691C7.28949 0.658691 6.94817 0.669981 5.88073 0.719305Z"
                    fill="white"
                  />
                </svg>
              </Link>

              <Link
                href="https://api.whatsapp.com/send/?phone=+6281299160261&text=Halo+Saya+Ingin+Bertanya+terkait+Home+Infusion&type=phone_number&app_absent=0"
                target="_blank"
                className="cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0636 3.48848C15.3582 1.80047 13.0999 0.787132 10.7066 0.635927C8.31319 0.484722 5.94631 1.20715 4.0431 2.66791C2.13988 4.12867 0.829265 6.22963 0.352356 8.58348C-0.123669 10.9364 0.26669 13.3831 1.45278 15.4708L0.0458984 20.6162L5.30425 19.2359C6.75794 20.03 8.38826 20.4456 10.0442 20.4456C12.0048 20.442 13.9204 19.8575 15.549 18.7655C17.1784 17.6735 18.4475 16.1234 19.1982 14.3098C19.9489 12.4962 20.1458 10.5014 19.7652 8.57552C19.3845 6.64964 18.4431 4.88028 17.06 3.49025H17.0636V3.48848ZM10.0468 18.7673C8.57019 18.7673 7.1218 18.3702 5.85093 17.6169L5.54977 17.4329L2.42426 18.2518L3.25885 15.2126L3.06367 14.9014C2.09219 13.3513 1.66209 11.5227 1.84225 9.70115C2.02154 7.8805 2.80137 6.17038 4.05723 4.84137C5.31309 3.51148 6.97432 2.63785 8.78038 2.35666C10.5865 2.07547 12.434 2.40352 14.0343 3.28865C15.6337 4.17377 16.8949 5.56557 17.6182 7.24651C18.3415 8.92656 18.4864 10.8003 18.0306 12.5723C17.5749 14.3443 16.5434 15.9147 15.0994 17.0359C13.6554 18.1571 11.8794 18.7664 10.0521 18.7673H10.0468ZM14.5607 12.5855C14.3143 12.46 13.0902 11.8605 12.8677 11.7774C12.6451 11.6942 12.4764 11.6544 12.3157 11.9029C12.1558 12.1514 11.6763 12.7093 11.5306 12.8747C11.3857 13.04 11.2418 13.0586 10.9936 12.9375C10.2641 12.6483 9.59113 12.2345 9.00206 11.7155C8.46068 11.2132 7.99614 10.634 7.62344 9.99649C7.48037 9.74802 7.60843 9.61362 7.73207 9.49071C7.85483 9.3678 7.98024 9.20156 8.09947 9.05654C8.20103 8.93098 8.28405 8.79127 8.34587 8.64272C8.37943 8.57463 8.39444 8.49859 8.39091 8.42254C8.38738 8.3465 8.3653 8.27311 8.32556 8.20767C8.26462 8.08211 7.77358 6.86186 7.5625 6.36669C7.35143 5.87151 7.15625 5.94844 7.01141 5.94137C6.86657 5.93429 6.7023 5.94137 6.53715 5.94137C6.41174 5.9449 6.2881 5.97408 6.17417 6.02802C6.06024 6.08196 5.95956 6.15801 5.87654 6.25262C5.59747 6.51524 5.37491 6.83268 5.22389 7.18549C5.07287 7.5383 4.99691 7.91853 4.99956 8.3014C4.99956 9.52342 5.88714 10.6942 6.01079 10.8675C6.13354 11.0408 7.75945 13.5405 10.2394 14.6158C10.7004 14.8156 11.172 14.9898 11.6515 15.1383C12.1576 15.2922 12.6919 15.3249 13.2121 15.2356C13.6881 15.164 14.6826 14.6352 14.8848 14.056C15.0871 13.476 15.0906 12.979 15.0296 12.8765C14.9705 12.7712 14.8168 12.7093 14.5607 12.5855Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:border-x-2 md:border-white md:px-16">
          <Image
            src={
              "https://res.cloudinary.com/dr0lbokc5/image/upload/v1695401063/home-infusion-logo_cbynjb.png"
            }
            width={150}
            height={180}
            alt="logo"
            className="mx-auto"
          />
          <h1 className="text-center text-2xl font-bold my-4">Home Infusion</h1>
        </div>
        <div className="flex md:hidden flex-col gap-4 md:gap-0 md:justify-evenly border-y-2 border-white py-16 mx-4 md:border-0 md:py-0 md:mx-auto">
          <h1 className="text-xl font-bold text-center">Mari Terkoneksi</h1>
          <div className="flex flex-row gap-8 md:gap-16 mx-auto">
            <Link
              href="mailto:home.infusion99@gmail.com"
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.02594 17.5298H5.73173V8.53006L0.437744 4.55957V15.9416C0.437744 16.8204 1.14978 17.5298 2.02594 17.5298Z"
                  fill="white"
                />
                <path
                  d="M18.4373 17.5298H22.143C23.0218 17.5298 23.7312 16.8178 23.7312 15.9416V4.55957L18.4373 8.53006"
                  fill="white"
                />
                <path
                  d="M18.4373 1.64788V8.53005L23.7312 4.55957V2.44197C23.7312 0.477906 21.4892 -0.641771 19.9196 0.53614"
                  fill="white"
                />
                <path
                  d="M5.73169 8.53013V1.64795L12.0845 6.41253L18.4372 1.64795V8.53013L12.0845 13.2947"
                  fill="white"
                />
                <path
                  d="M0.437744 2.44197V4.55957L5.73173 8.53005V1.64788L4.24941 0.53614C2.6771 -0.641771 0.437744 0.477906 0.437744 2.44197Z"
                  fill="white"
                />
              </svg>
            </Link>

            <Link
              href="https://www.instagram.com/home.infusion.care/"
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 21 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.6712 10.6676C6.6712 8.82506 8.16401 7.33102 10.006 7.33102C11.848 7.33102 13.3416 8.82506 13.3416 10.6676C13.3416 12.5101 11.848 14.0041 10.006 14.0041C8.16401 14.0041 6.6712 12.5101 6.6712 10.6676ZM4.86804 10.6676C4.86804 13.5061 7.1683 15.807 10.006 15.807C12.8437 15.807 15.144 13.5061 15.144 10.6676C15.144 7.82906 12.8437 5.52814 10.006 5.52814C7.1683 5.52814 4.86804 7.82906 4.86804 10.6676ZM14.1466 5.32436C14.1465 5.5619 14.2169 5.79415 14.3487 5.99171C14.4806 6.18928 14.6681 6.3433 14.8874 6.43429C15.1068 6.52529 15.3482 6.54917 15.5811 6.50292C15.8141 6.45667 16.0281 6.34236 16.1961 6.17446C16.364 6.00655 16.4785 5.79259 16.5249 5.55962C16.5713 5.32666 16.5477 5.08515 16.4569 4.86565C16.3661 4.64615 16.2122 4.45851 16.0148 4.32645C15.8174 4.1944 15.5853 4.12386 15.3478 4.12377H15.3474C15.029 4.12392 14.7238 4.25044 14.4987 4.47555C14.2735 4.70066 14.1469 5.00594 14.1466 5.32436V5.32436ZM5.96357 18.8146C4.98803 18.7701 4.45779 18.6076 4.10542 18.4703C3.63826 18.2883 3.30494 18.0717 2.95449 17.7216C2.60404 17.3715 2.38711 17.0384 2.20604 16.5711C2.06868 16.2188 1.90618 15.6883 1.86184 14.7125C1.81333 13.6574 1.80364 13.3405 1.80364 10.6677C1.80364 7.99481 1.81413 7.67877 1.86184 6.62287C1.90626 5.64704 2.06996 5.11753 2.20604 4.76418C2.38791 4.29688 2.60452 3.96347 2.95449 3.61292C3.30446 3.26236 3.63746 3.04537 4.10542 2.86425C4.45763 2.72685 4.98803 2.5643 5.96357 2.51994C7.01829 2.47142 7.33512 2.46173 10.006 2.46173C12.6769 2.46173 12.994 2.47222 14.0496 2.51994C15.0252 2.56438 15.5545 2.72813 15.9078 2.86425C16.3749 3.04537 16.7083 3.26284 17.0587 3.61292C17.4092 3.96299 17.6253 4.29688 17.8072 4.76418C17.9445 5.11649 18.107 5.64704 18.1514 6.62287C18.1999 7.67877 18.2096 7.99481 18.2096 10.6677C18.2096 13.3405 18.1999 13.6566 18.1514 14.7125C18.1069 15.6883 17.9436 16.2187 17.8072 16.5711C17.6253 17.0384 17.4087 17.3719 17.0587 17.7216C16.7087 18.0714 16.3749 18.2883 15.9078 18.4703C15.5556 18.6077 15.0252 18.7702 14.0496 18.8146C12.9949 18.8631 12.6781 18.8728 10.006 18.8728C7.33392 18.8728 7.01797 18.8631 5.96357 18.8146V18.8146ZM5.88073 0.719305C4.81553 0.767828 4.08765 0.936778 3.45199 1.1842C2.79367 1.43971 2.23638 1.78249 1.67949 2.33866C1.12259 2.89484 0.780788 3.45317 0.525355 4.11168C0.278007 4.74792 0.109105 5.47561 0.0605963 6.54112C0.0112868 7.6083 0 7.94949 0 10.6676C0 13.3857 0.0112868 13.7269 0.0605963 14.794C0.109105 15.8596 0.278007 16.5872 0.525355 17.2235C0.780788 17.8816 1.12267 18.4406 1.67949 18.9965C2.2363 19.5524 2.79367 19.8947 3.45199 20.151C4.08885 20.3984 4.81553 20.5673 5.88073 20.6159C6.94817 20.6644 7.28869 20.6765 10.006 20.6765C12.7233 20.6765 13.0644 20.6652 14.1313 20.6159C15.1965 20.5673 15.9239 20.3984 16.56 20.151C17.2179 19.8947 17.7756 19.5527 18.3325 18.9965C18.8894 18.4403 19.2305 17.8816 19.4866 17.2235C19.734 16.5872 19.9037 15.8596 19.9514 14.794C19.9999 13.7261 20.0112 13.3857 20.0112 10.6676C20.0112 7.94949 19.9999 7.6083 19.9514 6.54112C19.9029 5.47553 19.734 4.74752 19.4866 4.11168C19.2305 3.45357 18.8885 2.89572 18.3325 2.33866C17.7765 1.78161 17.2179 1.43971 16.5608 1.1842C15.9239 0.936778 15.1965 0.767028 14.1321 0.719305C13.0652 0.670782 12.7241 0.658691 10.0068 0.658691C7.28949 0.658691 6.94817 0.669981 5.88073 0.719305Z"
                  fill="white"
                />
              </svg>
            </Link>

            <Link
              href="https://api.whatsapp.com/send/?phone=+6281299160261&text=Halo+Saya+Ingin+Bertanya+terkait+Home+Infusion&type=phone_number&app_absent=0"
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 21 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0636 3.48848C15.3582 1.80047 13.0999 0.787132 10.7066 0.635927C8.31319 0.484722 5.94631 1.20715 4.0431 2.66791C2.13988 4.12867 0.829265 6.22963 0.352356 8.58348C-0.123669 10.9364 0.26669 13.3831 1.45278 15.4708L0.0458984 20.6162L5.30425 19.2359C6.75794 20.03 8.38826 20.4456 10.0442 20.4456C12.0048 20.442 13.9204 19.8575 15.549 18.7655C17.1784 17.6735 18.4475 16.1234 19.1982 14.3098C19.9489 12.4962 20.1458 10.5014 19.7652 8.57552C19.3845 6.64964 18.4431 4.88028 17.06 3.49025H17.0636V3.48848ZM10.0468 18.7673C8.57019 18.7673 7.1218 18.3702 5.85093 17.6169L5.54977 17.4329L2.42426 18.2518L3.25885 15.2126L3.06367 14.9014C2.09219 13.3513 1.66209 11.5227 1.84225 9.70115C2.02154 7.8805 2.80137 6.17038 4.05723 4.84137C5.31309 3.51148 6.97432 2.63785 8.78038 2.35666C10.5865 2.07547 12.434 2.40352 14.0343 3.28865C15.6337 4.17377 16.8949 5.56557 17.6182 7.24651C18.3415 8.92656 18.4864 10.8003 18.0306 12.5723C17.5749 14.3443 16.5434 15.9147 15.0994 17.0359C13.6554 18.1571 11.8794 18.7664 10.0521 18.7673H10.0468ZM14.5607 12.5855C14.3143 12.46 13.0902 11.8605 12.8677 11.7774C12.6451 11.6942 12.4764 11.6544 12.3157 11.9029C12.1558 12.1514 11.6763 12.7093 11.5306 12.8747C11.3857 13.04 11.2418 13.0586 10.9936 12.9375C10.2641 12.6483 9.59113 12.2345 9.00206 11.7155C8.46068 11.2132 7.99614 10.634 7.62344 9.99649C7.48037 9.74802 7.60843 9.61362 7.73207 9.49071C7.85483 9.3678 7.98024 9.20156 8.09947 9.05654C8.20103 8.93098 8.28405 8.79127 8.34587 8.64272C8.37943 8.57463 8.39444 8.49859 8.39091 8.42254C8.38738 8.3465 8.3653 8.27311 8.32556 8.20767C8.26462 8.08211 7.77358 6.86186 7.5625 6.36669C7.35143 5.87151 7.15625 5.94844 7.01141 5.94137C6.86657 5.93429 6.7023 5.94137 6.53715 5.94137C6.41174 5.9449 6.2881 5.97408 6.17417 6.02802C6.06024 6.08196 5.95956 6.15801 5.87654 6.25262C5.59747 6.51524 5.37491 6.83268 5.22389 7.18549C5.07287 7.5383 4.99691 7.91853 4.99956 8.3014C4.99956 9.52342 5.88714 10.6942 6.01079 10.8675C6.13354 11.0408 7.75945 13.5405 10.2394 14.6158C10.7004 14.8156 11.172 14.9898 11.6515 15.1383C12.1576 15.2922 12.6919 15.3249 13.2121 15.2356C13.6881 15.164 14.6826 14.6352 14.8848 14.056C15.0871 13.476 15.0906 12.979 15.0296 12.8765C14.9705 12.7712 14.8168 12.7093 14.5607 12.5855Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center w-4/12 md:gap-0 text-center md:text-left md:justify-evenly font-bold">
          <div className="flex flex-col justify-evenly text-center gap-4 px-4">
            {/* <div className="text-start">
              <IonIcon icon={chevronForwardOutline}></IonIcon>
              <a href="">Testimoni</a>
            </div>
            <div className="text-start">
              <IonIcon icon={chevronForwardOutline}></IonIcon>
              <a href="">Tentang Kami</a>
            </div>
            <div className="text-start">
              <IonIcon icon={chevronForwardOutline}></IonIcon>
              <a href="">Layanan Kami</a>
            </div> */}
            <h2>Panggil Tim Medis ke Rumah Anda Sekarang!!</h2>
            <p className="font-medium">- home.infusion -</p>
          </div>
        </div>
      </div>
      <div className="mx-auto py-16 md:py-0">
        <h6 className="text-sm text-center justify-center">
          &#169; 2023 Home Infusion. All rights reserved.
        </h6>
      </div>
    </footer>
  );
}