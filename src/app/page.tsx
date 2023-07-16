import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] min-h-[568px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-800 text-sm">
            <Avatar>
              <AvatarFallback>VR</AvatarFallback>
              <AvatarImage src="https://github.com/hayatojpg.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Human:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, id. Iste expedita accusamus dolor, quo porro nemo quae
              fugiat earum nisi magnam aliquid voluptatem voluptas odio iusto
              rerum similique autem.
            </p>
          </div>
          <div className="flex gap-3 text-slate-800 text-sm">
            <Avatar>
              <AvatarFallback>VL</AvatarFallback>
              <AvatarImage src="https://github.com/vercel.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">AI:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, id. Iste expedita accusamus dolor, quo porro nemo quae
              fugiat earum nisi magnam aliquid voluptatem voluptas odio iusto
              rerum similique autem.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
