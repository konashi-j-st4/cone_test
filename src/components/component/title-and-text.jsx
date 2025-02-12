/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/hhY8TbQSI7r
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function TitleAndText() {
  return (
    (<Card className="w-[800px] bg-white p-8 shadow rounded-lg">
      <CardHeader>
        <CardTitle>タイトルと説明テキスト</CardTitle>
        <div className="h-[1px] bg-gray-300 mt-2" />
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">タイトル</Label>
              <Input className="bg-[#e6e6fa]" id="title" placeholder="タイトルを入力" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">説明テキスト</Label>
              <textarea
                className="border rounded px-3 py-2 h-[150px] resize-none bg-[#e6e6fa]"
                id="description"
                placeholder="説明テキストを入力" />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>)
  );
}
