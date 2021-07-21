import styles from './ShowForm.module.css'

export function ShowForm({ data }) {


    return <div className={styles.tableDiv}>
        <table className={styles.table}>
            <th>
                <td>Name</td>
                <td>Age</td>
                <td>Address</td>
                <td>Department</td>
                <td>Salary</td>
                <td>Marritial Status</td>
            </th>
            {data.map((el) => {
                console.log(el);
                return <tr>
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.address}</td>
                    <td>{el.Department}</td>
                    <td>{el.salary}</td>
                    <td>{el.marritalstatus.toString()}</td>
                </tr>
            })}
        </table>
    </div>

}
