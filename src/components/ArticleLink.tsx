const ArticleLink = (props: { title: string; text: string }) => {
  return (
    <div className="py-4 my-2 cursor-pointer hover:-translate-y-1 duration-150">
      <h1 className="text-2xl">{props.title}</h1>
      <p className="text-light">{props.text}</p>
    </div>
  );
};

export default ArticleLink;
