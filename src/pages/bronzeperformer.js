import styles from '../styles/employee.module.css'; // adjust path as needed
import { Toolbar } from "../../components/Toolbar";


export const EOM = ({employee}) => {

    return (
        <div className="page-container">
            <Toolbar />
          <div className={styles.main}>
            <h1>Most valuable Bronze performer</h1>
            <div className={styles.employeeOfTheMonth}>  
             <h3>{employee.name}</h3>
             <h6>{employee.position}</h6>
             <img src = "https://images.pexels.com/photos/6170088/pexels-photo-6170088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img> 
             <p>{employee.description}</p>
            </div>
          </div>
        </div>
    )
}

export const getServerSideProps =async pageContext => {
    const apiResponse = await fetch(
        "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth",

    );

    const employee = await apiResponse.json();

    return{
        props:{
            employee

        }
    }


}

export default EOM