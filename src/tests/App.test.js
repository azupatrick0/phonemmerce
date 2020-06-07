/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { Selector } from 'testcafe';
import dotenv from 'dotenv';

dotenv.config();

fixture`home`
  .page`${process.env.REACT_APP_URL}`;

test('test_1_search_for_phones', async (t) => {
  await t
    .click(Selector('input[placeholder="Enter Search Term (e.g iPhone x, 128GB or A1)"]'))
    .typeText(Selector('input[placeholder="Enter Search Term (e.g iPhone x, 128GB or A1)"]'), 'iPhone SE', { replace: true, paste: true })
    .click(Selector('div[class="search"] button'))
    .expect(Selector('div[class="card__description"] > div').withText(/iPhone SE/i).exists)
    .ok({ timeout: 10000 });
});

test('test_2_search_for_phones_by_min_max_price', async (t) => {
  await t
    .click(Selector('input[placeholder="Min"]'))
    .typeText(Selector('input[placeholder="Min"]'), '400', { replace: true, paste: true })
    .click(Selector('input[placeholder="Max"]'))
    .typeText(Selector('input[placeholder="Max"]'), '500', { replace: true, paste: true })
    .expect(Selector('div[class="card__description"] > div:nth-child(4)').withText('$465').exists)
    .ok({ timeout: 20000 });
});
