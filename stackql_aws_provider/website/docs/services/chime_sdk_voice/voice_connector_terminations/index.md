--- 
title: voice_connector_terminations
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_connector_terminations
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists a <code>voice_connector_terminations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_connector_terminations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_connector_terminations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_voice_connector_termination"
    values={[
        { label: 'get_voice_connector_termination', value: 'get_voice_connector_termination' }
    ]}
>
<TabItem value="get_voice_connector_termination">

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
    <td><CopyableCode code="calling_regions" /></td>
    <td><code>array</code></td>
    <td>The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr_allowed_list" /></td>
    <td><code>array</code></td>
    <td>The IP addresses allowed to make calls, in CIDR format.</td>
</tr>
<tr>
    <td><CopyableCode code="cps_limit" /></td>
    <td><code>integer</code></td>
    <td>The limit on calls per second. Max value based on account service quota. Default value of 1.</td>
</tr>
<tr>
    <td><CopyableCode code="default_phone_number" /></td>
    <td><code>string</code></td>
    <td>The default outbound calling number. (pattern: &lt;code&gt;^\+?&#91;1-9&#93;\d&#123;1,14&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>When termination is disabled, outbound calls cannot be made.</td>
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
    <td><a href="#get_voice_connector_termination"><CopyableCode code="get_voice_connector_termination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the termination setting details for the specified Voice Connector.</td>
</tr>
<tr>
    <td><a href="#put_voice_connector_termination"><CopyableCode code="put_voice_connector_termination" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Voice Connector's termination settings.</td>
</tr>
<tr>
    <td><a href="#delete_voice_connector_termination"><CopyableCode code="delete_voice_connector_termination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the termination settings for the specified Amazon Chime SDK Voice Connector. If emergency calling is configured for the Voice Connector, it must be deleted prior to deleting the termination settings.</td>
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
<tr id="parameter-voice_connector_id">
    <td><CopyableCode code="voice_connector_id" /></td>
    <td><code>string</code></td>
    <td>The Voice Connector ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_voice_connector_termination"
    values={[
        { label: 'get_voice_connector_termination', value: 'get_voice_connector_termination' }
    ]}
>
<TabItem value="get_voice_connector_termination">

Retrieves the termination setting details for the specified Voice Connector.

```sql
SELECT
calling_regions,
cidr_allowed_list,
cps_limit,
default_phone_number,
disabled
FROM aws.chime_sdk_voice.voice_connector_terminations
WHERE voice_connector_id = '{{ voice_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_voice_connector_termination"
    values={[
        { label: 'put_voice_connector_termination', value: 'put_voice_connector_termination' }
    ]}
>
<TabItem value="put_voice_connector_termination">

Updates a Voice Connector's termination settings.

```sql
REPLACE aws.chime_sdk_voice.voice_connector_terminations
SET 
Termination = '{{ Termination }}'
WHERE 
voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
RETURNING
termination;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_connector_termination"
    values={[
        { label: 'delete_voice_connector_termination', value: 'delete_voice_connector_termination' }
    ]}
>
<TabItem value="delete_voice_connector_termination">

Deletes the termination settings for the specified Amazon Chime SDK Voice Connector. If emergency calling is configured for the Voice Connector, it must be deleted prior to deleting the termination settings.

```sql
DELETE FROM aws.chime_sdk_voice.voice_connector_terminations
WHERE voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
