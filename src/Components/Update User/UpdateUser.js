import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {

    const [inputs, setInputs] = useState({});
    const history = useNavigate();
    const { id } = useParams().id;

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
            .get(`http://localhost:5000/users/${id}`)
            .then((res) => res.data)
            .then((data) => setInputs(data.user))
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios
        .put(`http://localhost:5000/users/${id}`, {
            name: String(inputs.name),
            email: String(inputs.email),
            age: Number(inputs.age),
            address: String(inputs.address)
        })
        .then((res) => res.data);

        
    };

      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("/user-details"));
      };

  return (
    <div>
      <h1>Update User</h1>
    </div>
  );
}

export default UpdateUser
