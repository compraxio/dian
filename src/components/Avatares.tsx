import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '@/components/ui/avatar';

export function Avatares() {
    return (
      <AvatarGroup>
        <Avatar>
          <AvatarImage
            src="https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=c0aede&seed=Aiden"
            alt="avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=c0aede&seed=Sophia"
            alt="avatar"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=c0aede&seed=Liliana"
            alt="avatar"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    );
}
