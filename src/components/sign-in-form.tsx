export const SignInForm = () => {
  return (
    <form className="bg-lime-500 rounded-lg p-4">
      <fieldset className="">
        <legend>로그인</legend>
        <label className="block p-2">
          id: <input type="text" name="id" />
        </label>
        <label className="block p-2">
          password: <input type="password" name="password" />
        </label>
      </fieldset>
      <div className="flex gap-3 justify-center">
        <button type="submit" className="rounded p-2 bg-blue-500 text-white">
          로그인
        </button>
        <button type="button" className="rounded p-2 bg-white border">
          회원가입
        </button>
      </div>
    </form>
  );
};
