package Steps;

import Base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class LoginStep extends BaseUtil {

  public BaseUtil base;

  public LoginStep(BaseUtil base) {
    this.base = base;
  }

  @Given("^I navigate to the login page$")
  public void iNavigateToTheLoginPage() throws Throwable {
    base.driver.navigate().to("https://www.imdb.com/");
    WebElement login = base.driver.findElement(By.id("nblogin"));
    login.click();
    WebElement loginType = base.driver.findElement(By.xpath("//*[@id=\"signin-options\"]/div/div/a[4]/span[2]"));
    loginType.click();
  }

  @And("^I enter the username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
  public void iEnterTheUsernameAsAndPasswordAs(String email, String password) throws Throwable {
    base.driver.findElement(By.id("ap_email")).sendKeys(email);
    base.driver.findElement(By.id("ap_password")).sendKeys(password);
  }

  @And("^I click on the login button$")
  public void iClickOnTheLoginButton() throws Throwable {
    base.driver.findElement(By.id("signInSubmit")).submit();
  }

  @And("^I click on my own profile$")
  public void iClickOnMyOwnProfile() throws Throwable {
    WebElement userName = base.driver.findElement(By.id("nbusername"));
    userName.click();

  }

  @Then("^I should see my own profile page$")
  public void iShouldSeeMyOwnProfilePage() throws Throwable {
    WebElement userProfile = base.driver.findElement(By.id("profile-checklist"));
    if(userProfile.isDisplayed()) {
      System.out.println("User profile found\nExecuting teardown procedure.");

    }
  }
}
