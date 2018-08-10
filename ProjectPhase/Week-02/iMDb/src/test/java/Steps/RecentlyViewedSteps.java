package Steps;

import Base.BaseUtil;
import Pages.WatchlistPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;

public class RecentlyViewedSteps extends BaseUtil {
  
  public BaseUtil base;

  public RecentlyViewedSteps(BaseUtil base) {
    this.base = base;
  }

  @And("^User scrolls down until Recently Viewed is visible$")
  public void userScrollsDownUntilIsVisible() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    JavascriptExecutor jse = (JavascriptExecutor)base.driver;
    jse.executeScript("window.scrollBy(0,600)", "");
  }

  @And("^User not visited any movie sites$")
  public void userNotVisitedAnyMovieSites() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.recentVisibleChecker();
  }

  @Then("^User should see an empty space$")
  public void userShouldSeeAnEmptySpace() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.recentlyViewedStatus();
  }
}
