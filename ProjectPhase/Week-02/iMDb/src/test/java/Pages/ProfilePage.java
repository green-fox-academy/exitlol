package Pages;


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

  public void profilePageChecker() {
    Assert.assertTrue(editDescription.isDisplayed());
  }

  public void activityPageChecker() {
    Assert.assertTrue(profileChecklist.isDisplayed() && yourRatings.isDisplayed() &&yourLists.isDisplayed() &&yourWatchList.isDisplayed());
  }
}
