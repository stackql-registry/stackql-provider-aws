--- 
title: medical_scribe_listening_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - medical_scribe_listening_sessions
  - connecthealth
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

Creates, updates, deletes, gets or lists a <code>medical_scribe_listening_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="medical_scribe_listening_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connecthealth.medical_scribe_listening_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_medical_scribe_listening_session"
    values={[
        { label: 'get_medical_scribe_listening_session', value: 'get_medical_scribe_listening_session' }
    ]}
>
<TabItem value="get_medical_scribe_listening_session">

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
    <td><CopyableCode code="channelDefinitions" /></td>
    <td><code>array</code></td>
    <td>Channel definitions for the audio stream</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The Domain identifier (pattern: &lt;code&gt;(hai-|dom-)&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="encounterContextProvided" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether encounter context was provided</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>The Language Code for the audio in the session (en-US)</td>
</tr>
<tr>
    <td><CopyableCode code="mediaEncoding" /></td>
    <td><code>string</code></td>
    <td>The encoding for the input audio (pcm, flac)</td>
</tr>
<tr>
    <td><CopyableCode code="mediaSampleRateHertz" /></td>
    <td><code>integer</code></td>
    <td>The sample rate of the input audio</td>
</tr>
<tr>
    <td><CopyableCode code="postStreamActionResult" /></td>
    <td><code>object</code></td>
    <td>Results of post-stream actions</td>
</tr>
<tr>
    <td><CopyableCode code="postStreamActionSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for post-stream actions</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The Session identifier (pattern: &lt;code&gt;.*&#91;a-fA-F0-9&#93;&#123;8&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="streamCreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stream was created</td>
</tr>
<tr>
    <td><CopyableCode code="streamEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stream ended</td>
</tr>
<tr>
    <td><CopyableCode code="streamStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream (IN_PROGRESS, PAUSED, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionId" /></td>
    <td><code>string</code></td>
    <td>The Subscription identifier (pattern: &lt;code&gt;sub-&#91;a-zA-Z0-9&#93;&#123;21&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_medical_scribe_listening_session"><CopyableCode code="get_medical_scribe_listening_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-subscription_id"><code>subscription_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about an existing Medical Scribe listening session</td>
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
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The Domain identifier</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The Session identifier</td>
</tr>
<tr id="parameter-subscription_id">
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td>The Subscription identifier</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_medical_scribe_listening_session"
    values={[
        { label: 'get_medical_scribe_listening_session', value: 'get_medical_scribe_listening_session' }
    ]}
>
<TabItem value="get_medical_scribe_listening_session">

Retrieves details about an existing Medical Scribe listening session

```sql
SELECT
channelDefinitions,
domainId,
encounterContextProvided,
languageCode,
mediaEncoding,
mediaSampleRateHertz,
postStreamActionResult,
postStreamActionSettings,
sessionId,
streamCreationTime,
streamEndTime,
streamStatus,
subscriptionId
FROM aws.connecthealth.medical_scribe_listening_sessions
WHERE session_id = '{{ session_id }}' -- required
AND domain_id = '{{ domain_id }}' -- required
AND subscription_id = '{{ subscription_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
