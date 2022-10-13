import { createSignal } from "solid-js";
import CathayResult from "./CathayResult";
import './form-card.css';
import { Form } from "../types/form";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

export default () => {
  const [form, setForm] = createSignal<Form>({
    nowTime: '09:10',
    tradeTime: '2022-10-11 12:22:43',
    amount: 1_000,
    targetAccount: '00002768940028',
    targetName: '做夢的人',
    targetBank: '822 中國信託銀行',
    sourceAccount: '000003764786813',
    sourceName: '我本人',
    sourceBalance: 5_000,
    fee: 15,
    note: 'NOTE'
  });

  function handleFieldChange(field: string, value: string | number) {
    setForm(current => {
      return {
        ...current,
        [field]: value
      }
    });
  }

  function handleImageSave() {
    const node: HTMLElement = document.getElementById('result')!;
    toPng(node).then(dataUrl => {
      saveAs(dataUrl, 'cathay-mock.png');
    });
  }

  return (
    <div class="form-card flex items-center justify-center h-full">
      <div class="form-card__fields ">
        <div class="form-card__fields__field">
          <label for="">現在時間</label>
          <input
              type="text"
              value={form().nowTime}
              onInput={e => handleFieldChange('nowTime', (e.target as HTMLInputElement).value)} />
        </div>
        <div class="form-card__fields__field">
          <label for="">交易時間</label>
          <input
              type="text"
              value={form().tradeTime}
              onInput={e => handleFieldChange('tradeTime', (e.target as HTMLInputElement).value)} />
        </div>
        <div class="form-card__fields__field">
          <label for="">金額</label>
          <input
              type="number"
              value={form().amount}
              onInput={e => handleFieldChange('amount', +(e.target as HTMLInputElement).value)} />
        </div>
        <div class="form-card__fields__field">
          <label for="">轉帳對象</label>
          <input
              type="text"
              value={form().targetAccount}
              onInput={e => handleFieldChange('targetAccount', (e.target as HTMLInputElement).value)} />
        </div>
        <div class="form-card__fields__field">
          <label for="">轉出帳號</label>
          <input
              type="text"
              value={form().sourceAccount}
              onInput={e => handleFieldChange('sourceAccount', (e.target as HTMLInputElement).value)} />
        </div>
        <div class="form-card__fields__field">
          <label for="">手續費</label>
          <input
              type="number"
              value={form().fee}
              onInput={e => handleFieldChange('fee', (e.target as HTMLInputElement).value)} />
        </div>
        <div class="form-card__fields__field">
          <label for="">備註</label>
          <input
              type="text"
              value={form().note}
              onInput={e => handleFieldChange('note', (e.target as HTMLInputElement).value)} />
        </div>
        <button
          class="btn bg-green-500 px-3 py-2 mt-12 text-xs transition hover:bg-green-600 text-white flex items-center"
          onClick={handleImageSave}>
          <i class="i-uil-image-download mr-2"></i>
          <span>儲存為圖片</span>
        </button>
      </div>

      <CathayResult form={ form() } />
    </div>
  )
}
