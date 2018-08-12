package Steps;

import Base.BaseUtil;
import Pages.ProfilePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.ui.Select;

public class RatingSteps extends BaseUtil {

  public  BaseUtil base;

  public RatingSteps(BaseUtil base) {
    this.base = base;
  }

  @When("^User clicks on Your Ratings$")
  public void userClicksOnYourRatings() throws Throwable {
    ProfilePage profile = new ProfilePage(base.driver);
    profile.clickOnRating();
  }

  @And("^User is redirected to ratings page$")
  public void userIsRedirectedToRatingsPage() throws Throwable {
    ProfilePage rating = new ProfilePage(base.driver);
    rating.ratingRedirectChecker();
  }

  @Then("^User should see the movie he/she already rated$")
  public void userShouldSeeTheMovieHeSheAlreadyRated() throws Throwable {
    ProfilePage rating = new ProfilePage(base.driver);
    rating.movieChecker();
  }
}
