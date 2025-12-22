import './ValidateButton.css'

export default function ValidateButton({children}){
    return(
            <button type="submit" className="validate">
                {children}
            </button>
    );
}