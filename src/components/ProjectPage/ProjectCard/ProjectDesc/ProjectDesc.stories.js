import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProjectDesc from './ProjectDesc';

const dummyText ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac aliquet eros. Aenean commodo mattis augue. Integer eleifend venenatis lorem cursus rhoncus. Fusce eget convallis ligula, a fermentum risus. Morbi vitae mauris sed magna condimentum finibus ac in sapien. Suspendisse at risus a tortor pharetra suscipit. Quisque efficitur leo ex, ac cursus lacus ullamcorper a. Pellentesque feugiat fermentum sem. Praesent tristique feugiat condimentum. Duis tempor ex sit amet pulvinar dapibus. Integer porta tellus vel enim rutrum convallis. Duis molestie elit nec augue eleifend iaculis. Sed sem lorem, finibus in quam id, varius cursus nisl. Mauris ligula turpis, sodales suscipit lorem sit amet, dictum imperdiet est. Sed tempor arcu sed nunc tempus tempus. Aliquam in luctus ipsum, eget porttitor ante. Etiam at nisl vel libero rhoncus tincidunt et vel tellus. Quisque maximus pulvinar arcu nec fermentum. Suspendisse hendrerit, elit eget tempor sollicitudin, metus risus fermentum justo, vel tincidunt enim tellus eu libero. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus consectetur libero nulla, efficitur posuere ex pulvinar nec. Nam aliquet arcu mi, id vehicula arcu sollicitudin nec. Mauris finibus eget nunc vel feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi velit dolor, vestibulum quis rutrum eu, placerat vitae magna. Ut ultricies suscipit leo, sodales cursus velit varius ornare. Pellentesque ante tortor, eleifend eu tortor nec, semper lacinia risus. Vivamus suscipit libero lacus, sed condimentum lacus condimentum ac. Praesent ac vehicula urna. Sed lacus justo, vestibulum eu facilisis eu, tincidunt eu erat. Aenean eget consectetur massa. Morbi bibendum ultrices vestibulum. Donec non vehicula sem, sed aliquam mi. Ut sed sodales est. Morbi ac mollis lorem. Sed mattis laoreet sapien, eu tincidunt ante dignissim non. Curabitur aliquet nunc vel nulla tincidunt sollicitudin. Nulla commodo quam vel nisi tempor, ut fermentum ante tempus. Vivamus gravida sollicitudin aliquam. Praesent gravida consequat mauris, ac iaculis urna efficitur condimentum. Proin orci dui, aliquet at sollicitudin et, dignissim vitae magna. Phasellus id lobortis eros. Vestibulum suscipit auctor libero, quis pellentesque enim tempus sed. Curabitur non condimentum neque. Sed vitae auctor massa, vitae tincidunt eros. Quisque quam dolor, dignissim et sagittis ut, blandit et diam. Maecenas malesuada pellentesque sem, eu faucibus velit euismod vitae. Donec volutpat eget eros vel aliquam. Integer cursus, nisi quis laoreet tincidunt, eros mauris posuere lacus, vel mattis ante mi sit amet massa. Fusce in tempor dui, vitae semper sem. Maecenas vitae orci interdum, tincidunt tortor id, fermentum urna. Duis vel nunc finibus, imperdiet mi a, vulputate risus. Integer vitae varius turpis. Suspendisse potenti. Vestibulum lobortis mi mauris, eu placerat mi tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra ipsum sit amet augue vestibulum mattis. Vivamus arcu erat, lobortis nec gravida vel, suscipit eu nunc.';

storiesOf('ProjectDesc', module)
.addDecorator((story) => (
  <div style={{ width: '10rem', margin: '5rem', border: '1px solid red' }}>
    {story()}
  </div>
))
.add('ProjectDesc Component', () => <ProjectDesc
  title="Web Calculator"
  desc={dummyText}
/>);