import { ClipboardCopy, ClipboardCheckIcon } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { copyToClipboard } from ".";

interface ClipboardBtnProps {
  text: string;
}

export const ClipboardBtn: FC<ClipboardBtnProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    copyToClipboard(text);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  if (!copied)
    return (
      <ClipboardCopy
        size={20}
        className="cursor-pointer"
        onClick={() => handleCopy()}
      />
    );
  if (copied)
    return <ClipboardCheckIcon size={20} className="cursor-pointer" />;
};
