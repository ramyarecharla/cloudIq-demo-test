Feature: Requesting a demo from cloud iq

  As a user first time visit to cloud IQ demo page
  I want to request a demo of the services
  so that I get to learn more about it

  Scenario Outline: Requesting a demo
    Given I am on the demo page
    When I fill the demo form with the following details
      | FirstName   | LastName   | BusinessEmail   | PhoneNumber   | Company   | WebsiteURL   |
      | <FirstName> | <LastName> | <BusinessEmail> | <PhoneNumber> | <Company> | <WebsiteURL> |
    And I click Go
    Then I verify if the demo page result is equal to "<Result>"

    Examples:
      | FirstName | LastName | BusinessEmail   | PhoneNumber | Company   | WebsiteURL    | Result                               |
      | andynew   | Amex     | Alen@hmail.com  | 0205432190  | CloudTest | cloudtest.com | Thank you for requesting a demo      |
      | amie      | Alex     | Amei@hmail.com  |             | CloudTest | cloudtest.com | Please complete all required fields. |
      | John      | Smith    | johnsmith@e.com | 0205432190  | CloudTest | cloudtest.com | Please enter a valid email address.  |
      | Ben       | Smith    | bensmith@.com   | 0205432190  | CloudTest | cloudtest.com | Email must be formatted correctly.   |


