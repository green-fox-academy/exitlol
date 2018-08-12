package Steps;

import Base.BaseUtil;
import Pages.ProfilePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.interactions.Actions;

public class LogoutSteps extends BaseUtil {

  public BaseUtil base;

  public LogoutSteps(BaseUtil base) {
    this.base = base;
  }

  @When("^User hovers over profile name and clicks on logout$")
  public void userHoversOverProfileNameAndClicksOnLogout() throws Throwable {
    ProfilePage profile = new ProfilePage(base.driver);
    Actions action = new Actions(base.driver);
    action.moveToElement(profile.profile).perform();
    profile.clickOnLogout();
  }

  @Then("^User should be redirected to logout page$")
  public void userShouldBeRedirectedToLogoutPage() throws Throwable {

  }
}
