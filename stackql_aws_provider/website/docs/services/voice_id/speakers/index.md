--- 
title: speakers
hide_title: false
hide_table_of_contents: false
keywords:
  - speakers
  - voice_id
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

Creates, updates, deletes, gets or lists a <code>speakers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="speakers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.voice_id.speakers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_speaker"
    values={[
        { label: 'describe_speaker', value: 'describe_speaker' },
        { label: 'list_speakers', value: 'list_speakers' }
    ]}
>
<TabItem value="describe_speaker">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the speaker was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerSpeakerId" /></td>
    <td><code>string</code></td>
    <td>The client-provided identifier for the speaker. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DomainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the speaker. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GeneratedSpeakerId" /></td>
    <td><code>string</code></td>
    <td>The service-generated identifier for the speaker. (pattern: &lt;code&gt;^id#&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastAccessedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the speaker was last accessed for enrollment, re-enrollment or a successful authentication. This timestamp is accurate to one hour.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the speaker. (ENROLLED, EXPIRED, OPTED_OUT, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the speaker's last update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_speakers">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp showing the speaker's creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerSpeakerId" /></td>
    <td><code>string</code></td>
    <td>The client-provided identifier for the speaker. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DomainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the speaker. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GeneratedSpeakerId" /></td>
    <td><code>string</code></td>
    <td>The service-generated identifier for the speaker. (pattern: &lt;code&gt;^id#&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastAccessedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the speaker was last accessed for enrollment, re-enrollment or a successful authentication. This timestamp is accurate to one hour.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the speaker. (ENROLLED, EXPIRED, OPTED_OUT, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp showing the speaker's last update.</td>
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
    <td><a href="#describe_speaker"><CopyableCode code="describe_speaker" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified speaker.</td>
</tr>
<tr>
    <td><a href="#list_speakers"><CopyableCode code="list_speakers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all speakers in a specified domain.</td>
</tr>
<tr>
    <td><a href="#delete_speaker"><CopyableCode code="delete_speaker" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified speaker from Voice ID.</td>
</tr>
<tr>
    <td><a href="#opt_out_speaker"><CopyableCode code="opt_out_speaker" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-SpeakerId"><code>SpeakerId</code></a></td>
    <td></td>
    <td>Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.</td>
</tr>
<tr>
    <td><a href="#start_speaker_enrollment_job"><CopyableCode code="start_speaker_enrollment_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataAccessRoleArn"><code>DataAccessRoleArn</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a>, <a href="#parameter-OutputDataConfig"><code>OutputDataConfig</code></a></td>
    <td></td>
    <td>Starts a new batch speaker enrollment job using specified details.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_speaker"
    values={[
        { label: 'describe_speaker', value: 'describe_speaker' },
        { label: 'list_speakers', value: 'list_speakers' }
    ]}
>
<TabItem value="describe_speaker">

Describes the specified speaker.

```sql
SELECT
CreatedAt,
CustomerSpeakerId,
DomainId,
GeneratedSpeakerId,
LastAccessedAt,
Status,
UpdatedAt
FROM aws.voice_id.speakers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_speakers">

Lists all speakers in a specified domain.

```sql
SELECT
CreatedAt,
CustomerSpeakerId,
DomainId,
GeneratedSpeakerId,
LastAccessedAt,
Status,
UpdatedAt
FROM aws.voice_id.speakers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_speaker"
    values={[
        { label: 'delete_speaker', value: 'delete_speaker' }
    ]}
>
<TabItem value="delete_speaker">

Deletes the specified speaker from Voice ID.

```sql
DELETE FROM aws.voice_id.speakers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="opt_out_speaker"
    values={[
        { label: 'opt_out_speaker', value: 'opt_out_speaker' },
        { label: 'start_speaker_enrollment_job', value: 'start_speaker_enrollment_job' }
    ]}
>
<TabItem value="opt_out_speaker">

Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.

```sql
EXEC aws.voice_id.speakers.opt_out_speaker 
@region='{{ region }}' --required 
@@json=
'{
"DomainId": "{{ DomainId }}", 
"SpeakerId": "{{ SpeakerId }}"
}'
;
```
</TabItem>
<TabItem value="start_speaker_enrollment_job">

Starts a new batch speaker enrollment job using specified details.

```sql
EXEC aws.voice_id.speakers.start_speaker_enrollment_job 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}", 
"DataAccessRoleArn": "{{ DataAccessRoleArn }}", 
"DomainId": "{{ DomainId }}", 
"EnrollmentConfig": "{{ EnrollmentConfig }}", 
"InputDataConfig": "{{ InputDataConfig }}", 
"JobName": "{{ JobName }}", 
"OutputDataConfig": "{{ OutputDataConfig }}"
}'
;
```
</TabItem>
</Tabs>
