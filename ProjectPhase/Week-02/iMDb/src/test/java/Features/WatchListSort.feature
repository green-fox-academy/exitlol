Feature: This deal with the sorting method on IMDb

  Background:
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button
    And User clicks on watchlist
    Then User should see his/her not empty watchlist

  Scenario: User is able to sort his/her own watchlist
    Given User is on watchlist page
    And User can sort by popularity
    Then User should see the ordered list