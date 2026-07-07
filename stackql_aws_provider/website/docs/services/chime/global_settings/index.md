--- 
title: global_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - global_settings
  - chime
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

Creates, updates, deletes, gets or lists a <code>global_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.global_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_global_settings"
    values={[
        { label: 'get_global_settings', value: 'get_global_settings' }
    ]}
>
<TabItem value="get_global_settings">

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
    <td><CopyableCode code="BusinessCalling" /></td>
    <td><code>object</code></td>
    <td>The Amazon Chime Business Calling settings.</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceConnector" /></td>
    <td><code>object</code></td>
    <td>The Amazon Chime Voice Connector settings.</td>
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
    <td><a href="#get_global_settings"><CopyableCode code="get_global_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.</td>
</tr>
<tr>
    <td><a href="#update_global_settings"><CopyableCode code="update_global_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.</td>
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
    defaultValue="get_global_settings"
    values={[
        { label: 'get_global_settings', value: 'get_global_settings' }
    ]}
>
<TabItem value="get_global_settings">

Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.

```sql
SELECT
BusinessCalling,
VoiceConnector
FROM aws.chime.global_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_global_settings"
    values={[
        { label: 'update_global_settings', value: 'update_global_settings' }
    ]}
>
<TabItem value="update_global_settings">

Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.

```sql
UPDATE aws.chime.global_settings
SET 
BusinessCalling = '{{ BusinessCalling }}',
VoiceConnector = '{{ VoiceConnector }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
