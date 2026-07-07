--- 
title: voice_connector_termination_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_connector_termination_credentials
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

Creates, updates, deletes, gets or lists a <code>voice_connector_termination_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_connector_termination_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_connector_termination_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_voice_connector_termination_credentials"
    values={[
        { label: 'list_voice_connector_termination_credentials', value: 'list_voice_connector_termination_credentials' }
    ]}
>
<TabItem value="list_voice_connector_termination_credentials">

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
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>A list of user names.</td>
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
    <td><a href="#list_voice_connector_termination_credentials"><CopyableCode code="list_voice_connector_termination_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the SIP credentials for the specified Amazon Chime SDK Voice Connector.</td>
</tr>
<tr>
    <td><a href="#put_voice_connector_termination_credentials"><CopyableCode code="put_voice_connector_termination_credentials" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Voice Connector's termination credentials.</td>
</tr>
<tr>
    <td><a href="#delete_voice_connector_termination_credentials"><CopyableCode code="delete_voice_connector_termination_credentials" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified SIP credentials used by your equipment to authenticate during call termination.</td>
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
    defaultValue="list_voice_connector_termination_credentials"
    values={[
        { label: 'list_voice_connector_termination_credentials', value: 'list_voice_connector_termination_credentials' }
    ]}
>
<TabItem value="list_voice_connector_termination_credentials">

Lists the SIP credentials for the specified Amazon Chime SDK Voice Connector.

```sql
SELECT
username
FROM aws.chime_sdk_voice.voice_connector_termination_credentials
WHERE voice_connector_id = '{{ voice_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_voice_connector_termination_credentials"
    values={[
        { label: 'put_voice_connector_termination_credentials', value: 'put_voice_connector_termination_credentials' }
    ]}
>
<TabItem value="put_voice_connector_termination_credentials">

Updates a Voice Connector's termination credentials.

```sql
REPLACE aws.chime_sdk_voice.voice_connector_termination_credentials
SET 
Credentials = '{{ Credentials }}'
WHERE 
voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_connector_termination_credentials"
    values={[
        { label: 'delete_voice_connector_termination_credentials', value: 'delete_voice_connector_termination_credentials' }
    ]}
>
<TabItem value="delete_voice_connector_termination_credentials">

Deletes the specified SIP credentials used by your equipment to authenticate during call termination.

```sql
DELETE FROM aws.chime_sdk_voice.voice_connector_termination_credentials
WHERE voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
