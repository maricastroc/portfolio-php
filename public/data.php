<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

function getFilteredSkills($skills_data, $required_skills) {
    return array_values(array_filter($skills_data, function ($skill) use ($required_skills) {
        return in_array($skill['name'], $required_skills);
    }));
}

$skills_data = [
    ['name' => 'Github', 'color' => '#82BC4F'],
    ['name' => 'PHP', 'color' => '#BB72E9'],
    ['name' => 'ReactJS', 'color' => '#3996DB'],
    ['name' => 'Tailwind CSS', 'color' => '#E3646E'],
    ['name' => 'Typescript', 'color' => '#EABD5F'],
];

$geral_data = [
    "bg_image_desktop" => "http://localhost:8000/src/assets/Background_Intro.png",
    "bg_image_mobile" => "http://localhost:8000/src/assets/Background_Intro_Mobile.png",
    "projects" => [
        [
            'name' => 'Travelgram',
            'description' => 'Page with step-by-step instructions for a cupcake recipe',
            'image' => "http://localhost:8000/src/assets/project_01.png",
            'skills' => getFilteredSkills($skills_data, ["PHP", "ReactJS", "Tailwind CSS", "Typescript"])
        ],
        [
            'name' => 'Recipe Page',
            'description' => 'Social network where people share their travels around the world',
            'image' => "http://localhost:8000/src/assets/project_02.png",
            'skills' => getFilteredSkills($skills_data, ["PHP", "ReactJS", "Tailwind CSS", "Typescript"])
        ],
        [
            'name' => 'Tech News',
            'description' => 'Homepage of a technology news portal',
            'image' => "http://localhost:8000/src/assets/project_03.png",
            'skills' => getFilteredSkills($skills_data, ["PHP", "ReactJS", "Tailwind CSS", "Typescript"])
        ],
        [
            'name' => 'Refund',
            'description' => 'A system for requesting and tracking reimbursement',
            'image' => "http://localhost:8000/src/assets/project_04.png",
            'skills' => getFilteredSkills($skills_data, ["PHP", "ReactJS", "Tailwind CSS", "Typescript"])
        ],
        [
            'name' => 'Tourism Page',
            'description' => 'Page with the main information for those who want to travel to Busan',
            'image' => "http://localhost:8000/src/assets/project_06.png",
            'skills' => getFilteredSkills($skills_data, ["PHP", "ReactJS", "Tailwind CSS", "Typescript"])
        ],
        [
            'name' => 'Zingen',
            'description' => 'Complete and responsive landing page for a Karaoke app',
            'image' => "http://localhost:8000/src/assets/project_05.png",
            'skills' => getFilteredSkills($skills_data, ["PHP", "ReactJS", "Tailwind CSS", "Typescript"])
        ],
    ]
];

$intro_data = [
    "dev_name" => "Mariana Castro",
    "subtitle" => "Hello World! My name is",
    "title" => "PHP Developer",
    "description" => "I turn needs into real, engaging, and functional applications. I develop systems through my passion for technology, contributing innovative and effective solutions to complex challenges.",
    "profile_image" => "http://localhost:8000/src/assets/profile.jpg",
];

$contact_data = [
    ['name' => 'LinkedIn', 'link' => 'https://www.linkedin.com/in/mariana-castro-297586264/'],
    ['name' => 'Instagram', 'link' => 'https://www.instagram.com/maricastroc/'],
    ['name' => 'Github', 'link' => 'https://github.com/maricastroc'],
    ['name' => 'E-mail', 'link' => 'mailto:marianacastrorc@gmail.com'],
];

$response_data = [
    "geral_data" => $geral_data,
    "skills_data" => $skills_data,
    "intro_data" => $intro_data,
    "contact_data" => $contact_data
];

echo json_encode($response_data);
?>