import {
  SearchOutlined,
  SortAscendingOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { Col, Input, Row, Select } from "antd";

function Search() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const sortOptions = [
    { value: "Newest", label: "Newest" },
    { value: "Older", label: "Older" },
    { value: "Discount", label: "Discount" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];
  return (
    <>
      <div className="search">
        <Row gutter={[5, 5]} className="row-search">
          <Col xl={8} lg={8} md={8}>
            <Input
              className="box2"
              size="medium"
              placeholder="Search Resources"
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col xl={8} lg={8} md={8}>
            <Input
              className="box2"
              size="medium"
              placeholder="Search By Tags..."
              suffix={<TagsOutlined />}
            />
          </Col>
          <Col xl={8} lg={8} md={8}>
            <div className="newest">
              <SortAscendingOutlined />
              <span>Sort</span>
              <div className="select">
                <Select
                  defaultValue="Newest"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={sortOptions}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Search;
