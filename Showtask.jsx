import propTypes from "prop-types"

export const Showtask = ({ tasklist, handleDelete, handleClear }) => {
  return (
    <>
      <section>
        <div className="todo-part">
          <p className="todo">Todo</p>
          <span className="circle">{tasklist.length}</span>
          <button className="clear-button" onClick={() => handleClear()}>
            Clear all
          </button>
        </div>

        <ul>
          {tasklist.map((tasked) => {
            return (
              <li key={tasked.id}>
                <p>
                  <span className="taskname">{tasked.naam}</span>
                  <br />
                  <span className="date-time">{tasked.dateString}</span>
                </p>
                <div className="icons-box">
                  <i className="bi bi-pencil-square editicon"></i>
                  <i
                    className="bi bi-trash deleteicon"
                    onClick={() => handleDelete(tasked.id)}
                  ></i>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Showtask.proptypes{

};
