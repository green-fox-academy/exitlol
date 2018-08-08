package Steps;

import Base.BaseUtil;
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
    Assert.assertTrue(base.driver.findElement(By.xpath("//*[@id=\"page-1\"]")).isDisplayed());
  }

  @And("^User can sort by popularity$")
  public void userCanSortBy() throws Throwable {
    Thread.sleep(1000);
    Select sorter = new Select(base.driver.findElement(By.xpath("//*[@id=\"center-1-react\"]/div/div[2]/div[1]/div[1]/div[1]/select")));
    sorter.selectByIndex(2);
  }

  @Then("^User should see the ordered list$")
  public void userShouldSeeTheOrderedList() throws Throwable {
    WebElement firstMovie = base.driver.findElement(By.xpath("//*[@id=\"page-1\"]/div/div/div[2]/div[1]/div[1]/span[2]"));
    WebElement secondMovie = base.driver.findElement(By.xpath("//*[@id=\"center-1-react\"]/div/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/span[2]"));
    float firstRating = Float.parseFloat(firstMovie.getText());
    float secondRating = Float.parseFloat(secondMovie.getText());
    Assert.assertTrue(firstRating > secondRating);
  }
}
