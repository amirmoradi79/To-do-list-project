import { data } from "../../data";
import "./panel.css";

export function Panel() {
  let filteredTasks = data.filter((task) => task.status.includes(""));
  return (
    <div className="container">
      <div className="panle">
        <div className="input-border">
          <input
            className="input-nameList"
            type="text"
            placeholder="Add to Here"
          />
          <button className="button-add">+</button>
        </div>
        <div>
          <select name="categories" id="categories" className="categories">
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="undone">Undone</option>
          </select>
        </div>
      </div>
      <div className="list"></div>
    </div>
  );
}
{
  /* <div className="task">
          <p>take out the trash</p>
          <div className="btns">
            <button>
              <img src="../../public/Actions-dialog-ok-apply-icon.png" />
            </button>

            <button>
              <img src="../../public/trash-icon.png" />
            </button>
          </div>
        </div> */
}
