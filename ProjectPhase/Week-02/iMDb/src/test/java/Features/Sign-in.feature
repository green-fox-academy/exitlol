Feature: Sign-in Feature
  This feature deals with sing-in functionality

  Scenario: Login with own credentials
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button
    And I click on my own profile
    Then I should see my own profile page
