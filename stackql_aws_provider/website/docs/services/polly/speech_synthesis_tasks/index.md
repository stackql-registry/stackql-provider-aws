--- 
title: speech_synthesis_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - speech_synthesis_tasks
  - polly
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>speech_synthesis_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="speech_synthesis_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.polly.speech_synthesis_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_speech_synthesis_task"
    values={[
        { label: 'get_speech_synthesis_task', value: 'get_speech_synthesis_task' },
        { label: 'list_speech_synthesis_tasks', value: 'list_speech_synthesis_tasks' }
    ]}
>
<TabItem value="get_speech_synthesis_task">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp for the time the synthesis task was started.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Specifies the engine (standard, neural, long-form or generative) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error. (standard, neural, long-form, generative)</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>Optional language code for a synthesis task. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the DescribeVoices operation for the LanguageCode parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi. (arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-MX, es-US, fr-CA, fr-FR, is-IS, it-IT, ja-JP, hi-IN, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR, en-NZ, en-ZA, ca-ES, de-AT, yue-CN, ar-AE, fi-FI, en-IE, nl-BE, fr-BE, cs-CZ, de-CH, en-SG)</td>
</tr>
<tr>
    <td><CopyableCode code="LexiconNames" /></td>
    <td><code>array</code></td>
    <td>List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputFormat" /></td>
    <td><code>string</code></td>
    <td>The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, ogg_opus, mu-law, a-law, or pcm. For speech marks, this will be json. (json, mp3, ogg_opus, ogg_vorbis, pcm, mulaw, alaw)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputUri" /></td>
    <td><code>string</code></td>
    <td>Pathway for the output speech file.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestCharacters" /></td>
    <td><code>integer</code></td>
    <td>Number of billable characters synthesized.</td>
</tr>
<tr>
    <td><CopyableCode code="SampleRate" /></td>
    <td><code>string</code></td>
    <td>The audio frequency specified in Hz. The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000". The default value for long-form voices is "24000". The default value for generative voices is "24000". Valid values for pcm are "8000" and "16000" The default value is "16000". Valid value for ogg_opus is "48000". Valid value for mu-law and a-law is "8000".</td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>ARN for the SNS topic optionally used for providing status notification for a speech synthesis task. (pattern: &lt;code&gt;^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:&#91;a-z0-9_-&#93;&#123;1,50&#125;:\d&#123;12&#125;:&#91;a-zA-Z0-9_-&#93;&#123;1,251&#125;(&#91;a-zA-Z0-9_-&#93;&#123;0,5&#125;|\.fifo)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SpeechMarkTypes" /></td>
    <td><code>array</code></td>
    <td>The type of speech marks returned for the input text.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Polly generated identifier for a speech synthesis task. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of the individual speech synthesis task. (scheduled, inProgress, completed, failed)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskStatusReason" /></td>
    <td><code>string</code></td>
    <td>Reason for the current status of a specific speech synthesis task, including errors if the task has failed.</td>
</tr>
<tr>
    <td><CopyableCode code="TextType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the input text is plain text or SSML. The default value is plain text. (ssml, text)</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceId" /></td>
    <td><code>string</code></td>
    <td>Voice ID to use for the synthesis. (Aditi, Amy, Astrid, Bianca, Brian, Camila, Carla, Carmen, Celine, Chantal, Conchita, Cristiano, Dora, Emma, Enrique, Ewa, Filiz, Gabrielle, Geraint, Giorgio, Gwyneth, Hans, Ines, Ivy, Jacek, Jan, Joanna, Joey, Justin, Karl, Kendra, Kevin, Kimberly, Lea, Liv, Lotte, Lucia, Lupe, Mads, Maja, Marlene, Mathieu, Matthew, Maxim, Mia, Miguel, Mizuki, Naja, Nicole, Olivia, Penelope, Raveena, Ricardo, Ruben, Russell, Salli, Seoyeon, Takumi, Tatyana, Vicki, Vitoria, Zeina, Zhiyu, Aria, Ayanda, Arlet, Hannah, Arthur, Daniel, Liam, Pedro, Kajal, Hiujin, Laura, Elin, Ida, Suvi, Ola, Hala, Andres, Sergio, Remi, Adriano, Thiago, Ruth, Stephen, Kazuha, Tomoko, Niamh, Sofie, Lisa, Isabelle, Zayd, Danielle, Gregory, Burcu, Jitka, Sabrina, Jasmine, Jihye, Ambre, Beatrice, Florian, Lennart, Lorenzo, Tiffany)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_speech_synthesis_tasks">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp for the time the synthesis task was started.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Specifies the engine (standard, neural, long-form or generative) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error. (standard, neural, long-form, generative)</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>Optional language code for a synthesis task. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the DescribeVoices operation for the LanguageCode parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi. (arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-MX, es-US, fr-CA, fr-FR, is-IS, it-IT, ja-JP, hi-IN, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR, en-NZ, en-ZA, ca-ES, de-AT, yue-CN, ar-AE, fi-FI, en-IE, nl-BE, fr-BE, cs-CZ, de-CH, en-SG)</td>
</tr>
<tr>
    <td><CopyableCode code="LexiconNames" /></td>
    <td><code>array</code></td>
    <td>List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputFormat" /></td>
    <td><code>string</code></td>
    <td>The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, ogg_opus, mu-law, a-law, or pcm. For speech marks, this will be json. (json, mp3, ogg_opus, ogg_vorbis, pcm, mulaw, alaw)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputUri" /></td>
    <td><code>string</code></td>
    <td>Pathway for the output speech file.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestCharacters" /></td>
    <td><code>integer</code></td>
    <td>Number of billable characters synthesized.</td>
</tr>
<tr>
    <td><CopyableCode code="SampleRate" /></td>
    <td><code>string</code></td>
    <td>The audio frequency specified in Hz. The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000". The default value for long-form voices is "24000". The default value for generative voices is "24000". Valid values for pcm are "8000" and "16000" The default value is "16000". Valid value for ogg_opus is "48000". Valid value for mu-law and a-law is "8000".</td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>ARN for the SNS topic optionally used for providing status notification for a speech synthesis task. (pattern: &lt;code&gt;^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:&#91;a-z0-9_-&#93;&#123;1,50&#125;:\d&#123;12&#125;:&#91;a-zA-Z0-9_-&#93;&#123;1,251&#125;(&#91;a-zA-Z0-9_-&#93;&#123;0,5&#125;|\.fifo)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SpeechMarkTypes" /></td>
    <td><code>array</code></td>
    <td>The type of speech marks returned for the input text.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Polly generated identifier for a speech synthesis task. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of the individual speech synthesis task. (scheduled, inProgress, completed, failed)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskStatusReason" /></td>
    <td><code>string</code></td>
    <td>Reason for the current status of a specific speech synthesis task, including errors if the task has failed.</td>
</tr>
<tr>
    <td><CopyableCode code="TextType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the input text is plain text or SSML. The default value is plain text. (ssml, text)</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceId" /></td>
    <td><code>string</code></td>
    <td>Voice ID to use for the synthesis. (Aditi, Amy, Astrid, Bianca, Brian, Camila, Carla, Carmen, Celine, Chantal, Conchita, Cristiano, Dora, Emma, Enrique, Ewa, Filiz, Gabrielle, Geraint, Giorgio, Gwyneth, Hans, Ines, Ivy, Jacek, Jan, Joanna, Joey, Justin, Karl, Kendra, Kevin, Kimberly, Lea, Liv, Lotte, Lucia, Lupe, Mads, Maja, Marlene, Mathieu, Matthew, Maxim, Mia, Miguel, Mizuki, Naja, Nicole, Olivia, Penelope, Raveena, Ricardo, Ruben, Russell, Salli, Seoyeon, Takumi, Tatyana, Vicki, Vitoria, Zeina, Zhiyu, Aria, Ayanda, Arlet, Hannah, Arthur, Daniel, Liam, Pedro, Kajal, Hiujin, Laura, Elin, Ida, Suvi, Ola, Hala, Andres, Sergio, Remi, Adriano, Thiago, Ruth, Stephen, Kazuha, Tomoko, Niamh, Sofie, Lisa, Isabelle, Zayd, Danielle, Gregory, Burcu, Jitka, Sabrina, Jasmine, Jihye, Ambre, Beatrice, Florian, Lennart, Lorenzo, Tiffany)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_speech_synthesis_task"><CopyableCode code="get_speech_synthesis_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.</td>
</tr>
<tr>
    <td><a href="#list_speech_synthesis_tasks"><CopyableCode code="list_speech_synthesis_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Polly generated identifier for a speech synthesis task.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of speech synthesis tasks returned in a List operation.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use in the next request to continue the listing of speech synthesis tasks.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the speech synthesis tasks returned in a List operation</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_speech_synthesis_task"
    values={[
        { label: 'get_speech_synthesis_task', value: 'get_speech_synthesis_task' },
        { label: 'list_speech_synthesis_tasks', value: 'list_speech_synthesis_tasks' }
    ]}
>
<TabItem value="get_speech_synthesis_task">

Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.

```sql
SELECT
CreationTime,
Engine,
LanguageCode,
LexiconNames,
OutputFormat,
OutputUri,
RequestCharacters,
SampleRate,
SnsTopicArn,
SpeechMarkTypes,
TaskId,
TaskStatus,
TaskStatusReason,
TextType,
VoiceId
FROM aws.polly.speech_synthesis_tasks
WHERE task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_speech_synthesis_tasks">

Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.

```sql
SELECT
CreationTime,
Engine,
LanguageCode,
LexiconNames,
OutputFormat,
OutputUri,
RequestCharacters,
SampleRate,
SnsTopicArn,
SpeechMarkTypes,
TaskId,
TaskStatus,
TaskStatusReason,
TextType,
VoiceId
FROM aws.polly.speech_synthesis_tasks
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Status = '{{ Status }}'
;
```
</TabItem>
</Tabs>
