Feature: This should test the add movie to watchlist feature on IMDb

  Background: User logs in to IMDb
    Given I navigate to the login page
    And I enter the username as "neutralpointz@gmail.com" and password as "12345678"
    And I click on the login button

  Scenario: Add movies from top250 to own watchlist
    Given User is already logged in and on watchlist page
    When User clicks on Top Rated Movies
    And User should see a list of movies
    And User adds the first five movies into his/her watchlist
    And User clicks on own watchlist
    Then User should see his/her not empty watchlist