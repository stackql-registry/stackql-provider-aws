--- 
title: voice_connector_originations
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_connector_originations
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

Creates, updates, deletes, gets or lists a <code>voice_connector_originations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_connector_originations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_connector_originations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_voice_connector_origination"
    values={[
        { label: 'get_voice_connector_origination', value: 'get_voice_connector_origination' }
    ]}
>
<TabItem value="get_voice_connector_origination">

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
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>When origination settings are disabled, inbound calls are not enabled for your Amazon Chime SDK Voice Connector. This parameter is not required, but you must specify this parameter or Routes.</td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>array</code></td>
    <td>The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1. Maximum value of 20. This parameter is not required, but you must specify this parameter or Disabled.</td>
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
    <td><a href="#get_voice_connector_origination"><CopyableCode code="get_voice_connector_origination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the origination settings for the specified Voice Connector.</td>
</tr>
<tr>
    <td><a href="#put_voice_connector_origination"><CopyableCode code="put_voice_connector_origination" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Voice Connector's origination settings.</td>
</tr>
<tr>
    <td><a href="#delete_voice_connector_origination"><CopyableCode code="delete_voice_connector_origination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the origination settings for the specified Amazon Chime SDK Voice Connector. If emergency calling is configured for the Voice Connector, it must be deleted prior to deleting the origination settings.</td>
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
    defaultValue="get_voice_connector_origination"
    values={[
        { label: 'get_voice_connector_origination', value: 'get_voice_connector_origination' }
    ]}
>
<TabItem value="get_voice_connector_origination">

Retrieves the origination settings for the specified Voice Connector.

```sql
SELECT
disabled,
routes
FROM aws.chime_sdk_voice.voice_connector_originations
WHERE voice_connector_id = '{{ voice_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_voice_connector_origination"
    values={[
        { label: 'put_voice_connector_origination', value: 'put_voice_connector_origination' }
    ]}
>
<TabItem value="put_voice_connector_origination">

Updates a Voice Connector's origination settings.

```sql
REPLACE aws.chime_sdk_voice.voice_connector_originations
SET 
Origination = '{{ Origination }}'
WHERE 
voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
RETURNING
origination;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_connector_origination"
    values={[
        { label: 'delete_voice_connector_origination', value: 'delete_voice_connector_origination' }
    ]}
>
<TabItem value="delete_voice_connector_origination">

Deletes the origination settings for the specified Amazon Chime SDK Voice Connector. If emergency calling is configured for the Voice Connector, it must be deleted prior to deleting the origination settings.

```sql
DELETE FROM aws.chime_sdk_voice.voice_connector_originations
WHERE voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
