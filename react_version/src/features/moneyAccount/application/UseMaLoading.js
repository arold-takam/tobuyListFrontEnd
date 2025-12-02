import * as  apiAccount from '../infrastructure/MALoadService.js';
import {useEffect, useState} from "react";
import {useAuth} from "../../../contextGlobal/authContext/useAuth.js";

export default function UseMaLoading() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [accounts, setAccounts] = useState([]);

    const {user} = useAuth();

    useEffect(() => {
        const fetchAccounts = async () => {
            if (!user) {
                setAccounts([]);
                setLoading(false);
                return;
            }

            try {
                const allAccounts = await apiAccount.loadMoneyAccount(user.id);

                setAccounts(allAccounts);
            }catch(error) {
                setError(error.message);
            }finally {
                setLoading(false);
            }
        };

        fetchAccounts();
    }, [user]);

    return {
        loading,
        error,
        accounts,
    };
}