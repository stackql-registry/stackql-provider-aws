--- 
title: usage_report_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_report_subscriptions
  - appstream
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

Creates, updates, deletes, gets or lists a <code>usage_report_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_report_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.usage_report_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_usage_report_subscriptions"
    values={[
        { label: 'describe_usage_report_subscriptions', value: 'describe_usage_report_subscriptions' }
    ]}
>
<TabItem value="describe_usage_report_subscriptions">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="UsageReportSubscriptions" /></td>
    <td><code>array</code></td>
    <td>Information about the usage report subscription.</td>
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
    <td><a href="#describe_usage_report_subscriptions"><CopyableCode code="describe_usage_report_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more usage report subscriptions.</td>
</tr>
<tr>
    <td><a href="#create_usage_report_subscription"><CopyableCode code="create_usage_report_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a usage report subscription. Usage reports are generated daily.</td>
</tr>
<tr>
    <td><a href="#delete_usage_report_subscription"><CopyableCode code="delete_usage_report_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables usage report generation.</td>
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
    defaultValue="describe_usage_report_subscriptions"
    values={[
        { label: 'describe_usage_report_subscriptions', value: 'describe_usage_report_subscriptions' }
    ]}
>
<TabItem value="describe_usage_report_subscriptions">

Retrieves a list that describes one or more usage report subscriptions.

```sql
SELECT
NextToken,
UsageReportSubscriptions
FROM aws.appstream.usage_report_subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_usage_report_subscription"
    values={[
        { label: 'create_usage_report_subscription', value: 'create_usage_report_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_usage_report_subscription">

Creates a usage report subscription. Usage reports are generated daily.

```sql
INSERT INTO aws.appstream.usage_report_subscriptions (
region
)
SELECT 
'{{ region }}'
RETURNING
S3BucketName,
Schedule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: usage_report_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the usage_report_subscriptions resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_usage_report_subscription"
    values={[
        { label: 'delete_usage_report_subscription', value: 'delete_usage_report_subscription' }
    ]}
>
<TabItem value="delete_usage_report_subscription">

Disables usage report generation.

```sql
DELETE FROM aws.appstream.usage_report_subscriptions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
