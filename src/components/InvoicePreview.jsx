import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";   
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";

const InvoicePreview = () => {
  return (
    <>
        <div className="rounded-2xl bg-light_bg p-8">
                <div className="flex flex-row justify-between border-b border-slate-200 pb-3 mb-4">
                    <h2 className="text-3xl font-bold text-dark">Preview</h2>
                    <div className="inline-flex items-center gap-3">
                        <button className="text-sm font-medium text-dark rounded-full px-2 py-2 inline-flex items-center gap-1">
                            <FaRegFileLines className="text-lg text-[#3d475f]" />
                            <span>PDF</span>
                        </button> 
                        <button className="text-sm font-medium text-dark rounded-full px-2 py-2 inline-flex items-center gap-1">
                            <AiOutlineMail className="text-lg text-[#3d475f]" />
                            <span>Email</span>
                        </button> 
                        <button className="text-sm font-medium text-dark rounded-full px-2 py-2 inline-flex items-center gap-1">
                            <MdOutlinePayment className="text-lg text-[#3d475f]" />
                            <span>Payment page</span>
                        </button> 
                    </div>
                </div> 
                <div className="bg-white rounded-2xl shadow">
                    <div className="p-8">
                        <div className=" w-20 h-20 rounded-full bg-dark mx-auto"></div>
                        <h3 className="text-2xl text-dark font-bold text-center mt-4 mb-4">Hi Jhon Smith</h3>
                        <p>Your Order <strong className="font-semibold">Summer Edition - Chart Liberary - Free 90+ Charts UI KIT was jsut dropped off. Go on, check it out.</strong> </p>
 
                    </div>
                    <div className="border p-8 rounded-2xl text-left">
                        <p className='border-b border-slate-200 pb-3 mb-4'>
                            <span className="font-bold text-dark pr-2">Your Order:</span>
                            INV2398-08-087
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-[#8c93a2] ">Due Date:</p>
                                <p className="text-base text-dark font-medium">10 November 2024</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#8c93a2] ">Due Date:</p>
                                <p className="text-base text-dark font-medium">10 November 2024</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#8c93a2] ">Due Date:</p>
                                <p className="text-base text-dark font-medium">10 November 2024</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#8c93a2] ">Due Date:</p>
                                <p className="text-base text-dark font-medium">10 November 2024</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className=" bg-slate-100 rounded-xl px-4 py-2 flex items-center justify-between text-sm font-normal uppercase">
                                <span>Description</span>
                                <span>Amount</span>
                            </div>
                            <ul className='mt-4 border-b-2 border-slate-200 pb-3 mb-4'>
                                <li className='flex items-start'>
                                    <div className="flex-1">
                                        <div className="flex gap-2">
                                            <img 
                                                src=""
                                                alt="" 
                                                className=' w-16 h-16 rounded-lg bg-slate-200 object-cover'
                                             />
                                            <div className=" flex-1">
                                                <p className="text-sm sm:text-base font-medium text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <p className=' text-slate-400 font-medium'>Qty: 1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-dark min-w-48 text-right font-medium">
                                        <span>125.00 USD</span>
                                    </div>
                                </li>
                                <li className='flex items-start'>
                                    <div className="flex-1">
                                        <div className="flex gap-2">
                                            <img 
                                                src=""
                                                alt="" 
                                                className=' w-16 h-16 rounded-lg bg-slate-200 object-cover'
                                             />
                                            <div className=" flex-1">
                                                <p className="text-sm sm:text-base font-medium text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <p className=' text-slate-400 font-medium'>Qty: 1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-dark min-w-48 text-right font-medium">
                                        <span>125.00 USD</span>
                                    </div>
                                </li>
                            </ul>
                            <ul>
                                <li className='flex items-start justify-between'>
                                    <span>Subtotal</span>
                                    <span>125.00 USD</span>
                                </li>
                                <li className='flex items-start justify-between'>
                                    <span>Discount -10%</span>
                                    <span>125.00 USD</span>
                                </li>
                                <li className='flex items-start justify-between'>
                                    <span>Total</span>
                                    <span></span>
                                </li>
                                <li className='flex items-start justify-between'>
                                    <span>Amount Due</span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
             

        </div>
    </>
  )
}

export default InvoicePreview