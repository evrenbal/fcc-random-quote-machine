import Card from 'components/UI/Card';

const NotFound = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto h-full items-center flex">     
    <Card id="about-this-page" className="w-full text-left">
      <h1 className="font-bold text-3xl">About this Quote Machine</h1>
      <p className="py-5">
        This is not a production level project, made just for fun.<br/>
        It is focused on frontend libraries first and does not include any backend features.
      </p>
      <h2 className="font-bold text-xl">Libraries and Features</h2>
      <ul>
        <li>
          React v17
        </li>
        <li>
          TailwindCSS v3
        </li>
        <li>
          TypeScript
        </li>
      </ul>
      <p className="pt-5 font-bold">Feedbacks are more than welcome!</p>
      <p className="py-5 font-bold">You may contact me on</p>
      <div className="flex items-center text-3xl">
        <a title="Contact me on twitter!"
          href="https://www.twitter.com/benevrenbal"
          target="_blank"
          rel="noreferrer"
          className="mr-3"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a title="Contact me on LinkedIn!"
          href="https://www.linkedin.com/in/benevrenbal"
          target="_blank"
          rel="noreferrer"
          className="mr-3"
          >
          <i className="fa fa-linkedin"></i>
        </a>
        <a title="Check my Github Account!"
          href="https://www.github.com/evrenbal"
          target="_blank"
          rel="noreferrer"
          >
          <i className="fa fa-github"></i>
        </a>
        </div>
    </Card>
    </div>
  );
};

export default NotFound;
