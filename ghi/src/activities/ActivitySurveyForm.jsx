import { useState, useCallback, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";


function ActivitySurveyForm() {

    const [participants, setParticipants] = useState('');
    const [environment, setEnvironment] = useState('');
    const [category, setCategory] = useState('');
    const [filteredActivities, setFilteredActivities] = useState([]);
    const { token } = useToken()
    const { user } = useUser()
    const { navigate } = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login_error");
        }
    }, [user, navigate])

    const fetchFilteredActivities = async (participants, environment, category) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_HOST}/api/activities/filtered?participants=${participants}&environment=${environment}&category=${category}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    };

    const handleFilter = async () => {
        const filteredData = await fetchFilteredActivities(participants, environment, category);
        if (filteredData !== null) {
            setFilteredActivities(filteredData);
        }
    };

    const LikeButton = useCallback(async (activityId) => {
        try {
            await fetch(
                `${process.env.REACT_APP_API_HOST}/api/favorites/${user?.id}/${activityId}`,
                {
                    credentials: "include",
                    method: "POST"
                }
            )
        } catch (error) {
            console.log('Error while getting user favorites: ', error)
        }
    }, [user?.id])



    const removeActivity = (activityId) => {
        setFilteredActivities((prevActivities) =>
            prevActivities.filter((activity) => activity.id !== activityId)
        );
    };

    return (
        <div className="w-screen">
            <div >
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Let's Find an Adventure!</h1>
                <div className="grid grid-cols-4 gap-5 w-screen h-36 flex-grow rounded-box divcentermidspace">
                    <div>
                        <div className="mt-2 text-center">
                            <select id="participants" onChange={(e) => setParticipants(e.target.value)} value={participants} className="select select-secondary w-full max-w-xs">
                                <option value="Select">Participants</option>
                                <option value="Group">Group</option>
                                <option value="Duo">Duo</option>
                                <option value="Just Me">Just Me</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="mt-2 text-center">
                            <select id="environment" onChange={(e) => setEnvironment(e.target.value)} value={environment} className="select select-secondary w-full max-w-xs">
                                <option value="Select">Environment</option>
                                <option value="Indoor Adventure">Indoor Adventure</option>
                                <option value="Outdoor Adventure">Outdoor Adventure</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="mt-2 text-center">
                            <select id="category" onChange={(e) => setCategory(e.target.value)} value={category} className="select select-secondary w-full max-w-xs" >
                                <option value="Select">Category</option>
                                <option value="Nature">Nature</option>
                                <option value="Staying In">Staying In</option>
                                <option value="Art and Music">Art and Music</option>
                                <option value="Random">Random</option>
                                <option value="Tech and Gaming">Tech and Gaming</option>
                                <option value="Date Ideas">Date Ideas</option>
                                <option value="Culinary Experiences">Culinary Experiences</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Personal Wellness">Personal Wellness</option>
                                <option value="Sports and Recreation">Sports and Recreation</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-2 text-center">
                        <button onClick={handleFilter} className=" btn btn-error btn-wide text-white">Filter</button>
                    </div>
                </div >
                <div>
                    <div>
                        <div className=" grid gap-4 grid-cols-3 grid-rows-3 m-11">
                            {filteredActivities.map(activity => {
                                return (<div key={activity.id}>
                                    <div className="box-border pb-2 pr-2 bg-lightorange">
                                        <div className="box-border pb-4 pr-2 pl-2 border bg-white shadow-lg shadow-lighorange">
                                            <div className="divsmallspace"></div>
                                            <label className="swap swap-rotate">
                                                <input type="checkbox" onClick={() => LikeButton(activity.id)} />
                                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                                <svg className="swap-off fill-none w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                            </label>
                                            <button className="btn-xs " onClick={() => { removeActivity(activity.id); }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                            <br></br>
                                            <h2 className="pl-3">{activity.title}</h2>
                                            <br></br>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}

                        </div>
                    </div >
                </div >
            </div >
        </div>
    );
};







export default ActivitySurveyForm
