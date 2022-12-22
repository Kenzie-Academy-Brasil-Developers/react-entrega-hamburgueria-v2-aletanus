import { iLoginFormValues } from "../../Pages/Login/@types"
import { iRegisterFormValues } from "../../Pages/Register/@types"

export interface iUserRegisterResponse {
    data: iUserData;
}

export interface iUserData {
    accessToken: string;
    user: iUser;
}

export interface iUser {
    id: string;
    name: string;
    email: string;
}

export interface iUserContext {
    user: iUserData | null;
    userRegister: (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
    userLogin: (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
    // userLogout: () => void
}