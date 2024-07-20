import Prompt from './Prompt';
import DownloadNow from './DownloadNow';


const Content = () => {
    const handleClick = () => {
        window.location.href = '/download';
    };

    return (
        <div>
            <Prompt />

            
            <DownloadNow />
        </div>
    );
};

export default Content;