

const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return (
                <div>waiting</div>
            );
        case 'loading':
            return (
                <div>loading</div>
            );
        case 'confirmed':
            return <Component data={data}/>;
        case 'error':
            return (
                <div>error</div>
            );
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;