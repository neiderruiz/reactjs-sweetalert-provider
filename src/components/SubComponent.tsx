import Button from "./Button";

const SubComponent = () => {

    return (
        <>
            <div className="card">
                <Button
                    style="success"
                    label="Success Subcomponent"
                />
                <Button
                    style="warning"
                    label="Warning Subcomponent"
                />

                <Button
                    style="info"
                    label="Info Subcomponent"
                />
                <Button
                    style="error"
                    label="Error Subcomponent"
                />
            </div>
        </>
    );
};

export default SubComponent;
