import { useState, useCallback } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import useUser from "../hooks/useUser";


function ActivitySurveyForm() {

    const [participants, setParticipants] = useState('');
    const [environment, setEnvironment] = useState('');
    const [category, setCategory] = useState('');
    const [filteredActivities, setFilteredActivities] = useState([]);
    const { token } = useToken()
    const { user } = useUser()


    const fetchFilteredActivities = async (participants, environment, category) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_HOST}/api/activities/filtered/?participants=${participants}&environment=${environment}&category=${category}`,
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



    return (
        <div>
            <div>
                <label>
                    Participants:
                    <br></br>
                    <select id="participants" onChange={(e) => setParticipants(e.target.value)} value={participants}>
                        <option value="Select">Select</option>
                        <option value="Group">Group</option>
                        <option value="Duo">Duo</option>
                        <option value="Just me">Just me</option>

                    </select>
                </label>
            </div>
            <div>
                <label>
                    Environment:
                    <br></br>
                    <select id="environment" onChange={(e) => setEnvironment(e.target.value)} value={environment}>
                        <option value="Select">Select</option>
                        <option value="Indoor Adventure">Indoor Adventure</option>
                        <option value="Outdoor Adventure">Outdoor Adventure</option>
                    </select>
                </label>
            </div>
            <div>
                <label>Category:
                    <br></br>
                    <select id="category" onChange={(e) => setCategory(e.target.value)} value={category} >
                        <option value="Select">Select</option>
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
                </label>
            </div>
            <br></br>
            <button onClick={handleFilter}>Filter</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Activity title</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {filteredActivities.map(activity => {
                        return (<tr key={activity.id}>
                            <td>{activity.title}</td>
                            <td> <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => LikeButton(activity.id)}
                            >
                                Like
                            </button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>

    );
};







export default ActivitySurveyForm
