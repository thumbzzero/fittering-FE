'use client';

import { useEffect, useState } from 'react';

type Props = {
  url: string;
};

export default function DetailText({ url }: Props) {
  const [text, setText] = useState<string[]>([]);
  useEffect(() => {
    const fetchTextFile = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.text();
        setText(data.split('\n'));
      }
    };
    fetchTextFile();
  }, [url]);

  return (
    <div className="my-6 text-center">
      {text.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
