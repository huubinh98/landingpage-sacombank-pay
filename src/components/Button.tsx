interface IProps {
  title: string,
  onClick: () => void,
}

export default function Button({ title, onClick }: IProps) {
  return (
    <button
      className="rounded-3xl bg-sky-600 text-white px-6 py-4 text-xl font-semibold"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
