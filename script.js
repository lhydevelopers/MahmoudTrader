
        const users = [
            { username: 'Mahmoud', password: 'Trader' },
            { username: 'Laith', password: 'Developer' },
            { username: 'ليث', password: 'عربيات' }
            // Add more users as needed
        ];

        function showLogin() {
            document.getElementById('main-container').style.display = 'none';
            document.getElementById('login-container').style.display = 'block';
        }

        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                document.getElementById('login-container').style.display = 'none';
                document.getElementById('course-container').style.display = 'block';
            } else {
                alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
            }
        });

        function playVideo(button) {
            const video = button.nextElementSibling;
            const img = button.previousElementSibling;
            video.style.display = 'block';
            img.style.display = 'none';
            button.style.display = 'none';
            video.play();
        }

        // Disable right-click on video elements
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.addEventListener('contextmenu', (e) => {
                e.preventDefault();
            });
        });
