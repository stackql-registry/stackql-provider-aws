--- 
title: in_app_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - in_app_messages
  - pinpoint
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

Creates, updates, deletes, gets or lists an <code>in_app_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="in_app_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.in_app_messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_in_app_messages"
    values={[
        { label: 'get_in_app_messages', value: 'get_in_app_messages' }
    ]}
>
<TabItem value="get_in_app_messages">

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
    <td><CopyableCode code="InAppMessageCampaigns" /></td>
    <td><code>array</code></td>
    <td>List of targeted in-app message campaigns.</td>
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
    <td><a href="#get_in_app_messages"><CopyableCode code="get_in_app_messages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-endpoint-id"><code>endpoint-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the in-app messages targeted for the provided endpoint ID.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-endpoint-id">
    <td><CopyableCode code="endpoint-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the endpoint.</td>
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
    defaultValue="get_in_app_messages"
    values={[
        { label: 'get_in_app_messages', value: 'get_in_app_messages' }
    ]}
>
<TabItem value="get_in_app_messages">

Retrieves the in-app messages targeted for the provided endpoint ID.

```sql
SELECT
InAppMessageCampaigns
FROM aws.pinpoint.in_app_messages
WHERE `application-id` = '{{ application-id }}' -- required
AND `endpoint-id` = '{{ endpoint-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
