'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ContactButtonProps {
  title: string;
  isSpecial?: boolean;
}

const ContactButton = ({ title, isSpecial = false }: ContactButtonProps) => {
  const router = useRouter();

  return (
    <Link 
      className={`py-3 px-5 rounded-full hover:opacity-75 transition hover:cursor-pointer w-36 
        ${isSpecial ? 'bg-slate-200 text-black font-bold' : 'bg-slate-500 text-white'}`} 
      href='/workwithus'
    >
      {title}
    </Link>
  );
};

export default ContactButton;
