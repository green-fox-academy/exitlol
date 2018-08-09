package Steps;

import Base.BaseUtil;
import Pages.EmptyWatchlistPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class EmptyWatchListStep extends BaseUtil {

  public BaseUtil base;

  public EmptyWatchListStep(BaseUtil base) {
    this.base = base;
  }


  @Given("^User clicks on watchlist$")
  public void userClicksOnWatchlist() throws Throwable {
    EmptyWatchlistPage page = new EmptyWatchlistPage(base.driver);
    page.clickOnWatchlist();
  }

  @Then("^User should see his/her own empty watchlist$")
  public void userShouldSeeHisHerOwnEmptyWatchlist() throws Throwable {
    EmptyWatchlistPage page = new EmptyWatchlistPage(base.driver);
    page.verifyEmptyList();
  }
}
