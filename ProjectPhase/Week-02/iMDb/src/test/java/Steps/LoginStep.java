package Steps;

import Base.BaseUtil;
import Pages.LoginPage;
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
    LoginPage page = new LoginPage(base.driver);
    page.pageNavigation();
  }

  @And("^I enter the username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
  public void iEnterTheUsernameAsAndPasswordAs(String email, String password) throws Throwable {
    LoginPage page = new LoginPage(base.driver);
    page.Login(email, password);
  }

  @And("^I click on the login button$")
  public void iClickOnTheLoginButton() throws Throwable {
    LoginPage page = new LoginPage(base.driver);
    page.ClickSignIn();
  }

  @And("^I click on my own profile$")
  public void iClickOnMyOwnProfile() throws Throwable {
    LoginPage page = new LoginPage(base.driver);
    page.clickOnUser();

  }

  @Then("^I should see my own profile page$")
  public void iShouldSeeMyOwnProfilePage() throws Throwable {
    LoginPage page = new LoginPage(base.driver);
    page.CheckUser();
  }
}
