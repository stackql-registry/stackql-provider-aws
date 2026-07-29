--- 
title: voices
hide_title: false
hide_table_of_contents: false
keywords:
  - voices
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

Creates, updates, deletes, gets or lists a <code>voices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.polly.voices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_voices"
    values={[
        { label: 'describe_voices', value: 'describe_voices' }
    ]}
>
<TabItem value="describe_voices">

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
    <td><CopyableCode code="additional_language_codes" /></td>
    <td><code>array</code></td>
    <td>Additional codes for languages available for the specified voice in addition to its default language. For example, the default language for Aditi is Indian English (en-IN) because it was first used for that language. Since Aditi is bilingual and fluent in both Indian English and Hindi, this parameter would show the code hi-IN.</td>
</tr>
<tr>
    <td><CopyableCode code="gender" /></td>
    <td><code>string</code></td>
    <td>Gender of the voice. (Female, Male)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Amazon Polly assigned voice ID. This is the ID that you specify when calling the SynthesizeSpeech operation. (Aditi, Amy, Astrid, Bianca, Brian, Camila, Carla, Carmen, Celine, Chantal, Conchita, Cristiano, Dora, Emma, Enrique, Ewa, Filiz, Gabrielle, Geraint, Giorgio, Gwyneth, Hans, Ines, Ivy, Jacek, Jan, Joanna, Joey, Justin, Karl, Kendra, Kevin, Kimberly, Lea, Liv, Lotte, Lucia, Lupe, Mads, Maja, Marlene, Mathieu, Matthew, Maxim, Mia, Miguel, Mizuki, Naja, Nicole, Olivia, Penelope, Raveena, Ricardo, Ruben, Russell, Salli, Seoyeon, Takumi, Tatyana, Vicki, Vitoria, Zeina, Zhiyu, Aria, Ayanda, Arlet, Hannah, Arthur, Daniel, Liam, Pedro, Kajal, Hiujin, Laura, Elin, Ida, Suvi, Ola, Hala, Andres, Sergio, Remi, Adriano, Thiago, Ruth, Stephen, Kazuha, Tomoko, Niamh, Sofie, Lisa, Isabelle, Zayd, Danielle, Gregory, Burcu, Jitka, Sabrina, Jasmine, Jihye, Ambre, Beatrice, Florian, Lennart, Lorenzo, Tiffany)</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>Language code of the voice. (arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-MX, es-US, fr-CA, fr-FR, is-IS, it-IT, ja-JP, hi-IN, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR, en-NZ, en-ZA, ca-ES, de-AT, yue-CN, ar-AE, fi-FI, en-IE, nl-BE, fr-BE, cs-CZ, de-CH, en-SG)</td>
</tr>
<tr>
    <td><CopyableCode code="language_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name of the language in English.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the voice (for example, Salli, Kendra, etc.). This provides a human readable voice name that you might display in your application.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_engines" /></td>
    <td><code>array</code></td>
    <td>Specifies which engines (standard, neural, long-form or generative) are supported by a given voice.</td>
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
    <td><a href="#describe_voices"><CopyableCode code="describe_voices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a>, <a href="#parameter-IncludeAdditionalLanguageCodes"><code>IncludeAdditionalLanguageCodes</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. When synthesizing speech ( SynthesizeSpeech ), you provide the voice ID for the voice you want from the list of voices returned by DescribeVoices. For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the DescribeVoices operation you can provide the user with a list of available voices to select from. You can optionally specify a language code to filter the available voices. For example, if you specify en-US, the operation returns a list of all available US English voices. This operation requires permissions to perform the polly:DescribeVoices action.</td>
</tr>
<tr>
    <td><a href="#start_speech_synthesis_task"><CopyableCode code="start_speech_synthesis_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OutputFormat"><code>OutputFormat</code></a>, <a href="#parameter-OutputS3BucketName"><code>OutputS3BucketName</code></a>, <a href="#parameter-Text"><code>Text</code></a>, <a href="#parameter-VoiceId"><code>VoiceId</code></a></td>
    <td></td>
    <td>Allows the creation of an asynchronous synthesis task, by starting a new SpeechSynthesisTask. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (OutputS3KeyPrefix and SnsTopicArn). Once the synthesis task is created, this operation will return a SpeechSynthesisTask object, which will include an identifier of this task as well as the current status. The SpeechSynthesisTask object is available for 72 hours after starting the asynchronous synthesis task.</td>
</tr>
<tr>
    <td><a href="#synthesize_speech"><CopyableCode code="synthesize_speech" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OutputFormat"><code>OutputFormat</code></a>, <a href="#parameter-Text"><code>Text</code></a>, <a href="#parameter-VoiceId"><code>VoiceId</code></a></td>
    <td></td>
    <td>Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see How it Works.</td>
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
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Specifies the engine (standard, neural, long-form or generative) used by Amazon Polly when processing input text for speech synthesis.</td>
</tr>
<tr id="parameter-IncludeAdditionalLanguageCodes">
    <td><CopyableCode code="IncludeAdditionalLanguageCodes" /></td>
    <td><code>boolean</code></td>
    <td>Boolean value indicating whether to return any bilingual voices that use the specified language as an additional language. For instance, if you request all languages that use US English (es-US), and there is an Italian voice that speaks both Italian (it-IT) and US English, that voice will be included if you specify yes but not if you specify no.</td>
</tr>
<tr id="parameter-LanguageCode">
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token returned from the previous DescribeVoices operation. If present, this indicates where to continue the listing.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_voices"
    values={[
        { label: 'describe_voices', value: 'describe_voices' }
    ]}
>
<TabItem value="describe_voices">

Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. When synthesizing speech ( SynthesizeSpeech ), you provide the voice ID for the voice you want from the list of voices returned by DescribeVoices. For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the DescribeVoices operation you can provide the user with a list of available voices to select from. You can optionally specify a language code to filter the available voices. For example, if you specify en-US, the operation returns a list of all available US English voices. This operation requires permissions to perform the polly:DescribeVoices action.

```sql
SELECT
additional_language_codes,
gender,
id,
language_code,
language_name,
name,
supported_engines
FROM aws.polly.voices
WHERE region = '{{ region }}' -- required
AND Engine = '{{ Engine }}'
AND LanguageCode = '{{ LanguageCode }}'
AND IncludeAdditionalLanguageCodes = '{{ IncludeAdditionalLanguageCodes }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_speech_synthesis_task"
    values={[
        { label: 'start_speech_synthesis_task', value: 'start_speech_synthesis_task' },
        { label: 'synthesize_speech', value: 'synthesize_speech' }
    ]}
>
<TabItem value="start_speech_synthesis_task">

Allows the creation of an asynchronous synthesis task, by starting a new SpeechSynthesisTask. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (OutputS3KeyPrefix and SnsTopicArn). Once the synthesis task is created, this operation will return a SpeechSynthesisTask object, which will include an identifier of this task as well as the current status. The SpeechSynthesisTask object is available for 72 hours after starting the asynchronous synthesis task.

```sql
EXEC aws.polly.voices.start_speech_synthesis_task 
@region='{{ region }}' --required 
@@json=
'{
"Engine": "{{ Engine }}", 
"LanguageCode": "{{ LanguageCode }}", 
"LexiconNames": "{{ LexiconNames }}", 
"OutputFormat": "{{ OutputFormat }}", 
"OutputS3BucketName": "{{ OutputS3BucketName }}", 
"OutputS3KeyPrefix": "{{ OutputS3KeyPrefix }}", 
"SampleRate": "{{ SampleRate }}", 
"SnsTopicArn": "{{ SnsTopicArn }}", 
"SpeechMarkTypes": "{{ SpeechMarkTypes }}", 
"Text": "{{ Text }}", 
"TextType": "{{ TextType }}", 
"VoiceId": "{{ VoiceId }}"
}'
;
```
</TabItem>
<TabItem value="synthesize_speech">

Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see How it Works.

```sql
EXEC aws.polly.voices.synthesize_speech 
@region='{{ region }}' --required 
@@json=
'{
"Engine": "{{ Engine }}", 
"LanguageCode": "{{ LanguageCode }}", 
"LexiconNames": "{{ LexiconNames }}", 
"OutputFormat": "{{ OutputFormat }}", 
"SampleRate": "{{ SampleRate }}", 
"SpeechMarkTypes": "{{ SpeechMarkTypes }}", 
"Text": "{{ Text }}", 
"TextType": "{{ TextType }}", 
"VoiceId": "{{ VoiceId }}"
}'
;
```
</TabItem>
</Tabs>
