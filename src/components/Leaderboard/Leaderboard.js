import React from "react";
import ReactDOM from "react-dom";
import "./Leaderboard.css";

import { AuthContext, ColorModelContext } from "../../contexts";

const Leaderboard = ({ getContent }) => {
  const formattedContent = async (model, userUid) => {
    const data = await getContent(model);
    const structured = data.docs.map(e => ({
      name: e.data().name,
      points: e.data()[`highScore${model}`],
      isCurrentUser: e.data().uid === userUid
    }));
    return structured.map((e, index) => (
      <tr key={index} className={e.isCurrentUser ? "currentUser" : null}>
        <td>{index + 1}</td>
        <td>{e.name}</td>
        <td>{e.points}</td>
      </tr>
    ));
  };

  // Don't mind the irrelevent name given to the function
  const lastTry = async (model, userUid) => {
    // TODO: Show the loading spinner
    const data = await formattedContent(model, userUid);

    if (parseInt(localStorage.getItem("IS_USER_LOGGED_IN")))
      ReactDOM.render(data, document.getElementById("leaderboard__table-body"));
    // TODO: Hide the loading spinner
  };

  return (
    <div className="leaderboard">
      <h2 className="leaderboard__header">Leaderboard</h2>
      <AuthContext.Consumer>
        {auth =>
          auth !== null ? (
            <table className="leaderboard__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody id="leaderboard__table-body">
                <ColorModelContext.Consumer>
                  {model => {
                    if (auth.uid) {
                      lastTry(model, auth.uid).catch(error =>
                        console.log(error)
                      ); // Loads, formats and renders the leaderboard content
                    }
                  }}
                </ColorModelContext.Consumer>
              </tbody>
            </table>
          ) : (
            <p>Please login to see the leaderboard</p>
          )
        }
      </AuthContext.Consumer>
    </div>
  );
};

export default Leaderboard;
