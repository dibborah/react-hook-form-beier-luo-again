let renderCount = 0;

const App = () => {
  renderCount++;
  return (
    <div>
      <div>
        <button type="button">{renderCount}</button>
      </div>
      <form>
        <div>
          <input name="firstname" placeholder="FirstName" />
        </div>
        <div>
          <input name="lastname" placeholder="LastName" />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;