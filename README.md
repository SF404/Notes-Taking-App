# NOTES TAKING APP

## Setup Instructions

1. **Clone the Repository:**
   ```
   git clone https://github.com/SF404/Notes-Taking-App.git
   cd Notes-Taking-App
   ```

2. **Backend Setup:**
    - Database setup (settings.py)

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'notesdatabase',
            'USER': 'postgres',
            'PASSWORD': 'root',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }
    ```

   ```
   cd backend
   pip install -r requirements.txt
   python manage.py makemigrations
   python manage.py migrate
   python manage.py migrate --run-syncdb
   python manage.py loaddata datadump.json
   python manage.py runserver
   ```

3. **Frontend Setup:**
   ```
   cd frontend
   npm install
   npm run dev
   ```

4. **Accessing the Application:**
   - Backend server: http://localhost:8000/
   - Frontend development server: http://localhost:5173/

5. **Demo Video**

https://github.com/SF404/Notes-Taking-App/assets/109202383/966a5077-ab77-4436-bf32-955f89ee5329

