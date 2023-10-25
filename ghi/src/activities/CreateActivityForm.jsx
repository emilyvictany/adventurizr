import { useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";


function CreateActivityForm() {
    const { user } = useUser();
    const { token } = useToken();
    const [title, setTitle] = useState('');
    const [participants, setParticipants] = useState('');
    const [environment, setEnvironment] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const participantsData = [
        { participants: 'Just Me' },
        { participants: 'Duo' },
        { participants: 'Group' },
    ];

    const environmentData = [
        { environment: 'Indoor Adventure' },
        { environment: 'Outdoor Adventure' },
    ];

    const categoryData = [
        { category: 'Nature' },
        { category: 'Staying In' },
        { category: 'Art and Music' },
        { category: 'Random' },
        { category: 'Tech and Gaming' },
        { category: 'Date Ideas' },
        { category: 'Culinary Experiences' },
        { category: 'Fitness' },
        { category: 'Personal Wellness' },
        { category: 'Sports and Recreation' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {};

        data.title = title;
        data.participants = participants;
        data.environment = environment;
        data.category = category;

        const activityUrl = `${process.env.REACT_APP_API_HOST}/api/activities/${user?.id}`;
        const response = await fetch(activityUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log("post data", data);


        if (response.ok) {
            setTitle('');
            setParticipants('');
            setEnvironment('');
            setCategory('');
            navigate('/activities/drafts');

        }
    }

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleParticipantsChange = (e) => {
        const value = e.target.value;
        setParticipants(value);
    }

    const handleEnvironmentChange = (e) => {
        const value = e.target.value;
        setEnvironment(value);
    }

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);
    }

    return (
        <div>
            <h1>Create an Activity</h1>
            <form onSubmit={handleSubmit} id="create-activity-form">
                <div>
                    <input onChange={handleTitleChange} value={title} placeholder="Title" />
                </div>
                <div>
                    <select onChange={handleParticipantsChange} value={participants} placeholder="Participants">
                        <option defaultValue="">Choose the participants</option>
                        {participantsData.map((item, index) => {
                            return (
                                <option key={index} value={item.participants}>{item.participants}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <select onChange={handleEnvironmentChange} value={environment} placeholder="Environment">
                        <option defaultValue="">Choose the Environment</option>
                        {environmentData.map((item, index) => {
                            return (
                                <option key={index} value={item.environment}>{item.environment}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <select onChange={handleCategoryChange} value={category} placeholder="Category">
                        <option defaultValue="">Choose the Category</option>
                        {categoryData.map((item, index) => {
                            return (
                                <option key={index} value={item.category}>{item.category}</option>
                            )
                        })}
                    </select>
                </div>
                <button>Create</button>
            </form>
        </div>
    );
};

export default CreateActivityForm;
