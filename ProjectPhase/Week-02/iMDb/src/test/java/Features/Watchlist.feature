Feature: This scenario will test the user watchlist feature of IMDb

  Background:
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button

  Scenario: User is able to list his/her own empty watchlist
    Given User clicks on watchlist
    Then User should see his/her own empty watchlist

