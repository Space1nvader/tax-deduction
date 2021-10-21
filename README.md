gitHub pages: https://space1nvader.github.io/tax-deduction/

Срок: 3 рабочих дня. Задание должно занять не более 4-6 рабочих часов.

**Стек:** vue или react

**Макеты:** кнопка одна.

Посередине экрана «Налоговый вычет»

Попап с налоговым вычетом (два экрана, с чек-боксами и без)

[https://www.figma.com/file/5o5MQYFxdq4NGmAv1kinrA/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0%3A1](https://www.figma.com/file/5o5MQYFxdq4NGmAv1kinrA/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0%3A1)

● Сверстать адаптивный попап;

● Добавить логику для открытия/закрытия попапа;

● Добавить логику расчета и показа чек-боксов, исходя из зарплаты, введенной в инпуте.

**Пример:** Клиенты, еще ни разу в жизни не воспользовавшись налоговым вычетом имеют право раз в год вернуть не более 13% от своего годового дохода в качестве имущественного вычета.

Что это значит для нас?

Значит клиенты, которые воспользуются налоговым вычетом гарантированно имеют возможность вносить досрочные платежи.

При учитывании вычета в расчетах сайт должен запросить размер месячной ЗП для расчета.

(ЗП в месяц _ 12) _ 0,13 = размер вычета в год.

Пример: Месячная ЗП = 50 000 рублей или 600 000 рублей в год. Налоговый вычет в год = (50000*12) * 0,13 = 78 000 рублей.

Значит клиент, как нормальный человек, будет вносить налоговый вычет в досрочку 4 раза:

- 78 000 рублей в 1-ый год
- 78 000 рублей во 2-ой
- 78 000 рублей в 3-ий
- 26 000 рублей в 4-ый

Налоговый вычет можно получать 1 раз в год, до тех пор пока не наберете максимальную сумму вычета в зависимости от стоимости купленной квартиры. На квартиры менее 2 млн. вычет 13% от стоимости квартиры, на квартиры свыше 2 млн. максимум 260 тыс. рублей. При использовании налогового вычета в качестве досрочки в итоговой таблице расчетов налоговые вычеты должны быть уже записаны как досрочные платежи.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
