import "./App.css";
import ContentCustom from "./components/ContentCustom";
import FooterCustom from "./components/FooterCustom";
import HeaderCustom from "./components/HeaderCustom";
import SiderCustom from "./components/SiderCustom";
import { Flex, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <div className="container">
        <Flex>
          <Layout>
            <Sider className="siderCustom" width="20%">
              <SiderCustom />
            </Sider>
            <Layout>
              <Header className="headerCustom">
                <HeaderCustom />
              </Header>
              <Content className="contentCustom">
                <ContentCustom />
              </Content>
              <Footer className="footerCustom">
                <FooterCustom />
              </Footer>
            </Layout>
          </Layout>
        </Flex>
      </div>
    </div>
  );
}

export default App;
