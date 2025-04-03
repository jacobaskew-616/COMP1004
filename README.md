# PassHaven Password Manager 

## Overview

This project is a Single Page Application (SPA) Password Manager that allows users to store, manage, and retrieve their login credentials securely using local storage. The application provides features such as adding, editing, deleting, and exporting accounts, along with a dark mode toggle for better user experience.

## Project Vision and Background
The main problem I want to address is how difficult it is to manage many different names and passwords when using online services. People (including myself) often struggle with remembering multiple unique and complex passwords across different accounts. This can cause people to re-use passwords and if written down, they can become scattered across many different places. This compromises the security of accounts and increases the risk of cyber-attacks. 
My vision is to develop a user-friendly and secure password manager that simplifies the way its users are able to store and protect their digital credentials. All data will be stored locally which ensures that the user does not need to rely on servers and has complete control over their information. I am also going to create an analysis feature that will guide users on how to create stronger passwords that are less susceptible to cyber-attacks. I am going to use JSON which will allow me to give my users the flexibility to back up or migrate their information at any time. By combining these features, I aim to deliver a product that will build the confidence of its users regarding their digital security. By focusing on simplicity, usability and robustness I can ensure that my application will be intuitive for all different types of users. As I will be using Agile development principles, the project will go through several iterations to ensure that the end product aligns well with my user’s needs. As I will be handling private information in this project, I need to make sure that I abide by the General Data Protection Regulations (GDPR). This is extremely important that I abide by these regulations if I want to build trust with my users. Additionally, violating GDPR can lead to extremely significant legal consequences and fines (Intersoft Consulting, 2024). Therefore, it is my highest priority that I collect and process the data of my users lawfully. 

## Features

Add, edit, and delete accounts.

Saved accounts can be exported to a text file.

The app has a dark mode toggle.

Data persistence using local storage.

## Technologies Used

HTML - Structuring the web interface.

CSS - Styling and layout design.

JavaScript - Managing the application logic.

## Security Considerations

Local storage is not encrypted, meaning stored passwords are visible in the browser developer tools.

Users should not use this for highly sensitive credentials.

## Future Improvements

Implement encryption for stored passwords.

Allow credentials to be imported.

Add authentication.

Add a feature that analyses password strength

Use cloud storage to sync data across devices/browsers
