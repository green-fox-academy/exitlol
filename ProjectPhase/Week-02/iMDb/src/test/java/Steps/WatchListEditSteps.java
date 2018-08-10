package Steps;

import Base.BaseUtil;
import Pages.WatchlistPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import sun.util.calendar.BaseCalendar;

public class WatchListEditSteps extends BaseUtil {

  public BaseUtil base;

  public WatchListEditSteps(BaseUtil base) {
    this.base = base;
  }

  @When("^User clicks edit button$")
  public void userClicksEditButton() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.clickOnBtnEdit();
  }

  @And("^User is redirected to the edit page$")
  public void userIsRedirectedToTheEditPage() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.editRedirectChecker();
  }

  @And("^User switches the first and the third list element$")
  public void userSwitchesTheFirstAndTheThirdListElement() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.switchElements();
  }

  @Then("^User clicks on Done and the popup$")
  public void userClicksOnDoneAndThePopup() throws Throwable {
    WatchlistPage page = new WatchlistPage(base.driver);
    page.confirmEdit();
  }
}
