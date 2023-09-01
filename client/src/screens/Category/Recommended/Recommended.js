import Button from "../../../components/Category/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div >
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Industrial Robot" title="Industrial Robot" />
          <Button onClickHandler={handleClick} value="Domestic Robot" title="Domestic Robot" />
          <Button onClickHandler={handleClick} value="Service Robot" title="Service Robot" />
          <Button onClickHandler={handleClick} value="Educational Robot" title="Educational Robot" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
