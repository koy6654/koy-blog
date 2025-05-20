interface PostPreviewProps {
  date: string;
  title: string;
  description: string;
}

export const PostPreview = ({ date, title, description }: PostPreviewProps) => {
  return (
    <div className="w-full h-full p-4">
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-gray-600 dark:active:bg-gray-700 transition-shadow duration-300">
        <div className="text-xs">{date}</div>
        <div className="text-lg font-bold mb-4">{title}</div>
        <p className="text-sm mb-4">{description || ''}</p>
      </div>
    </div>
  );
};
