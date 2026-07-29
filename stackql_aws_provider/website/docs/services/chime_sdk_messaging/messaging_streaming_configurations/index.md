--- 
title: messaging_streaming_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - messaging_streaming_configurations
  - chime_sdk_messaging
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

Creates, updates, deletes, gets or lists a <code>messaging_streaming_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="messaging_streaming_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.messaging_streaming_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_messaging_streaming_configurations"
    values={[
        { label: 'get_messaging_streaming_configurations', value: 'get_messaging_streaming_configurations' }
    ]}
>
<TabItem value="get_messaging_streaming_configurations">

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
    <td><CopyableCode code="streaming_configurations" /></td>
    <td><code>array</code></td>
    <td>The streaming settings.</td>
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
    <td><a href="#get_messaging_streaming_configurations"><CopyableCode code="get_messaging_streaming_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the data streaming configuration for an AppInstance. For more information, see Streaming messaging data in the Amazon Chime SDK Developer Guide.</td>
</tr>
<tr>
    <td><a href="#put_messaging_streaming_configurations"><CopyableCode code="put_messaging_streaming_configurations" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamingConfigurations"><code>StreamingConfigurations</code></a></td>
    <td></td>
    <td>Sets the data streaming configuration for an AppInstance. For more information, see Streaming messaging data in the Amazon Chime SDK Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_messaging_streaming_configurations"><CopyableCode code="delete_messaging_streaming_configurations" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the streaming configurations for an AppInstance. For more information, see Streaming messaging data in the Amazon Chime SDK Developer Guide.</td>
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
<tr id="parameter-app_instance_arn">
    <td><CopyableCode code="app_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the streaming configurations being deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_messaging_streaming_configurations"
    values={[
        { label: 'get_messaging_streaming_configurations', value: 'get_messaging_streaming_configurations' }
    ]}
>
<TabItem value="get_messaging_streaming_configurations">

Retrieves the data streaming configuration for an AppInstance. For more information, see Streaming messaging data in the Amazon Chime SDK Developer Guide.

```sql
SELECT
streaming_configurations
FROM aws.chime_sdk_messaging.messaging_streaming_configurations
WHERE app_instance_arn = '{{ app_instance_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_messaging_streaming_configurations"
    values={[
        { label: 'put_messaging_streaming_configurations', value: 'put_messaging_streaming_configurations' }
    ]}
>
<TabItem value="put_messaging_streaming_configurations">

Sets the data streaming configuration for an AppInstance. For more information, see Streaming messaging data in the Amazon Chime SDK Developer Guide.

```sql
REPLACE aws.chime_sdk_messaging.messaging_streaming_configurations
SET 
StreamingConfigurations = '{{ StreamingConfigurations }}'
WHERE 
app_instance_arn = '{{ app_instance_arn }}' --required
AND region = '{{ region }}' --required
AND StreamingConfigurations = '{{ StreamingConfigurations }}' --required
RETURNING
streaming_configurations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_messaging_streaming_configurations"
    values={[
        { label: 'delete_messaging_streaming_configurations', value: 'delete_messaging_streaming_configurations' }
    ]}
>
<TabItem value="delete_messaging_streaming_configurations">

Deletes the streaming configurations for an AppInstance. For more information, see Streaming messaging data in the Amazon Chime SDK Developer Guide.

```sql
DELETE FROM aws.chime_sdk_messaging.messaging_streaming_configurations
WHERE app_instance_arn = '{{ app_instance_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
