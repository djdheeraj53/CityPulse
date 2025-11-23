import { I18nManager } from 'react-native';
import { I18n } from 'i18n-js';

const translations = {
    en: {
        eventDetails: {
            loading: "Loading...",
            profile: "Profile",
            add_fav: "Add to favourites",
            remove_fav: "Remove favourite",
            open_maps: "Open in Maps"
        },
        home: {
            search_placeholder: "Search events or artists...",
            city_placeholder: "Enter city...",
            show_fav: "Show Favorites",
            showing_fav: "Showing Favorites",
            clear: "Clear",
            no_events: "No events found."
        },
        login: {
            welcome: "Welcome back",
            username: "Username",
            password: "Password",
            login_btn: "Login",
            create_account: "Create account",
            invalid_credentials: "Invalid username or password",
        },
        splash: {
            title: "City Pulse",
            subtitle: "Discover local events near you"
        },
        profile: {
            name: "Name",
            email: "Email",
            biometric: "Use Biometric",
            arabic_toggle: "Arabic (RTL)"
        },
        signup: {
            title: "Create Account",
            username: "Username",
            password: "Password",
            signup_btn: "Sign up",
            username_exists: "Username already exists",
            empty_fields: "Enter username and password",
            signup_success: "Account created successfully"
        }

    },
    ar: {
        eventDetails: {
            loading: "جارٍ التحميل...",
            profile: "الملف الشخصي",
            add_fav: "أضف إلى المفضلة",
            remove_fav: "إزالة من المفضلة",
            open_maps: "افتح في الخرائط"
        },
        home: {
            search_placeholder: "ابحث عن الفعاليات أو الفنانين...",
            city_placeholder: "أدخل المدينة...",
            show_fav: "عرض المفضلة",
            showing_fav: "عرض المفضلة فقط",
            clear: "مسح",
            no_events: "لم يتم العثور على فعاليات."
        },
        login: {
            welcome: "مرحباً بعودتك",
            username: "اسم المستخدم",
            password: "كلمة المرور",
            login_btn: "تسجيل الدخول",
            create_account: "إنشاء حساب",
            invalid_credentials: "اسم المستخدم أو كلمة المرور غير صحيحة",
        },
        splash: {
            title: "سيتي بالس",
            subtitle: "اكتشف الفعاليات المحلية بالقرب منك"
        },
        profile: {
            name: "الاسم",
            email: "البريد الإلكتروني",
            biometric: "استخدام البصمة",
            arabic_toggle: "العربية (RTL)"
        },
        signup: {
            title: "إنشاء حساب",
            username: "اسم المستخدم",
            password: "كلمة المرور",
            signup_btn: "تسجيل",
            username_exists: "اسم المستخدم موجود بالفعل",
            empty_fields: "أدخل اسم المستخدم وكلمة المرور",
            signup_success: "تم إنشاء الحساب بنجاح"
        }

    }
};

const i18n = new I18n(translations);

i18n.locale = "en";
i18n.enableFallback = true;

export const setAppLanguage = (lang) => {
    i18n.locale = lang;

    const isRTL = lang === "ar";

    if (I18nManager.isRTL !== isRTL) {
        I18nManager.allowRTL(isRTL);
        I18nManager.forceRTL(isRTL);
    }
};

export default i18n;
