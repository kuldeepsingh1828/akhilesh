import React from 'react'
/*
Basic Component
Second Component
*/
import BasicComponent from './components/BasicComponent';
import SecondComponent from './components/SecondComponent';
import ThirdClassBasedComponent from './components/ThirdClassBasedComponent/ThirdClassBasedComponent';

export default function App() {
    return (
        <div>
            <div>
                <ThirdClassBasedComponent/>
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
                    } />
            </div>
            <div>
                <SecondComponent />
            </div>


        </div>
    )
}
