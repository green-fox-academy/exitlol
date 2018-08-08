Feature: This scenario will test the user watchlist feature of IMDb

  Scenario: User is able to list his/her own empty watchlist
    Given User is already logged in and on IMDb homepage
    And User clicks on watchlist
    Then User should see his/her own empty watchlist

