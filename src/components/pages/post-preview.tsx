interface PostPreviewProps {
  date: string;
  title: string;
}

function PostPreview({ date, title }: PostPreviewProps) {
  return (
    <div className="w-full p-20">
      <div className="">
        {date}
      </div>
      <div className="">
        {title}
      </div>
    </div>
  );
}

export default PostPreview;
