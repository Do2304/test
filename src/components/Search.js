import { SearchOutlined, SortAscendingOutlined, TagsOutlined } from "@ant-design/icons";
import { Button, Col, Row, Select } from "antd";

function Search() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="search">
        <Row gutter={[5, 5]} className="row-search">
          <Col xl={8} lg={8} md={8}>
            <Button
              className="box1"
              color="default"
              variant="outlined"
              icon={<SearchOutlined />}
              block
            >
              Search Resources
            </Button>
          </Col>
          <Col xl={8} lg={8} md={8}>
            <Button
              className="box2"
              color="default"
              icon={
                <div className="icon-wrapper">
                  <TagsOutlined />
                </div>
              }
              iconPosition="end"
              block
            >
              Search By Tags
            </Button>
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
                  options={[
                    {
                      value: "Newest",
                      label: "Newest",
                    },
                    {
                      value: "older",
                      label: "older",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
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
