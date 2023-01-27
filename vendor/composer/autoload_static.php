<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitacaa4bfc0f35ce41692063411e3a9c5b
{
    public static $files = array (
        '7b11c4dc42b3b3023073cb14e519683c' => __DIR__ . '/..' . '/ralouphie/getallheaders/src/getallheaders.php',
        '6e3fae29631ef280660b3cdad06f25a8' => __DIR__ . '/..' . '/symfony/deprecation-contracts/function.php',
        '3109cb1a231dcd04bee1f9f620d46975' => __DIR__ . '/..' . '/paragonie/sodium_compat/autoload.php',
        '1b3d4b568a16396837c66da9449c9c06' => __DIR__ . '/..' . '/guzzlehttp/guzzle/src/functions_include.php',
        '1887d0922aeeeaf19688b13d99109b4b' => __DIR__ . '/..' . '/guzzlehttp/promises/src/functions_include.php',
    );

    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Pusher\\' => 7,
            'Psr\\Log\\' => 8,
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Http\\Client\\' => 16,
        ),
        'B' => 
        array (
            'BuddyBoss\\PlatformPro\\Vendor\\GuzzleHttp\\Psr7\\' => 45,
            'BuddyBoss\\PlatformPro\\Vendor\\GuzzleHttp\\Promise\\' => 48,
            'BuddyBoss\\PlatformPro\\Vendor\\GuzzleHttp\\' => 40,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Pusher\\' => 
        array (
            0 => __DIR__ . '/..' . '/pusher/pusher-php-server/src',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-factory/src',
            1 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Psr\\Http\\Client\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-client/src',
        ),
        'BuddyBoss\\PlatformPro\\Vendor\\GuzzleHttp\\Psr7\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/psr7/src',
        ),
        'BuddyBoss\\PlatformPro\\Vendor\\GuzzleHttp\\Promise\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/promises/src',
        ),
        'BuddyBoss\\PlatformPro\\Vendor\\GuzzleHttp\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/guzzle/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitacaa4bfc0f35ce41692063411e3a9c5b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitacaa4bfc0f35ce41692063411e3a9c5b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitacaa4bfc0f35ce41692063411e3a9c5b::$classMap;

        }, null, ClassLoader::class);
    }
}
