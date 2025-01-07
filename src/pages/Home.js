import { Header, Advertisement, MenuItem, ListProduct } from "./../Components";
import { data } from "./../constants";

const Home = ({ cart, validPrice }) => {
  return (
    <div>
      <Header cart={cart} />
      <Advertisement />
      <MenuItem
        text="siêu shop thịnh hành - bung deal siêu phẩm"
        list={data.shopList}
      />
      <MenuItem
        text="kiểu cách thịnh hành - diện bảnh mặc sang"
        list={data.productList}
      />
      <ListProduct validPrice={validPrice} />
    </div>
  );
};

export default Home;
