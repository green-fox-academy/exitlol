package Pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

  public LoginPage(WebDriver driver) {
    PageFactory.initElements(driver, this);
  }

  @FindBy(how = How.ID, using = "nblogin")
  public WebElement btnLogin;

  @FindBy(how = How.XPATH, using = "//*[@id=\"signin-options\"]/div/div/a[4]/span[2]")
  public WebElement loginType;

  @FindBy(how = How.ID, using = "ap_email")
  public WebElement userMail;

  @FindBy(how = How.ID, using = "ap_password")
  public WebElement userPassword;

  @FindBy(how = How.ID, using = "signInSubmit")
  public WebElement btnSignIn;

  @FindBy(how = How.ID, using = "nbusername")
  public WebElement userProfile;

  @FindBy(how = How.ID, using = "profile-checklist")
  public WebElement profileChecker;

  public void pageNavigation() {
    btnLogin.click();
    loginType.click();
  }
  public void Login(String username, String password) {
    userMail.sendKeys(username);
    userPassword.sendKeys(password);
  }

  public void ClickSignIn() {
    btnSignIn.submit();
  }


  public void clickOnUser() {
    userProfile.click();

  }
  public void CheckUser() {
    Assert.assertTrue(profileChecker.isDisplayed());
  }

}
