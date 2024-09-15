import React, { useEffect } from 'react';
import { useState } from 'react';
import '../app/style/AddBook.css';
import { useMyContext } from '../context/MyContext';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { AddData, setAddData } = useMyContext()
    useEffect(() => {
        const dataString = JSON.stringify(AddData);
        localStorage.setItem('bookData', dataString);
    }, [AddData]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!title || !author) {
            alert("Please fill in the inputs");
        } else {

            const AddedBook = {
                title,
                author,
            };
            setTitle('');
            setAuthor('');
            const Newdata = [...AddData, AddedBook];
            setAddData(Newdata);
        }
    };

    return (
        <div className='container'>
            <h2>Awesome Books</h2>
            <form action='' className='form'>
                <input
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    placeholder='Title'
                    type='text'
                />
                <input
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                    placeholder='Author'
                    type='text'
                />
                <button onClick={handleAdd} type='submit' className='submitBtn'>
                    Add
                </button>
            </form>
            <footer>
                @MIT LICENSE
            </footer>
        </div>
    );
};

export default AddBook;
