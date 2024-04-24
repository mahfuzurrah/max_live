import { Image, Switch, Table } from "antd";
import React from "react";
import userImage from "../assets/img/user.png";

const columns = [
  {
    title: "#",
    dataIndex: "key",
    rowSpan: 1,
    sorter: (a, b) => a.key.localeCompare(b.key),
  },
  {
    title: "Model name",
    dataIndex: "modelName",
    sorter: (a, b) => a.modelName.localeCompare(b.modelName),
    render: (text, record) => (
      <>
        <Image src={record.modelImage} width={50} preview={false} />
        <span style={{ marginLeft: 10 }}>{text}</span>
      </>
    ),
  },
  {
    title: "Parameters",
    dataIndex: "parameters",
    sorter: (a, b) => a.parameters - b.parameters,
  },
  {
    title: "Model R score",
    dataIndex: "modelRScore",
    sorter: (a, b) => a.modelRScore - b.modelRScore,
  },
  {
    title: "Update Date",
    dataIndex: "updateDate",
    sorter: (a, b) => a.updateDate - b.updateDate,
  },
  {
    title: "Auto Train",
    key: "autoTrain",
    width: 100,
    render: () => <Switch defaultChecked={false} />,
  },
  {
    title: "Active",
    key: "active",
    width: 100,
    render: () => <Switch defaultChecked={false} />,
  },
];

const data = [
  {
    key: "1",
    modelName: "John Brown",
    modelImage: userImage,
    parameters: (
      <span>
        <b>200</b> BTERC
      </span>
    ),
    modelRScore: "0,98",
    updateDate: "2 days ago",
  },
  {
    key: "2",
    modelName: "John Brown",
    modelImage: userImage,
    parameters: (
      <span>
        <b>200</b> BTERC
      </span>
    ),
    modelRScore: "0,98",
    updateDate: "2 days ago",
  },
  {
    key: "3",
    modelName: "John Brown",
    modelImage: userImage,
    parameters: (
      <span>
        <b>200</b> BTERC
      </span>
    ),
    modelRScore: "0,98",
    updateDate: "2 days ago",
  },
  {
    key: "4",
    modelName: "John Brown",
    modelImage: userImage,
    parameters: (
      <span>
        <b>200</b> BTERC
      </span>
    ),
    modelRScore: "0,98",
    updateDate: "2 days ago",
  },
];

const onChange = (pagination, filters, sorter) => {
  console.log("params", pagination, filters, sorter);
};

const ModelsTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    pagination={{ pageSize: 10 }}
    scroll={{
      x: 991,
    }}
  />
);

export default ModelsTable;
