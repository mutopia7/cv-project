import { useState } from 'react';
import Header from './components/Header';
import PersonalEdit from './components/PersonalEdit';
import './App.css'

function App() {
    const [formData, setFormData] = useState({
        name: 'Rasool Vahid',
        email: 'Mutopia20@gmail.com',
        phone: '+98 902 9292 ***',
        address: 'Rasht, IRI',
    });



    function handleChange(e) {


        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    return (
        <main className='app'>
            <section className='editor'>
                <PersonalEdit formData={formData} onChange={handleChange} />
            </section>
            <section className='preview'>
                <Header {...formData}/>
            </section>

        </main>
    )
}


export default App