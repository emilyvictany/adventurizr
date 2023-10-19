import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";


function SingleUserFavorites() {
  const [favorites, setUserFavorites] = useState([])
  const [user, setUser] = useState('')
  const { token, fetchWithToken } = useToken();

  function getUserFavorites() {
    const data = fetch(
      `${process.env.REACT_APP_API_HOST}/token`,
      { credentials: "include", }
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        console.log("token is:", data)
        const favoritesData = fetch(`${process.env.REACT_APP_API_HOST}/api/favorites/${data.account.id}`,
          { credentials: "include", }
        )
          .then((response) => response.json())
          .then((favoritesData) => {
            setUserFavorites(favoritesData)
          })
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getUserFavorites();
  }, [token]);

  const handleDeleteButtonClick = async (activityId) => {
    const deleteUrl = `${process.env.REACT_APP_API_HOST}/api/favorites/${user.account.id}/${activityId}`;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      getUserFavorites();
    } else {
      console.error("Failed to delete favorite.");
    }
  };

  return (
    <div>
      <h1>favorites</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Activity title</td>
          </tr>
        </thead>
        <tbody>
          {favorites.map(favorite => {
            return (<tr key={favorite.id}>
              <td>{favorite.title}</td>
              <td> <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleDeleteButtonClick(favorite.id)}
              >
                Delete
              </button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SingleUserFavorites
