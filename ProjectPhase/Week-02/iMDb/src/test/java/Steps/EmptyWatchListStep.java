package Steps;

import Base.BaseUtil;
import Pages.WatchlistPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class EmptyWatchListStep extends BaseUtil {

  public BaseUtil base;

  public EmptyWatchListStep(BaseUtil base) {
    this.base = base;
  }


  @Given("^User clicks on watchlist$")
  public void userClicksOnWatchlist() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.clickOnWatchlist();
  }

  @Then("^User should see his/her own empty watchlist$")
  public void userShouldSeeHisHerOwnEmptyWatchlist() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.verifyEmptyList();
  }
}
