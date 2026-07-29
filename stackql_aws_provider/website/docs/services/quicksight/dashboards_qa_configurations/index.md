--- 
title: dashboards_qa_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards_qa_configurations
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>dashboards_qa_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboards_qa_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.dashboards_qa_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dashboards_qa_configuration"
    values={[
        { label: 'describe_dashboards_qa_configuration', value: 'describe_dashboards_qa_configuration' }
    ]}
>
<TabItem value="describe_dashboards_qa_configuration">

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
    <td><CopyableCode code="dashboards_qa_status" /></td>
    <td><code>string</code></td>
    <td>The status of dashboards QA configuration that you want described. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_dashboards_qa_configuration"><CopyableCode code="describe_dashboards_qa_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an existing dashboard QA configuration.</td>
</tr>
<tr>
    <td><a href="#update_dashboards_qa_configuration"><CopyableCode code="update_dashboards_qa_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DashboardsQAStatus"><code>DashboardsQAStatus</code></a></td>
    <td></td>
    <td>Updates a Dashboard QA configuration.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the dashboard QA configuration that you want to update.</td>
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
    defaultValue="describe_dashboards_qa_configuration"
    values={[
        { label: 'describe_dashboards_qa_configuration', value: 'describe_dashboards_qa_configuration' }
    ]}
>
<TabItem value="describe_dashboards_qa_configuration">

Describes an existing dashboard QA configuration.

```sql
SELECT
dashboards_qa_status,
request_id,
status
FROM aws.quicksight.dashboards_qa_configurations
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dashboards_qa_configuration"
    values={[
        { label: 'update_dashboards_qa_configuration', value: 'update_dashboards_qa_configuration' }
    ]}
>
<TabItem value="update_dashboards_qa_configuration">

Updates a Dashboard QA configuration.

```sql
UPDATE aws.quicksight.dashboards_qa_configurations
SET 
DashboardsQAStatus = '{{ DashboardsQAStatus }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND DashboardsQAStatus = '{{ DashboardsQAStatus }}' --required
RETURNING
dashboards_qa_status,
request_id,
status;
```
</TabItem>
</Tabs>
