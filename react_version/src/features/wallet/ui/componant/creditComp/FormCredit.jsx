import ValidateButton from "../general/validateButton/ValidateButton.jsx";
import {useNavigate} from "react-router-dom";
import OfferType from "./OfferType.jsx";
import InputNumber from "../general/inputNumber/InputNumber.jsx";
import {useState} from "react";

export default function FormCredit() {

    const [description, setDescription] = useState("");
    const [selectedOffer, setSelectedOffer] = useState("standard");
    const [selectedMethodIndex, setSelectedMethodIndex] = useState(0);
    const [accountNumber, setAccountNumber] = useState("");

    const OFFERS = [
        { id: "standard",number: "1", name: "STANDARD", amount: "*****", delay: "*****", tax: "*****" },
        { id: "premium", number: "2", name: "PREMIUM", amount: "*****", delay: "*****", tax: "*****" },
        { id: "custom", number: "3", name: "CUSTOM", amount: "*****", delay: "*****", tax: "*****" },

    ];

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedOfferData = OFFERS.find(o => o.id === selectedOffer);

        if (!selectedOfferData) {
            alert("Veuillez choisir une offre d'emprunt.");
            return;
        }
        if (!accountNumber.trim()) {
            alert("Veuillez entrer un numéro de compte payeur valide.");
            return;
        }

        const paymentMethods = [
            "Compte Bancaire",
            "Orange Money",
            "Mobile Money",
            "PayPal"
        ][selectedMethodIndex];

        const dataToSend = {
            description,
            selectedOfferId: selectedOffer,
            selectedOffer: selectedOfferData,
            amount: selectedOfferData.amount,
            paymentMethod: paymentMethods[selectedMethodIndex],
            accountNumber
        };

        console.log("Données envoyées vers /confirm :", dataToSend);

        navigate("/confirm", {
            state: {formData: dataToSend}

        });

    };
    return (
        <form className="borrowForm" onSubmit={handleSubmit}>
            <div className="details">
                <label htmlFor="description">Associez Une Description A Votre Transfert</label>
                <textarea name="description"
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <OfferType
                selectedOffer={selectedOffer}
                onSelectOffer={setSelectedOffer}
                OFFERS={OFFERS}
            />
            <InputNumber
                selectedMethodIndex={selectedMethodIndex}
                onMethodChange={setSelectedMethodIndex}
                accountNumber={accountNumber}
                onAccountNumberChange={setAccountNumber}/>
            <ValidateButton>
                <p className="button">
                    VALIDER
                </p>
            </ValidateButton>
        </form>
    );
}