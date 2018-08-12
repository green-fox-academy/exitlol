Feature: This features test the Activities feature of IMDb

  Background: User logs in
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button
    And I click on my own profile
    Then I should see my own profile page

  Scenario: User hovers over own profile name clicks on activities then activities are shown
    Given User is already at his/her own profile page
    Then User should see his/her own profile