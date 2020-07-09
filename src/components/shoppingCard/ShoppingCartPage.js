import React, { useState } from 'react';
// import { OrderContext } from '../../services/context/OrderContext';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import { ContentWithPaddingXl } from 'components/misc/Layouts.js';
import HeaderPage from '../headers/light.js';

import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
const originData = [];

for (let i = 0; i < 10; i++) {
  originData.push({
    key: i.toString(),
    name: `iPhone ${i} iPhone iPhone iPhone`,
    amount: 32,
    price: `${i}3400`,
    amountTotal: 4432,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ShoppingCartPage = () => {
  // const order = useContext(OrderContext);
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      // name: '',
      amount: '',
      // price: '',
      // amountTotal: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'حذف',
      align: 'right',
      key: 'action',
      width: '5%',
      render: () => (
        <a>
          <DeleteTwoTone twoToneColor="red" />
        </a>
      ),
    },
    {
      title: 'تغيير',
      align: 'right',
      width: '5%',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="#+"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a
            href="#+"
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            <EditTwoTone />
          </a>
        );
      },
    },
    {
      title: 'المجموع',
      dataIndex: 'amountTotal',
      width: '15%',
      editable: true,
      align: 'right',
    },
    {
      title: 'العدد',
      dataIndex: 'amount',
      width: '15%',
      editable: true,
      align: 'right',
    },
    {
      title: 'سعر المفرد',
      dataIndex: 'price',
      width: '15%',
      editable: true,
      align: 'right',
      responsive: ['lg'],
    },
    {
      title: 'أسم المنتج',
      dataIndex: 'name',
      width: '25%',
      editable: true,
      align: 'right',
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'amount' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <AnimationRevealPage>
      <HeaderPage />
      <ContentWithPaddingXl>
        <h3>سلة المشتريات</h3>
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={data}
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={{
              onChange: cancel,
              defaultPageSize: 10,
              hideOnSinglePage: true,
            }}
          />
        </Form>
      </ContentWithPaddingXl>
    </AnimationRevealPage>
  );
};
export default ShoppingCartPage;
