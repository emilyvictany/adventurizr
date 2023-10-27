import { useState, useEffect, useCallback } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

function SingleUserFavorites() {
  const [favorites, setUserFavorites] = useState([])
  const { fetchWithToken } = useToken();
  const { user } = useUser()
  const navigate = useNavigate();

  const getUserFavorites = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_HOST}/api/favorites/${user?.id}`,
        { credentials: "include", }
      )
      const favoritesData = await response.json()
      setUserFavorites(favoritesData)
      if (favoritesData.length === 0) {
        navigate("/favorites/empty");
      }
    } catch (error) {
      console.log('Error while getting user favorites: ', error)
    }
  }, [user?.id, navigate])

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

    <div className="w-screen">
      <div>
        <h1 className="p-10 text-center text-2xl font-bold">Favorites</h1>
        <div>
          <div className="p-10 grid grid-rows-3 grid-cols-3 grid-flow-col-row gap-5 w-screen ">

            {favorites.map(favorite => {
              return (<div key={favorite.id}>
                <div className="box-border pb-2 pr-2 bg-lightorange">
                  <div className="box-border pb-4 pr-2 pl-2 border bg-white shadow-lg shadow-lighorange">
                    <div className="divsmallspace"></div>
                    <button className="btn-xs btn-square " onClick={() => handleDeleteButtonClick(favorite.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <br></br>
                    <h2 className="pl-3">{favorite.title}</h2>
                    <br></br>
                  </div>
                </div>
              </div>
              )
            })}

          </div>
        </div >
      </div >
    </div>


  );
}

export default SingleUserFavorites
