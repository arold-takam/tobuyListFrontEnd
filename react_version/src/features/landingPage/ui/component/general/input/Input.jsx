import './Input.css';

export default function Input({typeInput, nameInput, value, onChange}) {
    return (
        <div className="put">
            <label htmlFor={nameInput}>Entrez votre {nameInput}</label>
            <input type={typeInput} name={nameInput} value={value} id={nameInput} className={nameInput} onChange={onChange} required/>
        </div>
    );
}