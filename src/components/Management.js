import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Management() {
  return (
    <div className="management">
      <h3>CONTENT MANAGEMENT</h3>
      <Button type="primary" icon={<SearchOutlined />} iconPosition="start">
        NEW UPLOAD
      </Button>
    </div>
  );
}
export default Management;
