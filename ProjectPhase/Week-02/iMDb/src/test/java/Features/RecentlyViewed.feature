Feature: This deals with the Recently Viewed functionality of IMDb

  Background:
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button
    And User clicks on watchlist
    Then User should see his/her not empty watchlist

    Scenario: View recently viewed movies on page
      Given User is on watchlist page
      And User scrolls down until Recently Viewed is visible
      And User clicks on movie thumbnail
      And User gets back to watchlist page
      Then User should see the previously watched movie's thumbnail