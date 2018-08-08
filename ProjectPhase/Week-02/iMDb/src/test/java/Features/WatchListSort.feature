Feature: This deal with the sorting method on IMDb

  Background:
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button
    Then User clicks on watchlist

  Scenario: User is able to sort his/her own watchlist
    Given User is on watchlist page
    When User clicks on Sort By:
    And User can sort by "popularity"
    Then User should see the ordered list