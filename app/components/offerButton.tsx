'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface OfferButtonProps {
  title: string;
  isSpecial?: boolean;
}

const OfferButton = ({ title, isSpecial = false }: OfferButtonProps) => {
  const router = useRouter();

  return (
    <Link 
      className={`py-3 px-5 rounded-full hover:opacity-75 transition hover:cursor-pointer w-36 
        ${isSpecial ? 'bg-slate-200 text-black font-bold' : 'bg-slate-200 text-blacks font-bold'}`} 
      href='/join'
    >
      {title}
    </Link>
  );
};

export default OfferButton;
