//Шаги чтоб перенести на RTK этот функционал
    //1. Создаете слайс productSlice, подключаете к стору, определяете состояния product либо объект либо массив, смотрите сами, loading, error
    //2. Создете fetchProduct thunk
    //3. Обрабатываете внутри слайса через extraReducers pending, fulfilled, rejected, в фулфилд закидываем в product из action.payload то что получили
    //4. после обработки, при вызове вашего thunk внутри компонента categoryProducts, надо пробросить ему параметр id fetchProduct(id), в thunk мы его получаем и подставляем к отправке запроса