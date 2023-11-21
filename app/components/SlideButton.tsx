const SlideButton = ({ props }:any) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props}
    >
      <path
        d="M25 37.8301L16 28.8301M16 28.8301L25 19.8301M16 28.8301L40 28.8301M1 28.8301C1 13.9184 13.0883 1.83008 28 1.83008C42.9117 1.83008 55 13.9184 55 28.8301C55 43.7418 42.9117 55.8301 28 55.8301C13.0883 55.8301 1 43.7418 1 28.8301Z"
        stroke="#FAFAFA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SlideButton;
