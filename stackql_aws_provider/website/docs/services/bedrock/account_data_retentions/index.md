--- 
title: account_data_retentions
hide_title: false
hide_table_of_contents: false
keywords:
  - account_data_retentions
  - bedrock
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

Creates, updates, deletes, gets or lists an <code>account_data_retentions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_data_retentions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.account_data_retentions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_data_retention"
    values={[
        { label: 'get_account_data_retention', value: 'get_account_data_retention' }
    ]}
>
<TabItem value="get_account_data_retention">

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
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The data retention mode configured for the account. (default, none, provider_data_share, inherit)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the data retention mode was last updated.</td>
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
    <td><a href="#get_account_data_retention"><CopyableCode code="get_account_data_retention" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the account-wide data retention mode for Amazon Bedrock.</td>
</tr>
<tr>
    <td><a href="#put_account_data_retention"><CopyableCode code="put_account_data_retention" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-mode"><code>mode</code></a></td>
    <td></td>
    <td>Sets the account-wide data retention mode for Amazon Bedrock.</td>
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
    defaultValue="get_account_data_retention"
    values={[
        { label: 'get_account_data_retention', value: 'get_account_data_retention' }
    ]}
>
<TabItem value="get_account_data_retention">

Returns the account-wide data retention mode for Amazon Bedrock.

```sql
SELECT
mode,
updated_at
FROM aws.bedrock.account_data_retentions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_account_data_retention"
    values={[
        { label: 'put_account_data_retention', value: 'put_account_data_retention' }
    ]}
>
<TabItem value="put_account_data_retention">

Sets the account-wide data retention mode for Amazon Bedrock.

```sql
REPLACE aws.bedrock.account_data_retentions
SET 
mode = '{{ mode }}'
WHERE 
region = '{{ region }}' --required
AND mode = '{{ mode }}' --required
RETURNING
mode,
updated_at;
```
</TabItem>
</Tabs>
