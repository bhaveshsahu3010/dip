import React from 'react';
import './form.css';

export default function () {
    return (
        <>


            <div className="registration-form hello" >
                <div className='wraper'>
                <div className="container">
                    <span className='container'>Application Form</span>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="username" placeholder="name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item"  placeholder="Student ID" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item"  placeholder="CGPA" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="preference 1" placeholder="preference 1" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="preference 2" placeholder="preference 2" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="preference 3" placeholder="preference 3" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-block create-account">Submit</button>
                </div>
                </div>
            </div>
        </>
    );
}
