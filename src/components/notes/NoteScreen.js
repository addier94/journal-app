import React from 'react';
import { useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange ] = useForm( note );

    const { body, title } = formValues;

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>

                {
                    (note.url) 
                    && (
                        <div className="notes__image">
                            <img 
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                                alt="imagen"
                            />
                        </div>
                    )
                }



            </div>

        </div>
    )
}
