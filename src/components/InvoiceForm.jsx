import React from 'react'
import { DatePicker } from 'antd';
import { Select } from "antd";

const InvoiceForm = () => {

    // const onChange = (date, dateString) => {
    //     console.log(date, dateString);
    // };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

  return (
    <>
        <form className='flex flex-col gap-5'>
            <div>
                <label htmlFor="subject" className='label'>Subject</label>
                <input 
                    type="text"  
                    id='subject'
                    className='input'
                />
            </div>
            <div>
                <label htmlFor="subject" className='label'>Subject</label>
                <DatePicker 
                    size="large"
                    className="w-full"
                    // onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="subject" className='label'>Subject</label>
                <Select 
                    defaultValue="USD"
                    // onChange={handleChange}
                    size='large'
                    className='w-full'
                    options={[
                        {
                          value: 'USD',
                          label: 'USD',
                        },
                        {
                          value: 'BDT',
                          label: 'BDT',
                        },
                        {
                          value: 'INR',
                          label: 'INR',
                        }, 
                    ]}
                /> 
            </div>
            <hr />
            <h3 className="text-xl text-dark font-bold mb-4">Product</h3>
        </form>
    </>
  )
}

export default InvoiceForm