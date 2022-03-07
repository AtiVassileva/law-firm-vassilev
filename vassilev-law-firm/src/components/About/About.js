import PageHeader from '../PageHeader';
import Biography from './Biography';
import Timeline from './Timeline';

const About = () => {
    return (
        <>
            <PageHeader title="Повече информация" />
            <Biography />
            <Timeline />
        </>
    );
};

export default About;