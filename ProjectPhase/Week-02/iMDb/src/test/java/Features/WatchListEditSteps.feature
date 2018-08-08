Feature: This deals with the watchlist edit functionality

  Background:
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button
    And User clicks on watchlist
    Then User should see his/her not empty watchlist

    Scenario: Editing an existing watchlist
      Given User is on watchlist page
      When User clicks edit button
      And User is redirected to the edit page
      And User switches the first and the third list element
      Then User clicks on Done and the popup