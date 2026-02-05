AMD Final Project Proposal
Project Title
Shop Voting Mobile Application
Student Name
K W C Lakshitha

Module
ITS 2127 - Advanced Mobile Developer (AMD)
Course Coordinator
Shamodha Sahan
Project Overview
The Shop Voting App is a cross-platform mobile application that allows users to securely log in, view a list of
local shops, and cast votes or ratings for each shop. The application focuses on authentication, state
management, CRUD operations, and optional REST API integration for fetching shop data as required by the
AMD module.

Problem Statement
Consumers often want a simple way to provide feedback or vote for their favorite local shops, but existing
systems are either too complicated or unavailable. This app provides an easy and secure platform for users
to vote, view results, and manage their voting history.
Objectives

• Provide secure user login and account management
• Display a list of shops with basic details
• Enable users to vote or rate shops
• Allow users to view, edit, or delete their votes
• Ensure compliance with AMD requirements for authentication, CRUD, state management, and
navigation

Target Users
• Local consumers who want to vote or rate shops
1• Shop owners who want feedback from users
• Students or general users looking for a simple interactive voting platform

Core Features
Authentication (Security)
• User Registration (Sign Up)
• User Login & Logout
• Secure access to user-specific voting data

Shop Feature (Read-Only / Optional API)
• View a list of shops with basic info (name, category, location)
• Optional integration with a mock API for shop data

Voting Feature (CRUD Operations)
• Create: Cast a vote or rating for a shop
• Read: View all previously cast votes
• Update: Change or update an existing vote
• Delete: Remove a vote if desired

Main Screens (6+)
1. Splash Screen
2. Login Screen
3. Register Screen
4. Home Screen (List of Shops)
5. Voting / Rate Shop Screen
6. User Votes History Screen
7. Profile / Settings Screen
   
Navigation
• Stack Navigation: Authentication flow
• Bottom Tab Navigation: Home, Votes, Profile

State Management
• React Context API + useReducer
• Global state for authentication, shops list, and user votes
• Handles loading and error states efficiently

Technology Stack
• Frontend: React Native (Expo)

2• Backend / Database: Firebase Firestore
• Authentication: Firebase Authentication (Email & Password)
• API (Optional): Mock or real shop data API
• Navigation: React Navigation (Stack + Tab)
• State Management: React Context API

Security Considerations
• Authentication required for voting
• Firestore rules enforce user-specific access to votes
• No sensitive data stored insecurely
