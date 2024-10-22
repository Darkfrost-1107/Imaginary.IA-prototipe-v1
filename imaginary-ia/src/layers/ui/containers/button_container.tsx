import { FC } from 'react';

interface Button_Props {
  label: string;
  onClick: () => void;
  className?: string;
}

export const Button_Container: FC<Button_Props> = ({ onClick, label, className }) => {
  className = className || '';
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="18"
        height="18"
      >
        <path
          fillRule="evenodd"
          d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="font-bold">{label}</span>
    </button>
  );
};
