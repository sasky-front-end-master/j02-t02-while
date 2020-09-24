import { Selector } from 'testcafe';

fixture `while-silmukka`
    .page `../tehtava.html`;

test('Tulostetaan vaadittu teksti', async t => {
   const teksti = Selector("#teksti");

   await t
     .expect(teksti.textContent).match(/1\s*\*\s*3\s*=\s*3/,'')
     .expect(teksti.textContent).match(/2\s*\*\s*3\s*=\s*6/,'')
     .expect(teksti.textContent).match(/3\s*\*\s*3\s*=\s*9/,'')
     .expect(teksti.textContent).match(/4\s*\*\s*3\s*=\s*12/,'')
     .expect(teksti.textContent).match(/5\s*\*\s*3\s*=\s*15/,'')
     .expect(teksti.textContent).match(/6\s*\*\s*3\s*=\s*18/,'')
     .expect(teksti.textContent).match(/7\s*\*\s*3\s*=\s*21/,'')
     .expect(teksti.textContent).match(/8\s*\*\s*3\s*=\s*24/,'')
     .expect(teksti.textContent).match(/9\s*\*\s*3\s*=\s*27/,'')
     .expect(teksti.textContent).match(/10\s*\*\s*3\s*=\s*30/,'');
});
