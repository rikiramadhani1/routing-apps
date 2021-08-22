<Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
            {/* teknik props children dari komponen pakai fungsi*/}
            <Prompt message='Are you sure you want to leave?' />
          </Route>
          <GuardRoute path='/member' isLogin={isLogin}>
            <Member />
          </GuardRoute>
          <Route path='/category' children={Category}>
            {/* teknik props children dari komponen, props children ini direkomendasi, selain ini ada attr component dan render*/}
          </Route>
          <Route path='/post/:id'>
            <Post />
          </Route>
          <Route path='/login'>
            <Login setLogin={setLogin} />
          </Route>