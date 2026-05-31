"use client";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
  prompt?: string;
};

export default function OpenEllaButton({ className, style, children, onClick, prompt }: Props) {
  function handleClick() {
    onClick?.();
    window.dispatchEvent(new CustomEvent("ella:open", { detail: prompt ? { prompt } : undefined }));
  }

  return (
    <button className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
