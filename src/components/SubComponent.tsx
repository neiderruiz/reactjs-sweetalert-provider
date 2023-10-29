import { useContext } from 'react';
import { AlertContext } from "../context/alert.context";
import Button from "./Button";
const SubComponent = () => {

    const { alertSuccess, alertError, alertInfo, alertWarning } = useContext(AlertContext)

    return (
        <>
            <div className="card">
                <Button
                    style="success"
                    label="Success Subcomponent"
                    onClick={() => alertSuccess({
                        title: 'mi nuevo alert',
                        text: 'mi description',
                    })}
                />
                <Button
                    style="warning"
                    label="Warning Subcomponent"
                    onClick={() => {
                        alertWarning({
                            title: 'mi nuevo alert warning',
                            text: 'mi description warning'
                        })
                    }}
                />

                <Button
                    style="info"
                    label="Info Subcomponent"
                    onClick={() => {
                        alertInfo({
                            title: 'mi nuevo alert Info',
                            text: 'mi description info'
                        })
                    }}
                />
                <Button
                    style="error"
                    label="Error Subcomponent"
                    onClick={() => {
                        alertError({
                            title: 'mi nuevo alert error',
                            text: 'mi description error'
                        })
                    }}
                />
            </div>
        </>
    );
};

export default SubComponent;
