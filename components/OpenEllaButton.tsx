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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).voiceflow?.chat?.open?.();
  }

  return (
    <button className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
