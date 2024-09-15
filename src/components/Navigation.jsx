import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mobMenu } from '../utility/imports'

const Navigation = () => {

    const [Listcolor, setListColor] = useState(false)
    const [AddNewcolor, setAddNewColor] = useState(false)
    const [AddContactColor, setAddContact] = useState(false)
    const [AddApiColor, setAddApiColor] = useState(true)
    const [MobMenu, setmobMenu] = useState(false)

    const handleList = () => {
        setListColor(true)
        setAddNewColor(false)
        setAddContact(false)
        setmobMenu(false)
        setAddApiColor(false)
    }

    const handleAddNew = () => {
        setAddNewColor(true)
        setListColor(false)
        setAddContact(false)
        setmobMenu(false)
        setAddApiColor(false)
    }

    const handleContact = () => {
        setAddContact(true)
        setAddNewColor(false)
        setListColor(false)
        setmobMenu(false)
        setAddApiColor(false)
    }

    const handleApi = () => {
        setAddApiColor(true)
        setAddContact(false)
        setAddNewColor(false)
        setListColor(false)
        setmobMenu(false)
    }

    const handleMobMenu = () => {
        setmobMenu(!MobMenu)
    }

    return (
        <>
            <img className='mobMenu' onClick={handleMobMenu} src={mobMenu} alt="mobMenu" />
            <header>
                <h1>Awesome Books</h1>
                <ul className='NavbuttonsDiv'>
                    <Link to="/ListBooks" onClick={handleList}><li className={Listcolor ? 'listSelected' : 'Navbtn'} >List</li></Link>
                    <Link to="/AddBook" onClick={handleAddNew}><li className={AddNewcolor ? 'addNewSelected' : 'Navbtn'}>Add New</li></Link>
                    <Link to="/Contact" onClick={handleContact}><li className={AddContactColor ? 'contactSelected' : 'Navbtn'}>Contact</li></Link>
                    <Link to="/" onClick={handleApi}><li className={AddApiColor ? 'fakeApi' : 'Navbtn'}>Jokes</li></Link>
                </ul>
            </header>
            {MobMenu ?
                <div className='mobDivForBlur'>
                    <ul className='MobNavbuttons'>
                        <Link to="/ListBooks" onClick={handleList}><li className={Listcolor ? 'listSelected' : 'Navbtn'} >List</li></Link>
                        <Link to="/AddBook" onClick={handleAddNew}><li className={AddNewcolor ? 'addNewSelected' : 'Navbtn'}>Add New</li></Link>
                        <Link to="/Contact" onClick={handleContact}><li className={AddContactColor ? 'contactSelected' : 'Navbtn'}>Contact</li></Link>
                        <Link to="/" onClick={handleApi}><li className={AddApiColor ? 'fakeApi' : 'Navbtn'}>Jokes</li></Link>
                    </ul>
                </div>
                : ""}
        </>
    )
}

export default Navigation
