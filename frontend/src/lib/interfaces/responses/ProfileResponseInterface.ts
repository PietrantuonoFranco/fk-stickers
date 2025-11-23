import Profile from "../dtos/Profile";
import Response from "./ResponseInterface";

export default interface ProfileResponse extends Response {
    user: Profile;
}