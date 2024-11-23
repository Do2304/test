import { Pagination } from "antd";
import { useState } from "react";
import "../css/footer.css";

function FooterCustom() {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <>
      <div className="footer">
        <Pagination
          align="end"
          defaultCurrent={2}
          total={30}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default FooterCustom;
