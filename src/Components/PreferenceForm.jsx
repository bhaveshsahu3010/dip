import React, { useState } from 'react';
import Select from 'react-select';
import './pref.css'

const options = [
    { value: 'PID1', label: 'Project1' },
    { value: 'PID2', label: 'Project2' },
    { value: 'PID3', label: 'Project3' },
];

export default function App() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='cont'>
        <div className="App">
            <h3 className='pref'>Preference 1</h3>
            <Select className='pref'
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
        <div className="App">
            <h3 className='pref'>Preference 2</h3>
            <Select className='pref'
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
        <div className="App">
            <h3 className='pref'>Preference 3</h3>
            <Select className='pref'
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
        </div>
    );
}