      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main/userless" element={<Index />} />
          <Route path="/paste/:id" element={<ViewPaste />} />
          <Route path="*" element={<NotFound />} />
        </Routes>