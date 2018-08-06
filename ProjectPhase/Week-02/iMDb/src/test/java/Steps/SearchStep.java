package Steps;

import Base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class SearchStep extends BaseUtil {

  public BaseUtil base;

  public SearchStep(BaseUtil base) {
    this.base = base;
  }

  @Given("^User is on homepage$")
  public void userIsOnHomepage() throws Throwable {
    base.driver.navigate().to("https://www.imdb.com");
  }

  @And("^User clicks into search-field and types in movie name$")
  public void userClicksIntoSearchFieldAndTypesInMovieName() throws Throwable {
    WebElement target = base.driver.findElement(By.id("navbar-query"));
    target.sendKeys("Venom");
    Thread.sleep(1000);
  }

  @And("^User clicks on first match$")
  public void userClicksOnFirstMatch() throws Throwable {
    WebElement firstMatch = base.driver.findElement(By.xpath("//*[@id=\"navbar-suggestionsearch\"]/div[1]/a"));
    firstMatch.click();
  }

  @Then("^User should see movie page$")
  public void userShouldSeeMoviePage() throws Throwable {
    WebElement plot = base.driver.findElement(By.className("plot_summary "));
    if (plot.isDisplayed()) {
      System.out.println("Plot found\nSuccessfully navigated to movie page\nNow exiting");
    }
  }
}
