import Tabbar from "../../component/tabbar/tabbar";
import "./settings.css";

function Settings() {
  return (
    <>
      <Tabbar />
      <h1>ideaSettings</h1>
      <section className="main">
        <h2>User Account</h2>
        <input type="text" placeholder="@username" />
        <hr />
        <h2>Update</h2>
        <p>Current Version: Alpha_1.0</p>
        <button
          onClick={() => {
            window.location.href =
              "https://github.com/LesesTrickshon/ideaBucket/releases";
          }}
        >
          Check for new Update
        </button>
        <hr />
        <h2>Data Management</h2>
        <button>Export Data as JSON</button>
        <textarea
          name="import-data"
          id=""
          placeholder="Import Data from JSON"
        ></textarea>
      </section>
    </>
  );
}

export default Settings;
