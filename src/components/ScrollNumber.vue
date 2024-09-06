<script lang="tsx">
import { computed } from 'vue'
import ScrollNumberItem from './ScrollNumberItem.vue'
import { getOption } from '../options'
import type { IOptions } from '../options'
interface IPropsOp extends IOptions {
  value: number
}
type IProps = Required<IPropsOp>

export default {
  name: 'ScrollNumber',
  props: {
    value: { type: Number, required: true },
    transformDuration: { type: Number, default: getOption('transformDuration') as number },
    fractionDigits: { type: Number, default: getOption('fractionDigits') as number },
    prefix: { type: String, default: getOption('prefix') as string },
    infix: { type: String, default: getOption('infix') as string },
    suffix: { type: String, default: getOption('suffix') as string },
    thousandSeparator: { type: String, default: getOption('thousandSeparator') as string }
  },
  components: { ScrollNumberItem },
  setup(props: IProps) {
    // ??
    function isNumber(x: any): x is number {
      return !Number.isNaN(+x)
    }
    /** */
    let numberLength: number = 0
    function formatNumbers(
      value: number,
      fractionDigits: number,
      prefix: string,
      infix: string,
      suffix: string,
      thousandSeparator: string
    ) {
      // 分隔
      const isNegative = value < 0
      const digits: Array<string> = value.toFixed(fractionDigits).split('')
      numberLength = fractionDigits <= 0 ? digits.length : digits.length - 1
      // 千分位符
      if (thousandSeparator) {
        let counter = 0
        const target = isNegative ? 1 : 0
        for (let i = digits.length - fractionDigits - 2; i > target; i--) {
          counter++
          if (counter > 0 && counter % 3 == 0) {
            digits.splice(i, 0, thousandSeparator)
          }
        }
      }
      // 后缀
      suffix && digits.push(suffix)
      // 前缀2
      infix && (value < 0 ? digits.splice(1, 0, infix) : digits.unshift(infix))
      // 前缀1
      prefix && digits.unshift(prefix)
      return digits
    }

    const numbers = computed(() =>
      formatNumbers(
        props.value,
        props.fractionDigits,
        props.prefix,
        props.infix,
        props.suffix,
        props.thousandSeparator
      )
    )
    return () =>
      numbers.value.map((item, index) => {
        return isNumber(item) ? (
          <ScrollNumberItem
            key={numberLength - index}
            value={Number(item)}
            transformDuration={props.transformDuration}
          />
        ) : (
          <span key={item}>{item}</span>
        )
      })
  }
}
</script>

<style scoped>
.scroll-number-wrapper {
  display: inline;
  overflow: hidden;
}
</style>
