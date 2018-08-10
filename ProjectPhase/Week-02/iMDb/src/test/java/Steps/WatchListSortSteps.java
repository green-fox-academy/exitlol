package Steps;

import Base.BaseUtil;
import Pages.WatchlistPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import static java.lang.Integer.parseInt;

public class WatchListSortSteps extends BaseUtil {

  public BaseUtil base;

  public WatchListSortSteps(BaseUtil base) {
    this.base = base;
  }

  @Given("^User is on watchlist page$")
  public void userIsOnWatchlistPage() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.addChecker();
  }

  @And("^User can sort by popularity$")
  public void userCanSortBy() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    //Thread.sleep(1000);
    Select sorter = new Select(page.sortBySelection);
    sorter.selectByIndex(2);
  }

  @Then("^User should see the ordered list$")
  public void userShouldSeeTheOrderedList() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.sortChecker();
  }
}
