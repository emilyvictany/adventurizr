import React, { useState, useEffect, useCallback } from 'react';
import useUser from '../hooks/useUser';
import useToken from '@galvanize-inc/jwtdown-for-react';
import { Link, useNavigate } from "react-router-dom";


const ActivityDraftsPage = () => {
    const { user } = useUser();
    const { fetchWithToken } = useToken();
    const [activityDrafts, setActivityDrafts] = useState([]);
    const [editActivityId, setEditActivityId] = useState(null);
    const [activityDraftToUpdate, setActivityDraftToUpdate] = useState(null)
    const [title, setTitle] = useState("");
    const [participants, setParticipants] = useState("");
    const [environment, setEnvironment] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const resetInputFields = () => {
        setTitle("")
        setParticipants("")
        setEnvironment("")
        setCategory("")
    }

    const getUserDrafts = useCallback(async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_HOST}/api/activities/${user?.id}/drafts`,
                { credentials: 'include' }
            )
            const activityDraftData = await response.json();
            setActivityDrafts(activityDraftData);
            if (activityDraftData.length === 0) {
                navigate("/activities/drafts/empty");
            }
        } catch (error) {
            console.log('Error while getting user activity drafts: ', error);
        }
    }, [user?.id, navigate]);

    useEffect(() => {
        if (user) {
            getUserDrafts();
        }
    }, [getUserDrafts, user]);

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

    const handleEditButton = async (activityId, activityIdx) => {
        setEditActivityId(activityId);
        setTitle(activityDrafts[activityIdx].title)
        setParticipants(activityDrafts[activityIdx].participants)
        setEnvironment(activityDrafts[activityIdx].environment)
        setCategory(activityDrafts[activityIdx].category)
    };

    const handleCancelEdit = ({ activityIdx }) => {
        setEditActivityId(null);
        resetInputFields({ activityIdx })
    };

    const handleUpdateActivityDraft = async ({ id: activityId, activityDraftToUpdate }) => {
        const updateUrl = `${process.env.REACT_APP_API_HOST}/api/activities/${activityId}`;
        try {
            await fetchWithToken(
                updateUrl,
                'PUT',
                { 'Content-Type': 'application/json' },
                {
                    body: JSON.stringify(activityDraftToUpdate)
                },
            );
            await getUserDrafts();
            setEditActivityId(null);
        } catch (error) {
            console.log('Error while updating the activity: ', error);
        }
    };

    const handlePublishActivity = async (activityId) => {
        const updateUrl = `${process.env.REACT_APP_API_HOST}/api/activities/${activityId}/publish`
        const result = window.confirm("Confirmation: Publish activity?")
        if (result) {
            try {
                await fetchWithToken(
                    updateUrl,
                    'PUT',
                    { 'Content-Type': 'application/json' },
                );
                await getUserDrafts();
                setEditActivityId(null);
            } catch (error) {
                console.log('Error while publishing the activity: ', error);
            }
        }
    };

    const handleDeleteButton = async (activityId) => {
        const deleteUrl = `${process.env.REACT_APP_API_HOST}/api/activities/${activityId}`
        const result = window.confirm("Confirmation: Delete activity?")
        if (result) {
            try {
                await fetchWithToken(
                    deleteUrl,
                    'DELETE'
                )
                getUserDrafts()
            } catch (error) {
                console.log('Error while deleting activity: ', error)
            }
        }
    };

    return (
        <div className='divspace'>
            <h1 className="divlargespace text-center text-2xl font-bold">Your Activity Drafts!</h1>

            <div className="flex justify-center">
                <div className="card shadow-xl">
                    <div className="card-body">

                        <div className="overflow-x-auto ">
                            <table className="table">
                                <thead className="draft-table">
                                    <tr>
                                        <th>Title</th>
                                        <th>Participants</th>
                                        <th>Environment</th>
                                        <th>Category</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activityDrafts.map((activity, i) => (
                                        <tr key={activity.id}>
                                            <td>{editActivityId === activity.id ?
                                                <input
                                                    value={!!title ? title : activity.title}
                                                    onChange={(event) => {
                                                        console.log('activityDrafts[i]: ', activityDrafts[i])
                                                        setTitle(event.target.value)
                                                        setActivityDraftToUpdate({
                                                            ...activityDrafts[i],
                                                            title: event.target.value,
                                                            participants: !!participants ? participants : activity.participants,
                                                            environment: !!environment ? environment : activity.environment,
                                                            category: !!category ? category : activity.category,
                                                        })
                                                    }}
                                                    type="text"
                                                    name={activity.title}
                                                    className="from-control"
                                                /> : activity.title}
                                            </td>
                                            <td>{editActivityId === activity.id ?
                                                <select
                                                    value={!!participants ? participants : activity.participants}
                                                    onChange={(event) => {
                                                        setParticipants(event.target.value)
                                                        setActivityDraftToUpdate({
                                                            ...activityDrafts[i],
                                                            title: !!title ? title : activity.title,
                                                            participants: event.target.value,
                                                            environment: !!environment ? environment : activity.environment,
                                                            category: !!category ? category : activity.category,
                                                        })
                                                    }}
                                                    placeholder="Participants">
                                                    {/* <option defaultValue="">Choose the participants</option> */}
                                                    {participantsData.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.participants}>{item.participants}</option>
                                                        )
                                                    })}
                                                </select> : activity.participants}
                                            </td>
                                            <td>{editActivityId === activity.id ?
                                                <select
                                                    value={!!environment ? environment : activity.environment}
                                                    onChange={(event) => {
                                                        setEnvironment(event.target.value)
                                                        setActivityDraftToUpdate({
                                                            ...activityDrafts[i],
                                                            title: !!title ? title : activity.title,
                                                            participants: !!participants ? participants : activity.participants,
                                                            environment: event.target.value,
                                                            category: !!category ? category : activity.category,
                                                        })
                                                    }}
                                                    placeholder="Environment">
                                                    {/* <option defaultValue="">Choose the Environment</option> */}
                                                    {environmentData.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.environment}>{item.environment}</option>
                                                        )
                                                    })}
                                                </select> : activity.environment}
                                            </td>
                                            <td>{editActivityId === activity.id ?
                                                <select
                                                    value={!!category ? category : activity.category}
                                                    onChange={(event) => {
                                                        setCategory(event.target.value)
                                                        setActivityDraftToUpdate({
                                                            ...activityDrafts[i],
                                                            title: !!title ? title : activity.title,
                                                            participants: !!participants ? participants : activity.participants,
                                                            environment: !!environment ? environment : activity.environment,
                                                            category: event.target.value,
                                                        })
                                                    }}
                                                    placeholder="Category">
                                                    {/* <option defaultValue="">Choose the Category</option> */}
                                                    {categoryData.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.category}>{item.category}</option>
                                                        )
                                                    })}
                                                </select> : activity.category}
                                            </td>
                                            <td>
                                                {editActivityId === activity.id ? (
                                                    <button className="btn btn-outline btn-success btn btn-sm" onClick={() => handleUpdateActivityDraft({ id: activity.id, activityDraftToUpdate })}>
                                                        Save
                                                    </button>
                                                ) : (
                                                    <button className="btn btn-outline btn-info btn btn-sm" onClick={() => handleEditButton(activity.id, i)}>
                                                        Edit
                                                    </button>
                                                )}
                                            </td>
                                            <td>
                                                {editActivityId === activity.id ? (
                                                    <button className="btn btn-outline btn-warning btn btn-sm" onClick={() => { handleCancelEdit({ activityIdx: i }) }}>
                                                        Cancel
                                                    </button>
                                                ) : (
                                                    <button className="btn btn-outline btn-error btn btn-sm" onClick={() => handleDeleteButton(activity.id)}>
                                                        Delete
                                                    </button>
                                                )}
                                            </td>
                                            <td>
                                                <button className="btn btn-outline btn-secondary btn btn-sm" onClick={() => handlePublishActivity(activity.id)}>
                                                    Publish
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <div className="flex justify-center">
                <Link to="/activities/create">
                    <button className="btn btn-outline btn-secondary btn">Create an activity!</button>
                </Link>
            </div>
        </div>
    );
}

export default ActivityDraftsPage;
