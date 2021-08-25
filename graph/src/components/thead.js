import React from "react";

Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
const day = new Date().daysInMonth()

const calendar_days = () => {
    let content =[]
    for (let i=1; i<day+1; i++) {
        content.push(<div>{i}</div>)
    }
    return content;
}
function THead() {
    return (
        <div className='thead'>
          <div className='surname'>
            Фамилия
          </div>
          <div className='days'>
             {calendar_days()}
          </div>
          <div className='hours'>
              рабочие часы
          </div>

        </div>
    )
}

export default THead;