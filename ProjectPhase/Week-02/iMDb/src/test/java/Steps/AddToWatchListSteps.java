package Steps;

import Base.BaseUtil;
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
    base.driver.findElement(By.xpath("//*[@id=\"navWatchlistMenu\"]/p/a")).click();
  }

  @When("^User clicks on Top Rated Movies$")
  public void userClicksOnTopRatedMovies() throws Throwable {
    base.driver.findElement(By.xpath("//a[@href='/chart/top/?ref_=wl_expl_1']")).click();
  }

  @And("^User should see a list of movies$")
  public void userShouldSeeAListOfMovies() throws Throwable {
    String pageTitle = base.driver.getTitle();
    if (pageTitle.contains("Top 250")) {
      System.out.println("User is on desired page!");
    }
  }

  @And("^User adds the first five movies into his/her watchlist$")
  public void userAddsTheFirstFiveMoviesIntoHisHerWatchlist() throws Throwable {
    Thread.sleep(2000);
    for (int i = 1; i < 6; i++) {
      base.driver.findElement(By.xpath("//*[@id=\"main\"]/div/span/div/div/div[3]/table/tbody/tr[" + i + "]/td[5]/div/div")).click();
      // Thread.sleep(500);
    }
  }

  @And("^User clicks on own watchlist$")
  public void userClicksOnOwnWatchlist() throws Throwable {
    base.driver.findElement(By.xpath("//*[@id=\"navWatchlistMenu\"]/p/a")).click();
  }

  @Then("^User should see his/her not empty watchlist$")
  public void userShouldSeeHisHerNotEmptyWatchlist() throws Throwable {
    if (base.driver.findElement(By.xpath("//*[@id=\"page-1\"]/div")).isDisplayed()) {
      System.out.println("User is on watchlist and it's not empty");
    }
  }
}
