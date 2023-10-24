import { useState, useEffect, useCallback } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import useUser from "../hooks/useUser";


function SingleUserFavorites() {
  const [favorites, setUserFavorites] = useState([])
  const { fetchWithToken } = useToken();
  const { user } = useUser()

  const getUserFavorites = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_HOST}/api/favorites/${user?.id}`,
        { credentials: "include", }
      )
      const favoritesData = await response.json()
      setUserFavorites(favoritesData)

    } catch (error) {
      console.log('Error while getting user favorites: ', error)
    }
  }, [user?.id])

  useEffect(() => {
    if (user) {
      getUserFavorites();
    }
  }, [getUserFavorites, user]);


  const handleDeleteButtonClick = async (activityId) => {
    const deleteUrl = `${process.env.REACT_APP_API_HOST}/api/favorites/${user?.id}/${activityId}`;
    try {
      await fetchWithToken(
        deleteUrl,
        'DELETE'
      )
      getUserFavorites()
    } catch (error) {
      console.log('Error while deleting a favorite: ', error)
    }
  };

  return (
    <div>
      <h1>favorites</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Activity title</td>
            <td></td>
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
