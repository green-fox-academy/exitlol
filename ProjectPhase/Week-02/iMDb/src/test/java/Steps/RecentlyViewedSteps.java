package Steps;

import Base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class RecentlyViewedSteps extends BaseUtil {
  
  public BaseUtil base;

  public RecentlyViewedSteps(BaseUtil base) {
    this.base = base;
  }

  @And("^User scrolls down until \"([^\"]*)\" is visible$")
  public void userScrollsDownUntilIsVisible(String arg0) throws Throwable {
    
  }

  @And("^User not visited any movie sites$")
  public void userNotVisitedAnyMovieSites() throws Throwable {

  }

  @Then("^User should see an empty space$")
  public void userShouldSeeAnEmptySpace() throws Throwable {

  }
}
