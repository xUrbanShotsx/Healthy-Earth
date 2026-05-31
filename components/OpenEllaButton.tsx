"use client";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function OpenEllaButton({ className, style, children, onClick }: Props) {
  function handleClick() {
    onClick?.();
    window.dispatchEvent(new CustomEvent("ella:open"));
  }

  return (
    <button className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
