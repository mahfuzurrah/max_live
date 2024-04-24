import React from 'react'
import FilterIcon from '../components/assets/svg/filter.svg'
import { Select, Input,Switch } from 'antd';


const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

function Wallet() {
  return (
    <div>
      <div className='model-edit'>
        {/* header */}
        <div className='title-area'>
          <div className='left'>
            <button className='btn'>Edit</button>
            <button className='btn bg-none'>Dataset</button>
          </div>
          <div className='right'>
            <button className='btn outline'><img src={FilterIcon} /> Filter</button>
          </div>
        </div>
        {/* main content */}
        <div className='main-content max_live_card '>
          <div className='input-field-area '>
            {/* Name */}
            <div className='input-component'>
              <p className='lavel-text'>Model Name</p>
              <Input placeholder="Basic usage" />
            </div>
            {/* Training */}
            <div className='input-component'>
              <p className='lavel-text'>Training model</p>
              <Select
                defaultValue="lucy"
                className='select'

                options={[{ value: 'lucy', label: 'Lucy' }]}
              />
            </div>

            {/* Batch */}
            <div className='input-component'>
              <p className='lavel-text'>Batch</p>
              <Select
                defaultValue="lucy"
                className='select'
                options={[{ value: 'lucy', label: 'Lucy' }]}
              />
            </div>

            {/* Epoch */}
            <div className='input-component'>
              <p className='lavel-text'>Epoch</p>
              <Select
                defaultValue="lucy"
                className='select'
                options={[{ value: 'lucy', label: 'Lucy' }]}
              />
            </div>

          </div>
          <div className='swich-area'>
            <p>Is Active ?</p>
            <Switch handleBg="#611D56" defaultChecked onChange={onChange} />
          </div>
          <button className='btn'>Create</button>
        </div>

      </div>
    </div>
  )
}

export default Wallet