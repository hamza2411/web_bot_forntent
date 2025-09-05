import Image from "next/image";
import React from 'react'
export default function footer() {
  return ( 
   
 <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-y-16 pt-20 lg:mx-32 ">
        <div className="items-center flex-col flex">
          <div>
          <Image src="/2 1.png" width={186} height={86} />
          </div>
       
          <p className="text-sm  mt-6 md:mx-1 mx-28">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="">
          <p className="text-xl"> About us</p>
          <p className="text-sm  mt-6 ">
            Information
            <br /> <br />
            Term of use
            <br /> <br />
            User Agreement
            <br /> <br />
            Transaction Fees
           
          </p>
        </div>
        <div className="">
          <p className="text-xl"> Mobile</p>
          <p className="text-sm  mt-6 ">
            iOS
            <br /> <br />
            Android
          </p>
        </div>
        <div className="">
          <p className="text-xl">Support</p>
          <p className="text-sm  mt-6 ">
            Information
            <br /> <br />
            Term of use
            <br /> <br />
            User Agreement
            <br /> <br />
            Transaction Fees
          </p>
        </div>
    
      {/*
      <div className="w-fll h-0.5 bg-PopularAssets pt-10"></div>
      <div className="flex justify-center mt-10 gap-x-10">
        <div className="mr-16">
        <Image src="/Vertobase-Logo-Files_Logo On Dark BG 1.png" width={86} height={86} />
          <p className="text-sm text-WhyUs mt-6 ">
            ป้องกันการโจมตี DDoS <br />
            การเข้ารหัสข้อมูลเต็มรูปแบบ
            <br /> และการปฏิบัติตามมาตรฐาน <br /> PCI DSS เพื่อปกป้อง <br />
            สินทรัพย์ของคุณ
          </p>
        </div>
        <div className="mr-10">
          <p className="text-xl"> About us</p>
          <p className="text-sm text-WhyUs mt-6 ">
            Information
            <br /> <br />
            Term of use
            <br /> <br />
            User Agreement
            <br /> <br />
            Transaction Fees
            <br /> <br />
            นโยบายการฟอกเงิน
          </p>
        </div>
        <div className="mr-16">
          <p className="text-xl"> Mobile</p>
          <p className="text-sm text-WhyUs mt-6 ">
            iOS
            <br /> <br />
            Android
          </p>
        </div>
        <div className="mr-10">
          <p className="text-xl">Product</p>
          <p className="text-sm text-WhyUs mt-6 ">
            Information
            <br /> <br />
            Term of use
            <br /> <br />
            User Agreement
            <br /> <br />
            Transaction Fees
          </p>
        </div>
        <div className="">
          <p className="text-xl">Support</p>
          <p className="text-sm text-WhyUs mt-6 ">
            Information
            <br /> <br />
            Term of use
            <br /> <br />
            User Agreement
            <br /> <br />
            Transaction Fees
          </p>
        </div>
      </div>
      <div className="flex justify-end pr-20 pb-16 pt-10 gap-5">
        <div className="">
          <Image src="/Vertobase-Logo-Files_Logo On Dark BG 1.png" width={30} height={30} />
        </div>
        <div className="">
          <Image src="/Vertobase-Logo-Files_Logo On Dark BG 1.png" width={30} height={30} />
        </div>
        <div className="">
          <Image src="/Vertobase-Logo-Files_Logo On Dark BG 1.png" width={30} height={30} />
        </div>
      </div>
      */}
         
    </div>
   
   
  )
}
