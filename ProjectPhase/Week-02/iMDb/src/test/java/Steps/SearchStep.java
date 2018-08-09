package Steps;

import Base.BaseUtil;
import Pages.SearchPage;
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
    SearchPage page = new SearchPage(base.driver);
    page.movieSearch("Venom");
    Thread.sleep(1000);
  }

  @And("^User clicks on first match$")
  public void userClicksOnFirstMatch() throws Throwable {
    SearchPage page = new SearchPage(base.driver);
    page.clickFirstMatch();
  }

  @Then("^User should see movie page$")
  public void userShouldSeeMoviePage() throws Throwable {
    SearchPage page = new SearchPage(base.driver);
    page.checkMoviePage();
  }
}
