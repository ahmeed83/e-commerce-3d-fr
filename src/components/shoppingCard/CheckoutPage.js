import React, { useState, useContext } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
// import { addOrder } from '../../services/client';
// import { Alert3D } from '../../components/common/Alert3D';
// import PrintButton from './pdf/PrintButton';
// import ResetPagePDF from './pdf/ResetPagePDF';
// import { OrderContext } from '../../services/context/OrderContext';

import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import { ContentWithPaddingXl } from 'components/misc/Layouts.js';
import HeaderPage from '../headers/light.js';
import tw from 'twin.macro';

import { Form, Input, Select, Row, Col, Table, Button, Divider } from 'antd';
import { Container } from 'reactstrap';

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const { Option } = Select;

const formItemLayout = {
  layout: 'horizantal',
  size: 'large',
  labelAlign: 'right',
  colon: false,
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
    md: {
      span: 24,
    },
    lg: {
      span: 24,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
    md: {
      span: 24,
    },
    lg: {
      span: 24,
    },
  },
};

const dataSource = [
  {
    key: '1',
    product: 'iphone',
    amount: 4,
    price: 4000,
  },
  {
    key: '2',
    product: 'Macbook',
    amount: 1,
    price: 2200,
  },
];

const columns = [
  {
    title: 'السعر',
    dataIndex: 'price',
    key: 'price',
    align: 'right',
  },
  {
    title: 'العدد',
    dataIndex: 'amount',
    key: 'amount',
    align: 'right',
  },
  {
    title: 'المنتج',
    dataIndex: 'product',
    key: 'product',
    align: 'right',
  },
];

const CheckoutPage = () => {
  // const order = useContext(OrderContext);
  const orderedProducts = [];

  // order.products.forEach(product =>
  //   orderedProducts.push({
  //     productId: product.id,
  //     productCount: product.count,
  //   })
  // );

  const initialValues = {
    name: '',
    city: '',
    companyName: '',
    district: '',
    district2: '',
    mobileNumber: '',
    email: '',
    notes: '',
    orderedProducts: orderedProducts,
  };

  const validationSchema = yup.object({
    name: yup.string().required('رجاء اضافة الاسم'),
    city: yup.string().required('رجاء اضافة اسم المدينة'),
    district: yup.string().required('رجاء اضافة اسم المنطقة'),
    mobileNumber: yup.string().required('رجاء اضافة رقم التلفون'),
    orderedProducts: yup
      .string()
      .required('رجاء اضافة بضاعة الى سلة المشتريات'),
  });

  const [showModal, setModalVisible] = useState(false);
  const dismissModal = () => setModalVisible(false);
  const [textModal, setTextModal] = useState('');
  const [textColorModal, setTextColorModal] = useState('');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(order, { setSubmitting, resetForm }) => {
        // addOrder(order)
        //   .then(res => {
        //     setModalVisible(true);
        //     setTextModal(
        //       <div>
        //         <PrintButton
        //           id={'resetPage'}
        //           fileName={res.data.orderTrackId}
        //         />
        //         <p></p>
        //         <h4 style={{ color: 'blue' }}>
        //           لقد استلمنا الطلبية، الرجاء الاحتفاظ برقم الطلبية جيدا
        //         </h4>
        //         <h6>لقد تم ارسال فاتوة الشراء الى ايميلك</h6>
        //         <ResetPagePDF id={'resetPage'} data={res.data} />
        //       </div>
        //     );
        //   setTextColorModal('info');
        //   setSubmitting(false);
        //   localStorage.clear();
        //   resetForm({});
        // })
        // .catch(err => {
        //   setModalVisible(true);
        //   if (err.response.data.status === 409) {
        //     setTextColorModal('secondary');
        //     setTextModal(err.response.data.errorMessage);
        //   } else {
        //     setTextColorModal('warning');
        //     setTextModal(
        //       'There is some error in the server, Try after a while'
        //     );
        //   }
        //   setSubmitting(false);
        // });
      }}
    >
      {({ isSubmitting, errors, touched, resetForm }) => (
        <AnimationRevealPage>
          <HeaderPage />
          <ContentWithPaddingXl>
            {/* <HeaderRow></HeaderRow> */}
            {/* <Alert3D
            visible={showModal}
            text={textModal}
            textColor={textColorModal}
            onDismiss={dismissModal}
          /> */}
            <Container style={{ color: '#3371FF' }}>
              <Row gutter={48}>
                <Col xs={24} sm={16} md={12} lg={12} xl={12}>
                  <Divider orientation="right">
                    <h3>عنوان تسلم البضاعة</h3>
                  </Divider>
                  <Form {...formItemLayout}>
                    <Form.Item
                      label=": الأسم"
                      validateStatus="error"
                      help="Should be combination of numbers & alphabets"
                    >
                      <Input placeholder="unavailable choice" id="error" />
                    </Form.Item>

                    <Form.Item
                      label=": المحافظة"
                      hasFeedback
                      validateStatus="Success"
                    >
                      <Select>
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label=": (أسم الشركة (أن وجد" hasFeedback>
                      <Input allowClear placeholder="with allowClear" />
                    </Form.Item>

                    <Form.Item label=": أسم المنطقة" hasFeedback>
                      <Input allowClear placeholder="with allowClear" />
                    </Form.Item>

                    <Form.Item label=": أقرب منطقة دالة" hasFeedback>
                      <Input allowClear placeholder="with allowClear" />
                    </Form.Item>

                    <Form.Item label=": رقم التلفون " hasFeedback>
                      <Input allowClear placeholder="with allowClear" />
                    </Form.Item>

                    <Form.Item
                      label=": الايميل"
                      hasFeedback
                      validateStatus="success"
                    >
                      <Input allowClear placeholder="with allowClear" />
                    </Form.Item>

                    <Form.Item
                      label=": ملاحظات"
                      hasFeedback
                      validateStatus="success"
                    >
                      <Input allowClear placeholder="with allowClear" />
                    </Form.Item>
                  </Form>
                </Col>
                <Col
                  style={{ backgroundColor: 'lightgrey' }}
                  sxs={24}
                  sm={16}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Divider orientation="right">
                    <h3 className="py-3">البضاعة المطلوبة</h3>
                  </Divider>

                  <Table
                    className="pb-5"
                    pagination={false}
                    dataSource={dataSource}
                    columns={columns}
                  />
                  <div>
                    <p>الدفع عند الاستلام</p>
                    <p>سوف نقوم بجلب البضاعة اليك</p>
                    <p>
                      ان كنت ترغب بحجز البضاعة والقدوم لأستلامها في المحل، هذا
                      جائز ايضا
                    </p>
                    <p>
                      (Order Id) الرجاء استخدام رقم الوصل اذا كان عندك اي سؤال
                      على البضاعة سوف نرسل لك ايميل يحتوي علي قائمة المشتريات
                      وعلى رقم الوصل حال طلبك للبضاعة
                    </p>
                  </div>
                  <Button shape="round" size="large" type="primary" block>
                    ضع الطلب
                  </Button>
                </Col>
              </Row>
            </Container>
          </ContentWithPaddingXl>
        </AnimationRevealPage>
      )}
    </Formik>
  );
};

export default CheckoutPage;
