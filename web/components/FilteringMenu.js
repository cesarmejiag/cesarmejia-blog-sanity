import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LIST_VIEW_ICONS = ["list", "table-cells"];

function FilteringMenu({ filter, onChange }) {
  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        className="clickable hoverable"
        size="2x"
        icon={LIST_VIEW_ICONS[filter.view.list]}
        onClick={() => {
          onChange("view", { list: +!filter.view.list });
        }}
      />
    </div>
  );
}

export default FilteringMenu;