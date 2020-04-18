package co.kr.rooom.service.config;

import co.kr.rooom.service.domain.User.authority.Authority;
import co.kr.rooom.service.domain.User.authority.AuthorityRepo;
import co.kr.rooom.service.domain.User.user.Password;
import co.kr.rooom.service.domain.User.user.PasswordRepo;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Component
public class CustomUserDetailService implements UserDetailsService
{
    private PasswordRepo userRepository;

    private AuthorityRepo authorityRepository;

    public CustomUserDetailService(PasswordRepo userRepository, AuthorityRepo authorityRepository)
    {
        this.userRepository = userRepository;
        this.authorityRepository = authorityRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username)
    {
        List<Password> password = userRepository.findAllByConceptLikeAndStatementLike(username, "Y");
        List<Authority> authority = authorityRepository.findAllByConceptLikeAndStatementLike(username, "active");
        List<String> authList = new ArrayList<>();
        authList.add(authority.get(0).getValue());

        return new User(username, password.get(0).getValue(), authorities(authList));
    }

    public Collection<? extends GrantedAuthority> authorities(List<String> authorityList)
    {
        String authorities = authorityList.toString().substring(1, authorityList.toString().length() - 1);
        return Arrays.asList(new SimpleGrantedAuthority(authorities));
    }
}
