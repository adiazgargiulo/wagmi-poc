import {AddressToDomain} from "../components/users/AddressToDomain";
import {EnsProfile} from "../components/users/EnsProfile";

const ENSPage = () => {
    return (
        <>
            <EnsProfile domain={'agustindiazg.pol'} />
            <AddressToDomain address={'0x20209DD505b94731D7cFDe8a765012B876917928'} />
        </>
    )
}

export default ENSPage;