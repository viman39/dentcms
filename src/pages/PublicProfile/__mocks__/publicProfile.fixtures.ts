export const mockUserPublicProfile = {
    username: 'BasuTheodora',
    medicalDegree: 'Doctor Stomatolog',
    universityTitle: '',
    firstName: 'Theodora',
    lastName: 'Basu',
    medicalSpecialization: 'Stomatologie Generala',
    medicalCompetencies: ['comp 1, comp 2'],
    education: {
        university: [
            {
                name: 'Coral balbal',
                degree: "Bachelor's degree",
                fieldOfStudy: 'Medicina stomatologica',
                startDate: '2017',
                endDate: '2023',
                graduationGrade: '9.26',
            },
            {
                name: 'Coral balbal',
                degree: 'Rezidentiat',
                fieldOfStudy: 'Specializare Carii',
                startDate: '2023',
                endDate: '2025',
                graduationGrade: '9.70',
            },
        ],
        courses: [
            {
                provider: 'Dentisti smecheri SRL',
                name: 'Curs Formare smecherie pe dinti',
                startDate: '2024',
                endDate: '2024',
            },
        ],
    },
    contactInformation: {
        phone: '0769 929 292',
        email: 'drsmechereanu@gmail.com',
        socials: {
            instagram: 'ig.com',
            facebook: 'fb.com',
            linkedin: 'lnkd.com',
            twitter: 'x.com',
        },
    },
    locations: [
        {
            clinicName: 'Clinica Dentara',
            address: {
                county: 'Iasi',
                city: 'Iasi',
                street: 'Ducului',
                streetNo: '13',
                building: '120',
                entry: 'B',
            },
            mapsPin: 'www.maps.com',
            website: 'www.google.com',
            phone: '0792 929 929',
            email: 'clinica@dentara.com',
            jobTitle: 'Medic stomatolog',
            prices: {},
        },
    ],
    pastExperience: [
        {
            employee: 'Numele angajatorului',
            jobTitle: 'Medic stomatolog Generalist',
            period: {
                startDate: '01.11.2023',
                endDate: '01.11.2024',
            },
            description:
                'Am fost angajat fain si cool. Am facut chestii cool si smechere',
            skills: ['endo', 'cario', 'igienizari'],
        },
    ],
};
