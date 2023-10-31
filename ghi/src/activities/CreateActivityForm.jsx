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

        if (!token) {
            navigate("/create/login_error");
        }

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
        <div className="w-screen">
            <div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an Activity!</h1>
                        <br></br>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                            <form onSubmit={handleSubmit} id="create-activity-form">
                                <label className="block text-sm font-medium leading-6 text-gray-900 indent-8">Title</label>
                                <div className="mt-2 text-center">
                                    <input onChange={handleTitleChange} value={title} placeholder="title" className="input input-bordered input-secondary w-full max-w-xs" />
                                </div>
                                <br></br>
                                <label className="block text-sm font-medium leading-6 text-gray-900 indent-8">Participants</label>
                                <div className="mt-2 text-center">
                                    <select onChange={handleParticipantsChange} value={participants} placeholder="Participants" className="select select-secondary w-full max-w-xs">
                                        <option defaultValue="">Choose the Participants</option>
                                        {participantsData.map((item, index) => {
                                            return (
                                                <option key={index} value={item.participants}>{item.participants}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <br></br>
                                <label className="block text-sm font-medium leading-6 text-gray-900 indent-8">Environment</label>
                                <div className="mt-2 text-center">
                                    <select onChange={handleEnvironmentChange} value={environment} placeholder="Environment" className="select select-secondary w-full max-w-xs" >
                                        <option defaultValue="">Choose the Environment</option>
                                        {environmentData.map((item, index) => {
                                            return (
                                                <option key={index} value={item.environment}>{item.environment}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <br></br>
                                <label className="block text-sm font-medium leading-6 text-gray-900 indent-8">Category</label>
                                <div className="mt-2 text-center">
                                    <select onChange={handleCategoryChange} value={category} placeholder="Category" className="select select-secondary w-full max-w-xs">
                                        <option defaultValue="">Choose the Category</option>
                                        {categoryData.map((item, index) => {
                                            return (
                                                <option key={index} value={item.category}>{item.category}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <br></br>
                                <div className="divmedspace">
                                    <button className="btn btn-error text-white">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default CreateActivityForm;
