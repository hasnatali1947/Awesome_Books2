import React from 'react'
import { useState } from 'react'
import { useMyContext } from '../context/MyContext'
import "../app/style/ListBooks.css"

const ListBooks = () => {

    const { AddData, setAddData } = useMyContext()
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedAuthor, setEditedAuthor] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleEdit = (index) => {
        setIsEditing(!isEditing);
        setEditIndex(isEditing ? null : index);

        if (!isEditing) {
            setEditedTitle(AddData[index].title);
            setEditedAuthor(AddData[index].author);
        } else {
            updateData(index, editedTitle, editedAuthor);
        }
    };

    const updateData = (index, title, author) => {
        const newData = [...AddData];
        newData[index] = { title, author };
        setAddData(newData);

        setIsEditing(false);
        setEditIndex(null);
        setEditedTitle('');
        setEditedAuthor('');
    };

    const RemoveBook = (index) => {
        const newData = [...AddData];
        newData.splice(index, 1);
        setAddData(newData);
        console.log('remove', newData);
    };

    return (
        <section className='ListSection'>
            <h2>All Awesome Books</h2>
            <div className='listContainer'>
                <span className='TitleAuthorHeading'>
                    <p>Title</p>
                    <p>Author</p>
                </span>
                <div className='list'>
                    {AddData.map((value, index) => (
                        <div className='listItem' key={index}>
                            <span >
                                {isEditing && editIndex === index ? (
                                    <div className='editInputs'>

                                        <input
                                            type='text'
                                            className='title'
                                            value={editedTitle}
                                            onChange={(e) => setEditedTitle(e.target.value)}
                                        />
                                        <input
                                            type='text'
                                            className='author'
                                            value={editedAuthor}
                                            onChange={(e) => setEditedAuthor(e.target.value)}
                                        />
                                    </div>

                                ) : (
                                    <div className='TitlendAuthor'>
                                        <p className='title'><span className='mobTitle'><b>Title: </b>  </span> {value.title}</p>
                                        <p className='author'><span className='mobAuthor'><b>Author: </b></span>{value.author}</p>
                                    </div>
                                )}
                            </span>
                            <div className='listBtnDiv'>
                                <button className='Edit' onClick={() => handleEdit(index)}>
                                    {isEditing && editIndex === index ? 'Save' : 'Edit'}
                                </button>
                                <button className='RemoveButton' onClick={() => RemoveBook(index)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer>
                @MIT LICENSE
            </footer>
        </section>
    )
}

export default ListBooks

