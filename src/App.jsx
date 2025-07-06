import { useState } from 'react';
import Header from './components/Header';
import PersonalEdit from './components/PersonalEdit';
import EducationPreview from './components/EducationPreview';
import EducationEdit from './components/EducationEdit';
import './App.css';


function App() {

    // state for personal data
    const [formData, setFormData] = useState({
        name: 'Rasool Vahid',
        email: 'Mutopia20@gmail.com',
        phone: '+98 902 9292 ***',
        address: 'Rasht, IRI',
    });

    // handle change for inputs within personal form
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    // state for education data
    const [educationData, setEducationData] = useState({
        school: 'Odin Project',
        degree: 'Bachelors in FullStack',
        eduStartDate: '03/2025',
        eduEndDate: 'present',
        location: 'Online'
    });

    // handle chane for inputs within education form
    function eduHandleChange(e){
        const { name, value } = e.target;
        setEducationData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <main className='app'>
            <section className='editor'>
                <PersonalEdit formData={formData} onChange={handleChange} />
                <EducationEdit educationData={educationData} onChange={eduHandleChange} />
            </section>
            <section className='preview'>
                <Header {...formData}/>
                <EducationPreview {...educationData} />
            </section>

        </main>
    )
}


export default App