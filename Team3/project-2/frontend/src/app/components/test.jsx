const BACKEND_ENDPOINT = "http://localhost:2222/AddClothes";

const [clothesData, setClothesData] = useState({
  name: "",
  list: "",
  price: "",
});

const handleOnChange = (event) => {
  const { name, value } = event.target;
  setClothesData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleOnSubmit = async (event) => {
  event.preventDefault();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clothesData),
  };

  const response = await fetch(BACKEND_ENDPOINT, options);
  document.getElementById("my_modal_3").close();
  const data = await response.json();
};
