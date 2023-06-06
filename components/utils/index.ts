// Captures 0x + 4 characters, then the last 4 characters.
import {TransactionHash} from "../../types/Transactions";
import toast from 'react-hot-toast';


const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
export const truncateAddress = (address: TransactionHash) => {
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
};

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Address copied into the clipboard', {
        icon: '📋',
        duration: 4000,
    });

}