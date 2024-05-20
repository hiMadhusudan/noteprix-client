import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FeaturesContainer, FeatureCard, Title, FeaturesGrid } from './FeaturesPage.styles';
import secureImage from '../../assets/secure.png';
import biometricImage from '../../assets/biometric.png';
import hourglassImage from '../../assets/hourglass.png';
import seenImage from '../../assets/seen.png';
import fileImage from '../../assets/file.png';

const FeaturesPage = () => {
    const features = [
        {
            title: "Secure Messaging",
            description: "End-to-end encryption ensures that your conversations are private.",
            icon: "lock",
            image: secureImage
        },
        {
            title: "Biometric Authentication",
            description: "Use face recognition or fingerprint scanning for enhanced security.",
            icon: "fingerprint",
            image: biometricImage
        },
        {
            title: "Message Expiry",
            description: "Set messages to expire after a certain time.",
            icon: "hourglass_empty",
            image: hourglassImage
        },
        {
            title: "Read Receipts",
            description: "Know when your messages are read.",
            icon: "visibility",
            image: seenImage
        },
        {
            title: "File Sharing",
            description: "Securely share files directly through the messaging platform.",
            icon: "folder_shared",
            image: fileImage
        }
    ];

    return (
        <>
            <Header />
            <FeaturesContainer>
                <Title>Key Features</Title>
                <FeaturesGrid>
                    {features.map(feature => (
                        <FeatureCard key={feature.title}>
                            <div className="card-header" style={{ backgroundImage: `url(${feature.image})` }}></div>
                            <div className="card-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </FeatureCard>
                    ))}
                </FeaturesGrid>
            </FeaturesContainer>
            <Footer />
        </>
    );
};

export default FeaturesPage;
