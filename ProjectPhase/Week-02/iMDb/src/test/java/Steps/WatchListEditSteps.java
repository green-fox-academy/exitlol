package Steps;

import Base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sun.util.calendar.BaseCalendar;

public class WatchListEditSteps extends BaseUtil {

  public BaseUtil base;

  public WatchListEditSteps(BaseUtil base) {
    this.base = base;
  }

  @When("^User clicks edit button$")
  public void userClicksEditButton() throws Throwable {
    
  }

  @And("^User is redirected to the edit page$")
  public void userIsRedirectedToTheEditPage() throws Throwable {
  }

  @And("^User switches the first and the third list element$")
  public void userSwitchesTheFirstAndTheThirdListElement() throws Throwable {
  }

  @Then("^User clicks on Done and the popup$")
  public void userClicksOnDoneAndThePopup() throws Throwable {
  }
}
