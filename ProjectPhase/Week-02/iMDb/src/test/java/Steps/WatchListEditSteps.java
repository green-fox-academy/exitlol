package Steps;

import Base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import sun.util.calendar.BaseCalendar;

public class WatchListEditSteps extends BaseUtil {

  public BaseUtil base;

  public WatchListEditSteps(BaseUtil base) {
    this.base = base;
  }

  @When("^User clicks edit button$")
  public void userClicksEditButton() throws Throwable {
    base.driver.findElement(By.xpath("//*[@id=\"center-1-react\"]/div/div[1]/div/div[1]/a")).click();
  }

  @And("^User is redirected to the edit page$")
  public void userIsRedirectedToTheEditPage() throws Throwable {
    Assert.assertTrue(base.driver.findElement(By.xpath("//*[@id=\"main\"]/div[1]/button")).isDisplayed());
  }

  @And("^User switches the first and the third list element$")
  public void userSwitchesTheFirstAndTheThirdListElement() throws Throwable {
    WebElement firstInput = base.driver.findElement(By.xpath("//*[@id=\"main\"]/div[2]/div[3]/div[5]/div[1]/div[1]/input"));
    WebElement thirdInput = base.driver.findElement(By.xpath("//*[@id=\"main\"]/div[2]/div[3]/div[5]/div[3]/div[1]/input"));
    firstInput.sendKeys(Keys.BACK_SPACE, "3");
    thirdInput.sendKeys(Keys.BACK_SPACE, "1");
  }

  @Then("^User clicks on Done and the popup$")
  public void userClicksOnDoneAndThePopup() throws Throwable {
    base.driver.findElement(By.xpath("//*[@id=\"main\"]/div[1]/button")).click();
    base.driver.findElement(By.id("reorderButton")).click();
  }
}
