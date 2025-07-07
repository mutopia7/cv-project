import { useState } from 'react';
import Header from './components/Header';
import PersonalEdit from './components/PersonalEdit';
import EducationPreview from './components/EducationPreview';
import EducationEdit from './components/EducationEdit';
import ProfessionalPreview from './components/ProfessionalPreview';
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
    const [educationList, setEducationList] = useState([
        {
            id: 1,
            school: 'Odin Project',
            degree: 'Bachelors in FullStack',
            eduStartDate: '2025-03',
            eduEndDate: '2025-08',
            location: 'Online',
            isOpen: false,
        },
        {
            id: 2,
            school: 'MIT',
            degree: 'Masters in AI',
            eduStartDate: '2024-01',
            eduEndDate: '2024-12',
            location: 'Cambridge',
            isOpen: false,
        }
    ]);

    // handle chane for inputs within education form
    function handleEducationChange(e, id) {
        const { name, value } = e.target;
        setEducationList(prev =>
            prev.map(item =>
                item.id === id ? { ...item, [name]: value } : item
            )
        );
    }

    return (
        <main className='app'>
            <section className='editor'>
                <PersonalEdit formData={formData} onChange={handleChange} />
                <EducationEdit educationList={educationList} setEducationList={setEducationList} onChange={handleEducationChange} />
                
            </section>
            <section className='preview'>
                <Header {...formData} />
                <EducationPreview educationList={educationList} />
                <ProfessionalPreview />
            </section>

        </main>
    )
}


export default App