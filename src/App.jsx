import { useState } from 'react';
import Header from './components/Header';
import PersonalEdit from './components/PersonalEdit';
import EducationPreview from './components/EducationPreview';
import EducationEdit from './components/EducationEdit';
import ProfessionalPreview from './components/ProfessionalPreview';
import ProfessionalEdit from './components/ProfessionalEdit';
import './App.css';


const personalInf = {
    name: 'Rasool Vahid',
    email: 'Mutopia20@gmail.com',
    phone: '+98 902 9292 ***',
    address: 'Rasht, IRI',
};

const eduList = [
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
];

const proList = [
    {
        id: 1,
        company: 'Freelance Developer',
        position: 'My own employer',
        proStartDate: '2023-01',
        proEndDate: '2025-05',
        location: 'Rasht, IRI ',
        description: 'worked on various projects ranging from web development to game development'

    },
    {
        id: 2,
        company: 'Sample Inc.',
        position: 'My own employer',
        proStartDate: '2022-01',
        proEndDate: '2023-01',
        location: 'Rasht, IRI ',
        description: 'Designing multiple websites in a responsive manner. Designing multiple websites in a responsive manner. Designing multiple websites in a responsive manner. Designing multiple websites in a responsive manner. Designing multiple websites in a responsive manner.'

    }
];



function App() {

    // state for personal data
    const [formData, setFormData] = useState(personalInf);

    // handle change for inputs within personal form
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    // state for education data
    const [educationList, setEducationList] = useState(eduList);

    // handle chane for inputs within education form
    function handleEducationChange(e, id) {
        const { name, value } = e.target;
        setEducationList(prev =>
            prev.map(item =>
                item.id === id ? { ...item, [name]: value } : item
            )
        );
    }

    // state for professional data
    const [professionalList, setProfessionalList] = useState(proList);

    // handle chane for inputs within Professional form
    function handleProfessionalChange(e, id) {
        const { name, value } = e.target;
        setProfessionalList(prev =>
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
                <ProfessionalEdit professionalList={professionalList} setProfessionalList={setProfessionalList} onChange={handleProfessionalChange} />

            </section>
            <section className='preview'>
                <Header {...formData} />
                <EducationPreview educationList={educationList} />
                <ProfessionalPreview professionalList={professionalList} />
            </section>

        </main>
    )
}


export default App