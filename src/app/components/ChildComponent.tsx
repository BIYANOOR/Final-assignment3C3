const ChildComponent = (props) => {
    console.log(props);
    return (
        <div className="mb-4">
            {props.name && <h1 className="text-2xl">{props.name}</h1>}
            {props.Age && <h1 className="text-2xl">{props.Age}</h1>}
            {props.myApp && <h1 className="text-2xl">{props.myApp}</h1>}
        </div>
    );
};

export default ChildComponent;
