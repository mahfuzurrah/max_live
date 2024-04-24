import { Input, Switch } from "antd";
import React from "react";
import FilterIcon from "../components/assets/svg/filter.svg";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

function Wallet() {
  return (
    <div>
      <div className="model-edit">
        {/* header */}
        <div className="title-area">
          <div className="left">
            <button className="btn">Edit</button>
            <button className="btn bg-none">Dataset</button>
          </div>
          <div className="right">
            <button className="btn outline">
              <img src={FilterIcon} alt="" />
              Filter
            </button>
          </div>
        </div>
        {/* main content */}
        <div className="main-content max_live_card ">
          <div className="input-field-area ">
            {/* Name */}
            <div className="input-component">
              <p className="lavel-text">Model Name</p>
              <Input placeholder="Basic usage" />
            </div>
            {/* Training */}
            <div className="input-component">
              <label className="lavel-text">Training model</label>
              <Input placeholder="Basic usage" type="number"/>
            </div>

            {/* Batch */}
            <div className="input-component">
              <label className="lavel-text">Batch</label>
              <Input placeholder="Batch" type="number"/>
            </div>

            {/* Epoch */}
            <div className="input-component">
              <label className="lavel-text">Epoch</label>
              <Input placeholder="Epoch" type="number"/>
            </div>
          </div>
          <div className="swich-area">
            <p>Is Active ?</p>
            <Switch handleBg="#611D56" defaultChecked onChange={onChange} />
          </div>
          <button className="btn">Create</button>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
