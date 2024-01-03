import React, { FC, useEffect, useState } from "react";
import { copyToClipboard, truncateAddress } from ".";
import { ClipboardCheckIcon, ClipboardCopy } from "lucide-react";

interface HashToClipboardProps {
  hash: `0x${string}`;
  truncated?: boolean;
}

export const HashToClipboard: FC<HashToClipboardProps> = ({
  hash,
  truncated = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    copyToClipboard(hash);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <div
      className="flex flex-row gap-x-2 items-center justify-center cursor-pointer hover:underline"
      onClick={() => handleCopy()}
    >
      {truncated && truncateAddress(hash)}
      {!truncated && hash}
      {!copied && <ClipboardCopy size={20} className="cursor-pointer" />}
      {copied && <ClipboardCheckIcon size={20} className="cursor-pointer" />}
    </div>
  );
};
