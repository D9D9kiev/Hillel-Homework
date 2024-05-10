import { Image, TouchableOpacity } from "react-native";
import uncheckedImage from "../../../../assets/uncheckedImage.png";
import checkedImage from "../../../../assets/checkedImage.png";

const CustomCheckbox = ({ isChecked, onCheck }) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Image
        source={isChecked ? checkedImage : uncheckedImage}
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
