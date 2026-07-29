--- 
title: instance_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_attributes
  - connect
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

Creates, updates, deletes, gets or lists an <code>instance_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.instance_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_attribute"
    values={[
        { label: 'describe_instance_attribute', value: 'describe_instance_attribute' },
        { label: 'list_instance_attributes', value: 'list_instance_attributes' }
    ]}
>
<TabItem value="describe_instance_attribute">

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
    <td><CopyableCode code="attribute_type" /></td>
    <td><code>string</code></td>
    <td>The type of attribute. (INBOUND_CALLS, OUTBOUND_CALLS, CONTACTFLOW_LOGS, CONTACT_LENS, AUTO_RESOLVE_BEST_VOICES, USE_CUSTOM_TTS_VOICES, EARLY_MEDIA, MULTI_PARTY_CONFERENCE, HIGH_VOLUME_OUTBOUND, ENHANCED_CONTACT_MONITORING, ENHANCED_CHAT_MONITORING, MULTI_PARTY_CHAT_CONFERENCE, MESSAGE_STREAMING)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_instance_attributes">

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
    <td><CopyableCode code="attribute_type" /></td>
    <td><code>string</code></td>
    <td>The type of attribute. (INBOUND_CALLS, OUTBOUND_CALLS, CONTACTFLOW_LOGS, CONTACT_LENS, AUTO_RESOLVE_BEST_VOICES, USE_CUSTOM_TTS_VOICES, EARLY_MEDIA, MULTI_PARTY_CONFERENCE, HIGH_VOLUME_OUTBOUND, ENHANCED_CONTACT_MONITORING, ENHANCED_CHAT_MONITORING, MULTI_PARTY_CHAT_CONFERENCE, MESSAGE_STREAMING)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the attribute.</td>
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
    <td><a href="#describe_instance_attribute"><CopyableCode code="describe_instance_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-attribute_type"><code>attribute_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Describes the specified instance attribute.</td>
</tr>
<tr>
    <td><a href="#list_instance_attributes"><CopyableCode code="list_instance_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all attribute types for the given instance.</td>
</tr>
<tr>
    <td><a href="#update_instance_attribute"><CopyableCode code="update_instance_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-attribute_type"><code>attribute_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Updates the value for the specified attribute type.</td>
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
<tr id="parameter-attribute_type">
    <td><CopyableCode code="attribute_type" /></td>
    <td><code>string</code></td>
    <td>The type of attribute. Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature, contact Amazon Web Services Support for allowlisting. If you set the attribute type as MESSAGE_STREAMING, you need to update the Lex bot alias resource based policy to include the lex:RecognizeMessageAsync action for the connect instance ARN resource.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_attribute"
    values={[
        { label: 'describe_instance_attribute', value: 'describe_instance_attribute' },
        { label: 'list_instance_attributes', value: 'list_instance_attributes' }
    ]}
>
<TabItem value="describe_instance_attribute">

This API is in preview release for Amazon Connect and is subject to change. Describes the specified instance attribute.

```sql
SELECT
attribute_type,
value
FROM aws.connect.instance_attributes
WHERE instance_id = '{{ instance_id }}' -- required
AND attribute_type = '{{ attribute_type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_instance_attributes">

This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all attribute types for the given instance.

```sql
SELECT
attribute_type,
value
FROM aws.connect.instance_attributes
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_instance_attribute"
    values={[
        { label: 'update_instance_attribute', value: 'update_instance_attribute' }
    ]}
>
<TabItem value="update_instance_attribute">

This API is in preview release for Amazon Connect and is subject to change. Updates the value for the specified attribute type.

```sql
UPDATE aws.connect.instance_attributes
SET 
Value = '{{ Value }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND attribute_type = '{{ attribute_type }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
