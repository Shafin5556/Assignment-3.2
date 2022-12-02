const CopyRight = ({ brandName }) => {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
              Stanford University{" "}
                <a
                  href="https://www.stanford.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {brandName && brandName}
                </a>{" "}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="#">{`Terms & Condition`}</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
