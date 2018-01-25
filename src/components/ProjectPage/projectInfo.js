const dummyText ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac aliquet eros. Aenean commodo mattis augue. Integer eleifend venenatis lorem cursus rhoncus. Fusce eget convallis ligula, a fermentum risus. Morbi vitae mauris sed magna condimentum finibus ac in sapien. Suspendisse at risus a tortor pharetra suscipit. Quisque efficitur leo ex, ac cursus lacus ullamcorper a. Pellentesque feugiat fermentum sem. Praesent tristique feugiat condimentum. Duis tempor ex sit amet pulvinar dapibus. Integer porta tellus vel enim rutrum convallis. Duis molestie elit nec augue eleifend iaculis. Sed sem lorem, finibus in quam id, varius cursus nisl. Mauris ligula turpis, sodales suscipit lorem sit amet, dictum imperdiet est. Sed tempor arcu sed nunc tempus tempus. Aliquam in luctus ipsum, eget porttitor ante. Etiam at nisl vel libero rhoncus tincidunt et vel tellus. Quisque maximus pulvinar arcu nec fermentum. Suspendisse hendrerit, elit eget tempor sollicitudin, metus risus fermentum justo, vel tincidunt enim tellus eu libero. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus consectetur libero nulla, efficitur posuere ex pulvinar nec. Nam aliquet arcu mi, id vehicula arcu sollicitudin nec. Mauris finibus eget nunc vel feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi velit dolor, vestibulum quis rutrum eu, placerat vitae magna. Ut ultricies suscipit leo, sodales cursus velit varius ornare. Pellentesque ante tortor, eleifend eu tortor nec, semper lacinia risus. Vivamus suscipit libero lacus, sed condimentum lacus condimentum ac. Praesent ac vehicula urna. Sed lacus justo, vestibulum eu facilisis eu, tincidunt eu erat. Aenean eget consectetur massa. Morbi bibendum ultrices vestibulum. Donec non vehicula sem, sed aliquam mi. Ut sed sodales est. Morbi ac mollis lorem. Sed mattis laoreet sapien, eu tincidunt ante dignissim non. Curabitur aliquet nunc vel nulla tincidunt sollicitudin. Nulla commodo quam vel nisi tempor, ut fermentum ante tempus. Vivamus gravida sollicitudin aliquam. Praesent gravida consequat mauris, ac iaculis urna efficitur condimentum. Proin orci dui, aliquet at sollicitudin et, dignissim vitae magna. Phasellus id lobortis eros. Vestibulum suscipit auctor libero, quis pellentesque enim tempus sed. Curabitur non condimentum neque. Sed vitae auctor massa, vitae tincidunt eros. Quisque quam dolor, dignissim et sagittis ut, blandit et diam. Maecenas malesuada pellentesque sem, eu faucibus velit euismod vitae. Donec volutpat eget eros vel aliquam. Integer cursus, nisi quis laoreet tincidunt, eros mauris posuere lacus, vel mattis ante mi sit amet massa. Fusce in tempor dui, vitae semper sem. Maecenas vitae orci interdum, tincidunt tortor id, fermentum urna. Duis vel nunc finibus, imperdiet mi a, vulputate risus. Integer vitae varius turpis. Suspendisse potenti. Vestibulum lobortis mi mauris, eu placerat mi tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra ipsum sit amet augue vestibulum mattis. Vivamus arcu erat, lobortis nec gravida vel, suscipit eu nunc.';

const projectInfo = [
  {
    id: 1,
    imgURL: 'https://user-images.githubusercontent.com/30795415/33804319-b2564816-dde5-11e7-8d4a-60fc12d68898.jpg',
    altText: 'web calculator thumbnail image',
    title: 'Web Calculator',
    desc: 'Vue.js를 이용해 만든 간단한 웹 계산기입니다. 사칙연산을 수행할 수 있고 정수와 소수 모두 입력할 수 있습니다. 여러분이 입력한 숫자는 항상 화면 상단 검은색 숫자로 나타납니다. 등호(=) 버튼을 누르면 계산 결과가 검은색 숫자로 나타납니다. 검은색 숫자 바로 아래 입력한 전체 수식을 회색 글자로 출력합니다. 수행할 수 없는 수식을 입력하면 검은색 숫자가 ERROR라는 문자로 바뀝니다. 수행할 수 없는 입력은 아예 입력되지 않습니다. 수행 가능한 연산이나 숫자를 입력하면 ERROR 문자가 사라집니다. 계산기는 두 가지 수정 기능을 제공하고 있습니다. AC버튼과 CE버튼입니다. AC버튼은 계산기를 초기화합니다. 아무런 입력도 없던 처음 상태로 돌아갑니다. 여러분이 입력한 모든 수식이 지워집니다. CE버튼은 마지막 입력을 지웁니다. 숫자 혹은 연산 기호를 하나씩 지우면서 여러분이 원하는 상태까지 수식을 되돌릴 수 있습니다. 이 계산기는 계산 결과로 음수를 표현할 수 있습니다. 하지만 음수를 직접 입력하지 못합니다.',
  },
  {
    id: 2,
    imgURL: 'https://user-images.githubusercontent.com/30795415/33947021-b0bd5caa-e066-11e7-809d-659e1eca5fd3.jpg',
    altText: 'pomodoro clock thumbnail image',
    title: 'Pomodoro Clock',
    desc: 'Vue.js를 이용해 만든 토마토 시계(Pomodoro Clock)입니다. 시계 중앙 타이머 영역을 클릭하면 타이머를 시작할 수 있습니다. Session 타이머가 끝나면 자동으로 Break 타이머가 시작됩니다. Break 타이머가 끝나면 다시 Session 타이머가 자동으로 시작됩니다. 한 번 시작하면 여러분이 타이머를 멈추고 싶을 때까지 추가적인 조작을 할 필요가 없습니다. 타이머를 멈추고 싶다면 타이머 영역을 클릭하세요. 시계 상단에서 Session과 Break 시간을 조절할 수 있습니다. 시간은 1분 단위로 늘어나고 줄어듭니다. 중간에 타이머를 처음부터 다시 시작하고 싶다면 시계 하단의 Reset 버튼을 클릭하세요. 타이머는 Session의 처음 상태로 돌아가서 멈춥니다. 타이머를 클릭하면 타이머가 다시 시작됩니다.',
  },
  {
    id: 3,
    imgURL: 'https://user-images.githubusercontent.com/30795415/34454215-0387aa94-edaa-11e7-9d71-4ff40c916517.jpg',
    altText: 'movie app react thumbnail image',
    title: 'Movie App React',
    desc: dummyText,
  },
];

export default projectInfo;