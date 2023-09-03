import React from 'react'
/*
Basic Component
Second Component
*/
import BasicComponent from './components/BasicComponent';
import ColumnViewReact from './components/Test';
import FirstFunction from './components/FirstFunction/FirstFunction';
import SecondComponent from './components/SecondComponent';
import SecondFunction from './components/SecondFunction/SecondFunction';
import ThirdClassBasedComponent from './components/ThirdClassBasedComponent/ThirdClassBasedComponent';
import Parent from './components/context/Parent';
// import UsersDataComponent from './components/UsersDataComponent/UsersDataComponent';

const data1 = {
    effectiveDate: '11/06/2023',
    account: {
        code: 'ABCD',
        dailyPricing: {
            asOf: '11/05/2021',
            nav: '1.24',
            nav1Day: '1.23',
            mktPrice: '1.25',
            mktPrice1Day: '1.26'
        }
    }
}
const data2 = {
    total_net_assets: {
        asOf: '07/23/2031',
        value: '2783704185.87',
    }
}
const data3 = {
    effectiveDate: '11/06/2023',
    account: {
        code: 'ABCD',
        gross: '12.32',
        net: '13.43'
    }
}
export default function App() {
    return (
        <div>
            <div>
                <Parent/>
                {/* <ColumnViewReact dailypricingdata={data1} />
                <ColumnViewReact netassetdata={data2} />
                <ColumnViewReact expenseratiodata={data3} /> */}
                {/* <UsersDataComponent /> */}
                {/* <SecondFunction/> */}
                {/* <FirstFunction/> */}
                {/* <ThirdClassBasedComponent/>
                <BasicComponent
                    prop1={"Text"}
                    prop2={1232}
                    prop3={
                        {
                            name1: "Object name",
                            name2: "Object name",
                            name3: "Object name",
                            value1: "Object Value",
                            value2: "Object Value",
                            value3: "Object Value",
                            value4: "Object Value"
                        }
                    } /> */}
            </div>
            <div>
                {/* <SecondComponent /> */}
            </div>


        </div>
    )
}
