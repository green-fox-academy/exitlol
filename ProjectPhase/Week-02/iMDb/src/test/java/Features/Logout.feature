Feature: This tests the logout feature of IMDb

  Background: User logged in and on own profile page
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button
    And I click on my own profile
    Then I should see my own profile page

  Scenario: User hovers over profile name then clicks on logout
    When  User hovers over profile name and clicks on logout
    Then User should be redirected to logout page