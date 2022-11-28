// import React, { useState, useEffect } from "react";
// import { ChromePicker } from "react-color";
// import styled from "styled-components";

// const Title = styled.h5`
//   margin-bottom: 1rem;
//   color: #333740;
// `;

// const ColorWindow = styled.div`
//   background-color: ${(props) => props.color};
//   width: 4rem;
//   height: 4rem;
//   border-radius: 50%;
//   border: ${(props) => props.color === "#FFFFFF" && "1px solid #5B5F65"};
// `;

// const PopOver = styled.div`
//   position: absolute;
//   z-index: 2;
//   top: 70px;
// `;
// const Cover = styled.div`
//   position: fixed;
//   top: 0px;
//   right: 0px;
//   bottom: 0px;
//   left: 0px;
// `;

// const ColorPicker = (props) => {
//   const [showPicker, setShowPicker] = useState(false);
//   const [color, setColor] = useState(props.value ? props.value : "#FFFFFF");
//   console.log(props.value);

//   /**
//    * Makes the color value available to the document for database update
//    * @param {string} colorValue - in hex format
//    */
//   const updateColorValue = (colorValue) => {
//     props.onChange({
//       target: { name: "color", value: colorValue, type: "colorpicker" },
//     });
//   };

//   /**
//    * Assign a default color value if the document doesn't have one yet
//    */
//   useEffect(() => {
//     if (!props.value) {
//       updateColorValue(color);
//     }
//   }, []);

//   /**
//    * Handle color change from the the color picker
//    * @param {string} color - in hex format
//    */
//   const handleChangeComplete = (color) => {
//     setColor(color.hex);
//     // updateColorValue(color);
//   };
//   return (
//     <div>
//       <ColorWindow color={color} onClick={() => setShowPicker(true)} />
//       {showPicker ? (
//         <PopOver>
//           <Cover onClick={() => setShowPicker(false)} />
//           <ChromePicker color={color} onChange={handleChangeComplete} />
//         </PopOver>
//       ) : null}
//     </div>
//   );
// };

// export default ColorPicker;

import { TextInput } from "@strapi/design-system/TextInput";
import React, { useState, useEffect } from "react";
import { Button } from "@strapi/design-system/Button";
import { ChromePicker } from "react-color";
import styled from "styled-components";

// styles
const Title = styled.h5`
  margin-bottom: 1rem;
  color: #333740;
`;

const ColorWindow = styled.div`
  background-color: ${(props) => props.color};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: ${(props) => props.color === "#FFFFFF" && "1px solid #5B5F65"};
`;

const PopOver = styled.div`
  position: absolute;
  z-index: 2;
`;
const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ColorPicker = (props) => {
  const { name, value, attribute, onChange } = props;
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(value ? value : "#FFFFFF");

  const {
    // All our custom field config are here
    placeholder,
    label,
    hint,
  } = attribute.customFieldConfig || {};

  const updateColor = (colorValue) => {
    onChange({
      target: {
        name,
        value: colorValue,
      },
    });
  };

  useEffect(() => {
    if (!value) {
      updateColor(color);
    }
  }, []);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    updateColor(color.hex);
  };
  return (
    <>
      <div>
        {name && <Title>{name.split(".")[1]}</Title>}
        <ColorWindow color={color} onClick={() => setShowPicker(true)} />
        {showPicker ? (
          <PopOver>
            <Cover onClick={() => setShowPicker(false)} />
            <ChromePicker color={color} onChange={handleChangeComplete} />
          </PopOver>
        ) : null}
      </div>
    </>
  );
};

export default ColorPicker;
