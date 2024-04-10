async function signin() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    try {
        const response = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            window.location.href = '/new-page.html'; // Redirect to a new page
        } else {
            const data = await response.json();
            if (response.status === 401) {
                alert(data.error);
            } else {
                throw new Error(data.error);
            }
        }
    } catch (error) {
        console.error(error.message);
        alert('An error occurred. Please try again.');
    }
}

async function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            alert('User created successfully');
            window.location.href = '/'; // Redirect to sign-in page
        } else {
            const data = await response.json();
            throw new Error(data.error);
        }
    } catch (error) {
        console.error(error.message);
        alert('An error occurred. Please try again.');
    }
}

function toggleForms() {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    signinForm.style.display = signinForm.style.display === 'none' ? 'block' : 'none';
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}
