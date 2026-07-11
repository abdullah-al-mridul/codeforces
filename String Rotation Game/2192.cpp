#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int check_block(const vector<char> &s)
{
    if (s.empty())
        return 0;

    int total_current_block = 1;

    for (size_t i = 0; i < s.size() - 1; i++)
    {
        if (s[i] != s[i + 1])
            total_current_block++;
    }

    return total_current_block;
}

void solve()
{
    int n;
    cin >> n;

    string s;
    cin >> s;

    vector<char> s_vec(s.begin(), s.end());

    int max_block = 0;

    for (int j = 0; j < n; j++)
    {
        int current_block = check_block(s_vec);
        if (current_block > max_block)
            max_block = current_block;

        rotate(s_vec.rbegin(), s_vec.rbegin() + 1, s_vec.rend());
    }

    cout << max_block << "\n";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
#endif

    int t;
    cin >> t;

    while (t--)
    {
        solve();
    }

    return 0;
}
