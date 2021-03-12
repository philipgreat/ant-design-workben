import styles from './SupplierTypeList.less';


import { List, Avatar, Button, Skeleton ,Row, Col} from 'antd';
import {Link} from 'dva/router'
const data = [
  {
    title: '商品茶经销商',
    code:"A1",
    description:"加盟抱同透明供应链，快速获取一手好茶信息",
    image:'./store.png',
    
  },
  {
    title: '茶叶供应商',
    code:"A1",
    image:'./tea.png',
    description:"通过入驻，有品牌需求的茶叶供应商提供数字化供应链服务，抱同为有品牌需求的客户的客户提供品牌化服务，包含营销，铺货等服务",
  },
  {
    title: '品牌服务商',
    code:"A1",
    image:'./design.png',
    description:"入驻后可以，快速接单，通过为茶叶提供品牌设计服务来获取收入",
  },
  {
    title: '包装提供商',
    code:"A1",
    image:'./box.png',
    description:"入驻后可以为品牌茶叶提供包装产品",
  },
  {
    title: '检验服务商',
    code:"A1",
    image:'./test.png',
    description:"抱同与具有资质的检验服务商合作，为品牌茶叶提供快速检验服务",
  },
  {
    title: '审评服务商',
    code:"A1",
    image:'./comment.png',
    description:"抱同与具有资质的审评服务商合作，为品牌茶叶提供权威审评服务",
  },
  
];

function SupplierTypeList(props) {
  return (
    <div className={styles.normal}>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[<Link title={item.title} style={{"font-size": "15px"}} key="list-loadmore-edit">入驻</Link>]}
            >
              <List.Item.Meta
                avatar={<Avatar size={50} src={`${item.image}`} />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
      />
    </Col>
    <Col span={6}></Col>
  </Row>
    </div>
  );
}

export default SupplierTypeList;

