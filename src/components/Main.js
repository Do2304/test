import { AlignRightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row } from "antd";
import { useState } from "react";
import BoxModal from "./BoxModal";
import bg from "../images/mu.png";

function Main() {
  const [visible, setVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

  const boxes = [
    { id: "box1", title: "Unit 1 - Page 1&2", version: "Version 1" },
    { id: "box2", title: "Unit 1 - Page 1&2", version: "Version 2" },
    { id: "box3", title: "Unit 1 - Page 1&2", version: "Version 3" },
    { id: "box4", title: "Unit 1 - Page 1&2", version: "Version 4" },
    { id: "box5", title: "Unit 1 - Page 1&2", version: "Version 5" },
    { id: "box6", title: "Unit 1 - Page 1&2", version: "Version 6" },
    { id: "box7", title: "Unit 1 - Page 1&2", version: "Version 7" },
    { id: "box8", title: "Unit 1 - Page 1&2", version: "Version 8" },
  ];

  const showModal = (id) => {
    setSelectedBox(id);
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
    setSelectedBox(null);
  };
  return (
    <>
      <div className="main">
        <Row gutter={[30, 30]}>
          {boxes.map((box) => (
            <Col xl={6} lg={8} md={12} key={box.id}>
              <div className="box" onClick={() => showModal(box.id)}>
                <div className="title">
                  <span>{box.title}</span>
                  <AlignRightOutlined />
                </div>
                <div className="sub">{box.version}</div>
                <div className="image">
                  <img src={bg} alt="background"/>
                </div>
                <div className="quick">
                  <Button color="primary" variant="outlined">
                    Quick review
                  </Button>
                  <Button className="btn">
                    <PlayCircleOutlined />
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Modal
          width={300}
          visible={visible}
          onCancel={handleCancel}
          footer={null}
        >
          {selectedBox && <BoxModal />}
        </Modal>
      </div>
    </>
  );
}
export default Main;
