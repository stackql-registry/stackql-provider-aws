--- 
title: speech_synthesis_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - speech_synthesis_streams
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

Creates, updates, deletes, gets or lists a <code>speech_synthesis_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="speech_synthesis_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.polly.speech_synthesis_streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#start_speech_synthesis_stream"><CopyableCode code="start_speech_synthesis_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amzn-Engine"><code>x-amzn-Engine</code></a>, <a href="#parameter-x-amzn-OutputFormat"><code>x-amzn-OutputFormat</code></a>, <a href="#parameter-x-amzn-VoiceId"><code>x-amzn-VoiceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amzn-LanguageCode"><code>x-amzn-LanguageCode</code></a>, <a href="#parameter-x-amzn-LexiconNames"><code>x-amzn-LexiconNames</code></a>, <a href="#parameter-x-amzn-SampleRate"><code>x-amzn-SampleRate</code></a></td>
    <td>Synthesizes UTF-8 input, plain text, or SSML over a bidirectional streaming connection. Specify synthesis parameters in HTTP/2 headers, send text incrementally as events on the input stream, and receive synthesized audio as it becomes available. This operation serves as a bidirectional counterpart to SynthesizeSpeech: SynthesizeSpeech</td>
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
<tr id="parameter-x-amzn-Engine">
    <td><CopyableCode code="x-amzn-Engine" /></td>
    <td><code>string</code></td>
    <td>Specifies the engine for Amazon Polly to use when processing input text for speech synthesis. Currently, only the generative engine is supported. If you specify a voice that the selected engine doesn't support, Amazon Polly returns an error.</td>
</tr>
<tr id="parameter-x-amzn-OutputFormat">
    <td><CopyableCode code="x-amzn-OutputFormat" /></td>
    <td><code>string</code></td>
    <td>The audio format for the synthesized speech. Currently, Amazon Polly does not support JSON speech marks.</td>
</tr>
<tr id="parameter-x-amzn-VoiceId">
    <td><CopyableCode code="x-amzn-VoiceId" /></td>
    <td><code>string</code></td>
    <td>The voice to use in synthesis. To get a list of available voice IDs, use the DescribeVoices operation.</td>
</tr>
<tr id="parameter-x-amzn-LanguageCode">
    <td><CopyableCode code="x-amzn-LanguageCode" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that sets the language code for the speech synthesis request. Specify this parameter only when using a bilingual voice. If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice.</td>
</tr>
<tr id="parameter-x-amzn-LexiconNames">
    <td><CopyableCode code="x-amzn-LexiconNames" /></td>
    <td><code>array</code></td>
    <td>The names of one or more pronunciation lexicons for the service to apply during synthesis. Amazon Polly applies lexicons only when the lexicon language matches the voice language.</td>
</tr>
<tr id="parameter-x-amzn-SampleRate">
    <td><CopyableCode code="x-amzn-SampleRate" /></td>
    <td><code>string</code></td>
    <td>The audio frequency, specified in Hz.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="start_speech_synthesis_stream"
    values={[
        { label: 'start_speech_synthesis_stream', value: 'start_speech_synthesis_stream' }
    ]}
>
<TabItem value="start_speech_synthesis_stream">

Synthesizes UTF-8 input, plain text, or SSML over a bidirectional streaming connection. Specify synthesis parameters in HTTP/2 headers, send text incrementally as events on the input stream, and receive synthesized audio as it becomes available. This operation serves as a bidirectional counterpart to SynthesizeSpeech: SynthesizeSpeech

```sql
EXEC aws.polly.speech_synthesis_streams.start_speech_synthesis_stream 
@x-amzn-Engine='{{ x-amzn-Engine }}' --required, 
@x-amzn-OutputFormat='{{ x-amzn-OutputFormat }}' --required, 
@x-amzn-VoiceId='{{ x-amzn-VoiceId }}' --required, 
@region='{{ region }}' --required, 
@x-amzn-LanguageCode='{{ x-amzn-LanguageCode }}', 
@x-amzn-LexiconNames='{{ x-amzn-LexiconNames }}', 
@x-amzn-SampleRate='{{ x-amzn-SampleRate }}' 
@@json=
'{
"ActionStream": "{{ ActionStream }}"
}'
;
```
</TabItem>
</Tabs>
