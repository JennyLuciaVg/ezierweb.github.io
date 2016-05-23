<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(\Znerg\OAuth\Database\Seeds\OAuthClientTableSeeder::class);
        $this->call(\Znerg\OAuth\Database\Seeds\OAuthSessionTableSeeder::class);
        $this->call(\Znerg\OAuth\Database\Seeds\OAuthAccessTokenTableSeeder::class);
        $this->call(\Znerg\OAuth\Database\Seeds\OAuthScopeTableSeeder::class);
        $this->call(\Znerg\OAuth\Database\Seeds\OAuthAccessTokenScopeTableSeeder::class);
        $this->call(\Znerg\OAuth\Database\Seeds\UsersTableSeeder::class);
        $this->call(\Znerg\OAuth\Database\Seeds\UserScopeTableSeeder::class);
    }
}
