import '../components/log.css';

export default function Log({out}){
    return (
       <div className="log-container">
        <table className='log-table'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
            {out && out.map((data) => { 
                return (
                <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>&#8377; {data.investmentValue}</td>
                    <td>&#8377; {data.interestInYear}</td>
                    <td>&#8377; {data.totalInterest}</td>
                    <td>&#8377; {data.investedCapital}</td>
                </tr>
            )
            })}
            </tbody>
        </table>
       </div>
    )
}