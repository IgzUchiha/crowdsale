import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className='text-center text-danger my-5'>
            <Spinner animation="grow" />
            <p className='my-2'>Loading Data...</p>
        </div>
    );
}

export default Loading
