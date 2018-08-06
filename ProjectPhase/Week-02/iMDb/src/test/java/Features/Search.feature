Feature: This is testing the search functionality of the IMDb site

  Scenario: Search for a desired movie
    Given User is on homepage
    And User clicks into search-field and types in movie name
    And User clicks on first match
    Then User should see movie page