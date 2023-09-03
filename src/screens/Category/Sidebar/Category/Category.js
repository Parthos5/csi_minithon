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
          value="Industrial Robot"
          title="Industrial Robot"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Domestic Robot"
          title="Domestic Robot"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Service Robot"
          title="Service Robot"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Educational Robot"
          title="Educational Robot"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Medical Robot"
          title="Medical Robot"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Sensors & Detectors"
          title="Sensors & Detectors"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
