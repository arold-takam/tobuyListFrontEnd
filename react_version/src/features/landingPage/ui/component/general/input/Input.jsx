import './Input.css';

export default function Input({typeInput, nameInput}) {
    return (
        <div className="put">
            <label htmlFor={nameInput}>Entrez votre nom</label>
            <input type={typeInput} name={nameInput} id={nameInput} className={nameInput} required/>
        </div>
    );
}