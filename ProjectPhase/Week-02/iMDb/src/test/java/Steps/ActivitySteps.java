package Steps;

import Base.BaseUtil;
import Pages.ProfilePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ActivitySteps extends BaseUtil {

  public BaseUtil base;

  public ActivitySteps(BaseUtil base) {
    this.base = base;
  }

  @Given("^User is already at his/her own profile page$")
  public void userIsAlreadyAtHisHerOwnProfilePage() throws Throwable {
    ProfilePage profile = new ProfilePage(base.driver);
    profile.profilePageChecker();
  }

  @Then("^User should see his/her own profile$")
  public void userShouldSeeHisHerOwnProfile() throws Throwable {
    ProfilePage profile = new ProfilePage(base.driver);
    profile.activityPageChecker();
  }
}
