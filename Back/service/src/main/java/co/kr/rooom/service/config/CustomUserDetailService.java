package co.kr.rooom.service.config;

import co.kr.rooom.service.domain.User.authority.Authority;
import co.kr.rooom.service.domain.User.authority.AuthorityRepo;
import co.kr.rooom.service.domain.User.user.Name;
import co.kr.rooom.service.domain.User.user.NameRepo;
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
    private NameRepo userRepository;
    private AuthorityRepo authorityRepository;

    public CustomUserDetailService(NameRepo userRepository, AuthorityRepo authorityRepository)
    {
        this.userRepository = userRepository;
        this.authorityRepository = authorityRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username)
    {
        List<Name> password = userRepository.findAllByConceptLikeAndStatementLike(username, "Y");
        List<Authority> authority = authorityRepository.findAllByConceptLikeAndStatementLike(username, "Y");
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
