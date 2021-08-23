import React, {useState, useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faSearch ,faPlus,faStar, faStickyNote, faTrash, faInfo} from "@fortawesome/free-solid-svg-icons"
import "./Sidenavbar.scss"
import { NavLink, useHistory } from 'react-router-dom'
import { BASE_URL,CREATE_NOTE } from '../../Utils/apiEndpoints'
import { postRequest } from '../../Utils/apiRequests'
import { NotesContext } from '../../context/context'
import Notelist from '../Notelist/Notelist'

const Sidenavbar = () => {
    const notesContext=useContext(NotesContext);
    const history=useHistory();
    const [error,setError]=useState(null);

    const handleCreateNote=async()=>{
        const response = await postRequest(`${BASE_URL}${CREATE_NOTE}`);
        // console.log(response);
        if(response.error)
        {
            setError(response.error);
        }
        if(response._id)
        {
            notesContext.notesDispatch({type:'createNoteSuccess',payload: response});
            history.push({
                pathname:`/all-notes/${response._id}`,
                note: response
            })

        }
    }
    return (
        <div className="sidenavbar">
            <div className="sidenavbar-top">
                <div className="sidenavbar-top__profile">
                    <div className="profile-icon">
                        icon
                    </div>
                    <div className="profile-title">
                        Shubhang Kapoor
                        <FontAwesomeIcon className="icon" icon={faAngleDown} />
                    </div>
                </div>
                
                <div className="sidenavbar-top__search">
                    <div className="search-block">
                        <FontAwesomeIcon icon={faSearch}/>
                        <input className="input" placeholder="Search"/>
                    </div>
                </div>

                <div className="sidenavbar-top__create-note">
                    <div className="create-note-btn" onClick={handleCreateNote}>
                        <FontAwesomeIcon className="icon" icon={faPlus} />
                        <div className="title">
                            NewNote
                        </div>
                    </div>
                </div>

                <div className="sidenavbar-top__menu-item">
                    <ul>
                        <li>
                            <NavLink to="/dummy-1">
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                                    Dummy data
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/all-notes">
                                <FontAwesomeIcon className="icon" icon={faStickyNote}/>
                                All Notes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dummy-2">
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                                    Dummy data
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dummy-3">
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                                    Dummy data
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/trash">
                            <FontAwesomeIcon className="icon" icon={faTrash}/>
                                Trash
                        </NavLink>

                        </li>
                        <li>
                            <NavLink to="/dummy-4">
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                                    Dummy data
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>

            
            <div className="sidenavbar-bottom">
                <div className="sidenavbar-bottom__need-help">
                    <FontAwesomeIcon className="icon" icon={faInfo} />
                    Need a little help?
                </div>
            </div>
        </div>
    )
}

export default Sidenavbar
