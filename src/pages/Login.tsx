import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.scss';
import CharcterMovie from '../components/login/CharcterMovie';
import ParallaxBg from '../components/login/ParallaxBg';
import bgItem1 from '../assets/images/login/loginBg1.svg';
import bgItem2 from '../assets/images/login/loginBg2.svg';
import bgItem3 from '../assets/images/login/loginBg3.svg';
import bgItem4 from '../assets/images/login/loginBg4.svg';

const Login: React.FC = () => {
    const images = [bgItem1, bgItem2, bgItem3, bgItem4];
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{
        userId?: string;
        password?: string;
    }>({});
    const navigate = useNavigate();

    // 🔸 필드 단위 유효성 검사 함수
    const validateField = (name: string, value: string) => {
        const newErrors = { ...errors };

        if (name === 'userId') {
            if (!value.trim()) {
                newErrors.userId = '아이디를 입력해주세요.';
            } else if (value.length < 4) {
                newErrors.userId = '아이디는 최소 4자 이상이어야 합니다.';
            } else {
                delete newErrors.userId;
            }
        }

        if (name === 'password') {
            if (!value.trim()) {
                newErrors.password = '비밀번호를 입력해주세요.';
            } else if (value.length < 6) {
                newErrors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
            } else {
                delete newErrors.password;
            }
        }

        setErrors(newErrors);
    };

    //전체 유효성 검사 (로그인 버튼 누를 때)
    const validateAll = (): boolean => {
        validateField('userId', userId);
        validateField('password', password);
        return !errors.userId && !errors.password;
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateAll()) return;

        // ✅ API 성공 시
        console.log('로그인 성공!');
        navigate('/dashboard'); // 여기를 원하는 경로로 변경
    };

    return (
        <div className="loginWrap">
            <h1>Login Page</h1>
            <div className="loginBg">
                <ParallaxBg images={images} />
                <CharcterMovie />
            </div>
            <div className="loginArea">
                <div className="loginTxt">
                    <h2>Welcome to BIPS!</h2>
                    <p>한국은행 채권 모니터링 시스템 BIPS입니다.</p>
                </div>
                <form onSubmit={handleSubmit} className="loginInput">
                    <div className="loginForm">
                        <label>로그인</label>
                        <div className="inputBox loginId">
                            <input
                                type="text"
                                placeholder="아이디를 입력해주세요."
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                onBlur={() => validateField('userId', userId)}
                            />
                        </div>
                        <p className="errorText">
                            {errors.userId && <span>{errors.userId}</span>}
                        </p>
                        <label>비밀번호</label>
                        <div className="inputBox loginPw">
                            <input
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() =>
                                    validateField('password', password)
                                }
                            />
                        </div>
                        <p className="errorText">
                            {errors.password && <span>{errors.password}</span>}
                        </p>
                    </div>
                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
