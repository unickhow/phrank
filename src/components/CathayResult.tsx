import curve1 from "../assets/cathay_curve_1.svg";
import curve2 from "../assets/cathay_curve_2.svg";
import curve3 from "../assets/cathay_curve_3.svg";
import { Form } from "../types/form";

export default (props: { form: Form }) => {
  const numberFormatter = Intl.NumberFormat('en-US');

  const rowClass = 'flex justify-between items-center p-4 border-b border-gray-200';
  const rowTitle = 'font-bold text-base text-gray-600 flex-shrink-0'
  const rowContent = 'text-gray-600 text-right';
  const footerSecondaryButton = 'btn flex-1 text-base text-green-600 font-bold'
  const footerFinishButton = 'btn w-full bg-green-600 p-2 text-white text-base font-bold'

  return (
    <div id="result" class="p-4 rounded-lg w-full max-w-390px relative overflow-hidden bg-white">
      <div class="screen-stats absolute z-5 top-0 left-0 w-full p-3 text-white flex items-center">
        <span class="text-sm font-bold mr-2">{ props.form.nowTime }</span>
        <i class="i-uil-location-arrow-alt w-4 h-4 mr-auto translate rotate-45"></i>
        <i class="i-uil-signal w-5 h-5 mr-1"></i>
        <span class="text-xs font-bold mr-1">4G</span>
        <i class="i-uil-battery-empty w-6 h-6"></i>
      </div>
      <div class="form-card__title mb-25">
        <div class="form-card__title__bg absolute w-full top-0 left-0 z-1">
          <div class="absolute w-full top-0 left-0 h-18 bg-[#69c472]"></div>
          <img class="absolute top-18 opacity-60 object-stretch z-3" src={curve1} alt="" />
          <img class="absolute top-18 opacity-60 object-stretch z-2" src={curve2} alt="" />
          <img class="absolute top-18 opacity-60 object-stretch z-1" src={curve3} alt="" />
        </div>
        <h1 class="form-card__title__name relative z-2 text-white text-xl text-center mt-8">臺幣轉帳</h1>
      </div>
      <div class="form-card__header mb-8 text-center">
        <div class="rounded-full inline-flex border border-gray-300 mb-2">
          <i class="i-uil-check w-20 h-20 text-green-600"></i>
        </div>
        <h2 class="text-gray-600 mt-0 mb-2 text-xl">交易成功</h2>
        <span class="text-gray-500">{ props.form.tradeTime }</span>
      </div>
      <div class="form-card__body mb-4">
        <div class={rowClass}>
          <div class={rowTitle}>轉帳金額</div>
          <div class={rowContent}>{ numberFormatter.format(props.form.amount) }</div>
        </div>
        <div class={rowClass}>
          <div class={rowTitle}>轉帳對象</div>
          <div class={rowContent}>
            <span>{ props.form.targetBank }</span>
            <span>{ props.form.targetAccount }</span>
          </div>
        </div>
        <div class={rowClass}>
          <div class={rowTitle}>轉出帳號</div>
          <div class={rowContent}>{ props.form.sourceAccount }</div>
        </div>
        <div class={rowClass}>
          <div class={rowTitle}>手續費</div>
          <div class={rowContent}>{ numberFormatter.format(props.form.fee) }</div>
        </div>
        <div class={rowClass}>
          <div class={rowTitle}>備註</div>
          <div class={rowContent}>{ props.form.note }</div>
        </div>
      </div>
      <div class="form-card__footer mt-20">
        <div class="flex mb-4">
          <button class={footerSecondaryButton}>擷取畫面</button>
          <button class={footerSecondaryButton}>通知收款人</button>
        </div>
        <button class={footerFinishButton}>完成</button>
      </div>
    </div>
  )
}
