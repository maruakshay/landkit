import React from 'react';
import website from '../images/website.png';
import Description from '../components/Description'
import Tag from '../components/Tag.js';
import Form from '../components/Form';
import Grid from '../components/Grid'
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
                        <button className='btn btn-blue animate__infinite'>View all Pages </button>
                        <button className='btn btn-grey'> Documentation</button>
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
            <section className='section-form '>
                <div className='row container'>
                    <div className='col'>
                        <Form/>
                    </div>
                    <div className='col'>
                        <h1>The mose useful resource</h1>
                        <h2>ever created for dev |</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet cursus nunc, id tempus sapien placerat laoreet. Quisque aliquam neque id lobortis dapibus. Mauris ac mauris odio. Vestibulum bibendum dapibus tincidunt. Proin viverra viverra laoreet. Sed vitae faucibus ex. Integer ac nibh facilisis, auctor sem in, pulvinar odio. Phasellus nec eleifend enim. Nunc a sapien fringilla,
                         congue sem eu, rutrum nulla.</p>
                         <div className='grid-ish'>
                             <Grid text='hey there' />
                             <Grid text='hey there' />
                             <Grid text='hey there' />
                             <Grid text='hey there' />
                         </div>
                    </div>
                </div>
            </section>
        </>

    )
}