import React from 'react';
import website from '../images/website.png';
import Description from '../components/Description'
import Tag from '../components/Tag.js';
import Form from '../components/Form';
export default () => {


    return (
        <>
        <div className="homepage container">
            <div className='row'>
                <div className='col'>
                    <h1>Welcome to <span>Landkit.</span></h1>
                    <h1>Develop anything .</h1>

                    <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    <div className='flex-button'>
                        <button className='btn btn-blue'>View all Pages </button>
                        <button className='btn btn-grey'>Documentation</button>
                    </div>
                </div>
                <div className='col'>
                    <img src={website} alt='image1' />
                </div>
            </div>
            <section className='components'>
                <Description imageUrl='' heading='hey there' description='lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip vbnvnvb'/>
                <Description imageUrl='' heading='hey there' description='lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip dfdfdfgd'/>
                <Description imageUrl='' heading='hey there' description='lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip dfhfgfghfh'/>
            </section>
        </div>
        <div className='section-tag-profile'>
             <Tag imageUrl='' />
             <Tag imageUrl='' />
             <Tag imageUrl='' />
             <Tag imageUrl='' />
             <Tag imageUrl='' />
        </div>
            <section className='section-form container'>
                <div className='row'>
                    <div className='col'>
                        <Form/>
                    </div>
                    <div className='col'>

                    </div>
                </div>
            </section>
        </>

    )
}