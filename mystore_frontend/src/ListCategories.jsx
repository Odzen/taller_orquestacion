import { useEffect, useState } from 'react'
import { Table} from "react-bootstrap";

export const ListCategories = ({categories, setCategories}) => {
//   const [categories, setCaregories] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/categories/")

            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []);
    
  return (
    <div className="ListCategories">
        <h2>Categories</h2>
        <Table striped bordered hover>
            <tbody>
            {categories.map((category) => (
                <tr key={category.id}>
                <td>{category.name}</td>
                <td>{category.description}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
  )
}


