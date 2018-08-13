package Pages;


import cucumber.api.java.en_lol.WEN;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class ProfilePage {

  public ProfilePage(WebDriver driver) {
    PageFactory.initElements(driver, this);
  }

  @FindBy(how = How.XPATH, using = "//a[contains(text(),'Edit Description')]")
  public WebElement editDescription;

  @FindBy(how = How.ID, using = "profile-checklist")
  public WebElement profileChecklist;

  @FindBy(how = How.XPATH, using = "//h2[contains(text(),'Your Ratings')]")
  public WebElement yourRatings;

  @FindBy(how = How.ID, using = "profile-lists-top")
  public WebElement yourLists;

  @FindBy(how = How.XPATH, using = "//h2[contains(text(),'Your\n" +
          "Watchlist')]")
  public WebElement yourWatchList;

  @FindBy(how = How.XPATH, using = "//a[@href='/user/ur90916164/ratings']")
  public WebElement yourRating;

  @FindBy(how = How.XPATH, using = "//a[contains(text(),'The Dark Knight')]")
  public WebElement ratedMovieName;

  @FindBy(how = How.XPATH, using = "//h1[@class='header']")
  public WebElement ratingHeader;

  @FindBy(how = How.LINK_TEXT, using = "Log Out")
  public WebElement logout;

  @FindBy(how = How.ID, using = "navUserMenu")
  public WebElement profile;

  @FindBy(how = How.XPATH, using = "//a[@id='nblogin']")
  public WebElement logoutMethod;

  public void profilePageChecker() {
    Assert.assertTrue(editDescription.isDisplayed());
  }

  public void activityPageChecker() {
    Assert.assertTrue(profileChecklist.isDisplayed() && yourRatings.isDisplayed() && yourLists.isDisplayed() && yourWatchList.isDisplayed());
  }

  public void clickOnRating() {
    yourRating.click();
  }

  public void ratingRedirectChecker() {
    Assert.assertTrue(ratingHeader.getText().contains("Your Ratings"));
  }

  public void movieChecker() {
    Assert.assertTrue(ratedMovieName.getText().contains("The Dark Knight"));
  }

  public void clickOnLogout() {
    logout.click();
  }

  public void checkifLoggedOut() {
    String logoutText = logoutMethod.getText();
    Assert.assertTrue(logoutText.contains("Sign in options"));
  }
}
