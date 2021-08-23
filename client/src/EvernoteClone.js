import React,{useReducer} from "react";
import "./EvernoteClone.scss";
import Sidenavbar from "./Components/Sidenavbar/Sidenavbar";
import Notelist from "./Components/Notelist/Notelist";
import Note from "./Components/Note/Note";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {NotesContext} from "../src/context/context.js";
import NoteReducer from "../src/reducer/NoteReducer";

const initialState=[];

function EvernoteClone() {
  const [notes,notesDispatch]= useReducer(NoteReducer, initialState);
  return (
    <Router>
      <NotesContext.Provider value={{notesState:notes,notesDispatch}}>
        <div className="evernoteClone">
            <Sidenavbar />
            <Switch>
              <Route path="/all-notes">
                <Notelist title="All Notes" />
                <Route path="/all-notes/:id">
                  <Note />
                </Route>
              </Route>
              <Route path="/trash">
                <Notelist title="Trash"/>
                <Route path="/trash/:id">
                  <Note/>
                </Route>
              </Route>
            </Switch>
          </div>
      </NotesContext.Provider>
    </Router>
  );
}

export default EvernoteClone;
