import React from 'react'

function calcRounds(prop){
    let value =  []
    prop.forEach(function(val){
        value.push(val.round)
    });
    return value;
}

const Table=({matches})=> {
    const rounds = calcRounds(matches);
    const uniqueRounds = [...new Set(rounds)]

    return (<table className="table">
        <thead className="thead-dark">
        <tr>
            <th scope="col">Date</th>
            <th scope="col">Round</th>
            <th scope="col">Score</th>
        </tr>
        </thead>
        <tbody>
        {(matches.map((item, index) => {
            return (
                <tr>
                    <th scope="row">{item.date}</th>
                    <th scope="row">{item.round}</th>
                    <th scope="row">{item.team1} {item.score.ft[0]} - {item.score.ft[1]} {item.team2}</th>
                </tr>
            )
        }))
        };
        </tbody>
    </table>
    )
}

export default Table