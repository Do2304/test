import "../css/content.css";
import Management from "./Management";
import Search from "./Search";
import Main from "./Main";

function ContentCustom() {
  return (
    <>
      <div className="content">
        <Management />
        <Search />
        <Main />
      </div>
    </>
  );
}

export default ContentCustom;
