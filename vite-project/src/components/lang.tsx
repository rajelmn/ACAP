
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import i18next from "i18next"

export default function Lang({ handleLanguageChange}: { handleLanguageChange: (arg: string) => void }) {
    return(
        <div className="w-40">
                                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                                    Language
                                </label>
                                <Select name="language" defaultValue={i18next.language} onValueChange={handleLanguageChange}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="en">
                                            <div className="flex items-center">
                                                <span className="mr-2">🇬🇧</span> English
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="ar">
                                            <div className="flex items-center">
                                                <span className="mr-2">🇸🇦</span> العربية
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="fr">
                                            <div className="flex items-center">
                                                <span className="mr-2">🇫🇷</span> Français
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
    )
}