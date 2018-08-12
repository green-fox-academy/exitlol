Feature: This tests the Ratings feature of IMDb

  Background: Background: User logs in and navigates to own profile
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button
    And I click on my own profile
    Then I should see my own profile page

  Scenario: User already rated The Dark Knight by Christopher Nolan
    When User clicks on Your Ratings
    And User is redirected to ratings page
    Then User should see the movie he/she already rated