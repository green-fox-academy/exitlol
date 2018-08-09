package Steps;

import Base.BaseUtil;
import Pages.WatchlistPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AddToWatchListSteps extends BaseUtil {

  public BaseUtil base;

  public AddToWatchListSteps(BaseUtil base) {
    this.base = base;
  }


  @Given("^User is already logged in and on watchlist page$")
  public void userIsAlreadyLoggedInAndOnWatchlistPage() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.clickOnWatchlist();
  }

  @When("^User clicks on Top Rated Movies$")
  public void userClicksOnTopRatedMovies() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.clickOnTopRated();
  }

  @And("^User should see a list of movies$")
  public void userShouldSeeAListOfMovies() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.topRatedChecker();
  }

  @And("^User adds the first five movies into his/her watchlist$")
  public void userAddsTheFirstFiveMoviesIntoHisHerWatchlist() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    Thread.sleep(2000);
    page.addToWatchlist(5);
  }

  @And("^User clicks on own watchlist$")
  public void userClicksOnOwnWatchlist() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.clickOnWatchlist();
  }

  @Then("^User should see his/her not empty watchlist$")
  public void userShouldSeeHisHerNotEmptyWatchlist() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.addChecker();
  }
}
