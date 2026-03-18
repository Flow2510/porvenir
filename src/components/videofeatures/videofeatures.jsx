import './videofeatures.scss';

import video from '../../assets/video/interieur.mp4'

export default function VideoFeatures(){
    return(
        <section className='videofeatures'>
            <video className='videofeatures__video' src={video} autoPlay muted loop></video>
            <div className='videofeatures__content'>
                <h2 className='videofeatures__content-title'>Title</h2>
                <p className='videofeatures__content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio excepturi perferendis fugiat rem, quo omnis distinctio cum nesciunt? Voluptatem tempora obcaecati fugit magni autem doloribus dolores aspernatur, eum eaque nulla.</p>
            </div>
        </section>
    )
}