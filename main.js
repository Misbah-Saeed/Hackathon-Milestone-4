// Select the form and the generate button
const form = document.getElementById('form');
const generateButton = document.querySelector('.custom-button');

// Add event listener for button click
generateButton.addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Collect form data
    const fullName = form.querySelector('input[placeholder="Full Name "]').value;
    const designation = form.querySelector('input[placeholder="Designation"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const phone = form.querySelector('input[placeholder="Phone No"]').value;
    const profile = form.querySelector('#Explaination').value;
    const education = form.querySelector('input[placeholder="Education "]').value;
    const experiences = form.querySelector('input[placeholder="Experienes "]').value;
    const skills = form.querySelector('input[placeholder="Skill "]').value;
    const languages = form.querySelector('input[placeholder="Language "]').value;

    // Generate the HTML for the dynamic resume
    const resumeContent = `
        <html>
        <head>
            <title>Dynamic Resume</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                   
                .resume {
                    border: 1px solid #ddd;
                    padding left: 20px;
                    background-color:  #735DA5;
                     min-height:100vh;
                    width:80%;
                    margin:10px ;
                  
                   
                      
                }
             .resume h3  {
                    margin: 5px;
                      padding :5px;
                        font-size:20px ;
                }
                        h3{
                         color: #D3C5E5;
                        }
                   
                .resume h2 {
                    margin-bottom: 10px;
                       font-size:40px ;
                     text-align:center 
                } 
                     h2{
    text-decoration: underline;
    color: #D3C5E5;
}   
                .resume p {
                    margin: 5px ;
                    padding :5px
                }
            </style>
        </head>
        <body>
            <div class="resume">
            <h2>Personal Information </h2>
            <h3>Full Name <strong>:</strong> </h3>
                <p contenteditable="true">${fullName}</p>
                <h3>Designation <strong>:</strong> </h3>
                <p contenteditable="true">${designation}</p>
                <h3>Email <strong>:</strong> </h3>
                <p contenteditable="true"> ${email}</p>
                 <h3>Contact <strong>:</strong> </h3>
                <p contenteditable="true">${phone}</p>
                 <h3>Location <strong>:</strong> </h3>
                <p contenteditable="true">${location}</p>
                <h3>Profile <strong>:</strong> </h3>
                <p contenteditable="true">${profile}</p>
                <h3>Experiences <strong>:</strong> </h3>
                <p contenteditable="true">${experiences}</p>
                <h3>Education <strong>:</strong> </h3>
                 <p contenteditable="true">${education}</p>
               
                <h3>Skills <strong>:</strong> </h3>
                <p contenteditable="true">${skills}</p>
                <h3>Languages <strong>:</strong> </h3>
                <p contenteditable="true">${languages}</p>
            </div>
        </body>
        </html>
    `;

    // Open a new window and write the resume content
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.open();
    newWindow.document.write(resumeContent);
    newWindow.document.close();
});
