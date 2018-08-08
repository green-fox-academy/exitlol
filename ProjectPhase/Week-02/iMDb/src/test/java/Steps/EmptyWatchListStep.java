package Steps;

import Base.BaseUtil;
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

  @Given("^User is already logged in and on IMDb homepage$")
  public void userIsAlreadyLoggedInAndOnIMDbHomepage() throws Throwable {
    base.driver.navigate().to("https://www.imdb.com/");
    base.driver.findElement(By.id("nblogin")).click();
    base.driver.findElement(By.xpath("//*[@id=\"signin-options\"]/div/div/a[4]")).click();
    WebElement loginEmail = base.driver.findElement(By.id("ap_email"));
    WebElement loginpass = base.driver.findElement(By.id("ap_password"));
    loginEmail.sendKeys("neutralpointz@gmail.com");
    loginpass.sendKeys("12345678");
    base.driver.findElement(By.id("signInSubmit")).click();
  }

  @And("^User clicks on watchlist$")
  public void userClicksOnWatchlist() throws Throwable {
    base.driver.findElement(By.xpath("//*[@id=\"navWatchlistMenu\"]/p/a")).click();
  }

  @Then("^User should see his/her own empty watchlist$")
  public void userShouldSeeHisHerOwnEmptyWatchlist() throws Throwable {
    base.driver.findElement(By.xpath("//*[@id=\"center-1-react\"]/div/div[3]/span[2]"));
    System.out.println("Empty watchlist found.\nTerminating!");

  }
}
