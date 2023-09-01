import "./Category.css";
import Input from "../../../../components/Category/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Industrial robots"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Domestic robots"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Service robots"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Educational robots"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="T-shirt"
          title="Medical robots"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="T-shirt"
          title="Sensors & Detectors"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
