--- 
title: flow_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_associations
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

Creates, updates, deletes, gets or lists a <code>flow_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.flow_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_flow_association"
    values={[
        { label: 'get_flow_association', value: 'get_flow_association' },
        { label: 'batch_get_flow_association', value: 'batch_get_flow_association' },
        { label: 'list_flow_associations', value: 'list_flow_associations' }
    ]}
>
<TabItem value="get_flow_association">

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
    <td><CopyableCode code="flow_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>A valid resource type. (SMS_PHONE_NUMBER, INBOUND_EMAIL, OUTBOUND_EMAIL, ANALYTICS_CONNECTOR, WHATSAPP_MESSAGING_PHONE_NUMBER)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_flow_association">

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
    <td><CopyableCode code="flow_association_summary_list" /></td>
    <td><code>array</code></td>
    <td>Information about flow associations.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flow_associations">

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
    <td><CopyableCode code="flow_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource association. (WHATSAPP_MESSAGING_PHONE_NUMBER, VOICE_PHONE_NUMBER, INBOUND_EMAIL, OUTBOUND_EMAIL, ANALYTICS_CONNECTOR)</td>
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
    <td><a href="#get_flow_association"><CopyableCode code="get_flow_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the flow associated for a given resource.</td>
</tr>
<tr>
    <td><a href="#batch_get_flow_association"><CopyableCode code="batch_get_flow_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the flow associations for the given resources.</td>
</tr>
<tr>
    <td><a href="#list_flow_associations"><CopyableCode code="list_flow_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List the flow association based on the filters.</td>
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
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource. Amazon Web Services End User Messaging SMS phone number ARN when using SMS_PHONE_NUMBER Amazon Web Services End User Messaging Social phone number ARN when using WHATSAPP_MESSAGING_PHONE_NUMBER</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>A valid resource type.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>A valid resource type.</td>
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
    defaultValue="get_flow_association"
    values={[
        { label: 'get_flow_association', value: 'get_flow_association' },
        { label: 'batch_get_flow_association', value: 'batch_get_flow_association' },
        { label: 'list_flow_associations', value: 'list_flow_associations' }
    ]}
>
<TabItem value="get_flow_association">

Retrieves the flow associated for a given resource.

```sql
SELECT
flow_id,
resource_id,
resource_type
FROM aws.connect.flow_associations
WHERE instance_id = '{{ instance_id }}' -- required
AND resource_id = '{{ resource_id }}' -- required
AND resource_type = '{{ resource_type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_flow_association">

Retrieve the flow associations for the given resources.

```sql
SELECT
flow_association_summary_list
FROM aws.connect.flow_associations
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_flow_associations">

List the flow association based on the filters.

```sql
SELECT
flow_id,
resource_id,
resource_type
FROM aws.connect.flow_associations
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND ResourceType = '{{ ResourceType }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
